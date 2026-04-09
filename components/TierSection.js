export default function TierSection({ title, players, color }) {
  return (
    <div className="tier-box">
      <h2 style={{ background: color }}>{title}</h2>
      {players.map((p, i) => (
        <div key={i} className="player">
          ⚔️ {p}
        </div>
      ))}
    </div>
  );
}
