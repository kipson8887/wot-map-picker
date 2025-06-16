// ============================================================================
//  CONFIGURATION
// ============================================================================

// Master list of all available maps (or a representative subset)
const ALL_AVAILABLE_MAPS = [
  {
    name: "Himmelsdorf",
    imageUrl:
      "https://eu-wotp.wgcdn.co/static/6.4.4_4daec5/wotp_static/img/tournaments_new/frontend/scss/detail-page/maps/img/04_himmelsdorf.jpg",
  },
  {
    name: "Ensk",
    imageUrl:
      "https://eu-wotp.wgcdn.co/static/6.4.4_4daec5/wotp_static/img/tournaments_new/frontend/scss/detail-page/maps/img/06_ensk.jpg",
  },
  {
    name: "Murovanka",
    imageUrl:
      "https://eu-wotp.wgcdn.co/static/6.4.4_4daec5/wotp_static/img/tournaments_new/frontend/scss/detail-page/maps/img/11_murovanka.jpg",
  },
  {
    name: "Prokhorovka",
    imageUrl:
      "https://eu-wotp.wgcdn.co/static/6.4.4_4daec5/wotp_static/img/tournaments_new/frontend/scss/detail-page/maps/img/05_prohorovka.jpg",
  },
  {
    name: "Cliff",
    imageUrl:
      "https://eu-wotp.wgcdn.co/static/6.4.4_4daec5/wotp_static/img/tournaments_new/frontend/scss/detail-page/maps/img/18_cliff.jpg",
  },
  {
    name: "Sand River",
    imageUrl:
      "https://eu-wotp.wgcdn.co/static/6.4.4_4daec5/wotp_static/img/tournaments_new/frontend/scss/detail-page/maps/img/28_desert.jpg",
  },
  {
    name: "Westfield",
    imageUrl:
      "https://eu-wotp.wgcdn.co/static/6.4.4_4daec5/wotp_static/img/tournaments_new/frontend/scss/detail-page/maps/img/23_westfeld.jpg",
  },
  {
    name: "Pilsen",
    imageUrl:
      "https://eu-wotp.wgcdn.co/static/6.4.4_4daec5/wotp_static/img/tournaments_new/frontend/scss/detail-page/maps/img/114_czech.jpg",
  },
  {
    name: "Ghost Town",
    imageUrl:
      "https://eu-wotp.wgcdn.co/static/6.4.4_4daec5/wotp_static/img/tournaments_new/frontend/scss/detail-page/maps/img/95_lost_city_ctf.jpg",
  },
  {
    name: "Oyster Bay",
    imageUrl:
      "https://eu-wotp.wgcdn.co/static/6.4.4_4daec5/wotp_static/img/tournaments_new/frontend/scss/detail-page/maps/img/121_lost_paradise_v.jpg",
  },
  {
    name: "Mines",
    imageUrl:
      "https://eu-wotp.wgcdn.co/static/6.4.4_4daec5/wotp_static/img/tournaments_new/frontend/scss/detail-page/maps/img/10_hills.jpg",
  },
  {
    name: "Lakeville",
    imageUrl:
      "https://eu-wotp.wgcdn.co/static/6.4.4_4daec5/wotp_static/img/tournaments_new/frontend/scss/detail-page/maps/img/07_lakeville.jpg",
  },
  {
    name: "Redshire",
    imageUrl:
      "https://eu-wotp.wgcdn.co/static/6.4.4_4daec5/wotp_static/img/tournaments_new/frontend/scss/detail-page/maps/img/34_redshire.jpg",
  },
  {
    name: "Studzianki",
    imageUrl:
      "https://eu-wotp.wgcdn.co/static/6.4.4_4daec5/wotp_static/img/tournaments_new/frontend/scss/detail-page/maps/img/99_poland.jpg",
  },
];

