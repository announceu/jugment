const projectDetails = {
  northstar: {
    index: "01",
    title: {
      ru: "Northstar Desk",
      en: "Northstar Desk",
    },
    summary: {
      ru: "Операционная панель для команд, которым нужно видеть состояние системы, быстрее реагировать на события и не тонуть в ручных действиях.",
      en: "An operational control surface for teams that need to see system state, react faster to events, and avoid drowning in manual work.",
    },
    role: {
      ru: "Спроектировали UI-систему, сценарии операторов, роли доступа и поток задач вокруг инцидентов, очередей и внутренней модерации.",
      en: "We designed the UI system, operator workflows, access roles, and task streams around incidents, queues, and internal moderation.",
    },
    outcome: {
      ru: "Система сократила время реакции и дала одной панели реальный operational context вместо набора разрозненных экранов.",
      en: "The system reduced response time and gave one surface real operational context instead of a scattered set of screens.",
    },
    tags: ["React", "TypeScript", "Node.js", "RBAC", "Audit Trail"],
  },
  sentinel: {
    index: "02",
    title: {
      ru: "Sentinel Relay",
      en: "Sentinel Relay",
    },
    summary: {
      ru: "Шина событий и автоматизации для распределения задач, триггеров, уведомлений и фоновых реакций на изменение состояния системы.",
      en: "An event and automation backbone for routing tasks, triggers, notifications, and background reactions to state changes.",
    },
    role: {
      ru: "Собрали логику очередей, повторов, дедлайнов и прозрачного статуса обработки так, чтобы система выдерживала реальную эксплуатацию.",
      en: "We built queueing, retries, deadlines, and transparent processing state so the system could survive real operational use.",
    },
    outcome: {
      ru: "Команды получили стабильный routing layer без ручной координации между разрозненными сервисами.",
      en: "Teams got a stable routing layer without manual coordination between disconnected services.",
    },
    tags: ["Workers", "Redis", "Queues", "Webhooks", "Observability"],
  },
  ghostline: {
    index: "03",
    title: {
      ru: "Ghostline Hosting",
      en: "Ghostline Hosting",
    },
    summary: {
      ru: "Приватный слой инфраструктуры для закрытых сервисов, ботов, внутренних API и сервисов, которые нельзя отдавать в хаотичный shared-hosting.",
      en: "A private infrastructure layer for closed services, bots, internal APIs, and workloads that should not live on chaotic shared hosting.",
    },
    role: {
      ru: "Собрали контур деплоя, мониторинга, rollback-сценариев и базовой операционной гигиены для изолированных сервисов.",
      en: "We assembled deployment, monitoring, rollback flows, and baseline operational hygiene for isolated services.",
    },
    outcome: {
      ru: "Инфраструктура стала предсказуемой: релизы, логирование и поддержка больше не зависят от случайных ручных действий.",
      en: "Infrastructure became predictable: releases, logging, and support no longer depend on random manual actions.",
    },
    tags: ["Linux", "Docker", "Nginx", "Metrics", "Backups"],
  },
  relaykit: {
    index: "04",
    title: {
      ru: "Relay Kit",
      en: "Relay Kit",
    },
    summary: {
      ru: "Набор расширений и утилит, которые убирают рутину из повторяющихся действий операторов и ускоряют работу с внутренними интерфейсами.",
      en: "A suite of extensions and utilities that removes routine from repetitive operator actions and speeds up work in internal interfaces.",
    },
    role: {
      ru: "Спроектировали микро-инструменты вокруг горячих клавиш, предзаполнения, локальных сценариев и безопасного ускорения повторяющихся операций.",
      en: "We designed micro-tools around hotkeys, prefill logic, local workflows, and safe acceleration of repetitive operations.",
    },
    outcome: {
      ru: "Повседневные действия стали короче, а UX внутри рабочих контуров стал быстрее без тяжёлой перестройки платформы.",
      en: "Daily actions became shorter and the UX inside operator loops got faster without a heavy platform rewrite.",
    },
    tags: ["Extensions", "JavaScript", "Productivity", "UX", "Automation"],
  },
};

