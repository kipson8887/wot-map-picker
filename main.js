// ============================================================================
//  CONFIGURATION
// ============================================================================

// Master list of all available maps (or a representative subset)
const ALL_AVAILABLE_MAPS = [
    { name: 'Himmelsdorf', imageUrl: 'https://eu-wotp.wgcdn.co/static/6.4.4_4daec5/wotp_static/img/tournaments_new/frontend/scss/detail-page/maps/img/04_himmelsdorf.jpg' },
    { name: 'Ensk', imageUrl: 'https://eu-wotp.wgcdn.co/static/6.4.4_4daec5/wotp_static/img/tournaments_new/frontend/scss/detail-page/maps/img/06_ensk.jpg' },
    { name: 'Murovanka', imageUrl: 'https://eu-wotp.wgcdn.co/static/6.4.4_4daec5/wotp_static/img/tournaments_new/frontend/scss/detail-page/maps/img/11_murovanka.jpg' },
    { name: 'Prokhorovka', imageUrl: 'https://eu-wotp.wgcdn.co/static/6.4.4_4daec5/wotp_static/img/tournaments_new/frontend/scss/detail-page/maps/img/05_prohorovka.jpg' },
    { name: 'Cliff', imageUrl: 'https://eu-wotp.wgcdn.co/static/6.4.4_4daec5/wotp_static/img/tournaments_new/frontend/scss/detail-page/maps/img/18_cliff.jpg' },
    { name: 'Sand River', imageUrl: 'https://eu-wotp.wgcdn.co/static/6.4.4_4daec5/wotp_static/img/tournaments_new/frontend/scss/detail-page/maps/img/28_desert.jpg' },
    { name: 'Westfield', imageUrl: 'https://eu-wotp.wgcdn.co/static/6.4.4_4daec5/wotp_static/img/tournaments_new/frontend/scss/detail-page/maps/img/23_westfeld.jpg' },
    { name: 'Pilsen', imageUrl: 'https://eu-wotp.wgcdn.co/static/6.4.4_4daec5/wotp_static/img/tournaments_new/frontend/scss/detail-page/maps/img/114_czech.jpg' },
    { name: 'Ghost Town', imageUrl: 'https://eu-wotp.wgcdn.co/static/6.4.4_4daec5/wotp_static/img/tournaments_new/frontend/scss/detail-page/maps/img/95_lost_city_ctf.jpg' },
    { name: 'Oyster Bay', imageUrl: 'https://eu-wotp.wgcdn.co/static/6.4.4_4daec5/wotp_static/img/tournaments_new/frontend/scss/detail-page/maps/img/121_lost_paradise_v.jpg' },
    { name: 'Mines', imageUrl: 'https://eu-wotp.wgcdn.co/static/6.4.4_4daec5/wotp_static/img/tournaments_new/frontend/scss/detail-page/maps/img/10_hills.jpg' },
    { name: 'Lakeville', imageUrl: 'https://eu-wotp.wgcdn.co/static/6.4.4_4daec5/wotp_static/img/tournaments_new/frontend/scss/detail-page/maps/img/07_lakeville.jpg' },
    { name: 'Redshire', imageUrl: 'https://eu-wotp.wgcdn.co/static/6.4.4_4daec5/wotp_static/img/tournaments_new/frontend/scss/detail-page/maps/img/34_redshire.jpg' },
    { name: 'Studzianki', imageUrl: 'https://eu-wotp.wgcdn.co/static/6.4.4_4daec5/wotp_static/img/tournaments_new/frontend/scss/detail-page/maps/img/99_poland.jpg' },
];

