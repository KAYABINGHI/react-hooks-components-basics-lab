import React from "react";

function Navbar() {
  return <nav>Navbar</nav>;
}

function Home() {
  return (
    <div id="home">
      Home
    </div>
  );
}

function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;