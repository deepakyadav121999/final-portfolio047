import dk from './dk.png'
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Deepak Yadav</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Front-end</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Hi, I'm Deepak Yadav. A passionate Front-end React Developer
          
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src={dk} alt="Hero Section" />
      </div>
    </section>
  );
}