// Define map pools for different battle formats
// IMPORTANT: You'll need to customize these map lists!
const MAP_POOLS = {
  "3v3": [
    // 3v3 Tier X
    ALL_AVAILABLE_MAPS.find((map) => map.name === "Himmelsdorf"),
    ALL_AVAILABLE_MAPS.find((map) => map.name === "Prokhorovka"),
    ALL_AVAILABLE_MAPS.find((map) => map.name === "Lakeville"),
    ALL_AVAILABLE_MAPS.find((map) => map.name === "Ensk"),
    ALL_AVAILABLE_MAPS.find((map) => map.name === "Mines"),
    ALL_AVAILABLE_MAPS.find((map) => map.name === "Cliff"),
    ALL_AVAILABLE_MAPS.find((map) => map.name === "Redshire"),
  ].filter((map) => map !== undefined),

  "3v3_onslaught": [
    // 3v3 Tier X Onslaught
    ALL_AVAILABLE_MAPS.find((map) => map.name === "Himmelsdorf"),
    ALL_AVAILABLE_MAPS.find((map) => map.name === "Ensk"),
    ALL_AVAILABLE_MAPS.find((map) => map.name === "Murovanka"),
    ALL_AVAILABLE_MAPS.find((map) => map.name === "Mines"),
    ALL_AVAILABLE_MAPS.find((map) => map.name === "Cliff"),
    ALL_AVAILABLE_MAPS.find((map) => map.name === "Sand River"),
    ALL_AVAILABLE_MAPS.find((map) => map.name === "Westfield"),
    ALL_AVAILABLE_MAPS.find((map) => map.name === "Pilsen"),
  ].filter((map) => map !== undefined),

  "5v5_onslaught": [
    // 5v5 Tier X Onslaught - Back to 9 maps
    ALL_AVAILABLE_MAPS.find((map) => map.name === "Himmelsdorf"),
    ALL_AVAILABLE_MAPS.find((map) => map.name === "Ensk"),
    ALL_AVAILABLE_MAPS.find((map) => map.name === "Murovanka"),
    ALL_AVAILABLE_MAPS.find((map) => map.name === "Cliff"),
    ALL_AVAILABLE_MAPS.find((map) => map.name === "Sand River"),
    ALL_AVAILABLE_MAPS.find((map) => map.name === "Westfield"),
    ALL_AVAILABLE_MAPS.find((map) => map.name === "Pilsen"),
    ALL_AVAILABLE_MAPS.find((map) => map.name === "Ghost Town"),
    ALL_AVAILABLE_MAPS.find((map) => map.name === "Oyster Bay"),
  ].filter((map) => map !== undefined),

  "7v7_onslaught": [
    // 7v7 Tier X Onslaught - Back to 9 maps
    ALL_AVAILABLE_MAPS.find((map) => map.name === "Himmelsdorf"),
    ALL_AVAILABLE_MAPS.find((map) => map.name === "Ensk"),
    ALL_AVAILABLE_MAPS.find((map) => map.name === "Murovanka"),
    ALL_AVAILABLE_MAPS.find((map) => map.name === "Cliff"),
    ALL_AVAILABLE_MAPS.find((map) => map.name === "Sand River"),
    ALL_AVAILABLE_MAPS.find((map) => map.name === "Westfield"),
    ALL_AVAILABLE_MAPS.find((map) => map.name === "Pilsen"),
    ALL_AVAILABLE_MAPS.find((map) => map.name === "Studzianki"),
    ALL_AVAILABLE_MAPS.find((map) => map.name === "Ghost Town"),
  ].filter((map) => map !== undefined),
};

let currentMapPool = MAP_POOLS["3v3"];

// Define standardized pick/ban sequences based on correct BoX logic
// BoX = first to win Math.ceil(X/2) matches
// So we need exactly Math.ceil(X/2) picks, with bans interspersed
function generateCorrectSequence(boXValue) {
  const mapsToPlay = Math.ceil(boXValue / 2); // Bo3->2, Bo5->3, Bo7->4, Bo9->5
  const sequence = [];

  for (let i = 0; i < mapsToPlay; i++) {
    // Alternate teams for picks: Team 1 picks 1st, 3rd, 5th... Team 2 picks 2nd, 4th...
    sequence.push({ team: (i % 2) + 1, action: "PICK" });

    // Add a ban after each pick, except the last pick
    if (i < mapsToPlay - 1) {
      // Alternate teams for bans: opposite team bans after each pick
      sequence.push({ team: ((i + 1) % 2) + 1, action: "BAN" });
    }
  }

  return sequence;
}

// Updated sequences with correct BoX logic
const FINAL_SEQUENCES = {
  // Removed BO1 as requested

  bo3: [
    { team: 1, action: "PICK" }, // Team A picks a map
    { team: 2, action: "PICK" }, // Team B picks the tiebreaker
  ], // 2 actions, 2 maps played. Needs 2 + 1 = 3+ maps in pool.

  bo5: [
    { team: 1, action: "PICK" }, // Team A picks a map
    { team: 2, action: "PICK" }, // Team B picks a map
    { team: 1, action: "BAN" }, // Team A bans a map
    { team: 2, action: "BAN" }, // Team B bans a map
    { team: 1, action: "PICK" }, // Team A picks the tiebreaker
  ], // 5 actions, 3 maps played. Needs 5 + 1 = 6+ maps in pool.

  bo7: [
    { team: 1, action: "PICK" }, // Team A picks a map
    { team: 2, action: "PICK" }, // Team B picks a map
    { team: 1, action: "BAN" }, // Team A bans a map
    { team: 2, action: "BAN" }, // Team B bans a map
    { team: 1, action: "PICK" }, // Team A picks a map
    { team: 2, action: "PICK" }, // Team B picks a map
    { team: 1, action: "PICK" }, // Team A picks the tiebreaker
  ], // 7 actions, 4 maps played. Needs 7 + 1 = 8+ maps in pool.

  bo9: [
    { team: 1, action: "PICK" }, // Team A picks a map
    { team: 2, action: "PICK" }, // Team B picks a map
    { team: 1, action: "BAN" }, // Team A bans a map
    { team: 2, action: "BAN" }, // Team B bans a map
    { team: 1, action: "PICK" }, // Team A picks a map
    { team: 2, action: "PICK" }, // Team B picks a map
    { team: 1, action: "BAN" }, // Team A bans a map
    { team: 2, action: "PICK" }, // Team B picks the tiebreaker
  ], // 8 actions, 5 maps played. Needs 8 maps in pool (perfect fit for BO9 rule).
};

