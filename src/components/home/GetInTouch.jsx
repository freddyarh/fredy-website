import React from "react";
import { mainBody } from "../../editable-stuff/config.js";

const GetInTouch = ({ heading, message, email }) => {
  const linkedIn = mainBody.icons.find((i) => i.image === "fa-linkedin")?.url;
  const gitHub = mainBody.icons.find((i) => i.image === "fa-github")?.url;

  return (
    <div id="getintouch" className="get-in-touch-card text-center">
      <h2 className="display-5 pb-3">{heading}</h2>
      <p className="lead pb-4" style={{ color: "var(--color-text-muted)" }}>
        {message}
      </p>
    <div className="d-grid gap-2 d-md-flex flex-wrap justify-content-center">
      <a
        className="btn btn-accent-outline btn-lg w-100 w-md-auto"
        href={`mailto:${email}`}
      >
        <i className="fas fa-envelope me-2" /> Email me
      </a>
      {linkedIn && (
        <a
          className="btn btn-accent-outline btn-lg w-100 w-md-auto"
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin me-2" /> LinkedIn
        </a>
      )}
      {gitHub && (
        <a
          className="btn btn-accent-outline btn-lg w-100 w-md-auto"
          href={gitHub}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github me-2" /> GitHub
        </a>
      )}
    </div>
      <p className="mt-4 mb-0" style={{ color: "var(--color-text-muted)" }}>
        <a
          className="text-decoration-none"
          style={{ color: "var(--color-accent)" }}
          href={`mailto:${email}`}
        >
          {email}
        </a>
      </p>
    </div>
  );
};

export default GetInTouch;