// Define map pools for different battle formats
// IMPORTANT: You'll need to customize these map lists!
const MAP_POOLS = {
    '3v3': [ // 3v3 Tier X
        ALL_AVAILABLE_MAPS.find(map => map.name === 'Himmelsdorf'),
        ALL_AVAILABLE_MAPS.find(map => map.name === 'Prokhorovka'),
        ALL_AVAILABLE_MAPS.find(map => map.name === 'Lakeville'),
        ALL_AVAILABLE_MAPS.find(map => map.name === 'Ensk'),
        ALL_AVAILABLE_MAPS.find(map => map.name === 'Mines'),
        ALL_AVAILABLE_MAPS.find(map => map.name === 'Cliff'),
        ALL_AVAILABLE_MAPS.find(map => map.name === 'Redshire'),
    ].filter(map => map !== undefined),

    '3v3_onslaught': [ // 3v3 Tier X Onslaught
        ALL_AVAILABLE_MAPS.find(map => map.name === 'Himmelsdorf'),
        ALL_AVAILABLE_MAPS.find(map => map.name === 'Ensk'),
        ALL_AVAILABLE_MAPS.find(map => map.name === 'Murovanka'),
        ALL_AVAILABLE_MAPS.find(map => map.name === 'Mines'),
        ALL_AVAILABLE_MAPS.find(map => map.name === 'Cliff'),
        ALL_AVAILABLE_MAPS.find(map => map.name === 'Sand River'),
        ALL_AVAILABLE_MAPS.find(map => map.name === 'Westfield'),
        ALL_AVAILABLE_MAPS.find(map => map.name === 'Pilsen'),
    ].filter(map => map !== undefined),

    '5v5_onslaught': [ // 5v5 Tier X Onslaught - Back to 9 maps
        ALL_AVAILABLE_MAPS.find(map => map.name === 'Himmelsdorf'),
        ALL_AVAILABLE_MAPS.find(map => map.name === 'Ensk'),
        ALL_AVAILABLE_MAPS.find(map => map.name === 'Murovanka'),
        ALL_AVAILABLE_MAPS.find(map => map.name === 'Cliff'),
        ALL_AVAILABLE_MAPS.find(map => map.name === 'Sand River'),
        ALL_AVAILABLE_MAPS.find(map => map.name === 'Westfield'),
        ALL_AVAILABLE_MAPS.find(map => map.name === 'Pilsen'),
        ALL_AVAILABLE_MAPS.find(map => map.name === 'Ghost Town'),
        ALL_AVAILABLE_MAPS.find(map => map.name === 'Oyster Bay'),
    ].filter(map => map !== undefined),

    '7v7_onslaught': [ // 7v7 Tier X Onslaught - Back to 9 maps
        ALL_AVAILABLE_MAPS.find(map => map.name === 'Himmelsdorf'),
        ALL_AVAILABLE_MAPS.find(map => map.name === 'Ensk'),
        ALL_AVAILABLE_MAPS.find(map => map.name === 'Murovanka'),
        ALL_AVAILABLE_MAPS.find(map => map.name === 'Cliff'),
        ALL_AVAILABLE_MAPS.find(map => map.name === 'Sand River'),
        ALL_AVAILABLE_MAPS.find(map => map.name === 'Westfield'),
        ALL_AVAILABLE_MAPS.find(map => map.name === 'Pilsen'),
        ALL_AVAILABLE_MAPS.find(map => map.name === 'Studzianki'),
        ALL_AVAILABLE_MAPS.find(map => map.name === 'Ghost Town'),
    ].filter(map => map !== undefined),
};

let currentMapPool = MAP_POOLS['3v3'];

// Define standardized pick/ban sequences based on correct BoX logic
// BoX = first to win Math.ceil(X/2) matches
// So we need exactly Math.ceil(X/2) picks, with bans interspersed
function generateCorrectSequence(boXValue) {
    const mapsToPlay = Math.ceil(boXValue / 2); // Bo3->2, Bo5->3, Bo7->4, Bo9->5
    const sequence = [];
    
    for (let i = 0; i < mapsToPlay; i++) {
        // Alternate teams for picks: Team 1 picks 1st, 3rd, 5th... Team 2 picks 2nd, 4th...
        sequence.push({ team: (i % 2) + 1, action: 'PICK' });
        
        // Add a ban after each pick, except the last pick
        if (i < mapsToPlay - 1) {
            // Alternate teams for bans: opposite team bans after each pick
            sequence.push({ team: ((i + 1) % 2) + 1, action: 'BAN' });
        }
    }
    
    return sequence;
}