// ============================================================================
//  DOM ELEMENT REFERENCES & STATE
// ============================================================================
const mapGrid = document.getElementById("map-grid");
const instructions = document.getElementById("instructions");
const team1PicksList = document.getElementById("team1-picks");
const team1BansList = document.getElementById("team1-bans");
const team2PicksList = document.getElementById("team2-picks");
const team2BansList = document.getElementById("team2-bans");
const resetButton = document.getElementById("reset-button");
const team1NameInput = document.getElementById("team1-name");
const team2NameInput = document.getElementById("team2-name");
const team1ColorPicker = document.getElementById("team1-color-picker");
const team2ColorPicker = document.getElementById("team2-color-picker");
const gameFormatSelector = document.getElementById("game-format-selector");
const battleFormatSelector = document.getElementById("battle-format-selector");

let currentStep = 0;
let picks = { 1: [], 2: [] };
let bans = { 1: [], 2: [] };

let PICK_BAN_SEQUENCE =
  FINAL_SEQUENCES[gameFormatSelector.value] || FINAL_SEQUENCES["bo3"];

// Tooltip state
let tooltip = null;
// let isPeriodicTooltipCurrentlyVisible = false; // Replaced
// let periodicTooltipConfigs = []; // Removed

// const MAX_PERIODIC_DISPLAYS = 3; // Removed
// const PERIODIC_INTERVAL = 15 * 1000; // Removed
const TOOLTIP_DISPLAY_DURATION = 5000; // 5 seconds, kept for initial sequence
const INITIAL_TOOLTIP_DELAY_FIRST = 3000; // 3 seconds for the first tooltip
const DELAY_BETWEEN_INITIAL_TOOLTIPS = 3000; // 3 seconds wait between tooltips

// Timeout IDs for the initial sequence
let initialTooltipTimeoutId1 = null;
let initialTooltipTimeoutId2 = null;
let initialTooltipHideTimeoutId1 = null;
let initialTooltipHideTimeoutId2 = null;
let isSequencedTooltipVisible = false; // To manage one sequenced tooltip at a time
let isInitialPageLoad = true; // Flag to ensure initial tooltips run only once

// ============================================================================
//  HELPER FUNCTIONS
// ============================================================================

/**
 * Converts a HEX color string to an RGBA string.
 * @param {string} hex - The hex color code (e.g., "#007bff").
 * @param {number} alpha - The alpha transparency (0 to 1).
 * @returns {string} The RGBA color string.
 */
function hexToRgba(hex, alpha = 0.5) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * Updates the CSS custom properties for a team's color.
 * @param {number} team - The team number (1 or 2).
 * @param {string} color - The new hex color.
 */
function updateTeamColor(team, color) {
  const root = document.documentElement;
  root.style.setProperty(`--team${team}-color`, color);
  root.style.setProperty(`--team${team}-color-overlay`, hexToRgba(color, 0.3)); // More transparent

  // Add RGB values for enhanced styling
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  root.style.setProperty(`--team${team}-color-rgb`, `${r}, ${g}, ${b}`);
}

function getTeamName(teamNumber) {
  return teamNumber === 1
    ? team1NameInput.textContent
    : team2NameInput.textContent;
}

