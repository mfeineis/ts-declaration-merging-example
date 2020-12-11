// Using the ambient declaration the type checker is able to find `MyLib`
console.log(window.MyLib.stuff);
window.MyLib = {
    stuff: true,
};