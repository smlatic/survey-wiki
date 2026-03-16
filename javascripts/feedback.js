(function () {
  "use strict";

  function createFeedbackButton() {
    var nav = document.querySelector(".md-header__inner.md-grid");
    if (!nav) return;

    // Don't add if already exists
    if (document.getElementById("feedback-btn")) return;

    var btn = document.createElement("button");
    btn.id = "feedback-btn";
    btn.className = "md-header__button feedback-header-btn";
    btn.setAttribute("aria-label", "Improve this Wiki");
    btn.setAttribute("title", "Improve this Wiki");
    btn.innerHTML =
      '<span class="feedback-header-btn__label">Improve this Wiki</span>' +
      '<svg viewBox="0 0 24 24" width="24" height="24" class="feedback-header-btn__icon">' +
      '<path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zM11 5h2v5h-2zm0 7h2v2h-2z"/>' +
      "</svg>";

    // Insert before the repo source link or at the end
    var source = nav.querySelector(".md-header__source");
    if (source) {
      nav.insertBefore(btn, source);
    } else {
      nav.appendChild(btn);
    }

    btn.addEventListener("click", openModal);
  }

  function openModal() {
    var modal = document.getElementById("feedback-modal");
    if (!modal) return;
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    var closeBtn = modal.querySelector(".feedback-modal__close");
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    var modal = document.getElementById("feedback-modal");
    if (!modal) return;
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function initModal() {
    var modal = document.getElementById("feedback-modal");
    if (!modal) return;

    // Close on overlay click or close button
    modal.querySelectorAll("[data-close-modal]").forEach(function (el) {
      el.addEventListener("click", closeModal);
    });

    // Close on Escape key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeModal();
    });

    // Stop clicks inside container from closing modal
    var container = modal.querySelector(".feedback-modal__container");
    if (container) {
      container.addEventListener("click", function (e) {
        e.stopPropagation();
      });
    }
  }

  function makeHeaderTitleClickable() {
    var topic = document.querySelector(".md-header__topic");
    if (!topic || topic.dataset.homeLinked) return;
    topic.dataset.homeLinked = "true";
    topic.style.cursor = "pointer";
    topic.addEventListener("click", function () {
      var logo = document.querySelector(".md-header .md-logo");
      if (logo && logo.href) {
        window.location.href = logo.href;
      }
    });
  }

  function init() {
    createFeedbackButton();
    initModal();
    makeHeaderTitleClickable();
  }

  // MkDocs Material instant loading support
  if (typeof document$ !== "undefined") {
    document$.subscribe(function () {
      init();
    });
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
