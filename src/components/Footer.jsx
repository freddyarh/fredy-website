import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = {
    backgroundColor: "var(--color-surface)",
    borderTop: "1px solid var(--color-border)",
    color: "var(--color-text-muted)",
  };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center">
      <Container>
        {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" style={{ color: "var(--color-accent-secondary)" }} /> by{" "}
        <a
          rel="noopener"
          href="https://github.com/freddyarh"
          aria-label="My GitHub"
        >
          <span
            className="badge"
            style={{
              backgroundColor: "var(--color-surface-elevated)",
              color: "var(--color-accent)",
            }}
          >
            Fredy Aristizabal
          </span>
        </a>{" "}
        using <i className="fab fa-react" style={{ color: "#61dafb" }} />{" "}
        inspired by{" "}
        <a
          rel="noopener"
          href="https://github.com/hashirshoaeb"
          aria-label="My GitHub"
        >
          <span
            className="badge"
            style={{
              backgroundColor: "var(--color-surface-elevated)",
              color: "var(--color-text-muted)",
            }}
          >
            Hashir Shoaeb
          </span>
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
