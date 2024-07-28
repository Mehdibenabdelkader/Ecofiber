import CTAbg from "../assets/CTAbg.jpg";

export const CTA = () => {
  return (
    <div
      id="WHO ARE WE"
      className="w-5/6 mx-auto flex flex-col md:flex-row text-left pt-20 gap-2 md:gap-28"
    >
      <div className="flex flex-col ">
        <img src={CTAbg} alt="" />
      </div>
      <p className="font-bold text-5xl w-auto">
        Invest in an innovative way to produce paper
      </p>
    </div>
  );
};
