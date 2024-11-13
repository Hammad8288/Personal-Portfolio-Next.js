import Image from "next/image";
export default function About() {
  return (
    <section className="bg-[#081b29] text-white py-20" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-10">
          {/* Profile Image */}
          <div className="mb-8 md:mb-0">
            <Image
              src="/profile.jpg"
              alt="Hammad Ahmed"
              width={700}
              height={200}
              className=" rounded-full object-cover shadow-lg"
            />
          </div>

          {/* About Text */}
          <div>
            {/* Introduction */}
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">
              Introduction
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              Hello! I am <span className="font-semibold">Hammad Ahmed</span>, a
              dedicated Full Stack Developer based in Pakistan. I specialize in
              building high-quality, user-friendly websites that deliver
              excellent performance and responsiveness.
            </p>

            {/* Technical Skills */}
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">
              Technical Skills
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              My primary tech stack includes{" "}
              <span className="font-semibold">
                JavaScript, TypeScript, React, Next.js,
              </span>{" "}
              and <span className="font-semibold">Node.js</span>, along with
              experience in styling frameworks like Tailwind CSS. I am
              passionate about writing clean, maintainable code and following
              best practices to ensure scalability and efficiency.
            </p>

            {/* Personal Interests */}
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">
              Personal Interests
            </h3>
            <p className="text-lg leading-relaxed">
              Outside of development, I love exploring new places, reading about
              technology advancements, and working on side projects. I am always
              eager to learn new skills, and I enjoy collaborating with others
              to bring creative ideas to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
