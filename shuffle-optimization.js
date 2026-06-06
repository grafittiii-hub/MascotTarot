/**
 * 🎴 Optimized 3-Phase Card Spread Animation
 * Separates shuffle → transition → dealing phases for smooth mobile performance
 */

// ============================================================================
// PHASE 1: Pure Shuffle (Cards stay centered, 2.4 seconds)
// ============================================================================
async function shuffleCardsPhase(cards) {
    // Add shuffle-phase class to ALL cards - keeps them centered
    cards.forEach(card => {
        card.classList.add('shuffle-phase');
        card.classList.remove('ready-to-glow', 'spread-phase');
        // Keep cards as BACK face only during shuffle
        const cardInner = card.querySelector('.card-inner');
        if (cardInner) {
            cardInner.style.transform = 'rotateY(0deg)';
        }
    });

    return new Promise(resolve => {
        // Let shuffle animation run for exactly 2.4 seconds (2 full cycles at 1.2s each)
        setTimeout(() => {
            // Remove shuffle class - prepare for spreading
            cards.forEach(card => card.classList.remove('shuffle-phase'));
            resolve();
        }, 2400);
    });
}

// ============================================================================
// PHASE 2: Calculate Spread Positions (Pre-computed, no animation)
// ============================================================================
function calculateSpreadPositions(cards, containerWidth, containerHeight, isMobile) {
    const positions = [];
    const cardCount = cards.length;
    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;
    
    if (isMobile) {
        // Mobile: Tighter fan arc (45° total instead of 90°)
        const arcStart = -22.5;
        const arcEnd = 22.5;
        const radius = containerWidth * 0.25; // Closer radius for tight fan
        
        cards.forEach((card, i) => {
            const angle = arcStart + (i / (cardCount - 1)) * (arcEnd - arcStart);
            const rad = (angle * Math.PI) / 180;
            const x = centerX + Math.cos(rad) * radius - (card.offsetWidth / 2);
            const y = centerY + Math.sin(rad) * radius - (card.offsetHeight / 2);
            
            positions.push({ x, y, angle });
        });
    } else {
        // Desktop: Wider fan arc (90° total)
        const arcStart = -45;
        const arcEnd = 45;
        const radius = containerWidth * 0.35; // Wider radius for desktop
        
        cards.forEach((card, i) => {
            const angle = arcStart + (i / (cardCount - 1)) * (arcEnd - arcStart);
            const rad = (angle * Math.PI) / 180;
            const x = centerX + Math.cos(rad) * radius - (card.offsetWidth / 2);
            const y = centerY + Math.sin(rad) * radius - (card.offsetHeight / 2);
            
            positions.push({ x, y, angle });
        });
    }
    
    return positions;
}

// ============================================================================
// PHASE 3: Smooth Card Spread (One-by-one, staggered)
// ============================================================================
async function spreadCardsPhase(cards, positions, isMobile) {
    // Add spread-phase class
    cards.forEach(card => card.classList.add('spread-phase'));

    // Stagger animation - one card every 50ms (7 cards = 350ms total)
    const staggerDelay = isMobile ? 50 : 40; // Slightly faster on desktop
    
    for (let i = 0; i < cards.length; i++) {
        await new Promise(resolve => {
            setTimeout(() => {
                const pos = positions[i];
                const card = cards[i];
                
                // Use transform3d for hardware acceleration
                // apply rotation and position together
                card.style.transform = 
                    `translate3d(${pos.x}px, ${pos.y}px, 0) rotate(${pos.angle}deg)`;
                
                resolve();
            }, i * staggerDelay);
        });
    }
    
    // After all cards spread, add interactivity classes
    cards.forEach(card => card.classList.add('ready-to-glow'));
}

// ============================================================================
// ORCHESTRATOR: Main initSpreadView function
// ============================================================================
async function initSpreadView(cardsData) {
    const spreadView = document.getElementById('spread-view');
    const cardsContainer = document.getElementById('cards-container');
    
    if (!spreadView || !cardsContainer) {
        console.error('Spread view or cards container not found');
        return;
    }
    
    // Hide ritual text during shuffle+spread (optional, based on your design)
    const ritualText = document.querySelector('.ritual-text-container');
    if (ritualText) {
        ritualText.classList.add('fade-out');
    }
    
    // Create card DOM elements
    const cards = cardsData.map(data => {
        const cardWrap = document.createElement('div');
        cardWrap.className = 'card-wrap';
        cardWrap.innerHTML = `
            <div class="card-inner">
                <div class="card-face card-back"></div>
                <div class="card-face card-front">
                    <img src="${data.image}" alt="${data.name}">
                </div>
            </div>
        `;
        cardsContainer.appendChild(cardWrap);
        return cardWrap;
    });
    
    // Show spread view
    spreadView.style.display = 'block';
    setTimeout(() => {
        spreadView.style.opacity = '1';
    }, 16); // Let browser render first
    
    // ✅ PHASE 1: Pure shuffle (2.4 seconds - centered, no spreading)
    await shuffleCardsPhase(cards);
    
    // ✅ PHASE 2: Calculate positions (synchronous, instant)
    const isMobile = window.innerWidth < 768;
    const spreadPositions = calculateSpreadPositions(
        cards,
        cardsContainer.offsetWidth,
        cardsContainer.offsetHeight,
        isMobile
    );
    
    // ✅ PHASE 3: Spread cards with stagger (350ms for 7 cards)
    await spreadCardsPhase(cards, spreadPositions, isMobile);
    
    // ✅ Now ready for user interaction
    enableCardSelection(cards, cardsData);
}

// ============================================================================
// Helper: Enable Card Selection (Your existing logic)
// ============================================================================
function enableCardSelection(cards, cardsData) {
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            handleCardSelection(card, cardsData[index], index, cards);
        });
        
        // Add element type from cardsData (air, water, earth, fire)
        if (cardsData[index].element) {
            card.classList.add(`element-${cardsData[index].element}`);
        }
    });
}

// ============================================================================
// Export for use
// ============================================================================
window.TarotOptimizations = {
    shuffleCardsPhase,
    calculateSpreadPositions,
    spreadCardsPhase,
    initSpreadView,
    enableCardSelection
};
