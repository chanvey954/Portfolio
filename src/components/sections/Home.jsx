import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-4">
          {/* Left side - text */}
          <div className="text-center md:text-left z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Hello, I am Ien Chanvey
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              I'm a full-stack developer who loves crafting clean, scalable web
              applications. My goal is to build solutions that offer both
              exceptional performance and a delightful user experience.
            </p>

            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#project"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-blue-500 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right side - image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="src/assets/profile.png" // put your image in public folder
              alt="Ien Chanvey"
              className="w-72 md:w-96 rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
