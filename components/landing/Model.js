import "@google/model-viewer";

const Model = () => (
  <div className="container">
    <div className="modelObject">
      <model-viewer
        src="/Arqon_scene.glb"
        ios-src=""
        poster=""
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
