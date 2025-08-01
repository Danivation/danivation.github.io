import { Link } from "react-router";
import "./index.css"

export function Home() {
  return (
    <>
      <div className="fadein-200">
        <p className="py-8 items-center justify-center text-center">
          <span className="text-6xl">I'm Daniel,</span><br />
          <span className="text-xl">a <Link to="/projects" className="underline">programmer</Link> and <Link to="/projects" className="underline">robotics enthusiast.</Link></span>
        </p>
      </div>
      <div className="fadein-400">
        <hr className="my-3" />
        <p className="px-8">
          I'm the programmer for VEX Robotics team 5069Y.<br />
          I code in my free time. I have a lot of free time.<br />
          I know Python, C/C++, Java, JavaScript, HTML, and some others.<br />
          I am interested in engineering, robotics, aerospace and aviation, transit systems, and urban infrastructure.
        </p>
      </div>
    </>
  );
}