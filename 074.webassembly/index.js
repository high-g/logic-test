WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObject)
.then(results => {
  console.log(1)
})