
import { useEffect, useState } from "react";

const Card = ({ title }) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked]);

  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>
        {title} <br />
         {count}
      </h2>

      <button
        className="button"
        onClick={(e) => {
          e.stopPropagation(); 
          setHasLiked(!hasLiked);
          setCount(count + 1); 
        }}
      >
        {hasLiked ? "❤️" : "🩶"}
      </button>
    </div>
  );
};


const App = () => {
  return (
    <div className="card-container">
      <Card title="Star Wars" />
      <Card title="Avatar" />
      <Card title="The Lion King" />
      <Card title="The Demon Slayer" />
      <Card title="The Demon Hunter" />
    </div>
  );
};

export default App;
