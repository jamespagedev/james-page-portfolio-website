import React from "react";
import ResumeContainer from "../Components/ResumeComponents/ResumeContainer";
import { resumesData } from "../data/index.js";

export default function Resumes() {
  return (
    <div id="resumes" className="div-resumes">
      <ResumeContainer data={resumesData[0]} />
      <ResumeContainer data={resumesData[1]} />
      <ResumeContainer data={resumesData[2]} />
      <ResumeContainer data={resumesData[3]} />
    </div>
  );
}
