import { useState,useEffect } from "react";


export default function MySkills() {
  let skills =[
    {
      "id": "1",
      "src": "./img/product-chain-1.png",
      "title": "Front-End",
      "description": "I specialize in creating websites that provide a seamless user experience across all devices and screen sizes. From smartphones to desktops, my designs adapt effortlessly to ensure accessibility and usability for all users."
    },
    {
      "id": "2",
      "src": "./img/tag-1.png",
      "title": "Back-End",
      "description": "I specialize in backend development using Node.js, a versatile and efficient JavaScript runtime. With Node.js, I create robust and scalable server-side applications that power dynamic and data-driven websites and web applications."
    },
    {
      "id": "3",
      "src": "./img/feather-pen-2.png",
      "title": "UI & UX Design",
      "description": "My frontend portfolio includes in-depth case studies showcasing my expertise in user interface (UI) and user experience (UX) design. Through meticulous research, wireframing, prototyping, and user testing."
    },
    {
      "id": "4",
      "src": "./img/feather-pen-1.png",
      "title": "Problem Solving",
      "description": "I possess strong problem-solving skills, which I apply across various domains, from frontend and backend development to algorithmic challenges. My approach involves breaking down complex problems into manageable components, identifying patterns."
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
