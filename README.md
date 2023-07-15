# slam-react-basic

Favorite React Template and setup by Slam. This Web Application Template was configured for basic React Scripting with some knowledge of certain libraries/frameworks.

## Packages

The main packages are listed as follows:

- React Typescript
- SASS/SCSS
- Redux

## Folder Structure

Here are the necesarry files listed in the folder as a structure visualied below:

```css
src/
├── App.tsx
├── index.tsx
├── index.scss
├── utils/
│   └── (your utility files).ts
├── theme/
│   └── theme.scss
├── store/
│   └── (your store files).ts
├── assets/
│   ├── images/
│   ├── sounds/
│   └── videos/
└── components/
    ├── common/
    │   └── (your common bootstrapped components).tsx
    └── Interface/
        └── Interface.tsx
```

## Flow and Design

Here is my basic workflow/design in this template

- **STYLING** (All Styles are referenced from the parent file. No inline/local css/scss files beside component.)

    ```css
    index.scss
    ^   ^
    │   └── theme.scss
    │
    ├── Component1.tsx
    │   ├── [classes from index.scss]
    │   └── ...
    └── Component2.tsx
        └── ...
    ```

- **COMPONENT HEIRARCHY**

    ```css
    :
    │
    App.tsx
    ^
    │   assets/
    │   ├── images/ ──┓
    │   ├── sounds/ ──┨
    │   └── videos/ ──┨
    │                 |
    │   utils/        v
    │   └── [asset array list].ts
    │                 |
    Interface.tsx <───┙
    ^
    └── components/
        ├── common/
        │   └── (your common bootstrapped components).tsx
        └── custom/
            └── (custom components that doesnt fit in the common context).tsx
    ```
