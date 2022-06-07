const sampleImage =
  'https://cdn.jsdelivr.net/gh/contentauth/c2pa-js/tools/testing/fixtures/images/CAICAI.jpg';

(async () => {
  // Initialize the c2pa-js SDK
  const libraryUrl = 'https://cdn.jsdelivr.net/npm/c2pa@0.9.1/+esm';
  const createC2pa = await import(libraryUrl);
  const c2pa = await createC2pa({
    wasmSrc: 'https://cdn.jsdelivr.net/npm/c2pa@0.9.1/dist/assets/wasm/toolkit_bg.wasm',
    workerSrc: 'https://cdn.jsdelivr.net/npm/c2pa@0.9.1/dist/c2pa.worker.min.js',
  });

  // Read in our sample image and get a manifest store
  try {
    const { manifestStore } = await c2pa.read(sampleImage);
    console.log('manifestStore', manifestStore);

    // Get the active manifest
    const activeManifest = manifestStore?.activeManifest;
    console.log('activeManifest', activeManifest);
  } catch (err) {
    console.error('Error reading image:', err);
  }
})();
