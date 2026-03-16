const themes = [
  "theme-sky",
  "theme-meadow",
  "theme-ocean",
  "theme-paper",
  "theme-sunset",
  "theme-mint",
  "theme-peach"
];

const animalEmojiPool = [
  "🐥", "🐣", "🐤", "🐻", "🐼", "🐨", "🐰", "🐹", "🐭", "🐁", "🦊", "🐸", "🐢", "🐙",
  "🐬", "🐳", "🐋", "🐠", "🐟", "🦋", "🐞", "🐝", "🪲", "🐛", "🪱", "🦗",
  "🦄", "🐶", "🐕", "🐩", "🐱", "🐈", "🐷", "🐮", "🐄", "🦁", "🐯", "🐵",
  "🦒", "🦓", "🦘", "🦩", "🦥", "🦦", "🐿️", "🦔", "🐇", "🦝", "🦫", "🦨",
  "🐆", "🐅", "🐘", "🦏", "🦛", "🐪", "🦙", "🫏", "🐎", "🦌", "🐓", "🦜",
  "🦚", "🦢", "🪿", "🐧", "🦆", "🦉", "🦇", "🐊", "🦎", "🐍", "🦕", "🦖",
  "🐉", "🐲", "🌋", "🥚", "🌈", "⭐", "🌟", "✨", "☀️", "🌙", "☁️"
];

const vehicleEmojiPool = [
  "🚗", "🚕", "🚙", "🚌", "🚓", "🚑", "🚒", "🚜", "🏎️", "🛵",
  "🚲", "🛴", "🚂", "🚆", "🚊", "🚞", "🚄", "🚅", "🚈", "🚇", "🚠", "🚡",
  "✈️", "🛩️", "🚁", "⛵", "🚤", "🛥️", "🛶", "🚢", "🛳️", "🚀", "🛸", "🚚",
  "🚛", "🚐", "🚎", "🚍", "🚘", "🛺", "🚔", "🛻"
];

const dinoEmojiPool = [
  "🦖", "🦕", "🐉", "🐲", "🥚", "🌋", "🦴", "⭐", "✨", "🌈", "☄️", "🪨"
];

const spaceEmojiPool = [
  "🚀", "🛸", "🪐", "⭐", "🌟", "✨", "☀️", "🌙", "☁️", "☄️", "🌌", "👨‍🚀"
];

const seaEmojiPool = [
  "🐠", "🐟", "🐬", "🐳", "🐋", "🐙", "🦀", "🦑", "🪼", "🐚", "🌊", "⛵"
];

const farmEmojiPool = [
  "🐮", "🐷", "🐔", "🐓", "🐣", "🐥", "🐴", "🐑", "🐐", "🚜", "🌽", "🍎"
];

const insectEmojiPool = [
  "🦋", "🐞", "🐝", "🪲", "🐛", "🪱", "🦗", "🕷️", "🕸️", "🌼", "🍃", "✨"
];

const partyEmojiPool = [
  "🎉", "🎈", "🫧", "🎊", "🥳", "🎵", "🎶", "⭐", "✨", "🌈", "💛", "🧡"
];

const colorEmojiPool = [
  "🔴", "🟠", "🟡", "🟢", "🔵", "🟣", "🩷", "🤍", "🌈", "🎨", "🖍️", "✨"
];

const fruitEmojiPool = [
  "🍓", "🍒", "🍉", "🍌", "🍊", "🍍", "🥝", "🫐", "🍎", "🍐", "🍇", "🥭"
];

const magicEmojiPool = [
  "🪄", "✨", "💫", "⭐", "🌙", "🔮", "🦄", "👑", "🏰", "🧚", "💖", "🌈"
];

const skyEmojiPool = [
  "☀️", "🌙", "⭐", "🌟", "☁️", "🌤️", "⛅", "🌈", "🪁", "🦅", "🕊️", "💨"
];

const friendlyMonsterEmojiPool = [
  "👾", "🤖", "👻", "😸", "🐲", "🦖", "🦕", "💚", "🩵", "⭐", "🫧", "✨"
];

const princessEmojiPool = [
  "👑", "👸", "🦄", "🐱", "🐰", "🦋", "🌸", "🌼", "🪻", "🌈", "✨", "⭐",
  "💖", "💗", "💝", "🎀", "🩷", "💜", "🎈", "🫧", "🍓", "🍒", "🩰", "🧁",
  "🍭", "🧸", "🐶", "🐥", "🦩", "🪄", "🌙", "🏰"
];

const adventureEmojiPool = [
  "🚗", "🚙", "🏎️", "🛵", "🚲", "🚜", "🚂", "🚀", "🛸", "✈️", "🚁", "🚚",
  "🚛", "🛻", "🚌", "🚓", "🚒", "🦖", "🦕", "🐉", "🦁", "🐯", "🦊", "🐻",
  "⚽", "🏀", "⭐", "💥", "🔵", "🟢", "🛡️", "🏁"
];

const randomEmojiPool = [
  ...animalEmojiPool,
  ...vehicleEmojiPool,
  ...dinoEmojiPool,
  ...spaceEmojiPool,
  ...seaEmojiPool,
  ...farmEmojiPool,
  ...insectEmojiPool,
  ...partyEmojiPool,
  ...colorEmojiPool,
  ...fruitEmojiPool,
  ...magicEmojiPool,
  ...skyEmojiPool,
  ...friendlyMonsterEmojiPool,
  ...princessEmojiPool,
  ...adventureEmojiPool,
  "🌸", "🌼", "🪻", "🍀", "🍓", "🍉", "🍌", "🍊", "🍍", "🥝", "🍒", "🫐",
  "🎈", "🫧", "🎉", "❤️", "💛", "🧡", "🪐"
];

const sparklePools = ["✨", "⭐", "💫", "🫧", "🌟", "💛"];
const specialHeroPool = ["🦄", "👑", "🦖", "🐬", "🚀", "👸", "🤖", "🐲", "🌈", "💫"];
const specialEventKinds = ["hero", "rainbow", "super-rain"];
const specialEventConfig = {
  minCooldownMs: 22000,
  maxCooldownMs: 38000,
  minInteractions: 14
};
const emojiAssetBaseUrl = "./assets/twemoji";
const lowPowerMode =
  (typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency <= 4) ||
  /arm|aarch64|raspberry/i.test(navigator.userAgent);
const storageKey = "sancho-tap-tap:settings";
const performanceProfiles = {
  normal: { maxBursts: 24, sparkleRange: [3, 5], ring: true, primeCount: 2, rainBursts: 2, sizeScale: 1 },
  light: { maxBursts: 12, sparkleRange: [1, 2], ring: false, primeCount: 1, rainBursts: 1, sizeScale: 0.9 },
  ultra: { maxBursts: 8, sparkleRange: [0, 1], ring: false, primeCount: 1, rainBursts: 0, sizeScale: 0.8 }
};
const speedSettings = {
  slow: { burstLifetime: 4000, keyBurstInterval: 220, animationDuration: 4000 },
  normal: { burstLifetime: 2700, keyBurstInterval: 150, animationDuration: 2700 },
  fast: { burstLifetime: 1700, keyBurstInterval: 90, animationDuration: 1700 }
};