function updateGameFormatOptions() {
  const numAvailableMaps = currentMapPool.length;
  let firstVisibleOptionValue = null;
  let currentSelectionStillVisible = false;

  if (!gameFormatSelector || !gameFormatSelector.options) {
    console.error("gameFormatSelector not found or has no options.");
    return;
  }

  for (let i = 0; i < gameFormatSelector.options.length; i++) {
    const option = gameFormatSelector.options[i];
    const formatValue = option.value;
    const sequenceForFormat = FINAL_SEQUENCES[formatValue];

    if (sequenceForFormat) {
      const mapsNeeded = sequenceForFormat.length;

      // For BO9 with 9 maps: 9 actions, 0 remaining maps (perfect fit)
      // For others: sequence length + at least 1 remaining map
      let minimumMapsRequired;
      if (formatValue === "bo9") {
        minimumMapsRequired = mapsNeeded; // Exactly 9 maps needed for BO9
      } else {
        minimumMapsRequired = mapsNeeded + 1; // At least 1 remaining map for others
      }

      if (numAvailableMaps >= minimumMapsRequired) {
        option.style.display = "";
        if (!firstVisibleOptionValue) {
          firstVisibleOptionValue = formatValue;
        }
        if (gameFormatSelector.value === formatValue) {
          currentSelectionStillVisible = true;
        }
      } else {
        option.style.display = "none";
      }
    } else {
      option.style.display = "none";
    }
  }

  if (!currentSelectionStillVisible) {
    if (firstVisibleOptionValue) {
      gameFormatSelector.value = firstVisibleOptionValue;
    } else {
      // Try to find the smallest available format
      const formats = ["bo3", "bo5", "bo7", "bo9"];
      let fallbackFormat = null;

      for (const format of formats) {
        if (FINAL_SEQUENCES[format]) {
          const mapsNeeded = FINAL_SEQUENCES[format].length;
          const minimumRequired =
            format === "bo9" ? mapsNeeded : mapsNeeded + 1;

          if (numAvailableMaps >= minimumRequired) {
            fallbackFormat = format;
            break;
          }
        }
      }

      if (fallbackFormat) {
        gameFormatSelector.value = fallbackFormat;
      } else {
        console.warn("No suitable game format for the current map pool size.");
        gameFormatSelector.value = "";
      }
    }
  }

  PICK_BAN_SEQUENCE = FINAL_SEQUENCES[gameFormatSelector.value] || [];
  if (PICK_BAN_SEQUENCE.length === 0 && firstVisibleOptionValue) {
    PICK_BAN_SEQUENCE = FINAL_SEQUENCES[firstVisibleOptionValue] || [];
  }
}

/**
 * Updates the initial grid layout of map tiles based on the total number of maps in the pool.
 * Aims to make the last row items span appropriately if not a full row of 3.
 * Uses an internal 6-column grid for flexibility.
 */
function updateInitialMapGridLayout() {
  if (!mapGrid) return;

  const tiles = Array.from(mapGrid.children).filter((tile) =>
    tile.classList.contains("map-tile")
  );
  const numTiles = tiles.length;

  if (numTiles === 0) {
    mapGrid.style.gridTemplateColumns = "repeat(3, 1fr)";
    return;
  }

  // Check if we're on mobile (using same media query logic)
  const isMobile =
    window.innerWidth <= 768 && window.matchMedia("(pointer: coarse)").matches;

  if (isMobile) {
    // Mobile: 2-column layout - CSS already handles this
    tiles.forEach((tile) => {
      tile.style.gridColumn = "auto";
      tile.classList.remove("single-full-width-map");
    });

    // Last item spans both columns if odd number
    if (numTiles % 2 === 1) {
      tiles[numTiles - 1].style.gridColumn = "1 / -1";
      tiles[numTiles - 1].classList.add("single-full-width-map");
    }
  } else {
    // Desktop: keep your existing 3-column logic exactly as is
    mapGrid.style.gridTemplateColumns = "repeat(6, 1fr)";

    const visualCols = 3;
    const normalItemSpan = 6 / visualCols;
    let itemsInLastVisualRow = numTiles % visualCols;
    if (itemsInLastVisualRow === 0 && numTiles > 0) {
      itemsInLastVisualRow = visualCols;
    }

    tiles.forEach((tile, index) => {
      tile.classList.remove("single-full-width-map");
      const isTileInLastVisualRow = index >= numTiles - itemsInLastVisualRow;

      if (isTileInLastVisualRow) {
        if (itemsInLastVisualRow === 1) {
          tile.style.gridColumn = `auto / span 6`;
          tile.classList.add("single-full-width-map");
        } else if (itemsInLastVisualRow === 2) {
          tile.style.gridColumn = `auto / span 3`;
        } else {
          tile.style.gridColumn = `auto / span ${normalItemSpan}`;
        }
      } else {
        tile.style.gridColumn = `auto / span ${normalItemSpan}`;
      }
    });
  }
}

// Add resize listener to handle orientation changes
window.addEventListener("resize", updateInitialMapGridLayout);

// ============================================================================
//  TOOLTIP FUNCTIONS
// ============================================================================

