import data from '../data/players.json';
import TierSection from '../components/TierSection';

export default function Home() {
  return (
    <div className="container">
      <h1>🔥 McAsianTiers</h1>

      <div className="grid">
        <TierSection title="Tier 1" players={data.tier1} color="#f1c40f"/>
        <TierSection title="Tier 2" players={data.tier2} color="#bdc3c7"/>
        <TierSection title="Tier 3" players={data.tier3} color="#e67e22"/>
        <TierSection title="Tier 4" players={data.tier4} color="#34495e"/>
        <TierSection title="Tier 5" players={data.tier5} color="#2c3e50"/>
      </div>
    </div>
  );
    }
