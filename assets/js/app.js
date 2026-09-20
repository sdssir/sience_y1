(function () {
  'use strict';

  const data = window.QUIZ_DATA;
  const $ = (id) => document.getElementById(id);
  const screens = {
    home: $('homeScreen'),
    quiz: $('quizScreen'),
    result: $('resultScreen')
  };

  const els = {
    topScore: $('topScore'), liveScore: $('liveScore'), liveTotal: $('liveTotal'),
    selectedLevelLabel: $('selectedLevelLabel'), studentName: $('studentName'),
    levelBadge: $('levelBadge'), topicLabel: $('topicLabel'), questionNumber: $('questionNumber'), questionTotal: $('questionTotal'), progressBar: $('progressBar'),
    questionText: $('questionText'), questionImageWrap: $('questionImageWrap'), questionImage: $('questionImage'), answers: $('answers'),
    feedback: $('feedback'), feedbackIcon: $('feedbackIcon'), feedbackTitle: $('feedbackTitle'), answerMark: $('answerMark'), selectedFeedback: $('selectedFeedback'), correctAnswerText: $('correctAnswerText'), feedbackExplanation: $('feedbackExplanation'), answerPrompt: $('answerPrompt'), nextButton: $('nextButton'),
    finalScore: $('finalScore'), finalPercent: $('finalPercent'), correctCount: $('correctCount'), wrongCount: $('wrongCount'), resultTitle: $('resultTitle'), resultMessage: $('resultMessage'), resultLevel: $('resultLevel'), topicBreakdown: $('topicBreakdown'), reviewCount: $('reviewCount'), reviewList: $('reviewList'), resultAvatar: $('resultAvatar')
  };

  const state = {
    level: 'MEDIUM',
    questions: [],
    index: 0,
    score: 0,
    answered: false,
    answers: [],
    student: ''
  };

  function shuffle(items) {
    const arr = items.slice();
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function showScreen(name) {
    Object.entries(screens).forEach(([key, el]) => { el.hidden = key !== name; });
    document.body.classList.toggle('quiz-active', name === 'quiz');
    els.topScore.hidden = name !== 'quiz';
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function setLevel(level) {
    if (!data.levels[level]) return;
    state.level = level;
    document.querySelectorAll('.level-card').forEach((card) => {
      card.classList.toggle('selected', card.dataset.level === level);
    });
    els.selectedLevelLabel.textContent = `${level} LEVEL`;
  }

  function startQuiz() {
    state.student = els.studentName.value.trim();
    state.questions = shuffle(data.levels[state.level]);
    state.index = 0;
    state.score = 0;
    state.answered = false;
    state.answers = [];
    els.liveScore.textContent = '0';
    els.liveTotal.textContent = String(state.questions.length);
    els.questionTotal.textContent = String(state.questions.length);
    showScreen('quiz');
    renderQuestion();
  }

  function renderQuestion() {
    const question = state.questions[state.index];
    state.answered = false;

    els.levelBadge.textContent = state.level;
    els.levelBadge.classList.toggle('hard', state.level === 'HARD');
    els.topicLabel.textContent = `Topic ${question.topic} • ${question.topicName}`;
    els.questionNumber.textContent = String(state.index + 1);
    els.questionText.textContent = question.question;
    els.progressBar.style.width = `${(state.index / state.questions.length) * 100}%`;
    els.feedback.hidden = true;
    els.feedback.classList.remove('wrong');
    els.nextButton.disabled = true;
    els.nextButton.textContent = state.index === state.questions.length - 1 ? 'See My Score →' : 'Next →';
    els.answerPrompt.textContent = 'Select A, B, C, or D.';

    if (question.image) {
      els.questionImage.src = question.image;
      els.questionImage.alt = question.imageAlt || 'Question illustration';
      els.questionImageWrap.hidden = false;
    } else {
      els.questionImage.src = '';
      els.questionImage.alt = '';
      els.questionImageWrap.hidden = true;
    }

    els.answers.innerHTML = '';
    question.choices.forEach((choice, idx) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'answer-btn';
      button.dataset.index = String(idx);
      button.innerHTML = `<span class="answer-letter">${String.fromCharCode(65 + idx)}</span><span>${escapeHtml(choice.text)}</span>`;
      button.addEventListener('click', () => answerQuestion(idx));
      els.answers.appendChild(button);
    });
  }

  function answerQuestion(choiceIndex) {
    if (state.answered) return;
    state.answered = true;

    const question = state.questions[state.index];
    const selected = question.choices[choiceIndex];
    const correctIndex = question.choices.findIndex((choice) => choice.correct);
    const correct = question.choices[correctIndex];
    const isCorrect = Boolean(selected.correct);

    if (isCorrect) state.score += 1;
    els.liveScore.textContent = String(state.score);

    const buttons = Array.from(els.answers.querySelectorAll('.answer-btn'));
    buttons.forEach((button, idx) => {
      button.disabled = true;
      if (idx === correctIndex) button.classList.add('correct');
      if (idx === choiceIndex && !isCorrect) button.classList.add('wrong');
      if (idx !== correctIndex && idx !== choiceIndex) button.classList.add('dimmed');
    });

    els.feedback.hidden = false;
    els.feedback.classList.toggle('wrong', !isCorrect);
    els.feedbackIcon.src = isCorrect ? 'assets/images/correct-happy.png' : 'assets/images/wrong-sad.png';
    els.feedbackIcon.alt = isCorrect ? 'Happy quiz buddies' : 'Sad quiz buddies';
    els.feedbackTitle.textContent = isCorrect ? randomCorrectTitle() : randomTryAgainTitle();
    els.answerMark.textContent = isCorrect ? '+1 MARK' : '+0 MARK';
    els.selectedFeedback.textContent = selected.feedback;
    els.correctAnswerText.textContent = correct.text;
    els.feedbackExplanation.textContent = `Why: ${question.explanation}`;
    els.answerPrompt.textContent = isCorrect ? 'Great thinking!' : 'Read the explanation, then keep going!';
    els.nextButton.disabled = false;

    state.answers.push({
      id: question.id,
      topic: question.topic,
      topicName: question.topicName,
      question: question.question,
      selected: selected.text,
      correct: correct.text,
      isCorrect,
      explanation: question.explanation
    });

    playTone(isCorrect);
    els.nextButton.focus({ preventScroll: true });
  }

  function nextQuestion() {
    if (!state.answered) return;
    if (state.index >= state.questions.length - 1) {
      showResults();
      return;
    }
    state.index += 1;
    renderQuestion();
  }

  function showResults() {
    document.body.classList.remove('quiz-active');
    const total = state.questions.length;
    const percent = Math.round((state.score / total) * 100);
    const wrong = total - state.score;
    const name = state.student ? `${state.student}, ` : '';

    els.finalScore.textContent = String(state.score);
    els.finalPercent.textContent = `${percent}%`;
    els.correctCount.textContent = String(state.score);
    els.wrongCount.textContent = String(wrong);
    els.resultLevel.textContent = `${state.level} • 40 QUESTIONS`;

    if (percent >= 90) {
      els.resultTitle.textContent = 'Science Superstar! 🌟';
      els.resultMessage.textContent = `${name}excellent work. Your science thinking is very strong!`;
      els.resultAvatar.src = 'assets/images/correct-happy.png';
    } else if (percent >= 70) {
      els.resultTitle.textContent = 'Great Work! 🚀';
      els.resultMessage.textContent = `${name}you did really well. Review a few questions and try to beat your score.`;
      els.resultAvatar.src = 'assets/images/correct-happy.png';
    } else if (percent >= 50) {
      els.resultTitle.textContent = 'Good Effort! 💪';
      els.resultMessage.textContent = `${name}you are learning. Review the explanations and try again.`;
      els.resultAvatar.src = 'assets/images/correct-happy.png';
    } else {
      els.resultTitle.textContent = 'Keep Going! 🧠';
      els.resultMessage.textContent = `${name}every question is practice. Review the answers and have another try.`;
      els.resultAvatar.src = 'assets/images/correct-happy.png';
    }

    renderBreakdown();
    renderReview();
    saveBestScore(percent);
    showScreen('result');
  }

  function renderBreakdown() {
    els.topicBreakdown.innerHTML = '';
    Object.entries(data.topics).forEach(([topic, topicName]) => {
      const topicAnswers = state.answers.filter((a) => String(a.topic) === topic);
      if (!topicAnswers.length) return;
      const got = topicAnswers.filter((a) => a.isCorrect).length;
      const card = document.createElement('div');
      card.className = 'topic-score';
      card.innerHTML = `<span>Topic ${topic}<br>${escapeHtml(topicName)}</span><strong>${got}/${topicAnswers.length}</strong>`;
      els.topicBreakdown.appendChild(card);
    });
  }

  function renderReview() {
    const wrongAnswers = state.answers.filter((a) => !a.isCorrect);
    els.reviewCount.textContent = `(${wrongAnswers.length})`;
    els.reviewList.innerHTML = '';
    if (!wrongAnswers.length) {
      const item = document.createElement('div');
      item.className = 'review-item';
      item.innerHTML = '<strong>Perfect round! 🎉</strong><p>No incorrect answers to review.</p>';
      els.reviewList.appendChild(item);
      return;
    }
    wrongAnswers.forEach((a, idx) => {
      const item = document.createElement('article');
      item.className = 'review-item';
      item.innerHTML = `
        <strong>${idx + 1}. ${escapeHtml(a.question)}</strong>
        <p><b>Your answer:</b> ${escapeHtml(a.selected)}</p>
        <p><b>Correct answer:</b> ${escapeHtml(a.correct)}</p>
        <p>${escapeHtml(a.explanation)}</p>`;
      els.reviewList.appendChild(item);
    });
  }

  function saveBestScore(percent) {
    try {
      const key = `science-year1-best-${state.level.toLowerCase()}`;
      const previous = Number(localStorage.getItem(key) || 0);
      if (percent > previous) localStorage.setItem(key, String(percent));
    } catch (_) {
      // The quiz works even if browser storage is blocked.
    }
  }

  function randomCorrectTitle() {
    const titles = ['Correct! 🎉', 'Brilliant! ⭐', 'Nice Thinking! 🚀', 'You Got It! 🥳', 'Science Power! 🔬'];
    return titles[Math.floor(Math.random() * titles.length)];
  }

  function randomTryAgainTitle() {
    const titles = ['Almost! 🌱', 'Good Try! 💡', 'Keep Thinking! 🧠', 'Not This One — Yet! 🚀'];
    return titles[Math.floor(Math.random() * titles.length)];
  }

  function playTone(isCorrect) {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(isCorrect ? 660 : 220, ctx.currentTime);
      if (isCorrect) osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.18);
      osc.connect(gain); gain.connect(ctx.destination); osc.start(); osc.stop(ctx.currentTime + 0.2);
      setTimeout(() => ctx.close(), 300);
    } catch (_) {
      // Sound is optional.
    }
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[ch]));
  }

  function goHome() {
    showScreen('home');
  }

  document.querySelectorAll('.level-card').forEach((card) => card.addEventListener('click', () => setLevel(card.dataset.level)));
  $('startButton').addEventListener('click', startQuiz);
  $('nextButton').addEventListener('click', nextQuestion);
  $('quitButton').addEventListener('click', goHome);
  $('brandHome').addEventListener('click', goHome);
  $('retryButton').addEventListener('click', startQuiz);
  $('changeLevelButton').addEventListener('click', goHome);
  $('printButton').addEventListener('click', () => window.print());

  document.addEventListener('keydown', (event) => {
    if (screens.quiz.hidden) return;
    if (event.target && /input|textarea|select/i.test(event.target.tagName)) return;
    const map = { '1': 0, '2': 1, '3': 2, '4': 3, 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
    const key = event.key.toLowerCase();
    if (!state.answered && Object.prototype.hasOwnProperty.call(map, key)) {
      const btn = els.answers.querySelector(`[data-index="${map[key]}"]`);
      if (btn) { event.preventDefault(); btn.click(); }
    } else if (state.answered && (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowRight')) {
      event.preventDefault(); nextQuestion();
    }
  });

  setLevel('MEDIUM');
  showScreen('home');
})();
