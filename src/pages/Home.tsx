import "../App.css";
export function Home() {
  return (
    <div className="videoWrapper">
      <video loop autoPlay muted>
        <source src="video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