const body = document.body;
const root = document.documentElement;
const langButtons = [...document.querySelectorAll("[data-lang-switch]")];
const i18nNodes = [...document.querySelectorAll("[data-i18n]")];
const binaryScrambleNodes = [...document.querySelectorAll("[data-binary-scramble]")];
const revealNodes = [...document.querySelectorAll(".reveal")];
const projectCards = [...document.querySelectorAll("[data-project]")];
const projectDialog = document.querySelector("[data-project-dialog]");
const projectDialogClose = document.querySelector("[data-project-close]");
const projectDialogIndex = document.querySelector("[data-project-dialog-index]");
const projectDialogTitle = document.querySelector("[data-project-dialog-title]");
const projectDialogSummary = document.querySelector("[data-project-dialog-summary]");
const projectDialogRole = document.querySelector("[data-project-dialog-role]");
const projectDialogOutcome = document.querySelector("[data-project-dialog-outcome]");
const projectDialogTags = document.querySelector("[data-project-dialog-tags]");
const backdropCanvas = document.querySelector(".backdrop-canvas");
const heroSection = document.querySelector(".hero");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const projectNarratives = {
  northstar: {
    role: {
      ru: "Анонимный бот спроектирован как закрытый контур общения: отдельная админ-панель, наблюдаемость по сообщениям и аккуратный поток модерации без лишнего шума.",
      en: "The anonymous bot was designed as a closed communication loop: a dedicated admin panel, message observability, and a clean moderation flow without extra noise.",
    },
    outcome: {
      ru: "В итоге переписка, контроль и статистика живут в одной системе, поэтому операторы видят картину целиком и не собирают ее вручную по разным источникам.",
      en: "As a result, messaging, control, and statistics live in one system, so operators get the full picture instead of stitching it together from separate sources.",
    },
  },
  sentinel: {
    role: {
      ru: "Сервис публикации собран вокруг реальной редакторской работы: публикация, правки, розыгрыши, каталог и внешние интеграции сведены в единый сценарий.",
      en: "The publishing service is built around real editorial work: publishing, edits, giveaways, the catalog, and external integrations are merged into one workflow.",
    },
    outcome: {
      ru: "Это убрало разрывы между контентом и операционкой: команда быстрее публикует материалы, управляет активностями и не теряет данные между сервисами.",
      en: "That removed the split between content and operations: the team can publish faster, manage activities, and keep data from falling between services.",
    },
  },
  ghostline: {
    role: {
      ru: "Маркет номеров сделан как приватная витрина с упором на анонимность, понятную выдачу товара и безопасный сценарий покупки физических Telegram-номеров.",
      en: "The number marketplace is built as a private storefront focused on anonymity, clear inventory presentation, and a safe flow for buying physical Telegram numbers.",
    },
    outcome: {
      ru: "Покупатель получает понятный путь от выбора до получения номера, а команда - аккуратный операционный слой для каталога, заказов и поддержки.",
      en: "Buyers get a clear path from selection to delivery, while the team gets a disciplined operational layer for the catalog, orders, and support.",
    },
  },
};

function setLanguage(lang) {
  const nextLang = lang === "en" ? "en" : "ru";

  body.dataset.lang = nextLang;
  root.lang = nextLang;

  i18nNodes.forEach((node) => {
    const value = node.dataset[nextLang];
    if (typeof value === "string" && value.length > 0) {
      node.textContent = value;
    }
  });

  binaryScrambleNodes.forEach((node) => {
    const value = node.dataset[nextLang] || node.dataset.text || node.textContent || "";
    node.dataset.text = value;
    node.textContent = value;
  });

  langButtons.forEach((button) => {
    const isActive = button.dataset.langSwitch === nextLang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function getProjectCardDetails(projectKey) {
  const currentLang = body.dataset.lang === "en" ? "en" : "ru";
  const card = projectCards.find((item) => item.dataset.project === projectKey);
  const narrative = projectNarratives[projectKey];

  if (!card || !narrative) {
    return null;
  }

  const index = card.querySelector(".project-index")?.textContent?.trim() || "";
  const title = card.querySelector("h3")?.textContent?.trim() || "";
  const summaryNode = card.querySelector(".project-copy");
  const summary =
    summaryNode?.dataset[currentLang]?.trim() ||
    summaryNode?.textContent?.trim() ||
    "";
  const tags = [...card.querySelectorAll(".tag-list span")]
    .map((item) => item.textContent?.trim() || "")
    .filter(Boolean);

  return {
    index,
    title,
    summary,
    role: narrative.role[currentLang],
    outcome: narrative.outcome[currentLang],
    tags,
  };
}

function initLanguageSwitch() {
  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.langSwitch || "ru");
    });
  });

  setLanguage(body.dataset.lang || "ru");
}

