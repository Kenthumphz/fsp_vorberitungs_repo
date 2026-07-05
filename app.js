// FSP Trainer — app logic (state, streak/XP tracking, rendering).
// Depends on the global `LESSONS` array defined in data/lessons.js.

const STORAGE_KEY = "fspTrainerState";
const PASS_THRESHOLD = 0.6; // lesson counts as "completed" at 60% correct
const WEEKDAY_LABELS = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

const PARTS = [
  { key: "anamnese", label: "Anamnesegespräch", subtitle: "Arzt-Patienten-Gespräch", icon: "🩺" },
  { key: "arztbrief", label: "Schriftlicher Arztbrief", subtitle: "Falldokumentation", icon: "📝" },
  { key: "fachgespraech", label: "Fachgespräch", subtitle: "Arzt-Arzt-Gespräch", icon: "👨‍⚕️" },
];

let state = loadState();
let session = null; // active lesson session, see startLesson()

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return { streak: 0, lastPracticeDate: null, totalXP: 0, lessonScores: {}, history: [] };
  }
  const parsed = JSON.parse(raw);
  if (!parsed.history) parsed.history = [];
  return parsed;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function todayKey() {
  return new Date().toDateString();
}

function registerPracticeToday() {
  const today = todayKey();
  if (!state.history.includes(today)) state.history.push(today);
  if (state.lastPracticeDate === today) return;

  const yesterday = new Date(Date.now() - 86400000).toDateString();
  state.streak = state.lastPracticeDate === yesterday ? state.streak + 1 : 1;
  state.lastPracticeDate = today;
}

function lessonsForPart(partKey) {
  return LESSONS.filter((l) => l.part === partKey);
}

function isLessonUnlocked(partKey, index) {
  if (index === 0) return true;
  const prev = lessonsForPart(partKey)[index - 1];
  return (state.lessonScores[prev.id] ?? 0) >= PASS_THRESHOLD;
}

function completedLessonCount() {
  return LESSONS.filter((l) => (state.lessonScores[l.id] ?? 0) >= PASS_THRESHOLD).length;
}

// ---------------------------------------------------------------------
// Stats: sidebar streak, progress ring, week strip, lesson progress bar
// ---------------------------------------------------------------------

function currentWeekDates() {
  const today = new Date();
  const day = today.getDay(); // 0 = Sunday ... 6 = Saturday
  const mondayOffset = day === 0 ? -6 : 1 - day;
  const monday = new Date(today);
  monday.setDate(today.getDate() + mondayOffset);

  const dates = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    dates.push(d);
  }
  return dates;
}

function renderStats() {
  document.getElementById("sidebar-streak").textContent = state.streak;
  document.getElementById("sidebar-streak-label").textContent = state.streak === 1 ? "Tag in Folge" : "Tage in Folge";
  document.getElementById("streak-count-big").textContent = state.streak;

  const total = LESSONS.length;
  const done = completedLessonCount();
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);

  document.getElementById("progress-pct").textContent = `${pct}%`;
  document.getElementById("lessons-done-count").textContent = done;
  document.getElementById("lessons-total-count").textContent = total;
  document.getElementById("lessons-bar-fill").style.width = `${total === 0 ? 0 : (done / total) * 100}%`;

  const circumference = 2 * Math.PI * 42;
  const ringFg = document.getElementById("ring-fg");
  ringFg.style.strokeDasharray = `${circumference}`;
  ringFg.style.strokeDashoffset = `${circumference * (1 - pct / 100)}`;

  const today = todayKey();
  const weekRow = document.getElementById("week-row");
  weekRow.innerHTML = "";
  currentWeekDates().forEach((date, i) => {
    const practiced = state.history.includes(date.toDateString());
    const isToday = date.toDateString() === today;
    const cell = document.createElement("div");
    cell.className = "week-day" + (practiced ? " practiced" : "") + (isToday ? " is-today" : "");
    cell.innerHTML = `<span class="week-flame">🔥</span><span class="week-label">${WEEKDAY_LABELS[i]}</span>`;
    weekRow.appendChild(cell);
  });
}

// ---------------------------------------------------------------------
// Rendering: map (home) view
// ---------------------------------------------------------------------

function waveOffset(index) {
  const m = index % 4;
  return m <= 2 ? m : 4 - m;
}

