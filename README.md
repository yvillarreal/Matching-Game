# Juego de Emparejamiento de Imágenes

## Descripción

Este proyecto es un juego de emparejamiento de imágenes desarrollado con React. El objetivo del juego es emparejar todas las cartas en el menor tiempo posible y con la mayor puntuación. A medida que el jugador avanza en el juego, la dificultad incrementa agregando más cartas y diversificando las imágenes.

## Características

- **Sistema de Puntuación:** Otorga puntos por cada emparejamiento correcto y penaliza por emparejamientos incorrectos.
- **Temporizador:** Limita el tiempo para completar el juego y añade presión al jugador.
- **Incremento de Dificultad:** Aumenta el número de cartas a medida que se completan los niveles.
- **Diversificación de Imágenes:** Utiliza la API de Pexels para obtener imágenes aleatorias de diferentes categorías.
- **Transiciones Suaves:** Añade transiciones suaves al voltear las cartas.
- **Efectos Visuales:** Añade efectos visuales cuando las cartas se emparejan.
- **Modal de Confirmación:** Pregunta al jugador si desea continuar el juego con mayor dificultad o reiniciarlo.

## Requisitos

- Node.js
- npm (Node Package Manager)

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu_usuario/juego-emparejamiento.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd juego-emparejamiento
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```

## Uso

1. Inicia el servidor de desarrollo:
    ```bash
    npm start
    ```
2. Abre tu navegador y navega a `http://localhost:3000`.

## Estructura del Proyecto

```plaintext
matching-game/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Card.js
│   │   ├── Board.js
│   │   ├── Modal.js
│   │   └── Scoreboard.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── .gitignore
├── package.json
└── README.md
```

## API
Este proyecto utiliza la API de Pexels para obtener imágenes aleatorias. Asegúrate de tener un token de API de Pexels y configúralo en el archivo `src/components/Board.js.`
```plaintext
const response = await fetch(`https://api.pexels.com/v1/search?query=cat&per_page=${count}`, {
  headers: {
    Authorization: 'YOUR_API_KEY_HERE'
  }
});
```

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir, por favor sigue los siguientes pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (feature/nueva-funcionalidad).
3. Realiza los cambios y haz commit.
4. Envía un pull request.


## Licencia
Este proyecto está licenciado bajo la MIT License.
