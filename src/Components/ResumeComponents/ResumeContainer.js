import React from "react";

export default function ResumeContainer({
  data: { title, placement, downloadLink, techStack },
}) {
  return (
    <div className="div-resume-container">
      <div
        className={`div-resume-container-bg div-resume-container-bg-${placement}`}
      ></div>
      <div className="div-resume-content">
        <h1>{title}</h1>
        <ul>
          {techStack.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
        <span className="resume-btn-span">
          <button>
            Resume&nbsp;
            <i
              className="fa-solid fa-file-arrow-down"
              style={{ fontSize: "3.2rem" }}
            />
          </button>
        </span>
      </div>
    </div>
  );
}
