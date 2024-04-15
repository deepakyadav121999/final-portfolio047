import { useState,useEffect } from "react";


export default function MySkills() {
  let skills =[
    {
      "id": "1",
      "src": "./img/product-chain-1.png",
      "title": "Front-End",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique"
    },
    {
      "id": "2",
      "src": "./img/tag-1.png",
      "title": "Back-End",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique"
    },
    {
      "id": "3",
      "src": "./img/feather-pen-2.png",
      "title": "UI & UX Design",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique"
    },
    {
      "id": "4",
      "src": "./img/feather-pen-1.png",
      "title": "Problem Solving",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique"
    }
  ]
 
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        {skills&& skills.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