// Updated sequences with correct BoX logic
const FINAL_SEQUENCES = {
    // Removed BO1 as requested
    
    'bo3': generateCorrectSequence(3), // First to 2: PICK(T1) -> BAN(T2) -> PICK(T2)
    // Result: [P1, B2, P2] = 3 actions, needs 4+ maps
    
    'bo5': generateCorrectSequence(5), // First to 3: PICK(T1) -> BAN(T2) -> PICK(T2) -> BAN(T1) -> PICK(T1)
    // Result: [P1, B2, P2, B1, P1] = 5 actions, needs 6+ maps
    
    'bo7': generateCorrectSequence(7), // First to 4: PICK(T1) -> BAN(T2) -> PICK(T2) -> BAN(T1) -> PICK(T1) -> BAN(T2) -> PICK(T2)
    // Result: [P1, B2, P2, B1, P1, B2, P2] = 7 actions, needs 8+ maps
    
    'bo9': generateCorrectSequence(9)  // First to 5: PICK(T1) -> BAN(T2) -> PICK(T2) -> BAN(T1) -> PICK(T1) -> BAN(T2) -> PICK(T2) -> BAN(T1) -> PICK(T1)
    // Result: [P1, B2, P2, B1, P1, B2, P2, B1, P1] = 9 actions, needs 10+ maps
};


// ============================================================================
//  DOM ELEMENT REFERENCES & STATE
// ============================================================================
const mapGrid = document.getElementById('map-grid');
const instructions = document.getElementById('instructions');
const team1PicksList = document.getElementById('team1-picks');
const team1BansList = document.getElementById('team1-bans');
const team2PicksList = document.getElementById('team2-picks');
const team2BansList = document.getElementById('team2-bans');
const resetButton = document.getElementById('reset-button');
const team1NameInput = document.getElementById('team1-name');
const team2NameInput = document.getElementById('team2-name');
const team1ColorPicker = document.getElementById('team1-color-picker');
const team2ColorPicker = document.getElementById('team2-color-picker');
const gameFormatSelector = document.getElementById('game-format-selector');
const battleFormatSelector = document.getElementById('battle-format-selector');

let currentStep = 0;
let picks = { 1: [], 2: [] };
let bans = { 1: [], 2: [] };

