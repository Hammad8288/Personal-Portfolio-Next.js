import Image from "next/image";
export default function Projects() {
  const Projects = [
    {
      id: 0,
      title: "Currency Converter",
      desc: "Get a fast and easy calculator for converting one currency to another using the latest live exchange rates",
      Image: "/currency.jpg",
      tags: ["HTML", "CSS", "TS"],
      vercelLink: "https://js-currency-converter-six.vercel.app/",
      githubLink: "https://github.com/Hammad8288/JS-Currency-Converter",
    },
    {
      id: 1,
      title: "Tic-Tac-Toe Game",
      desc: "The game is played on a grid that is 3 squares by 3 squares.",
      Image: "/tic-tac-toe.png",
      tags: ["HTML", "CSS", "TS"],
      vercelLink: "https://tic-tac-toe-game-dun-two.vercel.app/",
      githubLink: "https://github.com/Hammad8288/Tic-Tac-Toe-Game",
    },
    {
      id: 2,
      title: "Weather App",
      desc: "You can get any country live weather update.",
      Image: "/weather.jpg",
      tags: ["HTML", "CSS", "TS"],
      vercelLink: "https://js-weather-app-phi.vercel.app/",
      githubLink: "https://github.com/Hammad8288/JS-weather-app",
    },
    {
      id: 3,
      title: "Analog Clock",
      desc: "A clock is a machine in which a device that performs regular movements in equal intervals of time is linked to a counting mechanism that records the number of movements.",
      Image: "/analog-clock.jpg",
      tags: ["HTML", "CSS", "TS"],
      vercelLink: "https://js-analog-clock-rust.vercel.app/",
      githubLink: "https://github.com/Hammad8288/JS-Analog-Clock",
    },
    {
      id: 4,
      title: "Resume Builder",
      desc: "With this project, you will create a CV that shows you at your Best..",
      Image: "/resume-builder.png",
      tags: ["HTML", "CSS", "TS"],
      vercelLink: "https://hackathons-milestones-5.vercel.app/",
      githubLink:
        "https://github.com/Hammad8288/Hackathons-Milestones/tree/main/Shareable%20Resume",
    },
  ];

  return (
    <section className="bg-[#081b29] py-20 text-white " id="Projects">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <div className="grid gap-10 px-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#0f2a3f] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={project.Image}
              alt={project.title}
             width={300}
              height={100}
              className=" "
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-sm mt-2">{project.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-500 text-xs font-bold px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex space-x-4">
                <a
                  href={project.vercelLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-sm  font-semibold px-4 py-2 rounded"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-800  text-sm font-semibold px-4 py-2 rounded"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
