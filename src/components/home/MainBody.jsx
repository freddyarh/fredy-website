import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Typist from 'react-typist-component';
import { Jumbotron } from "./migration";
import laptopCodeImage from '../../assets/img/laptop-code.svg';

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    const [loopKey, setLoopKey] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setLoopKey(prevKey => prevKey + 1);
      }, 14000);

      return () => clearInterval(interval);
    }, []);

    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(136deg,${gradient})`,
          backgroundSize: "1200% 1200%",
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <Container className="text-center">
          <img src={laptopCodeImage} alt="Description of SVG" className="svg-image" style={{ width: '150px', height: 'auto' }}/>
          <h1 ref={ref} className="display-4"  style={{ fontWeight: 500 }}>
            {title}
          </h1>
            
          <div className="display-6">
          <Typist key={loopKey} typingDelay={100} cursor={<span className='cursor'>|</span>}>
            Full Stack Developer
            <Typist.Backspace count={20} />
            <Typist.Delay ms={1500} />
            Web Developer
            <Typist.Backspace count={17} />
            <Typist.Delay ms={1500} />
            Mobile Developer
            <Typist.Backspace count={16} />
            <Typist.Delay ms={1500} />
          </Typist>
          </div>
          <div className="p-5">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i className={`fab ${icon.image}  fa-3x socialicons`} />
              </a>
            ))}
          </div>
          <a
            className="btn btn-outline-light btn-lg "
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
          >
            More about me
          </a>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