const playground = document.getElementById("playground");
const emojiStage = document.getElementById("emojiStage");
const specialStage = document.getElementById("specialStage");
const fullscreenButton = document.getElementById("fullscreenButton");
const parentHotspot = document.getElementById("parentHotspot");
const menuScreen = document.getElementById("menuScreen");
const playButton = document.getElementById("playButton");
const gamepadStatus = document.getElementById("gamepadStatus");
const gamepadCursor = document.getElementById("gamepadCursor");
const sessionTimer = document.getElementById("sessionTimer");
const resumeScreen = document.getElementById("resumeScreen");
const resumeTitle = document.getElementById("resumeTitle");
const resumeText = document.getElementById("resumeText");
const resumeButton = document.getElementById("resumeButton");
const resumeMenuButton = document.getElementById("resumeMenuButton");
const parentScreen = document.getElementById("parentScreen");
const parentMenuAction = document.getElementById("parentMenuAction");
const parentExitAction = document.getElementById("parentExitAction");
const parentDevTools = document.getElementById("parentDevTools");
const lockScreen = document.getElementById("lockScreen");
const endingScreen = document.getElementById("endingScreen");
const hint = document.getElementById("hint");
const optionButtons = Array.from(document.querySelectorAll(".option-button"));
const menuFocusables = [...optionButtons, playButton];

let burstCount = 0;
const heldKeys = new Map();
let primeTimeouts = [];
let animationFrameId = null;
let sessionTimerTimeoutId = null;
let sessionTimerIntervalId = null;
let endingTimeoutId = null;
let menuComboTimeoutId = null;
let menuComboSource = null;
let specialEventTimeoutId = null;
let specialEventTaskIds = [];
const state = {
  isPlaying: false,
  speedMode: "normal",
  visualMode: "normal",
  timerMode: "10",
  sessionEndsAt: null,
  remainingSessionMs: null,
  isEnding: false,
  isSessionLocked: false,
  isPausedForFocus: false,
  isParentPanelOpen: false,
  fullscreenWanted: false,
  pendingStart: false,
  specialEventActive: false,
  specialEventKind: "",
  lastSpecialKind: "",
  nextSpecialAt: 0,
  interactionsSinceSpecial: 0
};
const gamepadState = {
  activeIndex: null,
  connected: false,
  cursorX: window.innerWidth / 2,
  cursorY: window.innerHeight / 2,
  menuFocusIndex: menuFocusables.length - 1,
  lastMoveAt: 0,
  spawnIntervalId: null,
  previousButtons: {
    primary: false,
    menu: false
  },
  previousDirections: {
    left: false,
    right: false,
    up: false,
    down: false
  },
  parentFocusIndex: 0
};
const menuGrid = [
  [0, 1, 2, 3],
  [4]
];
const gamepadConfig = {
  deadzone: 0.24,
  moveSpeed: 15,
  menuMoveCooldown: 170
};
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function loadSavedSettings() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(storageKey) || "{}");
    if (saved.timerMode) {
      state.timerMode = saved.timerMode;
    }
  } catch (error) {
    console.error("Settings load error", error);
  }
}

function persistSettings() {
  try {
    window.localStorage.setItem(
      storageKey,
      JSON.stringify({
        timerMode: state.timerMode
      })
    );
  } catch (error) {
    console.error("Settings save error", error);
  }
}

function emojiToAssetCode(emojiChar) {
  return Array.from(emojiChar)
    .map((symbol) => symbol.codePointAt(0))
    .filter((codepoint) => codepoint !== 0xfe0f)
    .map((codepoint) => codepoint.toString(16))
    .join("-");
}

function getCurrentEmojiPool() {
  return randomEmojiPool;
}

function chooseAutoVisualMode() {
  const roll = Math.random();
  if (roll < 0.5) {
    return "normal";
  }
  if (roll < 0.82) {
    return "rain";
  }
  return "giant";
}

function chooseSpecialEventKind() {
  const availableKinds = specialEventKinds.filter((kind) => kind !== state.lastSpecialKind);
  return pickRandom(availableKinds.length ? availableKinds : specialEventKinds);
}

function scheduleNextSpecialEvent(baseTime = Date.now()) {
  state.nextSpecialAt = baseTime + randomBetween(specialEventConfig.minCooldownMs, specialEventConfig.maxCooldownMs);
}

function getResolvedPerformanceMode() {
  return lowPowerMode ? "light" : "normal";
}

function getPerformanceProfile() {
  return performanceProfiles[getResolvedPerformanceMode()];
}

function getSpeedSetting() {
  return speedSettings[state.speedMode];
}

function getTimerDurationMs() {
  if (state.timerMode === "off") {
    return null;
  }

  return Number.parseInt(state.timerMode, 10) * 60 * 1000;
}

function applyRandomTheme() {
  const nextTheme = pickRandom(themes);
  playground.classList.remove(...themes);
  playground.classList.add(nextTheme);
}

function createEmoji(x, y, emojiChar, variant = "main") {
  const emoji = document.createElement("img");
  emoji.className = variant === "sparkle" ? "emoji emoji-image sparkle" : "emoji emoji-image";
  emoji.src = `${emojiAssetBaseUrl}/${emojiToAssetCode(emojiChar)}.png`;
  emoji.alt = "";
  emoji.decoding = "async";
  emoji.loading = "eager";
  emoji.style.left = `${x}px`;
  emoji.style.top = `${y}px`;
  if (variant !== "rain") {
    emoji.style.animationDuration = `${getSpeedSetting().animationDuration}ms`;
  }
  emoji.style.setProperty("--twist", `${(Math.random() * 26 - 13).toFixed(2)}deg`);
  emoji.style.setProperty("--size-scale", getPerformanceProfile().sizeScale.toFixed(2));
  return emoji;
}

function createSparkles(x, y) {
  const sparkles = [];
  const profile = getPerformanceProfile();
  const [sparkleMin, sparkleMax] = profile.sparkleRange;
  const count = sparkleMax <= sparkleMin ? sparkleMin : sparkleMin + Math.floor(Math.random() * (sparkleMax - sparkleMin + 1));

  for (let index = 0; index < count; index += 1) {
    const sparkle = createEmoji(x, y, pickRandom(sparklePools), "sparkle");
    sparkle.style.setProperty("--angle", `${index * (360 / count) + Math.random() * 28}deg`);
    sparkle.style.setProperty("--distance", `${50 + Math.random() * 34}px`);
    sparkles.push(sparkle);
  }

  return sparkles;
}

function createRing(x, y) {
  const ring = document.createElement("div");
  ring.className = "ring";
  ring.style.left = `${x}px`;
  ring.style.top = `${y}px`;
  return ring;
}

function clearSpecialTasks() {
  specialEventTaskIds.forEach((taskId) => window.clearTimeout(taskId));
  specialEventTaskIds = [];
}