function initMobileMenu() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const panel = document.querySelector("[data-menu-panel]");
  const navLinks = panel ? [...panel.querySelectorAll('a[href^="#"]')] : [];
  const mobileQuery = window.matchMedia("(max-width: 560px)");

  if (!toggle || !panel) {
    return;
  }

  function setOpen(nextOpen) {
    const isOpen = Boolean(nextOpen) && mobileQuery.matches;
    panel.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  }

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    setOpen(!isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setOpen(false);
    });
  });

  document.addEventListener("click", (event) => {
    if (!mobileQuery.matches) {
      return;
    }

    const target = event.target;
    if (!(target instanceof Node)) {
      return;
    }

    if (!panel.contains(target) && !toggle.contains(target)) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setOpen(false);
    }
  });

  mobileQuery.addEventListener("change", (event) => {
    if (!event.matches) {
      setOpen(false);
    }
  });
}

function initReveal() {
  if (!("IntersectionObserver" in window) || prefersReducedMotion.matches) {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -10% 0px",
    },
  );

  revealNodes.forEach((node) => observer.observe(node));
}

function openProjectDialog(projectKey) {
  if (!projectDialog || !(projectDialog instanceof HTMLDialogElement)) {
    return;
  }

  const details = getProjectCardDetails(projectKey);

  if (!details) {
    return;
  }

  projectDialogIndex.textContent = details.index;
  projectDialogTitle.textContent = details.title;
  projectDialogSummary.textContent = details.summary;
  projectDialogRole.textContent = details.role;
  projectDialogOutcome.textContent = details.outcome;

  projectDialogTags.replaceChildren(
    ...details.tags.map((tag) => {
      const item = document.createElement("span");
      item.textContent = tag;
      return item;
    }),
  );

  if (!projectDialog.open) {
    projectDialog.showModal();
  }
}

function closeProjectDialog() {
  if (projectDialog instanceof HTMLDialogElement && projectDialog.open) {
    projectDialog.close();
  }
}

function initProjectDialog() {
  if (!projectDialog || !(projectDialog instanceof HTMLDialogElement)) {
    return;
  }

  projectCards.forEach((card) => {
    card.addEventListener("click", (event) => {
      event.preventDefault();
      const key = card.dataset.project;
      openProjectDialog(key);
    });
  });

  projectDialogClose?.addEventListener("click", closeProjectDialog);

  projectDialog.addEventListener("click", (event) => {
    const rect = projectDialog.getBoundingClientRect();
    const isInside =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width;

    if (!isInside) {
      closeProjectDialog();
    }
  });
}

function initBinaryScramble() {
  if (!binaryScrambleNodes.length) {
    return;
  }

  if (prefersReducedMotion.matches) {
    binaryScrambleNodes.forEach((node) => {
      const originalText = node.dataset.text || node.textContent || "";
      node.textContent = originalText;
    });
    return;
  }

  const glyphs = ["0", "1"];
  const scrambleGroups = [...document.querySelectorAll("[data-binary-trigger]")];

  scrambleGroups.forEach((group) => {
    const nodes = [...group.querySelectorAll("[data-binary-scramble]")];

    if (!nodes.length) {
      return;
    }

    const originals = nodes.map((node) => node.dataset.text || node.textContent || "");
    let frameId = 0;
    let startTime = 0;
    let isAnimating = false;

    nodes.forEach((node, index) => {
      node.textContent = originals[index];
    });

    function animate(timestamp) {
      if (!startTime) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / 720, 1);

      nodes.forEach((node, index) => {
        const originalText = originals[index];
        const revealCount = Math.floor(originalText.length * progress);

        node.textContent = [...originalText]
          .map((char, charIndex) => {
            if (char === " ") {
              return " ";
            }

            if (charIndex < revealCount) {
              return char;
            }

            return glyphs[Math.floor(Math.random() * glyphs.length)];
          })
          .join("");
      });

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
        return;
      }

      nodes.forEach((node, index) => {
        node.textContent = originals[index];
      });
      frameId = 0;
      startTime = 0;
      isAnimating = false;
    }

    function startAnimation() {
      if (isAnimating) {
        return;
      }

      nodes.forEach((node, index) => {
        node.textContent = originals[index];
      });
      isAnimating = true;
      frameId = window.requestAnimationFrame(animate);
    }

    group.addEventListener("pointerenter", startAnimation);
    group.addEventListener("focusin", startAnimation);
  });
}

