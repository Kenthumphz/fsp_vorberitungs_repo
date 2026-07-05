# FSP Trainer

A Duolingo-style practice app for the German **Fachsprachprüfung (FSP)** — the
medical-language exam foreign-trained doctors take before receiving their
Approbation.

## Why this exists

The FSP has three ~20-minute parts:

1. **Anamnesegespräch** — doctor-patient history taking
2. **Schriftlicher Arztbrief** — writing up the case as a medical report
3. **Fachgespräch** — presenting the case to a senior colleague, discussing
   differential diagnoses, workup, and treatment

This app turns practice for each part into short, gamified lessons: multiple
choice questions, option-based fill-in-the-blank ("cloze") exercises, and
vocabulary flashcards — with a daily streak and XP counter to build a
practice habit. Answer order is shuffled every time, so the correct option
isn't predictable by position.

## Running it

No build step, no dependencies. Either:

- Open `index.html` directly in a browser, or
- Serve it locally (recommended, avoids any browser file-access quirks):
  ```
  npx serve .
  ```
- Or use the live GitHub Pages link (see repo settings once deployed).

Progress (streak, XP, completed lessons) is saved in the browser's
`localStorage`, per browser/device.

## Project structure

```
index.html       page shell
styles.css       styling
app.js           app logic: state, streak/XP tracking, rendering
data/lessons.js  all lesson content
```

## Adding or editing lessons

All content lives in `data/lessons.js` as a single `LESSONS` array. Each
lesson looks like:

```js
{
  id: "an-example",        // unique id
  part: "anamnese",        // "anamnese" | "arztbrief" | "fachgespraech"
  topic: "Kardiologie",
  title: "Lesson title",
  description: "...",
  pool: [                  // larger bank; a random subset is drawn each playthrough
    { type: "mc", question, options: [...], answerIndex, explanation },
    { type: "cloze", text: "... ___ ...", options: [...], answerIndex, explanation, hint? },
    { type: "vocab", term, definition, example? },
  ],
}
```

`startLesson()` in `app.js` randomly samples `SESSION_SIZE` (10) exercises
from a lesson's `pool` each time it's played, and `mc`/`cloze` option order
is shuffled at render time — so repeat practice sees a different mix
instead of the exact same set every time, and the correct answer is never
predictable by position.

Lessons within a part unlock in array order (a lesson unlocks once the
previous one in that part has been passed at ≥60%). To add a new topic,
just append a new lesson object (with its own `pool`) to the relevant part.

## Current content

36 lessons (12 clinical topics × 3 exam parts), ~370 exercises total,
covering common internal-medicine presentations: chest pain, abdominal
pain, diabetes, dyspnea, headache, fever/infection, dizziness/syncope,
back pain, joint pain, edema/heart failure, hypertension, and
fatigue/anemia. Anamnese lessons also include doctor-to-patient
explanatory language (explaining a diagnosis, next steps, reassurance,
checking understanding) alongside history-taking questions. This is a
solid first pass, not exhaustive exam prep — more lessons / corrections
to the medical German are very welcome.

## Status

v1 — static site, localStorage-only progress. A React/Next.js rewrite with
account-based progress sync is a possible future step if this format proves
useful.