function scheduleSpecialTask(callback, delay) {
  const taskId = window.setTimeout(() => {
    specialEventTaskIds = specialEventTaskIds.filter((id) => id !== taskId);
    if (!state.specialEventActive) {
      return;
    }
    callback();
  }, delay);
  specialEventTaskIds.push(taskId);
}

function pruneBurstsIfNeeded() {
  while (burstCount >= getPerformanceProfile().maxBursts && emojiStage.firstChild) {
    emojiStage.removeChild(emojiStage.firstChild);
    burstCount -= 1;
  }
}

function spawnBurst(x, y, options = {}) {
  pruneBurstsIfNeeded();

  const burst = document.createElement("div");
  burst.className = "burst";
  const sizeMultiplier = options.sizeMultiplier || 1;
  const emojiVariant = options.variant || "main";

  const mainEmoji = createEmoji(x, y, pickRandom(getCurrentEmojiPool()), emojiVariant);
  mainEmoji.style.setProperty("--burst-scale", sizeMultiplier.toFixed(2));
  let burstLifetime = getSpeedSetting().burstLifetime;
  if (emojiVariant === "rain") {
    const fallDistance = Math.max(window.innerHeight - y + 180, 260);
    mainEmoji.classList.add("rain-drop");
    mainEmoji.style.animationDuration = "7800ms";
    mainEmoji.style.setProperty("--rain-drift", `${(Math.random() * 220 - 110).toFixed(2)}px`);
    mainEmoji.style.setProperty("--rain-fall", `${fallDistance.toFixed(2)}px`);
    burstLifetime = Math.max(getSpeedSetting().burstLifetime, 7800);
  }
  const ring = getPerformanceProfile().ring ? createRing(x, y) : null;
  const sparkles = createSparkles(x, y);

  if (ring) {
    burst.appendChild(ring);
  }
  burst.appendChild(mainEmoji);
  sparkles.forEach((sparkle) => burst.appendChild(sparkle));
  emojiStage.appendChild(burst);
  burstCount += 1;

  window.setTimeout(() => {
    if (burst.parentNode === emojiStage) {
      emojiStage.removeChild(burst);
      burstCount -= 1;
    }
  }, burstLifetime);
}

function createSpecialOverlay(className, x, y) {
  const overlay = document.createElement("div");
  overlay.className = `special-event ${className}`;
  overlay.style.setProperty("--origin-x", `${x.toFixed(2)}px`);
  overlay.style.setProperty("--origin-y", `${y.toFixed(2)}px`);
  return overlay;
}

function createSpecialEmojiNode(x, y, emojiChar, className, scale = 1) {
  const emoji = createEmoji(x, y, emojiChar, "main");
  emoji.classList.add("special-emoji", className);
  emoji.style.animationDuration = "";
  emoji.style.setProperty("--burst-scale", scale.toFixed(2));
  return emoji;
}

function setTravelPath(node, startX, endX, y) {
  node.style.setProperty("--travel-start-x", `${startX.toFixed(2)}px`);
  node.style.setProperty("--travel-end-x", `${endX.toFixed(2)}px`);
  node.style.setProperty("--travel-y", `${y.toFixed(2)}px`);
}

function setWanderPath(node, startX, startY, mid1X, mid1Y, mid2X, mid2Y, mid3X, mid3Y, endX, endY) {
  node.style.setProperty("--wander-start-x", `${startX.toFixed(2)}px`);
  node.style.setProperty("--wander-start-y", `${startY.toFixed(2)}px`);
  node.style.setProperty("--wander-mid1-x", `${mid1X.toFixed(2)}px`);
  node.style.setProperty("--wander-mid1-y", `${mid1Y.toFixed(2)}px`);
  node.style.setProperty("--wander-mid2-x", `${mid2X.toFixed(2)}px`);
  node.style.setProperty("--wander-mid2-y", `${mid2Y.toFixed(2)}px`);
  node.style.setProperty("--wander-mid3-x", `${mid3X.toFixed(2)}px`);
  node.style.setProperty("--wander-mid3-y", `${mid3Y.toFixed(2)}px`);
  node.style.setProperty("--wander-end-x", `${endX.toFixed(2)}px`);
  node.style.setProperty("--wander-end-y", `${endY.toFixed(2)}px`);
}

function interpolateWanderPoint(points, progress) {
  const clamped = clamp(progress, 0, 1);
  const segmentCount = points.length - 1;
  const scaled = clamped * segmentCount;
  const index = Math.min(Math.floor(scaled), segmentCount - 1);
  const localT = scaled - index;
  const start = points[index];
  const end = points[index + 1];

  return {
    x: start.x + (end.x - start.x) * localT,
    y: start.y + (end.y - start.y) * localT
  };
}

function createSvgNode(tagName) {
  return document.createElementNS("http://www.w3.org/2000/svg", tagName);
}

function cubicBezierPoint(start, control1, control2, end, t) {
  const inverse = 1 - t;
  return (
    inverse ** 3 * start +
    3 * inverse ** 2 * t * control1 +
    3 * inverse * t ** 2 * control2 +
    t ** 3 * end
  );
}

function spawnHeroSpecial(x, y) {
  const exitLeft = Math.random() > 0.5;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const startX = randomBetween(width * 0.22, width * 0.78);
  const startY = 36;
  const mid1X = exitLeft ? width * 0.72 : width * 0.28;
  const mid1Y = height * 0.24;
  const mid2X = exitLeft ? width * 0.24 : width * 0.76;
  const mid2Y = height * 0.44;
  const mid3X = exitLeft ? width * 0.68 : width * 0.32;
  const mid3Y = height * 0.68;
  const endX = exitLeft ? 42 : width - 42;
  const endY = randomBetween(height * 0.78, height * 0.9);
  const wanderPoints = [
    { x: startX, y: startY },
    { x: mid1X, y: mid1Y },
    { x: mid2X, y: mid2Y },
    { x: mid3X, y: mid3Y },
    { x: endX, y: endY }
  ];
  const overlay = createSpecialOverlay("special-hero", width / 2, height / 2);
  const heroEmoji = createSpecialEmojiNode(startX, startY, pickRandom(["🦄", "🐬", "🐘", "🦒", "🦁"]), "special-hero-emoji", 2.85);
  setWanderPath(heroEmoji, startX, startY, mid1X, mid1Y, mid2X, mid2Y, mid3X, mid3Y, endX, endY);

  overlay.appendChild(heroEmoji);
  specialStage.replaceChildren(overlay);

  const burstCountForHero = getResolvedPerformanceMode() === "normal" ? 11 : 6;
  for (let index = 0; index < burstCountForHero; index += 1) {
    scheduleSpecialTask(() => {
      const progress = index / Math.max(burstCountForHero - 1, 1);
      const point = interpolateWanderPoint(wanderPoints, progress);
      const nextPoint = interpolateWanderPoint(wanderPoints, Math.min(progress + 0.08, 1));
      const trailX = point.x - (nextPoint.x - point.x) * 0.7;
      const trailY = point.y - (nextPoint.y - point.y) * 0.7;
      const burstX = clamp(trailX + randomBetween(-16, 16), 40, window.innerWidth - 40);
      const burstY = clamp(trailY + randomBetween(-18, 18), 40, window.innerHeight - 40);
      spawnBurst(burstX, burstY, { sizeMultiplier: 0.96 + Math.random() * 0.18 });
    }, 900 + index * 300);
  }

  return 5600;
}