let PICK_BAN_SEQUENCE = FINAL_SEQUENCES[gameFormatSelector.value] || FINAL_SEQUENCES['bo3'];


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
    return teamNumber === 1 ? team1NameInput.textContent : team2NameInput.textContent;
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
            if (formatValue === 'bo9') {
                minimumMapsRequired = mapsNeeded; // Exactly 9 maps needed for BO9
            } else {
                minimumMapsRequired = mapsNeeded + 1; // At least 1 remaining map for others
            }
            
            if (numAvailableMaps >= minimumMapsRequired) {
                option.style.display = '';
                if (!firstVisibleOptionValue) {
                    firstVisibleOptionValue = formatValue;
                }
                if (gameFormatSelector.value === formatValue) {
                    currentSelectionStillVisible = true;
                }
            } else {
                option.style.display = 'none';
            }
        } else {
            option.style.display = 'none'; 
        }
    }

    if (!currentSelectionStillVisible) {
        if (firstVisibleOptionValue) {
            gameFormatSelector.value = firstVisibleOptionValue;
        } else {
            // Try to find the smallest available format
            const formats = ['bo3', 'bo5', 'bo7', 'bo9'];
            let fallbackFormat = null;
            
            for (const format of formats) {
                if (FINAL_SEQUENCES[format]) {
                    const mapsNeeded = FINAL_SEQUENCES[format].length;
                    const minimumRequired = format === 'bo9' ? mapsNeeded : mapsNeeded + 1;
                    
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
                gameFormatSelector.value = '';
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

    const tiles = Array.from(mapGrid.children).filter(tile => tile.classList.contains('map-tile'));
    const numTiles = tiles.length;

    if (numTiles === 0) {
        mapGrid.style.gridTemplateColumns = 'repeat(3, 1fr)'; // Default if no tiles
        return;
    }

    // Base the layout on a 6-column internal grid for flexibility
    mapGrid.style.gridTemplateColumns = 'repeat(6, 1fr)';

    const visualCols = 3; // We want to display as if it's 3 columns normally
    const normalItemSpan = 6 / visualCols; // Each item spans 2 of the 6 internal columns

    // Determine how many items are in the last visual row
    let itemsInLastVisualRow = numTiles % visualCols;
    if (itemsInLastVisualRow === 0 && numTiles > 0) { // If it's a multiple of visualCols, the last row is full
        itemsInLastVisualRow = visualCols;
    }

    tiles.forEach((tile, index) => {
        tile.classList.remove('single-full-width-map'); // Reset class each time
        const isTileInLastVisualRow = index >= (numTiles - itemsInLastVisualRow);

        if (isTileInLastVisualRow) {
            if (itemsInLastVisualRow === 1) {
                // Last single item spans all 6 internal columns (full width)
                tile.style.gridColumn = `auto / span 6`;
                tile.classList.add('single-full-width-map'); // Add class for special styling
            } else if (itemsInLastVisualRow === 2) {
                // Last two items each span 3 internal columns (50% width each)
                tile.style.gridColumn = `auto / span 3`;
            } else { // Last row has 3 items (itemsInLastVisualRow === 3)
                tile.style.gridColumn = `auto / span ${normalItemSpan}`;
            }
        } else { // Tile is in a full, preceding row
            tile.style.gridColumn = `auto / span ${normalItemSpan}`;
        }
    });
}

// ============================================================================
//  CORE FUNCTIONS
// ============================================================================
function initialize() {
    currentStep = 0;
    picks = { 1: [], 2: [] };
    bans = { 1: [], 2: [] };
    updateGameFormatOptions();
    createMapTiles();
    updateInitialMapGridLayout(); // Call the new layout function for initial setup
    updateInstructions();
    updateResultsPanel();
    resetButton.classList.add('hidden');
}

function createMapTiles() {
    mapGrid.innerHTML = ''; // Clear existing tiles
    currentMapPool.forEach(map => { // Use currentMapPool
        const tile = document.createElement('div');
        tile.classList.add('map-tile');
        tile.style.backgroundImage = `url('${map.imageUrl}')`;
        tile.dataset.mapName = map.name;

        const mapNameDisplay = document.createElement('div');
        mapNameDisplay.classList.add('map-name');
        mapNameDisplay.textContent = map.name;
        tile.appendChild(mapNameDisplay);

        const mapOverlay = document.createElement('div');
        mapOverlay.classList.add('map-overlay');
        tile.appendChild(mapOverlay);

        // Add hover effects based on current team's turn
        tile.addEventListener('mouseenter', () => {
            if (!tile.classList.contains('disabled') && currentStep < PICK_BAN_SEQUENCE.length) {
                const currentAction = PICK_BAN_SEQUENCE[currentStep];
                tile.classList.add(`team${currentAction.team}-hover`);
            }
        });

        tile.addEventListener('mouseleave', () => {
            tile.classList.remove('team1-hover', 'team2-hover');
        });

        tile.addEventListener('click', () => handleMapClick(map));
        mapGrid.appendChild(tile);
    });
}

function handleMapClick(map) {
    if (currentStep >= PICK_BAN_SEQUENCE.length) return; 

    const currentAction = PICK_BAN_SEQUENCE[currentStep];
    const mapName = map.name;
    const tile = document.querySelector(`.map-tile[data-map-name="${mapName}"]`);

    if (tile.classList.contains('disabled')) return; 

    if (currentAction.action === 'PICK') {
        picks[currentAction.team].push(mapName);
        tile.classList.add(`picked-by-team${currentAction.team}`);
        tile.querySelector('.map-overlay').textContent = `PICKED BY ${getTeamName(currentAction.team)}`;
        
        // Check if this is the tiebreaker (last pick in the sequence)
        if (isTiebreakerPick()) {
            tile.classList.add('tiebreaker');
            tile.querySelector('.map-overlay').textContent = `TIEBREAKER - PICKED BY ${getTeamName(currentAction.team)}`;
        }
    } else { // BAN
        bans[currentAction.team].push(mapName);
        tile.classList.add('banned');
        tile.querySelector('.map-overlay').textContent = `BANNED`;
    }

    tile.classList.add('disabled');
    currentStep++;

    if (currentStep === 1) {
        resetButton.classList.remove('hidden');
    }
    
    // Special handling for BO9: auto-pick the last remaining map
    if (gameFormatSelector.value === 'bo9' && currentStep === PICK_BAN_SEQUENCE.length - 1) {
        // We just completed the 8th action (a ban), now auto-pick the last map
        autoPickLastMapForBO9();
    } else if (currentStep >= PICK_BAN_SEQUENCE.length) {
        // For other formats, auto-ban remaining maps
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
        if (PICK_BAN_SEQUENCE[i].action === 'PICK') {
            remainingPicks++;
        }
    }
    
    // If this is the last pick (remainingPicks === 1, including the current one we just processed)
    return remainingPicks === 1;
}

/**
 * Auto-picks the last remaining map for BO9 format
 */
function autoPickLastMapForBO9() {
    // Find the last remaining map
    const remainingTiles = document.querySelectorAll('.map-tile:not(.disabled)');
    
    if (remainingTiles.length === 1 && currentStep < PICK_BAN_SEQUENCE.length) {
        const lastAction = PICK_BAN_SEQUENCE[currentStep]; // This should be the final PICK action
        const remainingTile = remainingTiles[0];
        const mapName = remainingTile.dataset.mapName;
        
        if (lastAction.action === 'PICK') {
            // Auto-pick the last map
            picks[lastAction.team].push(mapName);
            remainingTile.classList.add(`picked-by-team${lastAction.team}`);
            remainingTile.classList.add('tiebreaker'); // Mark as tiebreaker
            remainingTile.querySelector('.map-overlay').textContent = `TIEBREAKER - *PICKED BY ${getTeamName(lastAction.team)}`;
            remainingTile.classList.add('disabled');
            
            currentStep++; // Complete the sequence
        }
    }
    
    // Now that BO9 is complete, no need to auto-ban since all maps are accounted for
}

function autobanRemainingMaps() {
    const allMapTiles = document.querySelectorAll('.map-tile');
    
    allMapTiles.forEach(tile => {
        if (!tile.classList.contains('disabled')) {
            tile.classList.add('banned', 'auto-banned', 'disabled');
            tile.querySelector('.map-overlay').textContent = 'AUTO-BANNED';
        }
    });
}

function updateInstructions() {
    const instructionsElement = document.getElementById('instructions');
    
    // Remove all state classes
    instructionsElement.classList.remove('team1-turn', 'team2-turn', 'completed', 'active');
    
    if (currentStep >= PICK_BAN_SEQUENCE.length) {
        // Count remaining maps that were auto-banned
        const autoBannedMaps = document.querySelectorAll('.map-tile.auto-banned').length;
        
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
        instructionsElement.classList.add('completed');
        instructionsElement.style.color = '#28a745'; // Force green color
        return;
    }
    
    const currentAction = PICK_BAN_SEQUENCE[currentStep];
    const teamName = getTeamName(currentAction.team);
    const actionClass = currentAction.action === 'PICK' ? 'action-pick' : 'action-ban';
    
    instructionsElement.innerHTML = `
        <div class="instruction-content">
            <span class="team-name">${teamName}</span>
            <span>it's your turn to</span>
            <span class="action-type ${actionClass}">${currentAction.action}</span>
            <span>a map</span>
        </div>
    `;
    
    // Add team-specific styling
    instructionsElement.classList.add(`team${currentAction.team}-turn`, 'active');
    
    // Set text color to team color
    instructionsElement.style.color = currentAction.team === 1 ? 
        getComputedStyle(document.documentElement).getPropertyValue('--team1-color') : 
        getComputedStyle(document.documentElement).getPropertyValue('--team2-color');
    
    // Trigger the shimmer animation
    setTimeout(() => {
        instructionsElement.classList.remove('active');
        setTimeout(() => instructionsElement.classList.add('active'), 50);
    }, 100);
}

function updateResultsPanel() {
    // Calculate global pick order for each team's picks
    const globalPickOrder = {};
    let pickCounter = 1;
    
    // Go through the sequence to determine the global order of picks
    for (let i = 0; i < currentStep; i++) {
        const action = PICK_BAN_SEQUENCE[i];
        if (action.action === 'PICK') {
            if (!globalPickOrder[action.team]) {
                globalPickOrder[action.team] = [];
            }
            globalPickOrder[action.team].push(pickCounter);
            pickCounter++;
        }
    }

    function populateList(listElement, items, type, team) {
        listElement.innerHTML = '';
        items.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;

            // Add global order number for picks only
            if (type === 'pick' && globalPickOrder[team]) {
                li.setAttribute('data-order', globalPickOrder[team][index]);
            }
            
            listElement.appendChild(li);
        });
    }

    populateList(team1PicksList, picks[1], 'pick', 1);
    populateList(team1BansList, bans[1], 'ban', 1);
    populateList(team2PicksList, picks[2], 'pick', 2);
    populateList(team2BansList, bans[2], 'ban', 2);
}

// ============================================================================
//  EVENT LISTENERS
// ============================================================================
resetButton.addEventListener('click', initialize);
team1ColorPicker.addEventListener('input', (e) => updateTeamColor(1, e.target.value));
team2ColorPicker.addEventListener('input', (e) => updateTeamColor(2, e.target.value));

gameFormatSelector.addEventListener('change', (event) => {
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
        resetButton.classList.add('hidden'); // Hide reset button as it's a fresh setup
    }
});

