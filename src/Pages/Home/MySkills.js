import { useState,useEffect } from "react";


export default function MySkills() {
  let [skills,setskills] = useState();
  let api =async()=>{
    let dta = await fetch("https://filthy-cyan-button.cyclic.app/skills")
    let data = await dta.json()
    setskills(data)
  
  }
  useEffect(()=>{
    api()
  },[])
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