function spawnRainbowSpecial(x, y) {
  const overlay = createSpecialOverlay("special-rainbow", x, y);
  const width = window.innerWidth;
  const height = window.innerHeight;
  const arcColors = [
    "#ff5d67",
    "#ff9d3b",
    "#ffe25d",
    "#67d87b",
    "#5ab8ff",
    "#7283ff",
    "#ff77d2"
  ];

  const ribbon = document.createElement("div");
  ribbon.className = "special-rainbow-ribbon";

  arcColors.forEach((color, index) => {
    const band = document.createElement("div");
    band.className = "special-rainbow-band";
    band.style.setProperty("--band-color", color);
    band.style.setProperty("--band-offset", `${index * 1.12}rem`);
    band.style.animationDelay = `${index * 35}ms`;
    ribbon.appendChild(band);
  });
  overlay.appendChild(ribbon);

  ["left", "right"].forEach((side) => {
    const cloud = document.createElement("div");
    cloud.className = `special-rainbow-cloud special-rainbow-cloud-${side}`;
    overlay.appendChild(cloud);
  });

  specialStage.replaceChildren(overlay);

  const burstCountForRainbow = getResolvedPerformanceMode() === "normal" ? 8 : 4;
  for (let index = 0; index < burstCountForRainbow; index += 1) {
    scheduleSpecialTask(() => {
      const progress = (index + 1) / (burstCountForRainbow + 1);
      const burstX = width * (0.12 + progress * 0.76);
      const burstY = clamp(height * 0.7 - Math.sin(progress * Math.PI) * (height * 0.28), 70, height - 90);
      spawnBurst(burstX, burstY, { sizeMultiplier: 0.96 + Math.random() * 0.2 });
    }, 220 + index * 160);
  }

  return 3600;
}

function spawnSuperRainSpecial(x, y) {
  const overlay = createSpecialOverlay("special-super-rain", x, y);
  const cloud = document.createElement("div");
  cloud.className = "special-cloud";
  const cloudX = clamp(x, 120, window.innerWidth - 120);
  const cloudY = clamp(y - 120, 72, window.innerHeight * 0.32);
  cloud.style.left = `${cloudX}px`;
  cloud.style.top = `${cloudY}px`;
  overlay.appendChild(cloud);
  const cloudTwo = document.createElement("div");
  cloudTwo.className = "special-cloud special-cloud-secondary";
  cloudTwo.style.left = `${clamp(cloudX + randomBetween(-180, 180), 120, window.innerWidth - 120)}px`;
  cloudTwo.style.top = `${clamp(cloudY + randomBetween(-20, 20), 72, window.innerHeight * 0.34)}px`;
  overlay.appendChild(cloudTwo);
  specialStage.replaceChildren(overlay);

  const burstCountForRain = getResolvedPerformanceMode() === "normal" ? 16 : 8;
  for (let index = 0; index < burstCountForRain; index += 1) {
    scheduleSpecialTask(() => {
      const burstX = randomBetween(window.innerWidth * 0.08, window.innerWidth * 0.92);
      const burstY = randomBetween(28, Math.max(window.innerHeight * 0.34, 64));
      spawnBurst(burstX, burstY, {
        sizeMultiplier: 1 + Math.random() * 0.36,
        variant: "rain"
      });
    }, 120 + index * 150);
  }

  return 4300;
}

function endSpecialEvent() {
  if (specialEventTimeoutId) {
    window.clearTimeout(specialEventTimeoutId);
    specialEventTimeoutId = null;
  }
  clearSpecialTasks();
  state.specialEventActive = false;
  state.specialEventKind = "";
  specialStage.replaceChildren();
  applyModeClasses();
}

function startSpecialEvent(kind, x, y) {
  if (state.specialEventActive || !canInteractWithGameplay()) {
    return;
  }

  state.specialEventActive = true;
  state.specialEventKind = kind;
  state.lastSpecialKind = kind;
  state.interactionsSinceSpecial = 0;
  scheduleNextSpecialEvent(Date.now());
  applyModeClasses();

  let duration = 3200;
  if (kind === "hero") {
    duration = spawnHeroSpecial(x, y);
  } else if (kind === "rainbow") {
    duration = spawnRainbowSpecial(x, y);
  } else {
    duration = spawnSuperRainSpecial(x, y);
  }

  specialEventTimeoutId = window.setTimeout(() => {
    specialEventTimeoutId = null;
    endSpecialEvent();
  }, duration);
}

function maybeTriggerSpecialEvent(x, y) {
  if (!canInteractWithGameplay() || state.specialEventActive) {
    return;
  }

  state.interactionsSinceSpecial += 1;
  if (state.interactionsSinceSpecial < specialEventConfig.minInteractions) {
    return;
  }

  if (Date.now() < state.nextSpecialAt) {
    return;
  }

  startSpecialEvent(chooseSpecialEventKind(), x, y);
}

function triggerPlayModeBursts(x, y) {
  state.visualMode = chooseAutoVisualMode();
  applyModeClasses();

  if (state.visualMode === "rain") {
    const originX = clamp(x + (Math.random() * 240 - 120), 36, window.innerWidth - 36);
    const originY = clamp(y - 90 - Math.random() * 150, 26, Math.max(y - 22, 26));
    spawnBurst(originX, originY, { sizeMultiplier: 0.92, variant: "rain" });
    const extraBursts = Math.max(getPerformanceProfile().rainBursts, 2);
    for (let index = 0; index < extraBursts; index += 1) {
      const point = {
        x: x + (Math.random() * 520 - 260),
        y: y - 120 - Math.random() * Math.min(window.innerHeight * 0.42, 280)
      };
      window.setTimeout(() => {
        if (canInteractWithGameplay()) {
          spawnBurst(
            clamp(point.x, 36, window.innerWidth - 36),
            clamp(point.y, 24, Math.max(y - 16, 24)),
            {
              sizeMultiplier: 0.82 + Math.random() * 0.24,
              variant: "rain"
            }
          );
        }
      }, 420 * (index + 1));
    }
    return;
  }

  if (state.visualMode === "giant") {
    spawnBurst(x, y, { sizeMultiplier: 1.85 });
    if (getResolvedPerformanceMode() === "normal") {
      window.setTimeout(() => {
        if (canInteractWithGameplay()) {
          spawnBurst(
            clamp(x + (Math.random() * 140 - 70), 40, window.innerWidth - 40),
            clamp(y + (Math.random() * 120 - 60), 40, window.innerHeight - 40),
            { sizeMultiplier: 1.2 }
          );
        }
      }, 90);
    }
    return;
  }

  spawnBurst(x, y);
}

