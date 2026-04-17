# Toast Component Project

## Joy of React, Project II

In this project, we'll dive deep into the implementation of a single common UI component: A `<Toast>` message component.

![Screen recording showing 3 toast messages popping up from user input](./docs/toast-demo.gif)

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
