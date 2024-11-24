import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col sm:flex-row pt-5 items-start sm:items-center justify-between md:pt-20 ">
      {/* Text Section */}
      <div className="sm:w-1/2">
        <h1 className="text-3xl ml-11 mt-6 font-bold sm:text-4xl">
          Hello! I am <span className="text-blue-500 ">Hammad Ahmed</span>, a
          Software developer based in Pakistan.
        </h1>
        <p className="ml-11 mt-4 text-lg">
          I love building products that are user-friendly, simple, and
          delightful.
        </p>
        <p className="ml-11 mt-4 leading-tight">
          Welcome to my portfolio!👋 I am Hammad Ahmed, a 24 year old passionate
          Full Stack Developer with expertise in modern web technologies like
          TypeScript, Node.js, Next.js, Tailwind CSS, and React.js With a deep
          understanding of both front-end and back-end development, I am always
          open to connecting with like-minded professionals, whether its to
          discuss potential collaborations, share insights, or explore new
          opportunities. Lets contact and build something amazing together!
        </p>
        <div className="flex mt-4 ml-7 ">
          <Link
            href="https://github.com/Hammad8288?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <Image
              src="/github-icon.png"
              alt="GitHub"
              width={80}
              height={40}
              className=" rounded-full"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/hammad-ahmed-7aa73118a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <Image
              src="/linkedin-icon.png"
              alt="LinkedIn"
              width={50}
              height={40}
              className=" rounded-full"
            />
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="sm:w-1/2 flex justify-center mt-8 sm:mt-0">
        <Image
          src="/profile.jpg"
          width={350}
          height={350}
          alt="Hammad Ahmed"
          className="hidden md:block rounded-full object-cover shadow-2xl"
        />
      </div>
    </div>
  );
}
