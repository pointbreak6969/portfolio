import { forwardRef } from "react";
const About = forwardRef((props, ref)=> {
  return (
    <div ref={ref} className="min-h-[100vh] flex items-center max-w-7xl mx-auto p-5 ">
      <div className="flex flex-col space-y-4 md:space-y-6 w-full md:max-w-2xl">
        <h1 className="text-2xl md:text-6xl font-bold text-white">About Me</h1>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          Hey there! <br /> 👋 I'm a Computer Engineering student who loves to
          code! My coding journey started right after my +2 as a fun hobby.
          Though I had to take a break for a while to focus on studies, I'm now
          back at it - coding away while keeping up with my college work. I have a good knowledge of <span className="text-cyan-200">Development as well as DSA.</span> <br />{" "}
          <br /> What gets me excited? <span className="text-cyan-200">Building stuff that helps solve everyday
          student problems!</span> Being a student myself, I know the struggles we face
          (especially with assignments 😅). So I'm using my coding skills to
          create tools that make these tasks easier. <br /> <br /> Right now,
          I'm working on various projects that tackle real problems I face in
          college. It's amazing how my engineering background and coding skills
          come together to build useful solutions. Want to chat about coding or
          college life? Let's connect! I'm always excited to learn and build new
          things. 🚀
        </p>
        <h2 className="text-xl font-medium">Tech Stacks I am familar with:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl">
          {/* Frontend */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-200">Frontend</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 bg-cyan-200"></div>
                HTML & CSS
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 bg-cyan-200"></div>
                JavaScript (ES6+)
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 bg-cyan-200"></div>
                React
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 bg-cyan-200"></div>
                Tailwind CSS
              </li>
            </ul>
          </div>

          {/* Backend */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-200">Backend</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 bg-cyan-200"></div>
                Node.js
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 bg-cyan-200"></div>
                Express.js
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 bg-cyan-200"></div>
                MongoDB
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 bg-cyan-200"></div>
                REST APIs
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});
export default About;
