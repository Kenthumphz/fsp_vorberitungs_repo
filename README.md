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
choice questions, fill-in-the-blank exercises, and vocabulary flashcards —
with a daily streak and XP counter to build a practice habit.

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
  exercises: [
    { type: "mc", question, options: [...], answerIndex, explanation },
    { type: "fill", text: "... ___ ...", answer, explanation, hint? },
    { type: "vocab", term, definition, example? },
  ],
}
```

Lessons within a part unlock in array order (a lesson unlocks once the
previous one in that part has been passed at ≥60%). To add a new topic,
just append a new lesson object to the relevant part.

## Current content

Nine starter lessons (3 per exam part) covering common internal-medicine
scenarios (chest pain, abdominal pain, diabetes, etc.) — this is a first
pass to validate the app format, not exhaustive exam prep. More lessons /
corrections to the medical German are very welcome.

## Status

v1 — static site, localStorage-only progress. A React/Next.js rewrite with
account-based progress sync is a possible future step if this format proves
useful.
