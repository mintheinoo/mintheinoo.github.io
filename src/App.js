// Import necessary dependencies
// import React from 'react';
import './App.css'; 
// Header component
const Header = () => {
  return (
    <header>
      <h1>Khine Thin Zar Htun</h1>
      <p>Embedded Software Engineer</p>
    </header>
  );
};

// CareerObjective component
const CareerObjective = () => {
  return (
    <section id="career-objective">
      <h2>Career Objective</h2>
      <p>
        Enthusiastic Embedded Software Engineer with a solid foundation in software development
        and a focus on embedded systems. Seeking a challenging position where I can apply my
        talents in developing, coding, testing, and debugging software for embedded platforms
        into practice. I want to contribute to innovative projects and expand my experience
        in the ever-changing field of embedded systems.
      </p>
    </section>
  );
};

// Education component
const Education = () => {
  return (
    <section id="education">
      <h2>Education</h2>
      <div>
        <p>February 2022 - November 2023</p>
        <p>University of Adelaide</p>
        <p>Master of Computer Science</p>
        <p>GPA: 6.214/7.0</p>
        <p>Graduation thesis title: "Automated and Precise Anatomical Landmark Detection in Hip X-Rays: Harnessing AI"</p>
        <p>Core Coursework: Applied Natural Language Processing, Distributed Systems, Event-driven Computing, Secure Software Engineering, and Applied Machine Learning</p>
      </div>
      <div>
        <p>December 2013 - October 2019</p>
        <p>Yangon Technological University</p>
        <p>Bachelor of Engineering</p>
        <p>GPA: 4.6/5.0</p>
        <p>Graduation thesis title: "Terahertz Compressed Sensing Tomography System"</p>
        <p>Core Coursework: Electronic Control Engineering, Electronic Communication Engineering, Electronic Signal Processing Engineering, Computer Engineering, and Semiconductor Engineering</p>
      </div>
    </section>
  );
};

// WorkExperience component
const WorkExperience = () => {
  return (
    <section id="work-experience">
      <h2>Work Experience</h2>
      {/* Add your work experience details here */}
    </section>
  );
};

// Publications component
const Publications = () => {
  return (
    <section id="publications">
      <h2>Publication</h2>
      <p>Htun, K. T. Z., Wu, B. Y., Wang, F. L., Hung, Y. C., & Yang, S. H. (2020, April). Terahertz LASSO compressed sensing tomography system. In Terahertz Photonics (Vol. 11348, p. 113480O). International Society for Optics and Photonics</p>
    </section>
  );
};

// PartTimeWorkExperience component
const PartTimeWorkExperience = () => {
  return (
    <section id="part-time-work-experience">
      <h2>Part-Time Work Experience</h2>
      {/* Add your part-time work experience details here */}
    </section>
  );
};

// Skills component
const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        <li>Java, Python, MATLAB, AutoCAD</li>
        <li>Machine Learning</li>
        <li>Radio Frequency Engineering, Optical Engineering</li>
        <li>Research and Planning</li>
        <li>Leadership</li>
        <li>English (Fluent), Burmese (Native)</li>
        <li>Signal Processing</li>
      </ul>
    </section>
  );
};

// Achievements component
const Achievements = () => {
  return (
    <section id="achievements">
      <h2>Achievements & Extracurricular Activities</h2>
      <ul>
        <li>Achieved Adelaide Graduate Award bestowed by the University of Adelaide (2023)</li>
        <li>Volunteered as Peer Assisted Study Sessions (PASS) leader at the University of Adelaide (2023)</li>
        <li>Achieved the Honda Young Engineer and Scientist's Award in Myanmar (2018)</li>
        <li>Competed in YTU Innovation Challenge under subtopic "Smart Waste Treatment and Water Management" (2018)</li>
        <li>Served as a volunteer in Myanmar Youth Technopreneurship Development Program (2018)</li>
        <li>Volunteered as a teaching assistant in Microsoft Word for Thesis course (2017)</li>
      </ul>
    </section>
  );
};

// App component
const App = () => {
  return (
    <div>
      <Header />
      {/* <CareerObjective />
      <Education />
      <WorkExperience />
      <Publications />
      <PartTimeWorkExperience />
      <Skills />
      <Achievements /> */}
    </div>
  );
};

// Export the Portfolio component
export default App;
