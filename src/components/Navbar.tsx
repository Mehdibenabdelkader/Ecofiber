import Icon from "../assets/Icon.svg";

export const Navbar = () => {
  return (
    <div>
      <nav className="fixed top-8 p-4 rounded-md w-5/6 z-50 left-1/2 -translate-x-1/2 border-2 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#">
              <img src={Icon} alt="EcoFiber" />
            </a>
          </div>

          <div className="hidden md:flex space-x-4">
            <a
              onClick={() => {
                const element = document.getElementById("Projects");
                if (element) {
                  element.scrollIntoView();
                }
              }}
              className="text-black hover:bg-yellow hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              About us
            </a>
            <a
              onClick={() => {
                const element = document.getElementById("Services");
                if (element) {
                  element.scrollIntoView();
                }
              }}
              className="text-black hover:bg-yellow hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Our Services
            </a>
            <a
              onClick={() => {
                const element = document.getElementById("Services");
                if (element) {
                  element.scrollIntoView();
                }
              }}
              className="text-black hover:bg-yellow hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Our Principles
            </a>
          </div>

          <div className="flex-shrink-0">
            <a
              href="#"
              className="bg-yellow text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange"
            >
              Get in touch
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};
