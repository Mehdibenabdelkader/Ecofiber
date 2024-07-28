import PrinciplesImg from "../assets/Principles.png";

export const Principles = () => {
  return (
    <div
      id="WHO ARE WE"
      className="w-5/6 mx-auto flex flex-col md:flex-row text-left pt-20 gap-2 md:gap-28"
    >
      <div className="flex flex-col">
        <img src={PrinciplesImg} alt="" />
      </div>
    </div>
  );
};
