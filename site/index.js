const js = import("./node_modules/@andyjsbell/simple-wasm/simple-wasm.js");
js.then(js => {
    js.greet("Simple Rust with WebAssembly");
});