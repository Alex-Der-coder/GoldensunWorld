import Image from "next/image";


export default function Home() {
  return (
<div className="video-container">
  <iframe
    src="https://www.youtube.com/embed/CSVN7HGLKkU?list=PLmKzt4avW8iLpm1sXSsT7OKnohNo5V6cg"
    title="The First Book / Title Screen (Restored - Roland SC-88) - Golden Sun"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen>
  </iframe>
</div>
  );
}