battleFormatSelector.addEventListener('change', (event) => {
    const selectedBattleFormat = event.target.value;
    if (MAP_POOLS[selectedBattleFormat]) {
        currentMapPool = MAP_POOLS[selectedBattleFormat];
        initialize(); 
    } else {
        console.warn(`Map pool for format "${selectedBattleFormat}" not found. Using default.`);
        currentMapPool = MAP_POOLS['3v3'] || Object.values(MAP_POOLS)[0]; // Fallback
        initialize();
    }
});

[team1NameInput, team2NameInput].forEach(input => {
    input.addEventListener('blur', () => {
        updateInstructions(); 
        updateResultsPanel(); 
    });
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            input.blur();
        }
    });
});

// ============================================================================
//  INITIALIZATION
// ============================================================================
// Set default team names
document.addEventListener('DOMContentLoaded', function() {
    // Set default team names
    if (team1NameInput) {
        team1NameInput.textContent = 'Team Blue';
    }
    if (team2NameInput) {
        team2NameInput.textContent = 'Team Red';
    }
    
    // Set default team colors
    if (team1ColorPicker) {
        team1ColorPicker.value = '#007bff'; // Blue
    }
    if (team2ColorPicker) {
        team2ColorPicker.value = '#dc3545'; // Red
    }
    
    initialize();
    updateTeamColor(1, '#007bff');
    updateTeamColor(2, '#dc3545');
});

// Alternative initialization if DOMContentLoaded already fired
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        if (team1NameInput) team1NameInput.textContent = 'Team Blue';
        if (team2NameInput) team2NameInput.textContent = 'Team Red';
        if (team1ColorPicker) team1ColorPicker.value = '#007bff';
        if (team2ColorPicker) team2ColorPicker.value = '#dc3545';
        initialize();
        updateTeamColor(1, '#007bff');
        updateTeamColor(2, '#dc3545');
    });
} else {
    // DOM already loaded
    if (team1NameInput) team1NameInput.textContent = 'Team Blue';
    if (team2NameInput) team2NameInput.textContent = 'Team Red';
    if (team1ColorPicker) team1ColorPicker.value = '#007bff';
    if (team2ColorPicker) team2ColorPicker.value = '#dc3545';
    initialize();
    updateTeamColor(1, '#007bff');
    updateTeamColor(2, '#dc3545');
}