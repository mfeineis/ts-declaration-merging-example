// Ambient declarations are like C header files, try not to put code into your header files

declare interface MyLib {
    stuff: boolean;
}

// TypeScript merges this declaration with the global `Window` interface
// so that your code knows about this "augmented" global
declare interface Window {
    // You might want to use `readonly` if you don't want all of your code
    // to assume that your library is mutable
    MyLib: MyLib;
}