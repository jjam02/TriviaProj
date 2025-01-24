import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function selectCat(event: React.MouseEvent<HTMLButtonElement>): void {
    const button = event.currentTarget; // Get the clicked button
    if (button.classList.contains("selected")) {
      button.classList.remove("selected")
    } else {
      button.classList.add("selected")
    }
  }
  function selectMode(event: React.MouseEvent<HTMLButtonElement>): void {
    const button = event.currentTarget; // Get the clicked button
    const modes = Array.from(document.getElementsByClassName("mode"));
    modes.forEach(mode =>
      mode.classList.remove("selected")
    )
    if (button.classList.contains("selected")) {
      button.classList.remove("selected")
    } else {
      button.classList.add("selected")
    }
  }

  return (
    <>
      <div></div>
      <h1>Welcome To the Trivia Center</h1>
      <h3>Select your game mode</h3>
      <div className="card">
        <button className="mode" onClick={selectMode}>Standard</button>
        <button className="mode time" onClick={selectMode}>Timed</button>
      </div>
      <h3>Select your categories</h3>
      <div>
        <button className="category sci" onClick={selectCat}>
          Science 🧪
        </button>
        <button className="category his" onClick={selectCat}>
          History 🏛️
        </button>
        <button className="category geo" onClick={selectCat}>
          Geography 🌎
        </button>
        <button className="category sport" onClick={selectCat}>
          Sports ⚽️
        </button>
        <button className="category lit" onClick={selectCat}>
          Literature 📚
        </button>
        <button className="category mov" onClick={selectCat}>
          Movies & TV 🎬
        </button>
        <button className="category mus" onClick={selectCat}>
          Music 🎶
        </button>
        <button className="category tech" onClick={selectCat}>
          Technology 🖥️
        </button>
        <button className="category food" onClick={selectCat}>
          Food 🍔
        </button>
        <button className="category game" onClick={selectCat}>
          Video Games 🎮
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