function hideHint() {
  if (hint) {
    hint.style.transition = "opacity 180ms ease";
    hint.style.opacity = "0";
  }
}

function resetHint() {
  hint.style.transition = "";
  hint.style.opacity = "";
}

function clearBursts() {
  emojiStage.replaceChildren();
  burstCount = 0;
}

function clearPrimeTimeouts() {
  primeTimeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
  primeTimeouts = [];
}

function clearSessionTimer() {
  if (sessionTimerTimeoutId) {
    window.clearTimeout(sessionTimerTimeoutId);
    sessionTimerTimeoutId = null;
  }

  if (sessionTimerIntervalId) {
    window.clearInterval(sessionTimerIntervalId);
    sessionTimerIntervalId = null;
  }

  state.sessionEndsAt = null;
  sessionTimer.textContent = "";
  playground.classList.remove("has-timer");
}

function pauseSessionTimer() {
  if (state.timerMode === "off") {
    return;
  }

  if (state.sessionEndsAt) {
    state.remainingSessionMs = Math.max(state.sessionEndsAt - Date.now(), 1000);
  }

  clearSessionTimer();
}

function clearMenuReturnCombo() {
  if (menuComboTimeoutId) {
    window.clearTimeout(menuComboTimeoutId);
    menuComboTimeoutId = null;
  }

  menuComboSource = null;
}

function syncFullscreenState() {
  const isFullscreen = Boolean(document.fullscreenElement);
  fullscreenButton.textContent = isFullscreen ? "quitter plein ecran" : "plein ecran";
  playground.classList.toggle("is-fullscreen", isFullscreen);
}

function setResumeContent(title, text, actionLabel = "reprendre", canReturnMenu = false) {
  resumeTitle.textContent = title;
  resumeText.textContent = text;
  resumeButton.textContent = actionLabel;
  resumeMenuButton.hidden = !canReturnMenu;
}

function showResumeScreen(title, text, actionLabel = "reprendre", canReturnMenu = false) {
  setResumeContent(title, text, actionLabel, canReturnMenu);
  state.isPausedForFocus = true;
  playground.classList.add("is-paused");
  resumeScreen.setAttribute("aria-hidden", "false");
}

function hideResumeScreen() {
  state.isPausedForFocus = false;
  playground.classList.remove("is-paused");
  resumeScreen.setAttribute("aria-hidden", "true");
}

function updateParentFocus() {
  [parentMenuAction, parentExitAction].forEach((button, index) => {
    button.classList.toggle("is-focused", state.isParentPanelOpen && gamepadState.connected && index === gamepadState.parentFocusIndex);
  });
}

function syncParentDevTools() {
  if (!parentDevTools) {
    return;
  }

  parentDevTools.hidden = !(state.isPlaying && !state.isEnding && !state.isSessionLocked);
}

function applyModeClasses() {
  const resolvedPerformanceMode = getResolvedPerformanceMode();
  playground.classList.toggle("is-low-power", resolvedPerformanceMode !== "normal");
  playground.classList.toggle("is-ultra-light", resolvedPerformanceMode === "ultra");
  playground.classList.toggle("is-rain-mode", state.visualMode === "rain");
  playground.classList.toggle("is-giant-mode", state.visualMode === "giant");
  playground.classList.toggle("is-special-active", state.specialEventActive);
  playground.classList.toggle("is-special-hero", state.specialEventKind === "hero");
  playground.classList.toggle("is-special-rainbow", state.specialEventKind === "rainbow");
  playground.classList.toggle("is-special-super-rain", state.specialEventKind === "super-rain");
  playground.classList.toggle("is-session-locked", state.isSessionLocked);
}

