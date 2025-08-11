import "./index.css"

export function About() {
  const skillIcons = "vscode,c,cpp,py,js,ts,react,nodejs,nextjs,vite,html,css,tailwind,rust,java,swift,git,github,arduino,blender,cmake,discord,powershell,windows&perline=12"
  return (
    <>
      <div className="fadein-200">
        <p className="py-8 items-center justify-center text-center text-6xl font-medium">
          About Me
        </p>
      </div>
      <div className="fadein-400 pb-8 flex items-center justify-center text-center">
        <a href="https://skillicons.dev">
          <img src={`https://skillicons.dev/icons?i=${skillIcons}`} />
        </a>
      </div>
      <div className="fadein-400">
        <p className="pb-8 md:mx-20 text-center">
          I am a programmer both in my free time and as a member of VEX V5 Robotics team 5069Y. I am passionate about robotics, engineering, coding, aerospace and aviation, transit systems, and urban infrastructure.
        </p>
      </div>
    </>
  );
}