function clearInitialTooltipSequenceTimeouts() {
  if (initialTooltipTimeoutId1) clearTimeout(initialTooltipTimeoutId1);
  if (initialTooltipTimeoutId2) clearTimeout(initialTooltipTimeoutId2);
  if (initialTooltipHideTimeoutId1) clearTimeout(initialTooltipHideTimeoutId1);
  if (initialTooltipHideTimeoutId2) clearTimeout(initialTooltipHideTimeoutId2);
  initialTooltipTimeoutId1 = null;
  initialTooltipTimeoutId2 = null;
  initialTooltipHideTimeoutId1 = null;
  initialTooltipHideTimeoutId2 = null;

  // If a sequenced tooltip is visible when clearing, hide it.
  if (
    tooltip &&
    tooltip.classList.contains("show") &&
    tooltip.dataset.source === "initial-sequence"
  ) {
    hideTooltip(); // This will also set isSequencedTooltipVisible = false
  }
  isSequencedTooltipVisible = false; // Ensure it's reset
}

function createTooltip() {
  if (!tooltip) {
    tooltip = document.createElement("div");
    tooltip.className = "custom-tooltip";
    document.body.appendChild(tooltip);
  }
  return tooltip;
}

function showTooltip(element, text, source = "interactive") {
  // source can be 'interactive' or 'initial-sequence'
  const tooltipEl = createTooltip();

  if (source === "initial-sequence") {
    // If another sequenced tooltip is already visible, don't show this one.
    if (
      isSequencedTooltipVisible &&
      (!tooltipEl.classList.contains("show") ||
        tooltipEl.dataset.targetId !== element.id)
    ) {
      return false;
    }
    // If an interactive tooltip is showing, the sequenced one should not appear.
    if (
      tooltipEl.classList.contains("show") &&
      tooltipEl.dataset.source === "interactive"
    ) {
      return false;
    }
  }
  // Interactive tooltips can always attempt to show. They might replace a sequenced one if timing is exact,
  // or be hidden by a sequenced one if the sequenced one is scheduled later.

  tooltipEl.textContent = text;

  if (!element.id) {
    element.id = `tooltip-target-${Math.random()
      .toString(36)
      .substring(2, 11)}`;
  }
  tooltipEl.dataset.targetId = element.id;
  tooltipEl.dataset.source = source;

  const rect = element.getBoundingClientRect();
  const tooltipRect = tooltipEl.getBoundingClientRect();
  const top = rect.top - tooltipRect.height - 15;
  let left = rect.left + rect.width / 2 - tooltipRect.width / 2;
  const finalLeft = Math.max(
    10,
    Math.min(left, window.innerWidth - tooltipRect.width - 10)
  );
  const finalTop = Math.max(10, top);

  tooltipEl.style.top = `${finalTop}px`;
  tooltipEl.style.left = `${finalLeft}px`;
  tooltipEl.classList.add("show");

  if (source === "initial-sequence") {
    isSequencedTooltipVisible = true;
  }
  return true; // Tooltip was shown (or attempted to be shown)
}

function hideTooltip() {
  if (tooltip && tooltip.classList.contains("show")) {
    // Check if the tooltip being hidden is a sequenced one
    if (tooltip.dataset.source === "initial-sequence") {
      isSequencedTooltipVisible = false;
    }
    tooltip.classList.remove("show");
    delete tooltip.dataset.source;
    delete tooltip.dataset.targetId;
  }
}

function startInitialTooltipSequence() {
  clearInitialTooltipSequenceTimeouts(); // Clear any previous sequence timeouts

  const colorPickerElement = team1ColorPicker;
  const colorPickerText = "Want to change your team's color? Click here!";

  const teamNameElement = team2NameInput;
  const teamNameText = "Psst! You can customize your team's name here!";

  if (!colorPickerElement || !teamNameElement) {
    // console.warn("Initial tooltip target elements not found. Skipping sequence.");
    return;
  }

  // First tooltip (color picker)
  initialTooltipTimeoutId1 = setTimeout(() => {
    if (
      document.activeElement === colorPickerElement ||
      (tooltip &&
        tooltip.classList.contains("show") &&
        tooltip.dataset.source === "interactive")
    ) {
      return; // Don't show if element is focused or an interactive tooltip is already up
    }
    const wasShown1 = showTooltip(
      colorPickerElement,
      colorPickerText,
      "initial-sequence"
    );

    if (wasShown1) {
      initialTooltipHideTimeoutId1 = setTimeout(() => {
        // Only hide if it's still this specific sequenced tooltip
        if (
          tooltip &&
          tooltip.classList.contains("show") &&
          tooltip.dataset.targetId === colorPickerElement.id &&
          tooltip.dataset.source === "initial-sequence"
        ) {
          hideTooltip();
        }

        // Second tooltip (team name) after a delay
        initialTooltipTimeoutId2 = setTimeout(() => {
          if (
            document.activeElement === teamNameElement ||
            (tooltip &&
              tooltip.classList.contains("show") &&
              tooltip.dataset.source === "interactive")
          ) {
            return; // Don't show if element is focused or an interactive tooltip is already up
          }
          const wasShown2 = showTooltip(
            teamNameElement,
            teamNameText,
            "initial-sequence"
          );

          if (wasShown2) {
            initialTooltipHideTimeoutId2 = setTimeout(() => {
              if (
                tooltip &&
                tooltip.classList.contains("show") &&
                tooltip.dataset.targetId === teamNameElement.id &&
                tooltip.dataset.source === "initial-sequence"
              ) {
                hideTooltip();
              }
            }, TOOLTIP_DISPLAY_DURATION);
          }
        }, DELAY_BETWEEN_INITIAL_TOOLTIPS);
      }, TOOLTIP_DISPLAY_DURATION);
    }
  }, INITIAL_TOOLTIP_DELAY_FIRST);
}

