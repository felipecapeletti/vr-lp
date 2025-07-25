import "@google/model-viewer";

export default function ModelViewer({ src }) {
  return (
    <model-viewer
      src={src}
      alt="Modelo 3D"
      auto-rotate
      camera-controls
      environment-image="neutral"
      shadow-intensity="1"
      exposure="1"
      style={{ width: "100%", height: "100%" }}
    ></model-viewer>
  );
}