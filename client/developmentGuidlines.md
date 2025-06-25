# Project standards

## Naming Convention

Files and folders should follow **camelCase** except component files, which should be in **PascalCase**.  
**Note:** All folder names should start with a lowercase letter (e.g., `exampleFolder`).

### Components

- Components should be named in PascalCase and be self-descriptive.
- A component's CSS module should match the component name **exactly**, followed by `.module.css`.
- A component and its CSS module should be stored inside a dedicated folder for that component e.g:

  - component/
    - Component.tsx
    - Component.module.css

- Props should be typed using a `type`, e.g.:
  ```ts
  type MyProps = {
  	prop1: string;
  	prop2: number;
  };
  ```

### Hooks

Hooks must start with the word `use` and be self-descriptive (e.g. `useScrollToTop.ts`).

## Summary

### PascalCase:

- Component file names (e.g. `MyButton.tsx`).
- CSS module files (e.g. `MyButton.module.css`).
- Model names (types, interfaces, enums) **NOTE:** only the name for the model and NOT the file.

### camelCase (default):

- Folder names (e.g. `assets`, `components` and `pages`).
- Non-component file names (e.g. `squareService.ts`, `formatDate.ts` and `useInsertSquare.ts`)
- Function and hook names (e.g. `handleClick`, `formatDate` and `useInsertSquare`).
- CSS class names (e.g. `.container`, `primaryButton` and `squareContainer`).

## File Standard

- Keep files under 200 lines if possible.
- Separate different responsibilities into its own modules.

## Folder Structure

- src/
  - assets/
    - styles/
      - variables/ - Variable files (e.g. `colors.css` and `spacing.css`)
      - global.css - Global styles
  - components/
    - ui/ - Pure UI components (e.g. `buttons` and `dialog`)
      - buttons/
        - primaryButton/ **Component folder structure**
          - PrimaryButton.tsx
          - PrimaryButton.module.css
    - utils/ - Commonly used utility functions (e.g. `formatDate.ts`)
      - formatDate.ts
    - hooks/
      - data/ - Data interaction hooks grouped by domain
        - square/
          - useGetSquares.ts
          - useInsertSquare.ts
      - utils/ - Commonly used hooks (e.g. `useScrollToTop.ts`)
        - useScrollToTop.ts
  - pages/ Routable pages
    - homePage/
      - HomePage.tsx
      - HomePage.module.css
    - notFoundPage/
      - NotFoundPage.tsx
      - NotFoundPage.module.css
  - services/ - Service logic (one folder per service)
    - squareApi/
      - squareApi.ts
        - partials/
          - getAllSquares.ts
          - insertSquare.ts
    - App.tsx
    - main.tsx
    - vite-env.d.ts
    - .env.example
    - README.md
    - index.html
    - Config files, e.g. `tsconfig.app.json`, `eslint.config.js` & `package.json`
