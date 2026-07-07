/**
 * Study Material — Interactive quiz, flashcard, and mind map renderer.
 *
 * Usage: add a <div class="study-material" data-section="positioning"></div>
 * to any MkDocs page. For the hub page use data-section="all".
 */

(function () {
  'use strict';

  var SECTIONS = [
    { key: 'handbook', label: 'Handbook' },
    { key: 'positioning', label: 'Positioning' },
    { key: 'sensors', label: 'Survey Sensors' },
    { key: 'rov', label: 'ROV Operations' },
    { key: 'mobilisation', label: 'Mobilisation & Setup' },
    { key: 'reporting', label: 'Reporting' },
    { key: 'reference', label: 'Reference' }
  ];

  /* ---- helpers ---- */

  function esc(text) {
    var d = document.createElement('div');
    d.textContent = text || '';
    return d.innerHTML;
  }

  function resolveBase() {
    // Find the base URL for data files relative to site root
    var base = document.querySelector('meta[name="site-url"]');
    if (base) return base.content.replace(/\/$/, '');
    // fallback: walk up from current page
    var link = document.querySelector('link[rel="canonical"]');
    if (link) {
      var url = new URL(link.href);
      // site root is defined in mkdocs.yml site_url
      return url.origin + '/survey-wiki';
    }
    return '';
  }

  /* ---- data loading ---- */

  function loadJSON(sectionKey, type) {
    var base = resolveBase();
    var url = base + '/study-material/data/' + sectionKey + '/' + type + '.json';
    return fetch(url).then(function (r) {
      return r.ok ? r.json() : null;
    }).catch(function () { return null; });
  }

  function loadSection(sectionKey) {
    return Promise.all([
      loadJSON(sectionKey, 'quiz'),
      loadJSON(sectionKey, 'flashcards'),
      loadJSON(sectionKey, 'mindmap')
    ]).then(function (results) {
      return { quiz: results[0], flashcards: results[1], mindmap: results[2] };
    });
  }

  function loadAll() {
    var promises = SECTIONS.map(function (s) {
      return loadSection(s.key).then(function (d) { return { key: s.key, data: d }; });
    });
    return Promise.all(promises).then(function (results) {
      var out = {};
      results.forEach(function (r) { out[r.key] = r.data; });
      return out;
    });
  }

  /* ---- quiz rendering ---- */

  function renderQuiz(quizData, sKey) {
    if (!quizData || !quizData.questions) return '<p class="sm-loading">No quiz data available.</p>';
    var qs = quizData.questions;
    var h = '<div class="sm-quiz-score" id="score-' + sKey + '">' +
      '<div><span class="sm-score-num" id="sn-' + sKey + '">0</span>/' + qs.length + '</div>' +
      '<div class="sm-score-label">correct</div>' +
      '<button onclick="window.__smReset(\'' + sKey + '\')">Reset</button></div>';

    qs.forEach(function (q, qi) {
      var qid = sKey + '-q' + qi;
      h += '<div class="sm-question" id="' + qid + '">';
      h += '<div class="sm-question-num">Question ' + (qi + 1) + ' of ' + qs.length + '</div>';
      h += '<div class="sm-question-text">' + esc(q.question) + '</div>';
      if (q.hint) {
        h += '<div class="sm-hint" onclick="this.classList.toggle(\'revealed\')"><span class="sm-hint-text">' + esc(q.hint) + '</span></div>';
      }
      q.answerOptions.forEach(function (a) {
        h += '<button class="sm-answer" data-qid="' + qid + '" data-correct="' + a.isCorrect + '" onclick="window.__smAnswer(this,\'' + sKey + '\')">';
        h += esc(a.text);
        h += '<div class="sm-rationale">' + esc(a.rationale || '') + '</div>';
        h += '</button>';
      });
      h += '</div>';
    });
    return h;
  }

  window.__smAnswer = function (btn, sKey) {
    if (btn.classList.contains('answered')) return;
    var qid = btn.dataset.qid;
    var all = document.querySelectorAll('[data-qid="' + qid + '"]');
    all.forEach(function (b) {
      b.classList.add('answered', 'show-rationale');
      if (b.dataset.correct === 'true') b.classList.add('correct');
    });
    if (btn.dataset.correct === 'true') {
      var el = document.getElementById('sn-' + sKey);
      el.textContent = parseInt(el.textContent) + 1;
    } else {
      btn.classList.add('incorrect');
    }
  };

  /* ---- flashcard rendering ---- */

  function renderFlashcards(fcData, sKey) {
    if (!fcData || !fcData.cards || fcData.cards.length === 0)
      return '<p class="sm-loading">No flashcard data available.</p>';
    var cards = fcData.cards;
    return '<div id="fc-' + sKey + '" data-index="0">' +
      '<div class="sm-fc-container"><div class="sm-flashcard" onclick="this.classList.toggle(\'flipped\')">' +
      '<div class="sm-fc-face sm-fc-front" id="fcf-' + sKey + '">' + esc(cards[0].front) + '</div>' +
      '<div class="sm-fc-face sm-fc-back" id="fcb-' + sKey + '">' + esc(cards[0].back) + '</div>' +
      '</div></div>' +
      '<div class="sm-fc-tip">Click card to flip</div>' +
      '<div class="sm-fc-nav">' +
      '<button onclick="window.__smFcNav(\'' + sKey + '\',-1)">&larr; Previous</button>' +
      '<span id="fcc-' + sKey + '">1 / ' + cards.length + '</span>' +
      '<button onclick="window.__smFcNav(\'' + sKey + '\',1)">Next &rarr;</button>' +
      '</div></div>';
  }

  window.__smFcNav = function (sKey, dir) {
    var container = document.getElementById('fc-' + sKey);
    if (!container) return;
    var cards = window.__smData[sKey].flashcards.cards;
    var idx = parseInt(container.dataset.index) + dir;
    if (idx < 0) idx = cards.length - 1;
    if (idx >= cards.length) idx = 0;
    container.dataset.index = idx;
    document.getElementById('fcf-' + sKey).textContent = cards[idx].front;
    document.getElementById('fcb-' + sKey).textContent = cards[idx].back;
    document.getElementById('fcc-' + sKey).textContent = (idx + 1) + ' / ' + cards.length;
    container.querySelector('.sm-flashcard').classList.remove('flipped');
  };

  /* ---- mind map rendering ---- */

  function renderMindMap(mmData) {
    if (!mmData) return '<p class="sm-loading">No mind map data available.</p>';
    return '<div class="sm-mindmap"><ul>' + renderNode(mmData, 0) + '</ul></div>';
  }

  function renderNode(node, depth) {
    var has = node.children && node.children.length > 0;
    var cls = 'depth-' + Math.min(depth, 3);
    var h = '<li class="' + cls + '">';
    h += '<span class="sm-node ' + (has ? 'has-children' : 'leaf') + '"';
    if (has) h += ' onclick="this.parentElement.classList.toggle(\'collapsed\')"';
    h += '><span class="sm-toggle">' + (has ? '\u25BC' : '') + '</span>' + esc(node.name) + '</span>';
    if (has) {
      h += '<ul>';
      node.children.forEach(function (c) { h += renderNode(c, depth + 1); });
      h += '</ul>';
    }
    h += '</li>';
    return h;
  }

  /* ---- main orchestration ---- */

  function renderContent(container, data, section, type) {
    var h = '';
    // tabs
    h += '<div class="sm-tabs">';
    ['quiz', 'flashcards', 'mindmap'].forEach(function (t) {
      var label = t === 'quiz' ? 'Quiz' : t === 'flashcards' ? 'Flashcards' : 'Mind Map';
      h += '<button class="' + (t === type ? 'active' : '') + '" onclick="window.__smSetType(this,\'' + t + '\')">' + label + '</button>';
    });
    h += '</div>';

    var d = data[section] || {};
    if (type === 'quiz') h += renderQuiz(d.quiz, section);
    else if (type === 'flashcards') h += renderFlashcards(d.flashcards, section);
    else h += renderMindMap(d.mindmap);
    container.innerHTML = h;
  }

  window.__smSetType = function (btn, type) {
    var container = btn.closest('.study-material');
    if (!container) return;
    var section = container.dataset.section;
    renderContent(container, window.__smData, section, type);
  };

  window.__smReset = function (sKey) {
    // Re-render: find the container this section lives in
    var containers = document.querySelectorAll('.study-material');
    containers.forEach(function (c) {
      var section = c.dataset.section;
      renderContent(c, window.__smData, section, 'quiz');
    });
  };

  /* ---- init ---- */

  function init() {
    var containers = document.querySelectorAll('.study-material');
    if (containers.length === 0) return;

    // Show loading
    containers.forEach(function (c) {
      c.innerHTML = '<p class="sm-loading">Loading study material...</p>';
    });

    // Determine what to load
    var needed = {};
    containers.forEach(function (c) {
      var s = c.dataset.section;
      if (s && s !== 'all') needed[s] = true;
    });

    var keys = Object.keys(needed);
    if (keys.length === 0) return;

    var promise = (function () {
      var promises = keys.map(function (k) {
        return loadSection(k).then(function (d) { return { key: k, data: d }; });
      });
      return Promise.all(promises).then(function (results) {
        var out = {};
        results.forEach(function (r) { out[r.key] = r.data; });
        return out;
      });
    })();

    promise.then(function (data) {
      window.__smData = data;
      containers.forEach(function (c) {
        var section = c.dataset.section;
        if (section && section !== 'all') {
          renderContent(c, data, section, 'quiz');
        }
      });
    });
  }

  // MkDocs Material uses instant loading — we need to re-init on navigation
  if (typeof document$ !== 'undefined') {
    document$.subscribe(function () { init(); });
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }
})();