function renderMap() {
  renderStats();
  const root = document.getElementById("map-view");
  root.innerHTML = "";

  PARTS.forEach((part) => {
    const section = document.createElement("section");
    section.className = "part-section";
    section.id = `part-${part.key}`;

    const pill = document.createElement("div");
    pill.className = "module-pill";
    pill.innerHTML = `<span class="pill-icon">${part.icon}</span> ${part.label}`;
    section.appendChild(pill);

    const subtitle = document.createElement("p");
    subtitle.className = "part-subtitle";
    subtitle.textContent = part.subtitle;
    section.appendChild(subtitle);

    const path = document.createElement("div");
    path.className = "lesson-path";

    lessonsForPart(part.key).forEach((lesson, index) => {
      const unlocked = isLessonUnlocked(part.key, index);
      const score = state.lessonScores[lesson.id];
      const completed = score !== undefined && score >= PASS_THRESHOLD;

      const row = document.createElement("div");
      row.className = "path-row";
      row.style.marginLeft = `${waveOffset(index) * 70}px`;

      const node = document.createElement("button");
      node.className = "lesson-node" + (completed ? " completed" : "") + (!unlocked ? " locked" : "");
      node.disabled = !unlocked;
      node.innerHTML = completed ? "⭐" : unlocked ? "▶" : "🔒";
      node.addEventListener("click", () => startLesson(lesson.id));

      const label = document.createElement("div");
      label.className = "path-label";
      label.innerHTML = `<span class="node-title">${lesson.title}</span><span class="node-topic">${lesson.topic}</span>`;

      row.appendChild(node);
      row.appendChild(label);
      path.appendChild(row);
    });

    section.appendChild(path);
    root.appendChild(section);
  });
}

// ---------------------------------------------------------------------
// Lesson session
// ---------------------------------------------------------------------

function startLesson(lessonId) {
  const lesson = LESSONS.find((l) => l.id === lessonId);
  session = { lesson, index: 0, correct: 0, xpEarned: 0, answered: false };
  showView("lesson-view");
  renderExercise();
}

function currentExercise() {
  return session.lesson.exercises[session.index];
}

function renderExercise() {
  const ex = currentExercise();
  const root = document.getElementById("lesson-view");
  root.innerHTML = "";

  const progress = document.createElement("div");
  progress.className = "progress-bar";
  progress.innerHTML = `<div class="progress-fill" style="width:${
    (session.index / session.lesson.exercises.length) * 100
  }%"></div>`;
  root.appendChild(progress);

  const card = document.createElement("div");
  card.className = "exercise-card";

  if (ex.type === "mc") card.appendChild(renderMultipleChoice(ex));
  else if (ex.type === "fill") card.appendChild(renderFillBlank(ex));
  else if (ex.type === "vocab") card.appendChild(renderVocab(ex));

  root.appendChild(card);
}

function renderMultipleChoice(ex) {
  const wrap = document.createElement("div");
  wrap.innerHTML = `<p class="question">${ex.question}</p>`;

  const optionsWrap = document.createElement("div");
  optionsWrap.className = "options";

  ex.options.forEach((option, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = option;
    btn.addEventListener("click", () => {
      if (session.answered) return;
      session.answered = true;
      const isCorrect = i === ex.answerIndex;
      [...optionsWrap.children].forEach((b, j) => {
        if (j === ex.answerIndex) b.classList.add("correct");
        else if (j === i) b.classList.add("incorrect");
      });
      finishAnswer(isCorrect, ex.explanation);
    });
    optionsWrap.appendChild(btn);
  });

  wrap.appendChild(optionsWrap);
  wrap.appendChild(feedbackContainer());
  return wrap;
}

function renderFillBlank(ex) {
  const wrap = document.createElement("div");
  const [before, after] = ex.text.split("___");
  wrap.innerHTML = `<p class="question">${before}<span class="blank-marker">____</span>${after ?? ""}</p>
    ${ex.hint ? `<p class="hint">💡 ${ex.hint}</p>` : ""}
    <input type="text" class="fill-input" placeholder="Ihre Antwort..." autocomplete="off" />
    <button class="check-btn">Prüfen</button>`;

  const input = wrap.querySelector(".fill-input");
  const checkBtn = wrap.querySelector(".check-btn");

  const submit = () => {
    if (session.answered) return;
    session.answered = true;
    const isCorrect = input.value.trim().toLowerCase() === ex.answer.trim().toLowerCase();
    input.classList.add(isCorrect ? "correct" : "incorrect");
    input.disabled = true;
    if (!isCorrect) {
      const correction = document.createElement("p");
      correction.className = "correct-answer";
      correction.textContent = `Richtige Antwort: ${ex.answer}`;
      wrap.appendChild(correction);
    }
    finishAnswer(isCorrect, ex.explanation);
  };

  checkBtn.addEventListener("click", submit);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") submit();
  });

  wrap.appendChild(feedbackContainer());
  return wrap;
}

