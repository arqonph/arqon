import "@google/model-viewer";

const Model = () => (
  <div id="card">
    <model-viewer
      src="assets/scene.glb"
      ios-src=""
      poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
      alt="arqon"
      shadow-intensity="1"
      camera-controls
      auto-rotate
      ar
    ></model-viewer>
  </div>
);

export default Model;