// ============================================================================
//  CORE FUNCTIONS
// ============================================================================
function initialize() {
  clearInitialTooltipSequenceTimeouts(); // Clear any running initial tooltips

  currentStep = 0;
  picks = { 1: [], 2: [] };
  bans = { 1: [], 2: [] };
  updateGameFormatOptions();
  createMapTiles();
  updateInitialMapGridLayout(); // Call the new layout function for initial setup
  updateInstructions();
  updateResultsPanel();
  resetButton.classList.add("hidden");

  if (isInitialPageLoad) {
    startInitialTooltipSequence(); // Start the new initial tooltip sequence
    isInitialPageLoad = false; // Ensure this only runs on the very first load
  }
}

function createMapTiles() {
  mapGrid.innerHTML = ""; // Clear existing tiles
  currentMapPool.forEach((map) => {
    // Use currentMapPool
    const tile = document.createElement("div");
    tile.classList.add("map-tile");
    tile.style.backgroundImage = `url('${map.imageUrl}')`;
    tile.dataset.mapName = map.name;

    const mapNameDisplay = document.createElement("div");
    mapNameDisplay.classList.add("map-name");
    mapNameDisplay.textContent = map.name;
    tile.appendChild(mapNameDisplay);

    const mapOverlay = document.createElement("div");
    mapOverlay.classList.add("map-overlay");
    tile.appendChild(mapOverlay);

    // Add hover effects based on current team's turn
    tile.addEventListener("mouseenter", () => {
      if (
        !tile.classList.contains("disabled") &&
        currentStep < PICK_BAN_SEQUENCE.length
      ) {
        const currentAction = PICK_BAN_SEQUENCE[currentStep];
        tile.classList.add(`team${currentAction.team}-hover`);
      }
    });

    tile.addEventListener("mouseleave", () => {
      tile.classList.remove("team1-hover", "team2-hover");
    });

    tile.addEventListener("click", () => handleMapClick(map));
    mapGrid.appendChild(tile);
  });
}

function handleMapClick(map) {
  if (currentStep >= PICK_BAN_SEQUENCE.length) return;

  const currentAction = PICK_BAN_SEQUENCE[currentStep];
  const mapName = map.name;
  const tile = document.querySelector(`.map-tile[data-map-name="${mapName}"]`);

  if (tile.classList.contains("disabled")) return;

  if (currentAction.action === "PICK") {
    picks[currentAction.team].push(mapName);
    tile.classList.add(`picked-by-team${currentAction.team}`);
    tile.querySelector(".map-overlay").textContent = `PICKED BY ${getTeamName(
      currentAction.team
    )}`;

    // Check if this is the tiebreaker (last pick in the sequence)
    if (isTiebreakerPick()) {
      tile.classList.add("tiebreaker");
      tile.querySelector(
        ".map-overlay"
      ).textContent = `TIEBREAKER - PICKED BY ${getTeamName(
        currentAction.team
      )}`;
    }
  } else {
    // BAN
    bans[currentAction.team].push(mapName);
    tile.classList.add("banned");
    tile.querySelector(".map-overlay").textContent = `BANNED`;
  }

  tile.classList.add("disabled");
  currentStep++;

  if (currentStep === 1) {
    resetButton.classList.remove("hidden");
  }

  // If all sequence steps are completed, auto-ban remaining maps
  if (currentStep >= PICK_BAN_SEQUENCE.length) {
    autobanRemainingMaps();
  }

  updateInstructions();
  updateResultsPanel();
}

/**
 * Checks if the current pick is the tiebreaker (last pick in the sequence)
 */
function isTiebreakerPick() {
  // Count how many picks are left in the sequence after current step
  let remainingPicks = 0;
  for (let i = currentStep; i < PICK_BAN_SEQUENCE.length; i++) {
    if (PICK_BAN_SEQUENCE[i].action === "PICK") {
      remainingPicks++;
    }
  }

  // If this is the last pick (remainingPicks === 1, including the current one we just processed)
  return remainingPicks === 1;
}

