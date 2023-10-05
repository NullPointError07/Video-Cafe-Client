import Image from "next/image";
import bannerImage from "../public/banner.jpg";
import { BsPlusLg } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="relative h-screen ">
      <Image
        src={bannerImage}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
          Upload Your Videos & Share Online
        </h1>
        <p className="text-lg sm:text-xl mb-4 ">
          Share Your Moment Online Easily
        </p>
        <div className="border-2 p-6 bg-white rounded-lg">
          <div className="flex flex-col items-center border-dashed border-2 rounded-xl border-gray-500 p-20 ">
            <div style={{ margin: "0 10px" }}>
              <label htmlFor="file-input">
                <img src="/plus.png" alt="file" className="button h-20" />
              </label>
              <input id="file-input" type="file" hidden />
            </div>

            <button className="text-lg bg-red-500 rounded-xl p-3 mt-6">
              Upload Media
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
