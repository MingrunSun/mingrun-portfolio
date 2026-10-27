# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Step 1 add the VS code extension

ES7+ React/Redux/React-Native snippets

Tailwind CSS IntelliSense

https://www.remove.bg/upload (very good place for backgorund remover for logo)

# Step 2

run the following to initiate

```shell
npm create vite@latest ./
npm install -D tailwindcss
npx tailwindcss init -p
npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-parallax-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

# Step 3

use emailjs.com for the contact box

# For 3D packages

```shell
npm install --legacy-peer-deps three
```

# For react timeline

```shell
npm install prop-types
```

```shell
npm run dev
npm install tailwindcss @tailwindcss/vite

npm install --legacy-peer-deps -D postcss autoprefixer

npx tailwindcss init -p

npm uninstall tailwindcss

npm install --legacy-peer-deps -D postcss autoprefixer

Remove-Item -Recurse -Force node_modules, package-lock.json

```

##

Background image herobg.png is specified in tailwind.config.cjs

start with mesh when creating 3D and also need light

for 3D (https://r3f.docs.pmnd.rs/getting-started/introduction)

# Hidden sections (how to restore)

Three sections are currently turned off but all their code is kept:

- **Future plans** – `src/components/Future.jsx`, data in `futures` in `src/constants/index.js`.
  Restore: in `src/App.jsx` add `Future,` to the import and `<Future />` after `<Tech />`.
- **Testimonials** – `src/components/Feedbacks.jsx`, data in `testimonials` in `src/constants/index.js`.
  Restore: in `src/App.jsx` add `Feedbacks,` to the import and `<Feedbacks />` after `<Works />`.
- **Get in touch (contact form)** – `src/components/Contact.jsx`.
  Restore: in `src/App.jsx` add `Contact,` to the import and replace `<Globe />` with `<Contact />`
  (`src/components/Globe.jsx` is the Earth-only stand-in; Contact already includes the Earth);
  uncomment the `contact` entry in `navLinks` in `src/constants/index.js`;
  fill the three EmailJS keys in `.env` (and in Vercel env settings), then restart the dev server.
