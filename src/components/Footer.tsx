import Icon from "../assets/Icon.svg";

export const Footer = () => {
  return (
    <div className="w-5/6 mx-auto flex mb-10 mt-20">
      <div className="flex flex-col flex-1 text-left gap-4">
        <div className="mb-8">
          <a href="#">
            <img src={Icon} alt="Fluka studio" className="w-44" />
          </a>
        </div>

        <p>
          Eco Fiber transforms banana harvesting waste into high-quality,
          eco-friendly paper. Committed to a greener future, Eco Fiber combines
          innovation with environmental stewardship.
        </p>

        <div className="flex gap-8 mt-10">
          <a href="#">Projects</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
          <a href="#">Join us</a>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 flex-col items-end justify-end text-xl ">
        <a href="mailto:contact@ecofiber.com" className="text-gray-700 ">
          contact@ecofiber.com
        </a>
      </div>
    </div>
  );
};