function initBackdrop() {
  if (!backdropCanvas || !heroSection) {
    return;
  }

  const context = backdropCanvas.getContext("2d");

  if (!context) {
    return;
  }

  const pointer = { x: 0, y: 0, targetX: 0, targetY: 0, active: false };
  let width = 0;
  let height = 0;
  let spacing = 42;
  let nodes = [];
  let frameId = 0;
  let ripple = null;

  function setIdlePointer() {
    pointer.targetX = width * 0.5;
    pointer.targetY = height * 0.42;
    pointer.x = pointer.targetX;
    pointer.y = pointer.targetY;
  }

  function rebuildNodes() {
    spacing = width < 560 ? 30 : width < 860 ? 36 : 44;
    nodes = [];
    const columns = Math.ceil(width / spacing) + 3;
    const rows = Math.ceil(height / spacing) + 3;
    let seed = Math.max(1, Math.round(width + height * 13));

    function random() {
      seed += 0x6d2b79f5;
      let value = seed;
      value = Math.imul(value ^ (value >>> 15), value | 1);
      value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
      return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
    }

    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < columns; col += 1) {
        const jitter = spacing * 0.14;

        nodes.push({
          originX: (col - 1) * spacing + (random() - 0.5) * jitter,
          originY: (row - 1) * spacing + (random() - 0.5) * jitter,
          phase: random() * Math.PI * 2,
          drift: random() * 0.7 + 0.3,
          size: random() * 0.65 + 0.55,
          bit: random() > 0.5 ? "1" : "0",
          binaryChance: random(),
        });
      }
    }
  }

  function resizeCanvas() {
    const ratio = Math.min(window.devicePixelRatio || 1, 1.8);
    const heroRect = heroSection.getBoundingClientRect();
    width = Math.max(Math.round(heroRect.width), 1);
    height = Math.max(Math.round(heroRect.height), 1);
    backdropCanvas.width = Math.round(width * ratio);
    backdropCanvas.height = Math.round(height * ratio);
    backdropCanvas.style.width = `${width}px`;
    backdropCanvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    rebuildNodes();
    setIdlePointer();
  }

  function triggerBurst(clientX, clientY) {
    const rect = heroSection.getBoundingClientRect();
    ripple = {
      x: clientX - rect.left,
      y: clientY - rect.top,
      startedAt: performance.now(),
    };

    pointer.targetX = clientX - rect.left;
    pointer.targetY = clientY - rect.top;
    pointer.active = true;
  }

  function render(time) {
    if (!prefersReducedMotion.matches) {
      frameId = window.requestAnimationFrame(render);
    }

    if (!pointer.active) {
      pointer.targetX = width * (0.48 + Math.sin(time * 0.00009) * 0.08);
      pointer.targetY = height * (0.42 + Math.cos(time * 0.00011) * 0.06);
    }

    pointer.x += (pointer.targetX - pointer.x) * 0.075;
    pointer.y += (pointer.targetY - pointer.y) * 0.075;

    context.clearRect(0, 0, width, height);
    const influenceRadius = width < 760 ? 126 : 172;
    const rippleAge = ripple ? time - ripple.startedAt : Number.POSITIVE_INFINITY;
    const rippleRadius = rippleAge * 0.18;
    const rippleOpacity = Math.max(0, 1 - rippleAge / 1100);

    context.font = "600 9px Inter, Arial, sans-serif";
    context.textAlign = "center";
    context.textBaseline = "middle";

    for (const node of nodes) {
      const driftX = prefersReducedMotion.matches ? 0 : Math.sin(time * 0.00022 + node.phase) * 2.4 * node.drift;
      const driftY = prefersReducedMotion.matches ? 0 : Math.cos(time * 0.00018 + node.phase) * 2.8 * node.drift;
      const baseX = node.originX + driftX;
      const baseY = node.originY + driftY;
      const dx = baseX - pointer.x;
      const dy = baseY - pointer.y;
      const distance = Math.hypot(dx, dy);
      const influence = Math.max(0, 1 - distance / influenceRadius);
      const easedInfluence = influence * influence;
      let rippleForce = 0;

      if (ripple && rippleOpacity > 0) {
        const rippleDistance = Math.hypot(baseX - ripple.x, baseY - ripple.y);
        rippleForce = Math.max(0, 1 - Math.abs(rippleDistance - rippleRadius) / 32) * rippleOpacity;
      }

      const displacement = prefersReducedMotion.matches ? 0 : easedInfluence * 8 + rippleForce * 6;
      const x = baseX + (distance ? (dx / distance) * displacement : 0);
      const y = baseY + (distance ? (dy / distance) * displacement : 0);
      const radius = node.size + easedInfluence * 0.65 + rippleForce * 0.75;
      const alpha = Math.min(0.42, 0.1 + easedInfluence * 0.24 + rippleForce * 0.16);
      const showBinary = rippleForce > 0.22 && node.binaryChance > 0.58;

      if (showBinary) {
        context.fillStyle = `rgba(244, 244, 240, ${Math.min(0.86, 0.32 + rippleForce * 0.6)})`;
        context.fillText(node.bit, x, y);
        continue;
      }

      context.fillStyle = `rgba(232, 232, 229, ${alpha})`;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();
    }

    if (ripple && rippleOpacity <= 0) {
      ripple = null;
    }
  }

  function stop() {
    if (frameId) {
      window.cancelAnimationFrame(frameId);
      frameId = 0;
    }
  }

  function start() {
    stop();
    resizeCanvas();
    if (prefersReducedMotion.matches) {
      render(performance.now());
    } else {
      frameId = window.requestAnimationFrame(render);
    }
  }

  window.addEventListener("resize", resizeCanvas);

  heroSection.addEventListener("pointermove", (event) => {
    const rect = heroSection.getBoundingClientRect();
    pointer.targetX = event.clientX - rect.left;
    pointer.targetY = event.clientY - rect.top;
    pointer.active = true;
  });

  heroSection.addEventListener("pointerleave", () => {
    pointer.active = false;
  });

  heroSection.addEventListener("pointerdown", (event) => {
    triggerBurst(event.clientX, event.clientY);
  });

  prefersReducedMotion.addEventListener("change", () => {
    start();
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stop();
    } else {
      start();
    }
  });

  start();
}

