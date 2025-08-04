import "@google/model-viewer";
import "@google/model-viewer";

export default function ModelViewer({ src }) {
  return (
    <model-viewer
      src={src}
      alt="Modelo 3D"
      camera-controls
      disable-zoom
      disable-pan
      auto-rotate
      interaction-prompt="none"
      environment-image="neutral"
      shadow-intensity="0"
      exposure="1"
      ar="false"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
