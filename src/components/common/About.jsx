import React from "react";

const About = () => {
  return (
    <div className="container mx-auto max-w-[1120px] bg-white p-4 md:p-8 relative">
      <div className="w-full lg:w-2/4 mb-8 mt-10 relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-8 md:mb-16">
          Save your data storage here.
        </h1>
        <p className="text-md md:text-lg w-full md:w-2/3 text-gray-600 mb-4 md:mb-6">
          Data Warehouse is a data storage area that has been tested for
          security, so you can store your data here safely but not be afraid of
          being stolen by others.
        </p>
        <button className="bg-purple-600 text-xs md:text-sm text-white py-2 px-4 md:px-8 rounded-[50px] hover:bg-purple-800">
          Learn more
        </button>
      </div>
      <div className="absolute top-60 md:top-40 right-0 lg:w-8/12 w-full md:w-6/12 px-4 md:px-0">
        <img
          src="https://s3-alpha-sig.figma.com/img/b141/5dac/039cbccbb3a55ae069a3291f512521c8?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oaMkzMr1VuhtclnIOCynXhyGsd5ocbEP4sDkDRWou5cBgP67zDW~kXn~8SLyfwRhCPWPS7e4q601OxPxhdr5U8mFmHgx2xNBK4W8-cGV0rwWjDZXuegA5TyeEIZtSYrm5QiHt-utLTbmLA0tNjUkvf281fnUS0~K5nyx7dGRsyL6uNST8kRGGfr3KdPW8FWReo-kivoeOPNa7qvcrSTPhh4rhQc6bW2ZT7dSj5zQPgyLqlsp0aFMzEkvmYSljXGJyL4iAQGfTpt0wqpqjSso02XUjdo2PnOh3hr45V9IDh2Jxd3HPv6l0G0EydV5mE62M~R44P6-IkRX7OP9Yhvdxw__"
          alt="Example"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default About;
