# Toast Component Project

## Joy of React, Project II

In this project, we'll dive deep into the implementation of a single common UI component: A `<Toast>` message component.

![Screen recording showing 3 toast messages popping up from user input](./docs/toast-demo.gif)

## To create new components

```bash
# Create a new component:
npm run new-component [TheNewComponentName]
```

## Troubleshooting

If you run into any weird errors when trying to run a development server, start by deleting the `.parcel-cache` directory. This directory holds temporary automatically-generated files, and sometimes things get out of sync, and they need to be deleted.

### Cannot Destructure ToastPlayground

Several students have reported getting an error like this, when saving files:

> TypeError: Cannot destructure property 'handleToastAddition' of '(0 , \_reactDefault.default).useContext(...)' as it is undefined

This can happen if you try to pull a value from context when that value hasn’t been provided. Double-check that your Provider component is wrapping around the entire application.

That said, I’ve also heard from some students who have said that they get this error when saving files, despite the fact that everything works correctly when refreshing the page. This appears to be a bug with Parcel, the bundler we’re using in this project. **As annoying as it is, I would encourage you not to worry about this.** In real-world projects, I’d recommend using a full-stack framework like Next.js or React Router 7+, where you won’t run into this issue.

### Other issues

If you're running into other issues, please let us know in Discord. Please include the error message, your environment (browser/OS), and any changes you've made to the code.

Also, please try deleting the `.parcel-cache` directory first, to rule out any cache issues.

---

## Exercise 6: Extracting a custom hook

Whew! We've done quite a bit with this lil’ `Toast` component!

In the previous exercise, we added an “escape” keyboard shortcut, to dismiss all toasts in a single keystroke. This is a very common pattern, and it requires a surprising amount of boilerplate in React.

Let's build a **custom reusable hook** that makes it easy to reuse this boilerplate to solve future problems.

There are lots of different ways to tackle this, and there's no right or wrong answer, but here's one idea to get you started: what if we create a new custom hook called `useEscapeKey`?

```js
useEscapeKey(() => {
  // Code to dismiss all toasts
});
```

**This is an open-ended exercise.** Feel free to experiment with different APIs and see what works best for you!

**Acceptance Criteria:**

- We want to create a new generic hook that makes it easy to listen for `keydown` events in React. It's up to you to come up with the best “consumer experience”.
- Because this is a generic hook, it shouldn't be stored with the `ToastProvider` component. Create a new `/src/hooks` directory, and place your new hook in there.
- The `ToastProvider` component should use this new hook.
- **Make sure there are no ESLint warnings.**
  - The easiest way to see ESLint warnings is through the [ESLint VS Code extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint). With this extension installed, ESLint warnings are shown as squiggly yellow underlines. You can view the warning by hovering over the underlined characters, or by opening the “Problems” tab (`⌘` + `Shift` + `M`, or Ctrl + `Shift` + `M`).
  - If you use another editor, you can search for the ESLint extension. Fortunately, ESLint is very popular, and extensions should exist for all common editors.
