# ts-declaration-merging-example
Demonstrates how to declare a global object on `window` in TypeScript.

* 1) Add a new `ambient.d.ts` file to your project, this should not contain code so putting it in the top-level should be ok. In this file we declare the so-called "ambient context" for our app.
* 2) The project code now sees our new global property with the correct type

See [TypeScript Declaration Merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html) for details.
