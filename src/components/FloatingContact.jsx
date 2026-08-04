import React, { useEffect, useState } from "react";
import { mainBody, getInTouch } from "../editable-stuff/config.js";

const FloatingContact = () => {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const floating = getInTouch.floating || {};
  const style = floating.style || "fab";

  const toggleExpanded = () => setExpanded((prev) => !prev);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.5);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!getInTouch.show || floating.show === false) {
    return null;
  }

  const links = [
    {
      icon: "fa-github",
      url: mainBody.icons.find((i) => i.image === "fa-github")?.url,
      label: "GitHub",
    },
    {
      icon: "fa-linkedin",
      url: mainBody.icons.find((i) => i.image === "fa-linkedin")?.url,
      label: "LinkedIn",
    },
    {
      icon: "fa-envelope",
      url: `mailto:${getInTouch.email}`,
      label: floating.label || "Email me",
    },
  ].filter((link) => link.url);

  const primaryHref =
    floating.primaryAction === "section"
      ? `${process.env.PUBLIC_URL}/#getintouch`
      : `mailto:${getInTouch.email}`;

  if (style === "fab") {
    return (
      <div
        className={`floating-contact floating-contact--fab ${
          visible ? "floating-contact--visible" : ""
        } ${expanded ? "floating-contact--expanded" : ""}`}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        {expanded && (
          <div className="floating-contact__menu">
            {links
              .filter((link) => link.icon !== "fa-envelope")
              .map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="floating-contact__link"
                  aria-label={link.label}
                  title={link.label}
                >
                  <i className={`fab ${link.icon}`} />
                </a>
              ))}
          </div>
        )}
        <div className="floating-contact__fab-row">
          <button
            type="button"
            className="floating-contact__toggle d-md-none"
            onClick={toggleExpanded}
            aria-label="Show more contact options"
            aria-expanded={expanded}
          >
            <i className={`fas fa-${expanded ? "times" : "ellipsis-h"}`} />
          </button>
          <a
            href={primaryHref}
            className="floating-contact__fab"
            aria-label={floating.label || "Contact me"}
            title={floating.label || "Contact me"}
          >
            <i className="fas fa-envelope" />
            <span className="floating-contact__fab-label">
              {floating.label || "Email me"}
            </span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`floating-contact floating-contact--icons ${
        visible ? "floating-contact--visible" : ""
      }`}
      aria-label="Quick contact links"
    >
      {links.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target={link.icon === "fa-envelope" ? "_self" : "_blank"}
          rel="noopener noreferrer"
          className="floating-contact__link"
          aria-label={link.label}
          title={link.label}
        >
          <i
            className={`${link.icon === "fa-envelope" ? "fas" : "fab"} ${link.icon}`}
          />
        </a>
      ))}
    </div>
  );
};

export default FloatingContact;
