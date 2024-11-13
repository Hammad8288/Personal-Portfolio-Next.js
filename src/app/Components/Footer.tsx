export default function Footer() {
    return (
      <footer className="bg-[#0f2a3f] py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
          {/* Footer Text */}
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <p>
              Copyright © 2024  <br />
              Built with ❤️ by Hammad Ahmed. 
            </p>
          </div> 
            <a href="#" className="bg-[#081b29] w-20 font-bold flex text-center items-center pl-3 ">Back To <br/> Top</a>
        </div>
      </footer>
    );
  }
