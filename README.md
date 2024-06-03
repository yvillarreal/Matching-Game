# Juego de Emparejamiento de Imágenes

## Descripción

Este proyecto es un juego de emparejamiento de imágenes desarrollado con React. El objetivo del juego es emparejar todas las cartas en el menor tiempo posible y con la mayor puntuación. La aplicación también es una Progressive Web App (PWA), lo que permite a los usuarios instalarla y usarla sin conexión.

## Características

- **Sistema de Puntuación:** Otorga puntos por cada emparejamiento correcto y penaliza por emparejamientos incorrectos.
- **Puntuación Acumulada:** Acumula la puntuación a lo largo de las partidas.
- **Diversificación de Imágenes:** Utiliza la API de Pexels para obtener imágenes aleatorias de diferentes categorías.
- **Transiciones Suaves:** Añade transiciones suaves al voltear las cartas.
- **Efectos Visuales:** Añade efectos visuales cuando las cartas se emparejan.
- **PWA:** La aplicación puede ser instalada y utilizada sin conexión.
- **Fuente Roboto:** Utiliza la fuente Roboto para una mejor apariencia.

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

## Construcción para Producción

1. Construye la aplicación para producción:
    ```bash
    npm run build
    ```
2. Sirve la carpeta `build` utilizando un servidor estático:
    ```bash
    npm install -g serve
    serve -s build
    ```


## Estructura del Proyecto

```plaintext
matching-game/
├── public/
│   ├── favicon2.ico
│   ├── logo192.png
│   ├── logo512.png
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Card.js
│   │   ├── Board.js
│   │   └── Scoreboard.js
│   ├── css/
│   │   └── styles.css
│   ├── pwa/
│   │   └── serviceWorkerRegistration.js
│   ├── App.js
│   ├── categories.js
│   ├── index.js
├── .gitignore
├── package.json
└── README.md
```

## API

Este proyecto utiliza la API de Pexels para obtener imágenes aleatorias. Asegúrate de tener un token de API de Pexels y configúralo en el archivo `src/components/Board.js`.

```javascript
const response = await fetch(`https://api.pexels.com/v1/search?query=cat&per_page=${count}`, {
  headers: {
    Authorization: 'YOUR_API_KEY_HERE'
  }
});
