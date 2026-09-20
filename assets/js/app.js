(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);

  const els = {
    homeScreen: $("homeScreen"),
    quizScreen: $("quizScreen"),
    resultScreen: $("resultScreen"),
    topicCards: $("topicCards"),
    studentName: $("studentName"),
    selectionTitle: $("selectionTitle"),
    selectionMeta: $("selectionMeta"),
    bestScoreHome: $("bestScoreHome"),
    startButton: $("startButton"),
    headerScore: $("headerScore"),
    liveScore: $("liveScore"),
    liveTotal: $("liveTotal"),
    quitButton: $("quitButton"),
    topicLabel: $("topicLabel"),
    questionNumber: $("questionNumber"),
    questionTotal: $("questionTotal"),
    miniScore: $("miniScore"),
    progressBar: $("progressBar"),
    questionText: $("questionText"),
    answers: $("answers"),
    feedback: $("feedback"),
    feedbackIcon: $("feedbackIcon"),
    feedbackTitle: $("feedbackTitle"),
    feedbackAnswer: $("feedbackAnswer"),
    feedbackExplanation: $("feedbackExplanation"),
    answerPrompt: $("answerPrompt"),
    nextButton: $("nextButton"),
    resultTitle: $("resultTitle"),
    resultMessage: $("resultMessage"),
    finalScore: $("finalScore"),
    finalTotal: $("finalTotal"),
    finalPercent: $("finalPercent"),
    bestScoreResult: $("bestScoreResult"),
    topicBreakdownSection: $("topicBreakdownSection"),
    topicBreakdown: $("topicBreakdown"),
    reviewCount: $("reviewCount"),
    reviewList: $("reviewList"),
    retryButton: $("retryButton"),
    homeButton: $("homeButton"),
    printButton: $("printButton")
  };

  const state = {
    selectedTopic: "all",
    quiz: [],
    index: 0,
    score: 0,
    answered: false,
    responses: [],
    student: "",
    lastSelection: "all"
  };

  const topicById = new Map(TOPICS.map((t) => [t.id, t]));

  function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function getQuestionSet(selection) {
    const filtered = selection === "all"
      ? QUESTIONS
      : QUESTIONS.filter((q) => q.topic === Number(selection));
    return shuffle(filtered);
  }

  function selectionLabel(selection) {
    if (selection === "all") return "All Topics";
    const topic = topicById.get(Number(selection));
    return topic ? `Topic ${topic.id} — ${topic.name}` : "Quiz";
  }

  function storageKey(selection) {
    return `scienceYear1Best:${selection}`;
  }

  function loadBest(selection) {
    try {
      const raw = localStorage.getItem(storageKey(selection));
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!Number.isFinite(parsed.score) || !Number.isFinite(parsed.total)) return null;
      return parsed;
    } catch {
      return null;
    }
  }

  function saveBest(selection, score, total) {
    const previous = loadBest(selection);
    const previousRatio = previous ? previous.score / previous.total : -1;
    const ratio = total ? score / total : 0;
    if (!previous || ratio > previousRatio || (ratio === previousRatio && score > previous.score)) {
      try {
        localStorage.setItem(storageKey(selection), JSON.stringify({ score, total }));
      } catch {
        // Quiz still works if browser storage is unavailable.
      }
    }
  }

  function updateBestDisplay() {
    const best = loadBest(state.selectedTopic);
    els.bestScoreHome.textContent = best ? `Best: ${best.score}/${best.total}` : "Best: —";
  }

  function renderTopicCards() {
    const allCount = QUESTIONS.length;
    const cards = [
      { id: "all", title: "All Topics", subtitle: `Topics 2–7 • ${allCount} questions` },
      ...TOPICS.map((topic) => {
        const count = QUESTIONS.filter((q) => q.topic === topic.id).length;
        return { id: String(topic.id), title: topic.name, subtitle: `Topic ${topic.id} • ${count} questions` };
      })
    ];

    els.topicCards.innerHTML = "";
    cards.forEach((card) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `topic-card${state.selectedTopic === card.id ? " selected" : ""}`;
      button.dataset.topic = card.id;
      button.setAttribute("aria-pressed", state.selectedTopic === card.id ? "true" : "false");
      button.innerHTML = `
        <span class="topic-number">${card.id === "all" ? "Mixed quiz" : `Topic ${card.id}`}</span>
        <span class="topic-name">${card.title}</span>
        <span class="topic-count">${card.subtitle}</span>
      `;
      button.addEventListener("click", () => selectTopic(card.id));
      els.topicCards.appendChild(button);
    });
  }

  function selectTopic(id) {
    state.selectedTopic = id;
    renderTopicCards();
    const count = id === "all" ? QUESTIONS.length : QUESTIONS.filter((q) => q.topic === Number(id)).length;
    els.selectionTitle.textContent = selectionLabel(id);
    els.selectionMeta.textContent = `${count} questions • ${count} total marks`;
    updateBestDisplay();
  }

  function showScreen(screen) {
    els.homeScreen.hidden = screen !== "home";
    els.quizScreen.hidden = screen !== "quiz";
    els.resultScreen.hidden = screen !== "result";
    els.headerScore.hidden = screen !== "quiz";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function startQuiz() {
    state.student = els.studentName.value.trim();
    state.lastSelection = state.selectedTopic;
    state.quiz = getQuestionSet(state.selectedTopic);
    state.index = 0;
    state.score = 0;
    state.answered = false;
    state.responses = [];

    try {
      localStorage.setItem("scienceYear1Student", state.student);
    } catch {
      // Ignore storage failures.
    }

    els.liveTotal.textContent = state.quiz.length;
    els.questionTotal.textContent = state.quiz.length;
    updateLiveScore();
    showScreen("quiz");
    renderQuestion();
  }

  function updateLiveScore() {
    els.liveScore.textContent = state.score;
    els.miniScore.textContent = state.score;
  }

  function renderQuestion() {
    state.answered = false;
    const q = state.quiz[state.index];
    const topic = topicById.get(q.topic);
    const progress = ((state.index) / state.quiz.length) * 100;

    els.topicLabel.textContent = `Topic ${topic.id} — ${topic.name}`;
    els.questionNumber.textContent = state.index + 1;
    els.questionText.textContent = q.question;
    els.progressBar.style.width = `${progress}%`;
    els.answers.innerHTML = "";
    els.feedback.hidden = true;
    els.feedback.className = "feedback";
    els.nextButton.hidden = true;
    els.answerPrompt.hidden = false;
    els.answerPrompt.textContent = "Select an answer to continue.";

    const letters = ["A", "B", "C", "D"];
    q.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "answer-button";
      button.dataset.index = String(index);
      button.innerHTML = `
        <span class="answer-letter">${letters[index]}</span>
        <span class="answer-text"></span>
        <span class="answer-status" aria-hidden="true"></span>
      `;
      button.querySelector(".answer-text").textContent = option;
      button.addEventListener("click", () => submitAnswer(index));
      els.answers.appendChild(button);
    });
  }

  function submitAnswer(selectedIndex) {
    if (state.answered) return;
    state.answered = true;

    const q = state.quiz[state.index];
    const correct = selectedIndex === q.answer;
    if (correct) state.score += 1;
    updateLiveScore();

    const buttons = [...els.answers.querySelectorAll(".answer-button")];
    buttons.forEach((button, index) => {
      button.disabled = true;
      const status = button.querySelector(".answer-status");
      if (index === q.answer) {
        button.classList.add("correct");
        status.textContent = "✓";
      }
      if (index === selectedIndex && !correct) {
        button.classList.add("wrong");
        status.textContent = "×";
      }
    });

    state.responses.push({
      questionId: q.id,
      topic: q.topic,
      question: q.question,
      selectedIndex,
      selectedText: q.options[selectedIndex],
      correctIndex: q.answer,
      correctText: q.options[q.answer],
      explanation: q.explanation,
      correct
    });

    els.feedback.hidden = false;
    els.feedback.classList.add(correct ? "success" : "error");
    els.feedbackIcon.src = correct ? "assets/images/correct-smile.png" : "assets/images/wrong-sad.png";
    els.feedbackIcon.alt = correct ? "Smiling student cartoon avatar" : "Sad student cartoon avatar";
    els.feedbackTitle.textContent = correct ? "Great job — correct!" : "Not quite.";
    els.feedbackAnswer.textContent = correct
      ? `Correct answer: ${q.options[q.answer]}`
      : `The correct answer is: ${q.options[q.answer]}`;
    els.feedbackExplanation.textContent = q.explanation;

    els.answerPrompt.hidden = true;
    els.nextButton.hidden = false;
    els.nextButton.textContent = state.index === state.quiz.length - 1 ? "See Total Marks →" : "Next Question →";
  }

  function nextQuestion() {
    if (!state.answered) return;
    if (state.index >= state.quiz.length - 1) {
      finishQuiz();
      return;
    }
    state.index += 1;
    renderQuestion();
  }

  function getResultMessage(percent) {
    if (percent === 100) return "Perfect score! You answered every question correctly.";
    if (percent >= 85) return "Excellent work! You have a strong understanding of these science topics.";
    if (percent >= 70) return "Great job! Review the few questions you missed and try again.";
    if (percent >= 50) return "Good effort! Review the answers below and have another try.";
    return "Keep practising. Review the correct answers below, then try the quiz again.";
  }

  function renderBreakdown() {
    const usedTopicIds = [...new Set(state.quiz.map((q) => q.topic))].sort((a, b) => a - b);
    els.topicBreakdown.innerHTML = "";
    usedTopicIds.forEach((topicId) => {
      const topic = topicById.get(topicId);
      const topicResponses = state.responses.filter((r) => r.topic === topicId);
      const correct = topicResponses.filter((r) => r.correct).length;
      const card = document.createElement("div");
      card.className = "breakdown-card";
      card.innerHTML = `
        <span>Topic ${topic.id}</span>
        <strong>${topic.name}</strong>
        <div class="breakdown-score">${correct}/${topicResponses.length} marks</div>
      `;
      els.topicBreakdown.appendChild(card);
    });
    els.topicBreakdownSection.hidden = usedTopicIds.length <= 1;
  }

  function renderReview() {
    const wrong = state.responses.filter((r) => !r.correct);
    const list = wrong.length ? wrong : state.responses;
    els.reviewCount.textContent = wrong.length ? `${wrong.length} to review` : "All correct";
    els.reviewList.innerHTML = "";

    list.forEach((response) => {
      const item = document.createElement("article");
      item.className = `review-item ${response.correct ? "correct-review" : "wrong-review"}`;
      const topic = topicById.get(response.topic);
      const selectedLine = response.correct
        ? `Your answer: ${response.selectedText}`
        : `Your answer: ${response.selectedText}`;
      item.innerHTML = `
        <strong>Topic ${topic.id}: ${response.question}</strong>
        <p class="review-answer">${escapeHtml(selectedLine)}</p>
        ${response.correct ? "" : `<p class="review-answer"><b>Correct answer:</b> ${escapeHtml(response.correctText)}</p>`}
        <p>${escapeHtml(response.explanation)}</p>
      `;
      els.reviewList.appendChild(item);
    });
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function finishQuiz() {
    const total = state.quiz.length;
    const percent = total ? Math.round((state.score / total) * 100) : 0;
    saveBest(state.lastSelection, state.score, total);
    const best = loadBest(state.lastSelection);
    const name = state.student || "Scientist";

    els.resultTitle.textContent = `Well done, ${name}!`;
    els.resultMessage.textContent = getResultMessage(percent);
    els.finalScore.textContent = state.score;
    els.finalTotal.textContent = total;
    els.finalPercent.textContent = `${percent}%`;
    els.bestScoreResult.textContent = best ? `${best.score}/${best.total}` : `${state.score}/${total}`;

    renderBreakdown();
    renderReview();
    els.progressBar.style.width = "100%";
    showScreen("result");
  }

  function goHome() {
    showScreen("home");
    updateBestDisplay();
  }

  function retryQuiz() {
    state.selectedTopic = state.lastSelection;
    selectTopic(state.selectedTopic);
    startQuiz();
  }

  function restoreStudentName() {
    try {
      const saved = localStorage.getItem("scienceYear1Student");
      if (saved) els.studentName.value = saved;
    } catch {
      // Ignore storage failures.
    }
  }

  els.startButton.addEventListener("click", startQuiz);
  els.nextButton.addEventListener("click", nextQuestion);
  els.quitButton.addEventListener("click", goHome);
  els.homeButton.addEventListener("click", goHome);
  els.retryButton.addEventListener("click", retryQuiz);
  els.printButton.addEventListener("click", () => window.print());

  restoreStudentName();
  renderTopicCards();
  selectTopic("all");
})();
