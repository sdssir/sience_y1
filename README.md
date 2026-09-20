# Science Year 1 Quiz — Topics 2–7

A ready-to-publish static quiz for **Science Year 1 (KSSR)**, Topics 2 to 7.

## Features

- 36 multiple-choice questions (6 per topic)
- Topics 2–7 and an **All Topics** mixed quiz
- Correct answer shown immediately after each response
- Happy avatar for a correct answer
- Sad avatar for a wrong answer
- 1 mark per question
- Live score and final total marks
- Marks by topic
- Review of wrong answers
- Best score saved locally in the browser
- Mobile, tablet and desktop friendly
- No database and no build step
- Works directly with GitHub Pages

## Topics

1. Topic 2 — Science Room Rules
2. Topic 3 — Living and Non-Living Things
3. Topic 4 — Humans
4. Topic 5 — Animals
5. Topic 6 — Plants
6. Topic 7 — Magnets

The quiz questions are adapted from the supplied **KSSR Science Year 1** textbook content for Topics 2–7.

## Run locally

You can simply open `index.html` in a browser. For a local web server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a new GitHub repository, for example `science-year1-quiz`.
2. Upload/push **all files in this folder** to the repository root.
3. Open the repository on GitHub.
4. Go to **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Select branch **main** and folder **/(root)**.
7. Save.
8. After deployment, your quiz will be available at a URL similar to:
   `https://YOUR-USERNAME.github.io/science-year1-quiz/`

## Git command example

```bash
git init
git add .
git commit -m "Add Science Year 1 quiz"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/science-year1-quiz.git
git push -u origin main
```

## Edit questions

Questions are stored in:

`assets/js/questions.js`

Each question is worth **1 mark**. Add more question objects to increase the total marks automatically.

## Privacy note

The two cartoon feedback avatars were generated from a supplied child photo. If you publish this project in a **public GitHub repository**, those avatar image files will also be publicly accessible. Remove/replace the files in `assets/images/` if you do not want the likeness published publicly.
