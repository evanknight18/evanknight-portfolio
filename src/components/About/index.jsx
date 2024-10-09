import React from 'react';
import profilePicture from '../../assets/small/portraits/evanknight-profile-pic.jpg'; // Replace the path with your actual profile picture path

function About() {
  return (
    <section className="my-5 about-section">
      <div className="my-2">
        <div className="profile-img my-5">
          <img
            src={profilePicture}
            alt="Profile"
            style={{ width: "96px", height: "96px", borderRadius: "50%" }}
          />
        </div>
        <p>Hello! I'm Evan James Knight Sonne, a Denver-based, full-stack web developer and touring musician with a unique blend of creative and technical skills.</p>

        <p>I grew up with the steady rhythm of music shaping my life, as a drummer who has played in 20+ different countries across three continents. The willpower, pattern recognition, and attention to detail I honed during my musical journey have been instrumental in my transition into web development. My background gives me a unique, unconventional perspective when it comes to coding - I like to think of each project as a composition, with different elements coming together in harmony to create a functional, user-friendly experience.</p>

        <p>In 2023, I graduated from the University of Denver's Full Stack Bootcamp, where I refined my technical skills. I pride myself on my focus and my ability to use these tools to craft intricate web applications. I consider myself a perpetual learner, constantly seeking out new technologies and methodologies to sharpen my craft.</p>

        <p>My goal is to leverage my skills and experiences to become a full-time senior full stack developer. I believe that my unique blend of creativity and technical skills, coupled with my commitment to detail and my passion for web development, make me a strong candidate for any development team.</p>

        <p>Fun, unconventional, and always up for a challenge, I'm excited about the future of web development and my role within it. If you're looking for a developer with an out-of-the-box perspective, a knack for pattern recognition, and a proven track record of perseverance, then I'm your man.</p>

        <p>Feel free to explore my portfolio and reach out if you'd like to connect!</p>
      </div>
    </section>
  );
}

export default About;