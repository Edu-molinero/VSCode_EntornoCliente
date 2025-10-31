// ================================
// FUNCIONES A COMPLETAR POR EL ALUMNO
// ================================

/**
 * EJERCICIO 1: MOVIMIENTO CON TECLADO
 *
 * Completa esta función para que el jugador se mueva con las flechas del teclado.
 */
function setupKeyboardControls() {
    document.addEventListener('keydown', (e) => {
        if (!gameActive) return;

        if (e.key === 'ArrowLeft') {
            // Mueve el jugador hacia la izquierda
            playerPosition = Math.max(0, playerPosition - PLAYER_SPEED);

        } else if (e.key === 'ArrowRight') {
            // Mueve el jugador hacia la derecha
            playerPosition = Math.min(CONTAINER_WIDTH - PLAYER_WIDTH, playerPosition + PLAYER_SPEED);
        }

        // Actualiza la posición visual del jugador
        player.style.left = playerPosition + 'px';
    });
}

/**
 * EJERCICIO 2: SISTEMA DE PUNTUACIÓN
 *
 * Completa esta función para manejar cuando el jugador atrapa un objeto.
 */
function handleCollision(objType) {
    if (objType === 'good') {
        // El jugador atrapó una calabaza
        // 1. Suma 10 puntos al score
        score += 10;

        // 2. Actualiza el texto que muestra la puntuación
        scoreDisplay.textContent = score;

        // 3. Si los puntos son múltiplo de 50 (y > 0), aumenta la velocidad
        if (score > 0 && score % 50 === 0) {
            gameSpeed += 0.5;
        }

    } else if (objType === 'bad') {
        // El jugador tocó un fantasma
        // 1. Resta 1 vida
        lives -= 1;

        // 2. Actualiza el texto que muestra las vidas
        livesDisplay.textContent = lives;

        // 3. Si no quedan vidas, llama a endGame()
        if (lives <= 0) {
            endGame();
        }
    }
}

/**
 * EJERCICIO 3: DETECCIÓN DE COLISIONES
 *
 * Detecta si el jugador ha tocado un objeto que cae.
 */
function checkCollision(obj) {
    // Rectángulo del objeto que cae
    const objRect = {
        left: obj.x,
        right: obj.x + OBJECT_SIZE,
        top: obj.y,
        bottom: obj.y + OBJECT_SIZE
    };

    // Rectángulo del jugador
    const playerRect = {
        left: playerPosition,
        right: playerPosition + PLAYER_WIDTH,
        top: CONTAINER_HEIGHT - 70,
        bottom: CONTAINER_HEIGHT - 10
    };

    // Devuelve true si hay colisión, false si no la hay
    return objRect.left < playerRect.right &&
           objRect.right > playerRect.left &&
           objRect.top < playerRect.bottom &&
           objRect.bottom > playerRect.top;
}

/**
 * EJERCICIO 4: REINICIAR EL JUEGO
 *
 * Devuelve todas las variables a su estado inicial.
 */
function resetGameVariables() {
    // Reinicia las variables del juego a sus valores iniciales
    score = 0;
    lives = 3;
    gameSpeed = 2;
    gameActive = true;
    playerPosition = 270;

    // Actualiza la interfaz
    scoreDisplay.textContent = score;
    livesDisplay.textContent = lives;
    player.style.left = playerPosition + 'px';
    gameOverScreen.style.display = 'none';
}

// ================================
// FUNCIONES YA IMPLEMENTADAS (NO MODIFICAR)
// ================================

/**
 * Inicializar la posición del jugador
 */
function initializePlayer() {
    player.style.left = playerPosition + 'px';
}

/**
 * Control del jugador con ratón (YA IMPLEMENTADO)
 */
function setupMouseControls() {
    gameContainer.addEventListener('mousemove', (e) => {
        if (!gameActive) return;

        const rect = gameContainer.getBoundingClientRect();
        playerPosition = Math.max(0, Math.min(CONTAINER_WIDTH - PLAYER_WIDTH, e.clientX - rect.left - PLAYER_WIDTH / 2));
        player.style.left = playerPosition + 'px';
    });
}

/**
 * Crear objeto que cae (calabaza o fantasma) - YA IMPLEMENTADO
 */
function createFallingObject() {
    const obj = document.createElement('div');
    obj.className = 'falling-object';

    // 70% calabazas (buenas), 30% fantasmas (malos)
    const isGood = Math.random() < 0.7;
    obj.textContent = isGood ? '🎃' : '👻';
    obj.dataset.type = isGood ? 'good' : 'bad';

    // Posición aleatoria horizontal
    const randomX = Math.random() * (CONTAINER_WIDTH - OBJECT_SIZE);
    obj.style.left = randomX + 'px';
    obj.style.top = '-50px';

    gameContainer.appendChild(obj);
    fallingObjects.push({
        element: obj,
        x: randomX,
        y: -50,
        type: isGood ? 'good' : 'bad'
    });
}

/**
 * Actualizar el estado del juego - YA IMPLEMENTADO
 */
function update() {
    if (!gameActive) return;

    // Actualizar objetos que caen
    for (let i = fallingObjects.length - 1; i >= 0; i--) {
        const obj = fallingObjects[i];
        obj.y += gameSpeed;
        obj.element.style.top = obj.y + 'px';

        // Comprobar colisión (USARÁ TU FUNCIÓN)
        if (checkCollision(obj)) {
            handleCollision(obj.type); // USARÁ TU FUNCIÓN
            obj.element.remove();
            fallingObjects.splice(i, 1);
            continue;
        }

        // Eliminar si sale de pantalla
        if (obj.y > CONTAINER_HEIGHT) {
            obj.element.remove();
            fallingObjects.splice(i, 1);
        }
    }
}

/**
 * Finalizar el juego - YA IMPLEMENTADO
 */
function endGame() {
    gameActive = false;
    clearInterval(spawnInterval);
    clearInterval(gameLoop);

    finalScoreDisplay.textContent = score;
    gameOverScreen.style.display = 'block';
}

/**
 * Reiniciar el juego - USARÁ TU FUNCIÓN
 */
function restartGame() {
    // Limpiar objetos existentes
    fallingObjects.forEach(obj => obj.element.remove());
    fallingObjects = [];

    // Reiniciar variables (USARÁ TU FUNCIÓN)
    resetGameVariables();

    // Iniciar juego
    startGame();
}

/**
 * Iniciar el juego - YA IMPLEMENTADO
 */
function startGame() {
    // Crear objetos cada 1 segundo
    spawnInterval = setInterval(createFallingObject, 1000);

    // Actualizar juego cada 30ms (~33 FPS)
    gameLoop = setInterval(update, 30);
}

/**
 * Configurar event listeners - YA IMPLEMENTADO
 */
function setupEventListeners() {
    restartBtn.addEventListener('click', restartGame);
}

/**
 * Inicialización del juego - YA IMPLEMENTADO
 */
function initGame() {
    initializePlayer();
    setupKeyboardControls(); // USARÁ TU FUNCIÓN
    setupMouseControls();
    setupEventListeners();
    startGame();
}

// Iniciar el juego cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initGame);
