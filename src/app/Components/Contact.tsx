import Image from "next/image";
export default function Contact() {
    return (
      <section className=" py-20" id="contact">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>
          <p className="text-center mb-8 sm:p-5">
            I would love to hear from you! Whether its a project, job opportunity, or just a chat, feel free to reach out.
          </p>
  
          {/* Contact Form */}
          <form className="space-y-6 ">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <input
                type="text"
                placeholder="Your Name"
                className="w-[350px] md:w-full p-4 bg-[#0f2a3f] rounded-lg "
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-[350px] md:w-full p-4 bg-[#0f2a3f] rounded-lg "
              />
            </div>
            <div className="flex flex-col items-center">
            <textarea
              placeholder="Your Message"
              //@ts-expect-error
              rows="5"
              className="w-[350px] md:w-full p-4 bg-[#0f2a3f] rounded-lg "
            ></textarea>
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 bg-blue-500 hover:bg-blue-600 font-bold rounded-lg"
            >
              Send Message
            </button>
          </form>
  
          {/* Social Links */}
          <div className=" mt-10 flex flex-wrap justify-center gap-8 md:gap-20 text-center ">
            <a href="https://github.com/Hammad8288?tab=repositories" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
              <Image src="/github-icon.png" alt="GitHub" className="w-28 h-16 rounded-full mx-auto" width={70} height={40} />
              <p className="font-bold mt-4 justify-center ">View  <br />GitHub </p>
            </a>
            <a href="https://www.linkedin.com/in/hammad-ahmed-7aa73118a/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
              <Image src="/linkedin-icon.png" alt="LinkedIn" className="w-16 h-16 rounded-full mx-auto"width={70} height={40} />
              <p className="font-bold mt-4">Contact On <br />Linkedin </p>
            </a>
            <a href="https://www.facebook.com/hammad.ahmed.32" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
              <Image src="/fb.jpg" alt="Facebook" className="w-16 h-16 rounded-full mx-auto"  width={70} height={40}/>
              <p className="font-bold  mt-4">Contact On <br />Facebook</p>
            </a>
            <a href="https://wa.me/923323446979" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
              <Image src="/wa.png" alt="WhatsApp" className="rounded-full mx-auto"  width={70} height={40}/>
              <p className="font-bold  mt-4">Contact On <br />WhatsApp</p>
            </a>
          </div>
        </div>
      </section>
    );
  }
  