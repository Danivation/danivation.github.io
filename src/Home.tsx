import { Link } from "react-router";
import "./index.css"
// import { Project } from "./components/Project";

export function Home() {
  return (
    <>
      <div className="fadein-200">
        <p className="py-8 items-center justify-center text-center">
          <span className="text-6xl font-medium">I'm Daniel,</span><br />
          <span className="text-xl">a <Link to="/projects" className="underline">programmer</Link> and <Link to="/robotics" className="underline">robotics enthusiast</Link>.</span>
        </p>
      </div>
      <div className="fadein-400">
        <p className="pb-8 text-center">
          I'm the programmer for V5RC team 5069Y.<br />
          I like to code in my free time. I have a lot of free time.<br />
          I know C/C++, Python, HTML/JS/CSS, React, and some others.<br />
          I am interested in engineering, robotics, and much more.
        </p>
      </div>
      <div className="fadein-600">
        <hr className="my-3"/>
        <p className="text-4xl font-medium m-5 text-center items-center justify-center">Featured Projects</p>
        <div className="grid grid-cols-3 items-center justify-center gap-10 px-2 py-2">
          {/* <div />
          <Project id="dotlists" />
          <div /> */}
        </div>
      </div>
    </>
  );
}