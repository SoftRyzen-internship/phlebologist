# Phlebologist website

This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
Technologies used:

- Next.js (app router)
- TypeScript
- Tailwind CSS
- Tina CMS

## Design Layout

_(in progress)_

## Getting Started

1. Clone repo

```bash
git@github.com:SoftRyzen-internship/phlebologist.git
```

> if you don't have access to repo - contact
> [@LanaSvetCat](https://t.me/LanaSvetCat) in telegram

1. Recommended for use **npm** - `npm i` or `npm install`
2. Create file `.env.local` in the project root using `.env.local.example` as a
   template
3. Run the local server via `npm run dev` command. The `dev` command launches
   CMS first and then launches the main server.
4. Access the website at `http://localhost:3000`. The admin panel is available
   at `http://localhost:3000/admin`.

### Personal branch

1. Go to **dev** branch (`git checkout dev`) and fetch the contents
   (`git pull`).
2. Create your working branch from **dev**. The naming policy for the branches
   is: **add/update/fix/delete** + **feature name** + **your surname**.

### Pre-commit actions

1. Run `npm run format` so that prettier could check and adjust your formatting.
2. Run `npm run test-all` if you'd like to perform a full code test. This
   command will also be executed automatically before commiting your changes to
   GH.
3. Fix the errors and if there are none - you can go ahead with commiting your
   changes to your branch.
4. Make sure to give your commit a name that clearly states what has been done:
   **add/update/fix/remove** + **feature/component name**. Example: _"update
   Header types & styles"_.

### Pull requests

1. Before creating a PR, make sure to `git pull` the current version of **dev**
   into your branch and resolve the conflicts locally.
2. When creating a PR, make sure to choose **dev** as a branch to merge your
   working branch into.
3. Request your PR to be reviewed by the Team Lead - **Yana Palamarchuk**
   (**Yana-Palam**).

## Project structure

> Attention! The project structure is not final and can be changed at any time.

**☝️ Create a components folder for each module**

<details>

<summary><b>💡 Example:</b></summary>

<br/>

```
# ✅ Good

├── components
    ├── Header
        ├── Header.tsx
    ├── Footer
        ├── Footer.tsx
```

</details>

---

**☝️ Use the default export for the component**

<details>

<summary><b>💡 Example:</b></summary>

<br/>

```ts
# ✅ Good

const Header = () => { ... }

export default Header;
```

</details>

---

**☝️ Perform a re-export of your component from the `index.ts` file in the
`components` folder**

<details>

<summary><b>💡 Example:</b></summary>

<br/>

```ts
# ✅ Good

// @/components/index.ts

export { default as Header } from '@/components/Header/Header';
```

</details>

---

**☝️ Reusable css classes should be placed in the `styles` folder .**

<details>

<summary><b>💡 Example:</b></summary>

<br/>

```css
/*globals.css */

@layer components {
  .your-class {
    @apply ...;
  }
}
```

</details>

---

**☝️ Description of object structure**

<details>

<summary><b>💡 Structure: </b></summary>

<br/>

```
|-- components -> folder with reusable components
  |-- NameComponent -> folders for each component
    |-- NameComponent.tsx -> main component
    |-- NameComponent.props.ts -> prop types for this component
    |-- NameComponent.module.css -> additional styles for the component (only if necessary)
  |-- index.ts -> file for re-exports
|-- app
  |-- [lang] -> layout, pages and routing
|-- public -> static files
  |-- icons -> folder with icons
  |-- images -> folder with images
|-- styles -> global styles
|-- sections -> folder with section components
  |-- SectionComponent -> folders for each section component
    |-- SectionComponent.tsx -> main section component
    |-- SectionComponent.props.ts -> prop types for this section component
    |-- SectionComponent.module.css -> additional styles for the component (only if necessary)
  |-- index.ts -> file for re-exports
|-- types -> global types
|-- dictionaries -> website content for different locales
|-- data -> data for the project (can be created if necessary)
|-- hooks -> custom users hooks (can be created if necessary)
|-- utils -> helpers, functions, etc.
|-- api -> data fetching requests
```

</details>

---

## 📚 Components API

Each reusable component has its own API. You can find it in the component's
folder. This is a list of most common components and their API.

- ### Heading

| Prop        | Default     | Description                                     |
| ----------- | ----------- | ----------------------------------------------- |
| `tag`       | `h2`        | choose the tag of title you'd need: `h1` - `h3` |
| `variant`   | `primary`   | `main`, `primary`, `secondary`, `tertiary`      |
| `children`  | `undefined` | required, any content                           |
| `className` | `undefined` | add custom or additional css class you'd need   |

- ### ButtonPrimary

The Primary Button has `button` tag and performs an action when clicked.

| Prop            | Default     | Description                                                                    |
| --------------- | ----------- | ------------------------------------------------------------------------------ |
| `view`          | `undefined` | if the button is used in Header, specify `header`                              |
| `active`        | `false`     | if the button is used as tab-title, choose the active state: `false` or `true` |
| `className`     | `undefined` | add any custom styles                                                          |
| `children`      | `undefined` | a necessary prop. any text content                                             |
| `actionHandler` | `black`     | a function that is executed when clicked                                       |

- ### ButtonSecondary

The Secondary Button has `a` tag and performs a transition to another part of
the site when pressed.

| Prop        | Default     | Description                                           |
| ----------- | ----------- | ----------------------------------------------------- |
| `linkto `   | `undefined` | a necessary prop. the address of the link             |
| `view`      | `undefined` | if the button is used in Hero section, specify `hero` |
| `className` | `undefined` | add any custom styles                                 |
| `children`  | `undefined` | a necessary prop. any text content                    |
