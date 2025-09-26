import bannerImg from "../../../assets/photos/banner.png";

const Banner = () => {
  return (
    <div
      className=" lg:h-[1000px] bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="max-w-7xl mx-auto py-7 px-4">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-end">
          <div className="w-full md:w-1/2"></div>
          <div className="w-full md:max-w-3xl bg-[#FFF3E3] pt-16 px-6 md:px-10 pb-10 rounded-xl mt-10 md:mt-20 lg:mt-96">
            <p className="text-lg md:text-xl font-semibold pb-1">New Arrival</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-snug sm:leading-normal md:leading-tight pb-4">
              Discover Our <span className="block">New Collection</span>
            </h1>
            <p className="text-base sm:text-lg font-medium block md:hidden">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
              </p>
            <div className="mb-7 hidden md:block">
              <p className="text-base sm:text-lg font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              </p>
              <p className="text-base sm:text-lg font-medium">
                elit tellus, luctus nec ullamcorper mattis.
              </p>
            </div>
            <button className="py-3 sm:py-4 px-10 sm:px-16 bg-primary text-white text-base sm:text-lg rounded-lg">
              BUY Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
