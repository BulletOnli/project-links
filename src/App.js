import React from "react";
import './index.css'
import projectData from "./projectData";
import Project from "./components/Project";

function App() {
  return (
    <>
      <p className="header-title">My Projects</p>
      {projectData.map(data => (
        <Project key={data.id} data={data} onClick={() => window.open(data.url)}/>
      ))}
      <a href="https://github.com/BulletOnli">See more! <i class="fa-solid fa-arrow-right"></i></a>
    </>
  );
}

export default App;
