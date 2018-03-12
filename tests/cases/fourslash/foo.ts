/// <reference path='fourslash.ts' />

// @allowJs: true

// @Filename: /a.js
////exports.z = 2;
////exports.f = function() {
////    exports.z; 0;
////}

verify.codeFix({
    description: "Convert to ES6 module",
    // TODO: GH#22492
    newFileContent:
`const _z = 2;
export { _z as z };
export function f(z) {
        z  0;
}`,
});
