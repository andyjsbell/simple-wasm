extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

// Our JS function we will call
#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

// This allows this to be called by Javascript
#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}