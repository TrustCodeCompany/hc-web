# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

```
hc-web
├─ .prettierrc.json
├─ README.md
├─ coverage
│  ├─ clover.xml
│  ├─ coverage-final.json
│  ├─ lcov-report
│  │  ├─ base.css
│  │  ├─ block-navigation.js
│  │  ├─ favicon.png
│  │  ├─ index.html
│  │  ├─ prettify.css
│  │  ├─ prettify.js
│  │  ├─ sort-arrow-sprite.png
│  │  ├─ sorter.js
│  │  └─ src
│  │     ├─ App.tsx.html
│  │     ├─ TestComponent.tsx.html
│  │     ├─ components
│  │     │  ├─ Hello.tsx.html
│  │     │  ├─ Hello2.tsx.html
│  │     │  ├─ Hello3.tsx.html
│  │     │  └─ index.html
│  │     ├─ config
│  │     │  └─ jest
│  │     │     ├─ index.html
│  │     │     └─ setupTests.ts.html
│  │     ├─ index.html
│  │     ├─ main.tsx.html
│  │     └─ vite-env.d.ts.html
│  └─ lcov.info
├─ eslint.config.js
├─ index.html
├─ jest.config.ts
├─ jest.setup.ts
├─ package-lock.json
├─ package.json
├─ pnpm-lock.yaml
├─ public
│  └─ vite.svg
├─ src
│  ├─ App.css
│  ├─ App.tsx
│  ├─ __tests__
│  │  ├─ Hello.test.tsx
│  │  ├─ Hello2.test.tsx
│  │  └─ Hello3.test.tsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ components
│  │  ├─ Hello.tsx
│  │  ├─ Hello2.tsx
│  │  └─ Hello3.tsx
│  ├─ config
│  │  └─ jest
│  │     └─ setupTests.ts
│  ├─ index.css
│  ├─ main.tsx
│  ├─ modules
│  │  └─ pets
│  │     ├─ adapters
│  │     │  └─ ApiPetAdapter.ts
│  │     ├─ components
│  │     │  ├─ petItem
│  │     │  │  ├─ PetItem.tsx
│  │     │  │  └─ petItem.css
│  │     │  └─ petList
│  │     │     ├─ PetsList.tsx
│  │     │     └─ petList.css
│  │     ├─ context
│  │     │  └─ PetStore.ts
│  │     ├─ entities
│  │     │  └─ Pet.ts
│  │     ├─ infrastructure
│  │     │  └─ ApiPetRepository.ts
│  │     ├─ pages
│  │     │  └─ petsPage
│  │     │     ├─ PetsPage.tsx
│  │     │     └─ petsPage.css
│  │     ├─ repositories
│  │     │  └─ PetRepository.ts
│  │     └─ usecases
│  │        ├─ AddPetUseCase.ts
│  │        ├─ DeletePetUseCase.ts
│  │        ├─ GetPetsUseCase.ts
│  │        └─ UpdatePetUseCase.ts
│  └─ vite-env.d.ts
├─ test
│  └─ __mocks__
│     └─ fileMock.js
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```