function autobanRemainingMaps() {
  const allMapTiles = document.querySelectorAll(".map-tile");

  allMapTiles.forEach((tile) => {
    if (!tile.classList.contains("disabled")) {
      tile.classList.add("banned", "auto-banned", "disabled");
      tile.querySelector(".map-overlay").textContent = "AUTO-BANNED";
    }
  });
}

function updateInstructions() {
  const instructionsElement = document.getElementById("instructions");

  // Remove all state classes
  instructionsElement.classList.remove(
    "team1-turn",
    "team2-turn",
    "completed",
    "active"
  );

  if (currentStep >= PICK_BAN_SEQUENCE.length) {
    // Count remaining maps that were auto-banned
    const autoBannedMaps = document.querySelectorAll(
      ".map-tile.auto-banned"
    ).length;

    let completionMessage = `
            <div class="instruction-content">
                <span>🎉 All maps selected!</span>
            </div>
        `;

    if (autoBannedMaps > 0) {
      completionMessage = `
                <div class="instruction-content">
                    <span>🎉 All maps selected!</span>
                </div>
            `;
    }

    instructionsElement.innerHTML = completionMessage;
    instructionsElement.classList.add("completed");
    instructionsElement.style.color = "#28a745"; // Force green color
    return;
  }

  const currentAction = PICK_BAN_SEQUENCE[currentStep];
  const teamName = getTeamName(currentAction.team);
  const actionClass =
    currentAction.action === "PICK" ? "action-pick" : "action-ban";

  instructionsElement.innerHTML = `
        <div class="instruction-content">
            <span class="team-name">${teamName}</span>
            <span>it's your turn to</span>
            <span class="action-type ${actionClass}">${currentAction.action}</span>
            <span>a map</span>
        </div>
    `;

  // Add team-specific styling
  instructionsElement.classList.add(`team${currentAction.team}-turn`, "active");

  // Set text color to team color
  instructionsElement.style.color =
    currentAction.team === 1
      ? getComputedStyle(document.documentElement).getPropertyValue(
          "--team1-color"
        )
      : getComputedStyle(document.documentElement).getPropertyValue(
          "--team2-color"
        );

  // Trigger the shimmer animation
  setTimeout(() => {
    instructionsElement.classList.remove("active");
    setTimeout(() => instructionsElement.classList.add("active"), 50);
  }, 100);
}

function updateResultsPanel() {
  // Calculate global pick order for each team's picks
  const globalPickOrder = {};
  let pickCounter = 1;

  // Go through the sequence to determine the global order of picks
  for (let i = 0; i < currentStep; i++) {
    const action = PICK_BAN_SEQUENCE[i];
    if (action.action === "PICK") {
      if (!globalPickOrder[action.team]) {
        globalPickOrder[action.team] = [];
      }
      globalPickOrder[action.team].push(pickCounter);
      pickCounter++;
    }
  }

  function populateList(listElement, items, type, team) {
    listElement.innerHTML = "";
    items.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = item;

      // Add global order number for picks only
      if (type === "pick" && globalPickOrder[team]) {
        li.setAttribute("data-order", globalPickOrder[team][index]);
      }

      listElement.appendChild(li);
    });
  }

  populateList(team1PicksList, picks[1], "pick", 1);
  populateList(team1BansList, bans[1], "ban", 1);
  populateList(team2PicksList, picks[2], "pick", 2);
  populateList(team2BansList, bans[2], "ban", 2);
}

// ============================================================================
//  EVENT LISTENERS
// ============================================================================
resetButton.addEventListener("click", initialize);
team1ColorPicker.addEventListener("input", (e) => {
  updateTeamColor(1, e.target.value);
  // Potentially hide tooltip if user interacts with color picker dialog
  hideTooltip();
});
team2ColorPicker.addEventListener("input", (e) => {
  updateTeamColor(2, e.target.value);
  hideTooltip();
});

gameFormatSelector.addEventListener("change", (event) => {
  const selectedFormat = event.target.value;
  if (FINAL_SEQUENCES[selectedFormat]) {
    PICK_BAN_SEQUENCE = FINAL_SEQUENCES[selectedFormat];
    currentStep = 0;
    picks = { 1: [], 2: [] };
    bans = { 1: [], 2: [] };
    createMapTiles();
    updateInitialMapGridLayout(); // Ensure layout is updated after creating tiles
    updateInstructions();
    updateResultsPanel();
    resetButton.classList.add("hidden"); // Hide reset button as it's a fresh setup
  }
});

