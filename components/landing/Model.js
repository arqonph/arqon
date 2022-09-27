import "@google/model-viewer";

const Model = () => (
  <div className="container">
    <div className="modelObject">
      <model-viewer
        src="/Arqon_scene.glb"
        ios-src=""
        poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
        alt="arqon"
        shadow-intensity="1"
        camera-controls
        auto-rotate
        ar
      ></model-viewer>
    </div>
  </div>
);

export default Model;
