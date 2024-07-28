import Image from "../assets/HeroImage.jpg";

export const Hero = () => {
  return (
    <div className="flex w-5/6 h-5/6 mx-auto pt-[14rem] -mt-[5.25rem]">
      <div className="flex flex-col text-left">
        <p className=" mb-auto">
          Get to know a better, sustainable and eco-friendly way to produce
          paper
        </p>
        <h1 className="font-bold text-5xl">Banana Flavored Paper ?</h1>
        <a
          className="text-center px-20 py-2 bg-yellow text-white rounded w-80 mt-8"
          href="#"
        >
          WE HAVE IT ALL!
        </a>
      </div>
      <div>
        <img src={Image} alt="" />
      </div>
    </div>
  );
};
