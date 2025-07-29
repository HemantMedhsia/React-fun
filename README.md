# 🚀 React Mini Fun Projects

Welcome to my **personal developer portfolio** built using **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. This website is a dynamic and interactive showcase of my skills, projects, education, and experience—all wrapped in a modern, visually engaging design.

![Portfolio Preview](public/og-image.png)


---

## 🔥 Features

- ⚡ Fast and optimized using [Vite](https://vitejs.dev/)
- ✨ Interactive UI with React Particles
- 🎨 Responsive & modern design with Tailwind CSS
- 💼 Password Generator, Currency Converter, etc mini projects.
- 🎵 Background Animations with toggle

---

## 🛠️ Tech Stack

| Category       | Technologies                                                                 |
| -------------- | ---------------------------------------------------------------------------- |
| **Frontend**   | React, TypeScript, Vite, Tailwind CSS, Framer Motion                         |
| **Routing**    | React Router DOM                                                             |
| **Animation**  | reactparticles.js(React Particles)                                             |
| **Deployment** | [Vercel](https://vercel.com)                                                 |
| **Utilities**  | ESLint, Prettier, custom hooks, context API for global state                 |

---

## 📁 Project Structure Overview

<pre>
  📁 Portfolio/
├── 📄 .gitignore
├── 📄 README.md
├── 📄 index.html
├── 📦 public/
│   ├── 📄 HemantMedhsiaUpdatedResume.pdf
│   ├── 🖼️ gProfile1.png
│   └── 🖼️ og-image.png
├── 📦 src/
│   ├── 📄 App.tsx
│   ├── 📄 App.css
│   ├── 📁 apis/
│   │   └── 📁 Contactme/
│   │       └── 📄 Contactme.ts
│   ├── 📁 assets/
│   │   └── 📁 Images/
│   │       ├── 🏢 Company/
│   │       ├── 🎓 Education/
│   │       ├── 🧰 HelperImgs/
│   │       ├── 🔢 Numbers/
│   │       ├── 💼 Projects/
│   │       └── 🧱 stack/
│   ├── 📁 components/
│   │   ├── 👤 About/
│   │   ├── 📞 Contactme/
│   │   ├── 🎓 Education/
│   │   ├── 💼 Experience/
│   │   ├── 🌟 Github/
│   │   ├── 🎵 Music/
│   │   ├── 🧪 LazyImage/
│   │   ├── 🌀 Marquee/
│   │   ├── 🔁 ScrollToTop/
│   │   ├── ✨ Testimonials/
│   │   └── ...more UI sections
│   ├── 📁 context/
│   │   └── 🎵 MusicContext.tsx
│   ├── 📁 Data/
│   │   └── 📄 projectsData.ts
│   ├── 📁 Layout/
│   │   ├── 📄 Header.tsx
│   │   └── 📄 Footer.tsx
│   ├── 📁 pages/
│   │   ├── 🏠 Home.tsx
│   │   ├── 📄 About.tsx
│   │   ├── 🧠 Education.tsx
│   │   ├── 💼 Experience.tsx
│   │   ├── 📨 Contactme.tsx
│   │   ├── 🧾 Resume.tsx
│   │   └── ❌ Error404.tsx
│   ├── 📁 Routes/
│   │   └── 📄 RoutesConfig.tsx
│   ├── 📁 Ui/
│   │   ├── 📁 GradientLine/
│   │   └── 📁 InputFields/
│   ├── 📄 main.tsx
│   ├── 📄 index.css
│   ├── 📁 types/
│   │   └── 📄 hover-effect.d.ts
│   └── 📄 vite-env.d.ts
├── 📄 package.json
├── 📄 package-lock.json
├── 📄 tsconfig.json
├── 📄 tsconfig.app.json
├── 📄 tsconfig.node.json
├── 📄 vite.config.ts
├── 📄 eslint.config.js
├── 📄 vercel.json
</pre>


## High-Level Summary
The repository appears to be a React-based project that showcases various interactive components and features. The project seems to be a personal endeavor, possibly a portfolio or a playground for experimenting with different React concepts and libraries.


## Low-Level Detailed Summary
### Project Structure
The project follows a standard React project structure, with a `src` directory containing various components, pages, and assets. The project uses Vite as its build tool and Tailwind CSS for styling.


### Components
The project features a range of components, including:


`ParticlesLoader`: A component that loads particles effects using the `@tsparticles/react` library.
`CurrencyConverter`: A page that allows users to convert currencies using the `useCurrencyInfo` hook.
`PasswordGenerator`: A page that generates passwords.
`ProjectGallery`: A page that showcases various projects.
### Features
The project includes several features, such as:


Interactive particles effects using `@tsparticles/react`.
Currency conversion functionality using the `useCurrencyInfo` hook.
Password generation functionality.
A project gallery that showcases various projects.
### Technologies Used
The project uses the following technologies:


React
Vite
Tailwind CSS
`@tsparticles/react`
`axios`
### Code Quality
The code appears to be well-organized, with clear and concise variable names and function signatures. The project uses ES+ syntax and follows best practices for React development.


### Areas for Improvement
Some components, such as `Toast`, seem to be incomplete or unused.
There are no tests or test files in the project.
Some dependencies, such as `@tsparticles/slim`, seem to be unused.
### Conclusion
Overall, the project appears to be a personal React project that showcases various interactive components and features. While it is well-organized and follows best practices, there are areas for improvement, such as adding tests and removing unused dependencies.


### Code Blocks
Here are some code blocks that demonstrate the project's features:

``````ParticlesLoader.jsx
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesLoader = ({ options, id }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (init) {
    return (
      <Particles
        id={id}
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return;
};

export default ParticlesLoader;
``````

``````src/Pages/CurrencyConverter.jsx
import React, { useState, useEffect } from "react";
import InputBox from "../Components/CurrencyConverter/InputBox";
import useCurrencyInfo from "../Hooks/useCurrencyInfo";
import ParticlesLoader from "../Components/ParticlesLoader";
import ParticlesConfig from "../Components/ParticlesConfig";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState();
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState();

  const rates = useCurrencyInfo(fromCurrency);
  const options = rates ? Object.keys(rates) : [];

  const handleConvert = (e) => {
    e.preventDefault();
    if (!rates) return;
    const rate = rates[toCurrency];
    if (rate) {
      setConvertedAmount((amount * rate).toFixed());
    } else {
      setConvertedAmount();
    }
  };

  return (
    <div>
      <ParticlesLoader options={ParticlesConfig()} id="particles-" />
      <InputBox
        label="From"
        currencyOptions={options}
        amount={amount}
        selectCurrency={fromCurrency}
        onAmountChange={(amt) => setAmount(amt)}
        onCurrencyChange={(currency) => setFromCurrency(currency)}
      />
      {/* ... */}
    </div>
  );
};

export default CurrencyConverter;
``````
### Installation

. Clone the repository using Git: `git clone https://github.com/HemantMedhsia/Portfolio2025.git`
. Navigate to the repository directory: `cd Portfolio`
. Install the dependencies using npm or yarn: `npm install` or `yarn install`

### Running the Application

. Start the development server: `npm run dev` or `yarn dev`
. Open a web browser and navigate to `http://localhost:`

The application should now be running and accessible in your web browser.

## Code Block for Installation and Running

`````bash
# 1️⃣ Clone the repository
git clone https://github.com/HemantMedhsia/Portfolio2025.git

# 2️⃣ Navigate to the directory
cd Portfolio

# 3️⃣ Install the dependencies
npm install    # or yarn install

# 4️⃣ Run the app
npm run dev    # or yarn dev

# 🔗 Open in browser
# http://localhost:5173

`````

## 📩 Contact & Support

If you have any questions, feedback, or need support, feel free to reach out:

- 📧 Email: [hemantmedhsia@gmail.com](mailto:hemantmedhsia@gmail.com)
- 🐞 Bug Reports: [Create an issue](https://github.com/HemantMedhsia/Portfolio2025/issues)
- ⭐ Suggestions & Features: [Start a discussion](https://github.com/HemantMedhsia/Portfolio2025/discussions)
- 🤝 Want to Contribute? [Fork the repo](https://github.com/HemantMedhsia/Portfolio2025/fork) and submit a PR!

---

> Your support matters! If you liked this project, don’t forget to ⭐ star the repository and share it with others.



