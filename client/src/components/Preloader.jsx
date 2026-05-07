import "../styles/preloader.css";

export default function Preloader({ loading }) {
  if (!loading) return null;

  return (
    <div className="queen-preloader">
      <div className="queen-loader-box">
        <h2 className="loader-title">Queenluxe👑</h2>
        <p className="loader-subtitle">Where Elegance Reigns</p>
        <div className="loader-line"></div>
      </div>
    </div>
  );
}