function formatRemainingTime(remainingMs) {
  const totalSeconds = Math.max(Math.ceil(remainingMs / 1000), 0);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function updateSessionTimerLabel() {
  if (!state.sessionEndsAt) {
    sessionTimer.textContent = "";
    return;
  }

  sessionTimer.textContent = formatRemainingTime(state.sessionEndsAt - Date.now());
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function setGamepadStatusLabel() {
  gamepadStatus.textContent = gamepadState.connected ? "manette connectee" : "manette inactive";
  playground.classList.toggle("has-gamepad", gamepadState.connected);
}

function updateGamepadCursor() {
  gamepadCursor.style.left = `${gamepadState.cursorX}px`;
  gamepadCursor.style.top = `${gamepadState.cursorY}px`;
}

function resetGamepadCursor() {
  gamepadState.cursorX = window.innerWidth / 2;
  gamepadState.cursorY = window.innerHeight / 2;
  updateGamepadCursor();
}

function stopGamepadSpawn() {
  if (gamepadState.spawnIntervalId) {
    window.clearInterval(gamepadState.spawnIntervalId);
    gamepadState.spawnIntervalId = null;
  }
}

function stopAllInteractiveInput() {
  releaseAllKeys();
  stopGamepadSpawn();
  clearMenuReturnCombo();
}

function canInteractWithGameplay() {
  return state.isPlaying && !state.isEnding && !state.isPausedForFocus && !state.isParentPanelOpen;
}

function isGamepadBurstPressed(gamepad) {
  return gamepad.buttons.some((button, index) => index !== 8 && index !== 9 && button?.pressed);
}

function triggerGamepadBurst() {
  const point = nextKeyboardPoint();
  hideHint();
  triggerPlayModeBursts(point.x, point.y);
  maybeTriggerSpecialEvent(point.x, point.y);
}

function startGamepadSpawn() {
  if (gamepadState.spawnIntervalId) {
    return;
  }

  triggerGamepadBurst();
  gamepadState.spawnIntervalId = window.setInterval(() => {
    triggerGamepadBurst();
  }, getSpeedSetting().keyBurstInterval);
}

function openParentPanel() {
  if ((!state.isPlaying && !state.isSessionLocked) || state.isEnding || state.isParentPanelOpen) {
    return;
  }

  stopAllInteractiveInput();
  endSpecialEvent();
  pauseSessionTimer();
  state.isParentPanelOpen = true;
  gamepadState.parentFocusIndex = 0;
  parentScreen.setAttribute("aria-hidden", "false");
  playground.classList.add("is-parent-open");
  syncParentDevTools();
  updateParentFocus();
}

function closeParentPanel() {
  if (!state.isParentPanelOpen) {
    return;
  }

  state.isParentPanelOpen = false;
  parentScreen.setAttribute("aria-hidden", "true");
  playground.classList.remove("is-parent-open");
  syncParentDevTools();
  updateParentFocus();

  if (state.isSessionLocked) {
    return;
  }

  if (state.isPlaying && !state.isEnding) {
    if (state.fullscreenWanted && !document.fullscreenElement) {
      showResumeScreen("plein ecran requis", "touche une fois pour revenir dans le jeu en plein ecran.");
      return;
    }

    hideResumeScreen();
    startSessionTimer();
  }
}

function isModifierKey(code) {
  return code === "ShiftLeft" || code === "ShiftRight" || code === "ControlLeft" ||
    code === "ControlRight" || code === "AltLeft" || code === "AltRight" ||
    code === "MetaLeft" || code === "MetaRight";
}

function isKeyboardMenuCombo(event) {
  return event.shiftKey && event.code === "KeyM";
}

function startKeyboardMenuCombo() {
  if (!state.isPlaying && !state.isSessionLocked) {
    return;
  }

  if (state.isParentPanelOpen) {
    closeParentPanel();
  } else {
    openParentPanel();
  }
}

function maybeStartGamepadMenuCombo(gamepad) {
  const leftBumperPressed = Boolean(gamepad.buttons[4]?.pressed);
  const rightBumperPressed = Boolean(gamepad.buttons[5]?.pressed);
  const startPressed = Boolean(gamepad.buttons[9]?.pressed || gamepad.buttons[8]?.pressed);
  const comboPressed = leftBumperPressed && rightBumperPressed && startPressed;

  if (!comboPressed) {
    return false;
  }

  if (gamepadState.previousButtons.menu) {
    return true;
  }

  if (state.isPlaying || state.isSessionLocked) {
    if (state.isParentPanelOpen) {
      closeParentPanel();
    } else {
      openParentPanel();
    }
  }

  return true;
}

function updateMenuFocus() {
  menuFocusables.forEach((element, index) => {
    element.classList.toggle("is-focused", index === gamepadState.menuFocusIndex && gamepadState.connected);
  });
}

function focusIndexFromGridPosition(row, column) {
  const nextRow = menuGrid[clamp(row, 0, menuGrid.length - 1)];
  const safeColumn = clamp(column, 0, nextRow.length - 1);
  return nextRow[safeColumn];
}

function getGridPositionForFocus(index) {
  for (let row = 0; row < menuGrid.length; row += 1) {
    const column = menuGrid[row].indexOf(index);
    if (column !== -1) {
      return { row, column };
    }
  }

  return { row: menuGrid.length - 1, column: 0 };
}

function moveMenuFocus(direction) {
  const { row, column } = getGridPositionForFocus(gamepadState.menuFocusIndex);
  let nextIndex = gamepadState.menuFocusIndex;

  if (direction === "left") {
    nextIndex = focusIndexFromGridPosition(row, column - 1);
  }

  if (direction === "right") {
    nextIndex = focusIndexFromGridPosition(row, column + 1);
  }

  if (direction === "up") {
    nextIndex = focusIndexFromGridPosition(row - 1, column);
  }

  if (direction === "down") {
    nextIndex = focusIndexFromGridPosition(row + 1, column);
  }

  gamepadState.menuFocusIndex = nextIndex;
  updateMenuFocus();
}

function activateFocusedMenuItem() {
  const focused = menuFocusables[gamepadState.menuFocusIndex];
  if (focused) {
    focused.click();
  }
}

function setMenuFocusForState() {
  const focusMap = {
    "timer:5": 0,
    "timer:10": 1,
    "timer:15": 2,
    "timer:off": 3,
    play: 4
  };
  gamepadState.menuFocusIndex = focusMap[`timer:${state.timerMode}`] ?? focusMap.play;
  updateMenuFocus();
}

function handleGamepadMenuNavigation(horizontal, vertical, primaryPressed) {
  const now = performance.now();
  const directions = {
    left: horizontal < -0.5,
    right: horizontal > 0.5,
    up: vertical < -0.5,
    down: vertical > 0.5
  };

  Object.entries(directions).forEach(([direction, isPressed]) => {
    const wasPressed = gamepadState.previousDirections[direction];
    if (isPressed && !wasPressed && now - gamepadState.lastMoveAt > gamepadConfig.menuMoveCooldown) {
      moveMenuFocus(direction);
      gamepadState.lastMoveAt = now;
    }
    gamepadState.previousDirections[direction] = isPressed;
  });

  if (primaryPressed && !gamepadState.previousButtons.primary) {
    activateFocusedMenuItem();
  }
}

function handleGamepadParentPanel(gamepad, horizontal, primaryPressed) {
  const comboPressed = maybeStartGamepadMenuCombo(gamepad);
  if (comboPressed) {
    gamepadState.previousButtons.primary = false;
    return;
  }

  const movingLeft = horizontal < -0.5;
  const movingRight = horizontal > 0.5;
  const horizontalPressed = movingLeft || movingRight;

  if (horizontalPressed && !gamepadState.previousDirections.left && !gamepadState.previousDirections.right) {
    gamepadState.parentFocusIndex = movingLeft ? 0 : 1;
    updateParentFocus();
  }

  gamepadState.previousDirections.left = movingLeft;
  gamepadState.previousDirections.right = movingRight;

  if (primaryPressed && !gamepadState.previousButtons.primary) {
    [parentMenuAction, parentExitAction][gamepadState.parentFocusIndex]?.click();
  }
}

function handleGamepadResumeOverlay(primaryPressed) {
  if (primaryPressed && !gamepadState.previousButtons.primary) {
    resumeButton.click();
  }
}

function handleGamepadGameplay(gamepad) {
  const comboPressed = maybeStartGamepadMenuCombo(gamepad);
  const primaryPressed = !comboPressed && isGamepadBurstPressed(gamepad);

  if (primaryPressed && !gamepadState.previousButtons.primary) {
    startGamepadSpawn();
  }

  if (!primaryPressed) {
    stopGamepadSpawn();
  }

  gamepadState.previousButtons.primary = primaryPressed;
  gamepadState.previousButtons.menu = comboPressed;
}

function pollGamepads() {
  const gamepads = typeof navigator.getGamepads === "function" ? navigator.getGamepads() : [];
  const activeGamepad =
    (gamepadState.activeIndex !== null && gamepads[gamepadState.activeIndex]) ||
    Array.from(gamepads).find(Boolean) ||
    null;

  if (activeGamepad) {
    gamepadState.activeIndex = activeGamepad.index;
    if (!gamepadState.connected) {
      gamepadState.connected = true;
      setGamepadStatusLabel();
      setMenuFocusForState();
      resetGamepadCursor();
    }

    const horizontal = activeGamepad.axes[0] || 0;
    const vertical = activeGamepad.axes[1] || 0;
    const dpadHorizontal =
      (activeGamepad.buttons[15]?.pressed ? 1 : 0) - (activeGamepad.buttons[14]?.pressed ? 1 : 0);
    const dpadVertical =
      (activeGamepad.buttons[13]?.pressed ? 1 : 0) - (activeGamepad.buttons[12]?.pressed ? 1 : 0);
    const menuHorizontal =
      Math.abs(horizontal) > gamepadConfig.deadzone ? horizontal : dpadHorizontal;
    const menuVertical =
      Math.abs(vertical) > gamepadConfig.deadzone ? vertical : dpadVertical;
    const primaryPressed = Boolean(activeGamepad.buttons[0]?.pressed || activeGamepad.buttons[2]?.pressed);

    if (state.isParentPanelOpen) {
      handleGamepadParentPanel(activeGamepad, menuHorizontal, primaryPressed);
      gamepadState.previousButtons.primary = primaryPressed;
    } else if (state.isPausedForFocus) {
      handleGamepadResumeOverlay(primaryPressed);
      gamepadState.previousButtons.primary = primaryPressed;
    } else if (state.isPlaying) {
      handleGamepadGameplay(activeGamepad);
    } else {
      handleGamepadMenuNavigation(menuHorizontal, menuVertical, primaryPressed);
      gamepadState.previousButtons.primary = primaryPressed;
      gamepadState.previousButtons.menu = Boolean(
        activeGamepad.buttons[9]?.pressed || activeGamepad.buttons[8]?.pressed
      );
    }
  } else if (gamepadState.connected) {
    gamepadState.connected = false;
    gamepadState.activeIndex = null;
    stopGamepadSpawn();
    gamepadState.previousButtons.primary = false;
    gamepadState.previousButtons.menu = false;
    gamepadState.previousDirections.left = false;
    gamepadState.previousDirections.right = false;
    gamepadState.previousDirections.up = false;
    gamepadState.previousDirections.down = false;
    setGamepadStatusLabel();
    updateMenuFocus();
  }

  animationFrameId = window.requestAnimationFrame(pollGamepads);
}

function handlePointer(event) {
  if (!canInteractWithGameplay()) {
    return;
  }

  if (event.target === fullscreenButton) {
    return;
  }

  event.preventDefault();
  const pointX = event.clientX;
  const pointY = event.clientY;

  hideHint();
  triggerPlayModeBursts(pointX, pointY);
  maybeTriggerSpecialEvent(pointX, pointY);
}

function nextKeyboardPoint() {
  const marginX = Math.max(window.innerWidth * 0.08, 48);
  const marginY = Math.max(window.innerHeight * 0.1, 56);

  return {
    x: marginX + Math.random() * Math.max(window.innerWidth - marginX * 2, 1),
    y: marginY + Math.random() * Math.max(window.innerHeight - marginY * 2, 1)
  };
}

function triggerKeyboardBurst() {
  const point = nextKeyboardPoint();
  hideHint();
  triggerPlayModeBursts(point.x, point.y);
  maybeTriggerSpecialEvent(point.x, point.y);
}

function handleKeydown(event) {
  if (!state.isPlaying) {
    return;
  }

  if (state.isPausedForFocus && event.code === "Enter") {
    event.preventDefault();
    resumeButton.click();
    return;
  }

  if (event.key === "Tab") {
    return;
  }

  if (heldKeys.has(event.code)) {
    return;
  }

  heldKeys.set(event.code, 0);

  if (isKeyboardMenuCombo(event)) {
    startKeyboardMenuCombo();
    return;
  }

  if (isModifierKey(event.code)) {
    return;
  }

  if (!canInteractWithGameplay()) {
    return;
  }

  triggerKeyboardBurst();

  const intervalId = window.setInterval(() => {
    triggerKeyboardBurst();
  }, getSpeedSetting().keyBurstInterval);

  heldKeys.set(event.code, intervalId);
}

function releaseKey(event) {
  const intervalId = heldKeys.get(event.code);
  if (intervalId) {
    window.clearInterval(intervalId);
  }
  heldKeys.delete(event.code);

  if (event.code === "KeyM" || event.code === "ShiftLeft" || event.code === "ShiftRight") {
    clearMenuReturnCombo();
  }
}

function releaseAllKeys() {
  heldKeys.forEach((intervalId) => window.clearInterval(intervalId));
  heldKeys.clear();
  stopGamepadSpawn();
  clearMenuReturnCombo();
}

function syncOptionButtons() {
  optionButtons.forEach((button) => {
    const group = button.dataset.group;
    const value = button.dataset.value;
    const isActive = group === "timer" && value === state.timerMode;

    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function showMenu() {
  state.isPlaying = false;
  state.isEnding = false;
  state.isSessionLocked = false;
  state.isPausedForFocus = false;
  state.isParentPanelOpen = false;
  state.pendingStart = false;
  state.fullscreenWanted = false;
  state.remainingSessionMs = null;
  state.visualMode = "normal";
  state.interactionsSinceSpecial = 0;
  scheduleNextSpecialEvent();
  endSpecialEvent();
  releaseAllKeys();
  clearPrimeTimeouts();
  clearSessionTimer();
  if (endingTimeoutId) {
    window.clearTimeout(endingTimeoutId);
    endingTimeoutId = null;
  }
  resetHint();
  clearBursts();
  playground.classList.remove("is-playing");
  playground.classList.remove("is-ending");
  playground.classList.remove("is-paused");
  playground.classList.remove("is-parent-open");
  menuScreen.removeAttribute("hidden");
  resumeScreen.setAttribute("aria-hidden", "true");
  parentScreen.setAttribute("aria-hidden", "true");
  lockScreen.setAttribute("aria-hidden", "true");
  applyModeClasses();
  setMenuFocusForState();
  updateParentFocus();
}

function endSessionSoftly() {
  if (!state.isPlaying || state.isEnding) {
    return;
  }

  state.isEnding = true;
  endSpecialEvent();
  clearPrimeTimeouts();
  clearSessionTimer();
  stopAllInteractiveInput();
  playground.classList.add("is-ending");
  endingScreen.removeAttribute("aria-hidden");

  endingTimeoutId = window.setTimeout(() => {
    endingTimeoutId = null;
    endingScreen.setAttribute("aria-hidden", "true");
    state.isPlaying = false;
    state.isEnding = false;
    state.isSessionLocked = true;
    playground.classList.remove("is-playing");
    playground.classList.remove("is-ending");
    lockScreen.setAttribute("aria-hidden", "false");
    applyModeClasses();
  }, 2600);
}

function startSessionTimer() {
  const durationMs = state.remainingSessionMs ?? getTimerDurationMs();
  clearSessionTimer();

  if (!durationMs) {
    state.remainingSessionMs = null;
    return;
  }

  state.remainingSessionMs = durationMs;
  state.sessionEndsAt = Date.now() + durationMs;
  playground.classList.add("has-timer");
  updateSessionTimerLabel();

  sessionTimerIntervalId = window.setInterval(() => {
    updateSessionTimerLabel();
  }, 1000);

  sessionTimerTimeoutId = window.setTimeout(() => {
    state.remainingSessionMs = null;
    endSessionSoftly();
  }, durationMs);
}

function startSessionCore() {
  state.isPlaying = true;
  state.isEnding = false;
  state.pendingStart = false;
  state.isPausedForFocus = false;
  state.isParentPanelOpen = false;
  state.visualMode = "normal";
  state.interactionsSinceSpecial = 0;
  scheduleNextSpecialEvent();
  endSpecialEvent();
  applyRandomTheme();
  clearPrimeTimeouts();
  clearBursts();
  resetHint();
  playground.classList.add("is-playing");
  playground.classList.remove("is-ending");
  playground.classList.remove("is-paused");
  playground.classList.remove("is-parent-open");
  state.isSessionLocked = false;
  menuScreen.setAttribute("hidden", "hidden");
  resumeScreen.setAttribute("aria-hidden", "true");
  parentScreen.setAttribute("aria-hidden", "true");
  lockScreen.setAttribute("aria-hidden", "true");
  endingScreen.setAttribute("aria-hidden", "true");
  applyModeClasses();
  resetGamepadCursor();
  startSessionTimer();
  primeFirstView();
}

function handleOptionClick(event) {
  const button = event.target.closest(".option-button");
  if (!button) {
    return;
  }

  const { group, value } = button.dataset;
  if (group === "timer") {
    state.timerMode = value;
  }

  syncOptionButtons();
  applyModeClasses();
  persistSettings();
  updateMenuFocus();
}

function triggerDevSpecialPreview(kind) {
  if (!state.isPlaying || state.isEnding || state.isSessionLocked) {
    return;
  }

  const resolvedKind = kind === "random" ? chooseSpecialEventKind() : kind;
  const point = nextKeyboardPoint();
  closeParentPanel();
  window.setTimeout(() => {
    if (!state.isPlaying || state.isEnding || state.isPausedForFocus || state.isParentPanelOpen) {
      return;
    }
    endSpecialEvent();
    startSpecialEvent(resolvedKind, point.x, point.y);
  }, 90);
}

function handleParentDevClick(event) {
  const button = event.target.closest("[data-special-preview]");
  if (!button) {
    return;
  }

  triggerDevSpecialPreview(button.dataset.specialPreview);
}

async function toggleFullscreen() {
  try {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
    syncFullscreenState();
  } catch (error) {
    console.error("Fullscreen error", error);
  }
}

async function ensureFullscreen() {
  if (document.fullscreenElement) {
    syncFullscreenState();
    return true;
  }

  try {
    await document.documentElement.requestFullscreen();
    syncFullscreenState();
    return true;
  } catch (error) {
    syncFullscreenState();
    console.error("Fullscreen error", error);
    return false;
  }
}

function pauseForInterruption(title, text) {
  if (!state.isPlaying || state.isEnding || state.isParentPanelOpen) {
    return;
  }

  stopAllInteractiveInput();
  endSpecialEvent();
  pauseSessionTimer();
  showResumeScreen(title, text);
}

async function startGame() {
  state.fullscreenWanted = true;
  state.pendingStart = true;
  const enteredFullscreen = await ensureFullscreen();

  if (!enteredFullscreen) {
    menuScreen.setAttribute("hidden", "hidden");
    showResumeScreen(
      "plein ecran requis",
      "touche une fois pour passer en plein ecran avant de lancer la partie.",
      "entrer en plein ecran",
      true
    );
    return;
  }

  state.remainingSessionMs = getTimerDurationMs();
  startSessionCore();
}

async function handleResumeAction() {
  if (state.fullscreenWanted && !document.fullscreenElement) {
    const enteredFullscreen = await ensureFullscreen();
    if (!enteredFullscreen) {
      showResumeScreen(
        "plein ecran requis",
        state.pendingStart
          ? "touche une fois pour passer en plein ecran avant de lancer la partie."
          : "retourne dans le plein ecran pour reprendre tranquillement.",
        state.pendingStart ? "entrer en plein ecran" : "reprendre",
        state.pendingStart
      );
      return;
    }
  }

  hideResumeScreen();

  if (state.pendingStart) {
    state.remainingSessionMs = getTimerDurationMs();
    startSessionCore();
    return;
  }

  if (state.isPlaying && !state.isEnding) {
    startSessionTimer();
  }
}

async function exitFullscreenToMenu() {
  state.fullscreenWanted = false;

  if (document.fullscreenElement) {
    try {
      await document.exitFullscreen();
    } catch (error) {
      console.error("Exit fullscreen error", error);
    }
  }

  syncFullscreenState();
  showMenu();
}

function primeFirstView() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const profile = getPerformanceProfile();

  const entries = [
    [width * 0.35, height * 0.52, 260],
    [width * 0.65, height * 0.48, 520]
  ].slice(0, profile.primeCount);

  primeTimeouts = entries.map(([x, y, delay]) => window.setTimeout(() => {
    if (state.isPlaying) {
      triggerPlayModeBursts(x, y);
    }
  }, delay));
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch((error) => {
      console.error("Service worker error", error);
    });
  });
}

function handleGamepadConnected(event) {
  gamepadState.activeIndex = event.gamepad.index;
  gamepadState.connected = true;
  setGamepadStatusLabel();
  setMenuFocusForState();
  updateGamepadCursor();
}

function handleGamepadDisconnected(event) {
  if (gamepadState.activeIndex === event.gamepad.index) {
    gamepadState.activeIndex = null;
  }
}

function handleVisibilityChange() {
  if (document.hidden) {
    pauseForInterruption("petite pause", "reviens en plein ecran pour continuer la partie.");
  }
}

function handleWindowBlur() {
  releaseAllKeys();
  pauseForInterruption("petite pause", "reviens en plein ecran pour continuer la partie.");
}

function handleFullscreenChange() {
  syncFullscreenState();

  if (!state.fullscreenWanted || !state.isPlaying || state.isEnding || state.isParentPanelOpen) {
    return;
  }

  if (!document.fullscreenElement) {
    pauseForInterruption("plein ecran requis", "touche une fois pour revenir dans le jeu en plein ecran.");
  }
}

loadSavedSettings();
applyRandomTheme();
applyModeClasses();
syncOptionButtons();
showMenu();
setGamepadStatusLabel();
resetGamepadCursor();
updateMenuFocus();
syncFullscreenState();
syncParentDevTools();
pollGamepads();
registerServiceWorker();

playground.addEventListener("pointerdown", handlePointer, { passive: false });
fullscreenButton.addEventListener("click", toggleFullscreen);
parentHotspot.addEventListener("click", openParentPanel);
menuScreen.addEventListener("click", handleOptionClick);
playButton.addEventListener("click", startGame);
resumeButton.addEventListener("click", handleResumeAction);
resumeMenuButton.addEventListener("click", showMenu);
parentMenuAction.addEventListener("click", showMenu);
parentExitAction.addEventListener("click", exitFullscreenToMenu);
parentDevTools?.addEventListener("click", handleParentDevClick);
window.addEventListener("keydown", handleKeydown);
window.addEventListener("keyup", releaseKey);
window.addEventListener("blur", handleWindowBlur);
window.addEventListener("resize", resetGamepadCursor);
window.addEventListener("gamepadconnected", handleGamepadConnected);
window.addEventListener("gamepaddisconnected", handleGamepadDisconnected);
document.addEventListener("visibilitychange", handleVisibilityChange);
document.addEventListener("fullscreenchange", handleFullscreenChange);

document.addEventListener(
  "gesturestart",
  (event) => {
    event.preventDefault();
  },
  { passive: false }
);
