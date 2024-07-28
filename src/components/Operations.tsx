import Image1 from "../assets/HeroImage.jpg";
import Image2 from "../assets/image2.jpg";
import Image3 from "../assets/image3.jpg";

export const Operations = () => {
  return (
    <div>
      <div className="flex gap-20 w-5/6 h-5/6 mx-auto pt-[14rem] -mt-[5.25rem]">
        <div>
          <img src={Image1} alt="" className="w-[120rem] shrink-0" />
        </div>
        <div className="flex flex-col text-left">
          <h1 className="font-bold text-5xl">The Farms</h1>
          <p className="my-8">
            {" "}
            We partner directly with banana farmers to turn their harvesting
            waste into valuable resources. By providing training and resources,
            we help farmers collect and store banana stems, creating additional
            income and reducing agricultural waste. This collaboration supports
            farmers' livelihoods and promotes sustainable practices.
          </p>
        </div>
      </div>
      <div className="flex gap-20 w-5/6 h-5/6 mx-auto pt-[14rem] -mt-[5.25rem]">
        <div className="flex flex-col text-left">
          <h1 className="font-bold text-5xl">Leveraging AI</h1>
          <p className="my-8">
            {" "}
            Our project uses AI to select the best quality banana stems for
            paper production. The AI analyzes factors like fiber length and
            moisture content, ensuring only the most suitable stems are used.
            This technology improves the quality of our paper and optimizes
            resource use, reducing waste and increasing efficiency.
          </p>
        </div>
        <div>
          <img src={Image2} alt="" className="w-[120rem] shrink-0" />
        </div>
      </div>
      <div className="flex gap-20 w-5/6 h-5/6 mx-auto pt-[14rem] -mt-[5.25rem]">
        <div>
          <img src={Image3} alt="" className="w-[120rem] shrink-0" />
        </div>
        <div className="flex flex-col text-left">
          <h1 className="font-bold text-5xl">StreamLine Production</h1>
          <p className="my-8">
            {" "}
            AI integration streamlines our production process, from cleaning and
            pulping to forming and drying the paper. This automation reduces
            manual labor, lowers costs, and ensures consistent, high-quality
            products. By leveraging technology, we turn agricultural waste into
            a competitive, eco-friendly paper solution.
          </p>
        </div>
      </div>
    </div>
  );
};
