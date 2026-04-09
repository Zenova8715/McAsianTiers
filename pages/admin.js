import { useState } from "react";

export default function Admin() {
  const [name, setName] = useState("");
  const [tier, setTier] = useState("tier1");

  const addPlayer = () => {
    alert(`Add ${name} to ${tier} (connect backend later)`);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin Panel - McAsianTiers</h1>

      <input
        placeholder="Player Name"
        onChange={(e) => setName(e.target.value)}
      />

      <select onChange={(e) => setTier(e.target.value)}>
        <option value="tier1">Tier 1</option>
        <option value="tier2">Tier 2</option>
        <option value="tier3">Tier 3</option>
        <option value="tier4">Tier 4</option>
        <option value="tier5">Tier 5</option>
      </select>

      <button onClick={addPlayer}>Add Player</button>
    </div>
  );
}
