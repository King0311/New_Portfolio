import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import ProjectLinks from "../ProjectLinks/ProjectLinks";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";

export default function ProjectCard({ repo, theme }) {
  const styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    cursor: "pointer",
    borderRadius: "5px",
    height: "auto",
    transition: "all 0.2s ease-in-out",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
    },
  });

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          {...styles}
          key={repo.id}
          style={{ backgroundColor: theme.projectCard, minHeight: "350px" }}
        >
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {repo.description}
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <div
              className="repo-details"
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <ProjectLanguages logos={repo.languages} />
            </div>
            <div
              className="repo-details"
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <ProjectLinks logos={repo.links} />
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