function initInteractiveSurface() {
  const interactiveCards = [...document.querySelectorAll(".about-card, .project-card, .contact-link")];

  interactiveCards.forEach((card) => {
    card.style.setProperty("--card-x", "50%");
    card.style.setProperty("--card-y", "50%");
  });
}

function initSmoothScroll() {
  const anchorLinks = [...document.querySelectorAll('a[href^="#"]')];

  anchorLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      const target = targetId ? document.querySelector(targetId) : null;

      if (!target) {
        return;
      }

      event.preventDefault();
      const headerHeight = document.querySelector(".site-header")?.offsetHeight || 0;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 18;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: prefersReducedMotion.matches ? "auto" : "smooth",
      });
      window.history.pushState(null, "", targetId);
    });
  });
}

function initHeaderVisibility() {
  const header = document.querySelector(".site-header");

  if (!header || prefersReducedMotion.matches) {
    return;
  }

  let lastScrollY = window.scrollY;
  let isTicking = false;

  function updateHeader() {
    const currentScrollY = window.scrollY;
    const delta = currentScrollY - lastScrollY;

    if (Math.abs(delta) >= 8) {
      header.classList.toggle("is-hidden", delta > 0 && currentScrollY > 112);
      lastScrollY = currentScrollY;
    }

    isTicking = false;
  }

  window.addEventListener("scroll", () => {
    if (!isTicking) {
      window.requestAnimationFrame(updateHeader);
      isTicking = true;
    }
  }, { passive: true });
}

function initHeroTilt() {
  const visual = document.querySelector("[data-hero-tilt]");
  const finePointer = window.matchMedia("(pointer: fine)");

  if (!visual || prefersReducedMotion.matches || !finePointer.matches) {
    return;
  }

  function resetTilt() {
    visual.style.setProperty("--tilt-x", "0deg");
    visual.style.setProperty("--tilt-y", "0deg");
    visual.style.setProperty("--visual-x", "50%");
    visual.style.setProperty("--visual-y", "50%");
  }

  visual.addEventListener("pointermove", (event) => {
    const rect = visual.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const tiltX = (0.5 - y) * 8;
    const tiltY = (x - 0.5) * 10;

    visual.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
    visual.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);
    visual.style.setProperty("--visual-x", `${(x * 100).toFixed(1)}%`);
    visual.style.setProperty("--visual-y", `${(y * 100).toFixed(1)}%`);
  });

  visual.addEventListener("pointerleave", resetTilt);
}

function initImageFallbacks() {
  const images = [...document.querySelectorAll("[data-image-fallback]")];

  images.forEach((image) => {
    const container = image.closest(".hero-media, .team-photo");

    function showImage() {
      image.hidden = false;
      container?.classList.add("has-image");
    }

    function showFallback() {
      image.hidden = true;
      container?.classList.remove("has-image");
    }

    image.addEventListener("load", showImage);
    image.addEventListener("error", showFallback);

    if (image.complete) {
      if (image.naturalWidth > 0) {
        showImage();
      } else {
        showFallback();
      }
    }
  });
}

initLanguageSwitch();
initMobileMenu();
initReveal();
initProjectDialog();
initBinaryScramble();
initBackdrop();
initInteractiveSurface();
initSmoothScroll();
initHeaderVisibility();
initHeroTilt();
initImageFallbacks();