function renderVocab(ex) {
  const wrap = document.createElement("div");
  wrap.innerHTML = `
    <p class="vocab-term">${ex.term}</p>
    <div class="vocab-answer" hidden>
      <p class="vocab-definition">${ex.definition}</p>
      ${ex.example ? `<p class="vocab-example">„${ex.example}"</p>` : ""}
    </div>
    <button class="reveal-btn">Antwort zeigen</button>
    <div class="vocab-buttons" hidden>
      <button class="option-btn practice-btn">Muss ich üben</button>
      <button class="option-btn known-btn">Kann ich</button>
    </div>`;

  const revealBtn = wrap.querySelector(".reveal-btn");
  revealBtn.addEventListener("click", () => {
    wrap.querySelector(".vocab-answer").hidden = false;
    wrap.querySelector(".vocab-buttons").hidden = false;
    revealBtn.hidden = true;
  });

  wrap.querySelector(".practice-btn").addEventListener("click", () => {
    if (session.answered) return;
    session.answered = true;
    finishAnswer(false, null);
  });
  wrap.querySelector(".known-btn").addEventListener("click", () => {
    if (session.answered) return;
    session.answered = true;
    finishAnswer(true, null);
  });

  return wrap;
}

function feedbackContainer() {
  const div = document.createElement("div");
  div.className = "feedback";
  return div;
}

function finishAnswer(isCorrect, explanation) {
  if (isCorrect) {
    session.correct += 1;
    session.xpEarned += 10;
  }

  const card = document.querySelector(".exercise-card");
  const feedback = card.querySelector(".feedback") ?? feedbackContainer();
  feedback.classList.add(isCorrect ? "feedback-correct" : "feedback-incorrect");
  feedback.innerHTML = `
    <p>${isCorrect ? "✅ Richtig!" : "❌ Nicht ganz."}</p>
    ${explanation ? `<p class="explanation">${explanation}</p>` : ""}
    <button class="continue-btn">Weiter</button>`;
  if (!card.contains(feedback)) card.appendChild(feedback);

  card.querySelector(".continue-btn").addEventListener("click", nextExercise);
}

function nextExercise() {
  session.index += 1;
  session.answered = false;
  if (session.index >= session.lesson.exercises.length) {
    finishLesson();
  } else {
    renderExercise();
  }
}

function finishLesson() {
  const total = session.lesson.exercises.length;
  const scoreRatio = session.correct / total;

  const previousBest = state.lessonScores[session.lesson.id] ?? 0;
  state.lessonScores[session.lesson.id] = Math.max(previousBest, scoreRatio);
  state.totalXP += session.xpEarned;
  registerPracticeToday();
  saveState();

  const root = document.getElementById("lesson-view");
  root.innerHTML = `
    <div class="summary-card">
      <h2>${scoreRatio >= PASS_THRESHOLD ? "🎉 Lektion geschafft!" : "Lektion beendet"}</h2>
      <p class="summary-score">${session.correct} / ${total} richtig</p>
      <p class="summary-xp">+${session.xpEarned} XP</p>
      <button class="continue-btn" id="back-to-map">Zurück zur Übersicht</button>
    </div>`;

  document.getElementById("back-to-map").addEventListener("click", () => {
    session = null;
    showView("map-view");
    renderMap();
  });
}

// ---------------------------------------------------------------------
// View switching, sidebar nav + init
// ---------------------------------------------------------------------

function showView(viewId) {
  document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
  document.getElementById(viewId).classList.add("active");
}

document.querySelectorAll(".nav-item").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelectorAll(".nav-item").forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    session = null;
    showView("map-view");
    renderMap();

    const target = document.getElementById(link.dataset.target);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.getElementById("lessons-total-count").textContent = LESSONS.length;
renderMap();
