import React, { useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  repos,
  leadership,
  skills,
  getInTouch,
  experiences
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
// import { Blog } from "./components/blog/Blog";
// import BlogPost from "./components/blog/BlogPost";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Leadership from "./components/home/Leadership.jsx";

import Experience from "./components/home/Experience";

const Home = React.forwardRef((props, ref) => {
  const parentRef = useRef();

  useEffect(() => {
    if(!parentRef.current){
      return;
    }

    const options = {
      root: parentRef.current,
      rootMargin: '0px',
      threshold: 0.28
    }

          const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        })
      }, options)

    const elements = document.querySelectorAll('.section-1');
    elements.forEach(element => {
      observer.observe(element)
    })

    return () => {
      observer.disconnect();
    } 
  }, []);
  return (
    <div ref={parentRef} className="parent" >
      <div className="section-1">
        <MainBody
          gradient={mainBody.gradientColors}
          title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
          message={mainBody.message}
          icons={mainBody.icons}
          ref={ref}
        />
      </div>
      <div className="section-1">
        {about.show && (
          <AboutMe
            heading={about.heading}
            message={about.message}
            link={about.imageLink}
            imgSize={about.imageSize}
            resume={about.resume}
          />
        )}
      </div>
      <div className="section-1">
        {
          experiences.show && (
            <Experience experiences={experiences}/>
          )
        }
      </div>
      <div className="section-1">
        {repos.show && (
          <Project
            heading={repos.heading}
            username={repos.gitHubUsername}
            length={repos.reposLength}
            specfic={repos.specificRepos}
          />
        )}
      </div>
      <div className="section-1">
        {leadership.show && (
          <Leadership
            heading={leadership.heading}
            message={leadership.message}
            img={leadership.images}
            imageSize={leadership.imageSize}
          />
        )}
      </div>
      <div className="section-1">
        {skills.show && (
          <Skills
            heading={skills.heading}
            hardSkills={skills.hardSkills}
            softSkills={skills.softSkills}
          />
        )}
      </div>
      <div className="section-1">
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
      </div>
    </div>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Routes>
        <Route path="/" exact element={<Home ref={titleRef} />} />
      </Routes>
      {/* {false && <Route path="/blog" exact component={Blog} />}
      {false && <Route path="/blog/:id" component={BlogPost} />} */}
      {/* <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer> */}
    </BrowserRouter>
  );
};

export default App;
