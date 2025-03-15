# R3F Practice

A tiny React Three Fiber project showcasing interactive 3D elements with a dynamic animated background.

#### [Live Demo](https://cwenwen.github.io/r3f-practice/)

## Features

- 🌤️ Animated background – dynamic clouds and sky movement.
- 📱 Responsive design – adjusts smoothly to different screen sizes.
- 🎭 3D interactivity – a lightweight and interactive experience powered by R3F.
- ⚡ Fast development – uses Vite for a quick and optimized build process.

## Tech Stack

- `React Three Fiber` – 3D rendering
- `Three.js` – core WebGL library
- `React` – UI framework
- `Vite` – fast build tool
- `Tailwind CSS` - styling
- `ESLint`, `Prettier` - code formatting

## Project Structure

```
.
├── public/
├── src/
│   ├── components/
│   │   ├── App.jsx               # Main app component
│   │   ├── Instructions.jsx      # Tips for user
│   │   ├── Overlay.jsx           # UI overlay
│   │   └── Sky.jsx               # Sky background animation
│   ├── index.css                 # Global styles
│   └── main.jsx                  # Entry point
├── index.html
├── package.json                  # Project metadata
└── README.md                     # Documentation
```

## Screenshots

![Preview](https://github.com/user-attachments/assets/1ffe56da-8128-46d1-b330-87e4b35181ee)

<!-- prettier-ignore -->
|Device width < `768px`|Device width < `1024px`|
|-|-|
|<img width="360" alt="Image" src="https://github.com/user-attachments/assets/0292dbfb-aa48-4b39-b228-b3f146a819c8" />|<img width="680" alt="Image" src="https://github.com/user-attachments/assets/b0d119c8-fd51-4145-bcf8-1d659a1083a9" />|

## Getting Started

Clone the repository:

```sh
git clone https://github.com/cwenwen/r3f-practice.git
cd r3f-practice
```

Install dependencies:

```sh
yarn install
```

Start the development server on port 5173:

```sh
yarn dev
```

Build for production:

```sh
yarn run build
```

## License

This project is open-source and available under the MIT License.

Made with 🧡 by [cwenwen](https://github.com/cwenwen)
