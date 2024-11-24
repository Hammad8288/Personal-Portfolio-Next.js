export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "Git & GitHub",
  ];

  return (
    <section className="py-20" id="Skills">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">My Skills</h2>
        <p className="text-lg mb-6">
          Here are some of the technologies I have been working with recently:
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#0f2a3f] p-4 rounded-lg shadow-lg hover:bg-blue-500 transition-transform hover:scale-105 cursor-pointer"
            >
              <p className="text-lg font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
