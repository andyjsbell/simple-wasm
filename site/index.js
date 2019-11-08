const js = import("./node_modules/@andyjsbell/simple-wasm/simple_wasm.js");
js.then(js => {
    js.greet("Simple Rust with WebAssembly");
});