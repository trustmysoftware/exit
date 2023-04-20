# exit-it

Exit-it is a wrapper for process.exit().

## Install

    npm install exit-it

## Usage

```js
import { exit } from "./index.js";

exit(1);
```

or

    npx exit-it

This will spawn a program that immediately exits (after printing some info).

## features

- return any exit code you want!

    `exit()` was made with the power-user in mind, letting you signal any number of error-codes to the parent process! The number can mean anything you want! (but usually 0 is reserved for 'success').

- uses github provenance!

    good practice for developers to do meaningful audits of the NPM package!