battleFormatSelector.addEventListener("change", (event) => {
  const selectedBattleFormat = event.target.value;
  if (MAP_POOLS[selectedBattleFormat]) {
    currentMapPool = MAP_POOLS[selectedBattleFormat];
    initialize();
  } else {
    console.warn(
      `Map pool for format "${selectedBattleFormat}" not found. Using default.`
    );
    currentMapPool = MAP_POOLS["3v3"] || Object.values(MAP_POOLS)[0]; // Fallback
    initialize();
  }
});

// Interactive Tooltip Listeners
function addInteractiveTooltipListeners(element, text) {
  if (!element) return;
  // Ensure element has an ID, though for primary elements, they are set in HTML
  if (!element.id) {
    element.id = `tooltip-interactive-target-${Math.random()
      .toString(36)
      .substring(2, 11)}`;
  }

  element.addEventListener("mouseenter", (e) => {
    showTooltip(e.target, text, true); // isInteractive = true
  });

  element.addEventListener("mouseleave", (e) => {
    if (
      tooltip &&
      tooltip.classList.contains("show") &&
      tooltip.dataset.source === "interactive" &&
      tooltip.dataset.targetId === e.target.id
    ) {
      hideTooltip();
    }
  });

  element.addEventListener("focus", (e) => {
    hideTooltip(); // Hide any tooltip when input is focused
  });

  // For color pickers, 'click' might be more relevant than 'focus' for hiding
  if (element.type === "color") {
    element.addEventListener("click", () => {
      hideTooltip(); // Hide tooltip when color picker dialog is opened
    });
  }

  element.addEventListener("blur", () => {
    // Good for consistency
    if (
      tooltip &&
      tooltip.classList.contains("show") &&
      tooltip.dataset.source === "interactive" &&
      tooltip.dataset.targetId === element.id
    ) {
      hideTooltip();
    }
  });
}

// Apply interactive listeners
// For Team Name Inputs (modifying existing setup slightly)
[team1NameInput, team2NameInput].forEach((input) => {
  if (!input) return;
  if (!input.id) input.id = `team-name-${input === team1NameInput ? "1" : "2"}`;

  input.addEventListener("mouseenter", (e) => {
    showTooltip(e.target, "Click to edit team name", true); // Normal text
  });
  input.addEventListener("mouseleave", (e) => {
    if (
      tooltip &&
      tooltip.classList.contains("show") &&
      tooltip.dataset.source === "interactive" &&
      tooltip.dataset.targetId === e.target.id
    ) {
      hideTooltip();
    }
  });
  input.addEventListener("focus", (e) => {
    hideTooltip(); // Hide any tooltip when input is focused
  });
  input.addEventListener("blur", () => {
    updateInstructions();
    updateResultsPanel();
    // Hide interactive tooltip for this element on blur
    if (
      tooltip &&
      tooltip.classList.contains("show") &&
      tooltip.dataset.source === "interactive" &&
      tooltip.dataset.targetId === input.id
    ) {
      hideTooltip();
    }
  });
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      input.blur();
    }
  });
});

// For Color Pickers
addInteractiveTooltipListeners(team1ColorPicker, "Click to edit the color"); // Normal text
addInteractiveTooltipListeners(team2ColorPicker, "Click to edit the color"); // Normal text

// Set default team names
document.addEventListener("DOMContentLoaded", function () {
  // Set default team names (remove data-tooltip attributes since we're using JS tooltips)
  if (team1NameInput) {
    team1NameInput.textContent = "Team Blue";
  }
  if (team2NameInput) {
    team2NameInput.textContent = "Team Red";
  }

  // Set default team colors
  if (team1ColorPicker) {
    team1ColorPicker.value = "#007bff"; // Blue
  }
  if (team2ColorPicker) {
    team2ColorPicker.value = "#dc3545"; // Red
  }

  initialize(); // This will also call setupPeriodicTooltips
  updateTeamColor(1, "#007bff");
  updateTeamColor(2, "#dc3545");
});

// Alternative initialization if DOMContentLoaded already fired
// This block can be simplified if initialize() is robustly called once
if (document.readyState === "loading") {
  // Already handled by the above DOMContentLoaded
} else {
  // DOM already loaded - ensure initialize is called if not already
  // This might lead to multiple initializations if not careful.
  // The single DOMContentLoaded listener calling initialize is usually sufficient.
  // For safety, check if already initialized if you keep this block.
  // For now, assuming the primary DOMContentLoaded handles it.
  // if (!document.body.dataset.initialized) { // Example guard
  //    if (team1NameInput) team1NameInput.textContent = "Team Blue";
  //    // ... (rest of defaults)
  //    initialize();
  //    updateTeamColor(1, "#007bff");
  //    updateTeamColor(2, "#dc3545");
  //    document.body.dataset.initialized = "true";
  // }
}
