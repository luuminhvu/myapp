import React from "react";
import Logo from "../Icon/Logo";

const FooterComponent = () => {
  return (
    <footer className="w-full border-t-2 max-w-[1120px] mx-auto mt-20 bg-white py-10 px-6 rounded-lg">
      <div className="flex flex-wrap justify-between">
        {/* Column 1 - Logo and Address */}
        <div className="w-full md:w-3/6 mb-8 md:mb-0">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 mr-8">
              <Logo />
            </div>
            <h1 className="text-xl text-textRgb font-bold">DataWarehouse</h1>
          </div>
          <p className="text-textRgb mt-10">
            Warehouse Society, 234 Bahagia Ave Street
            <br />
            PRBW 29281
          </p>
          <p className="mt-2 text-textRgb">info@warehouse.project</p>
          <p className="text-textRgb">1-232-3434 (Main)</p>
        </div>

        {/* Column 2 - About */}
        <div className="w-full md:w-1/6 mb-8 md:mb-0">
          <h2 className="text-lg font-bold mb-4 text-textRgb">About</h2>
          <ul>
            <li className="mb-2">
              <a href className="text-textRgb hover:underline">
                Profile
              </a>
            </li>
            <li className="mb-2">
              <a href className="text-textRgb hover:underline">
                Features
              </a>
            </li>
            <li className="mb-2">
              <a href className="text-textRgb hover:underline">
                Careers
              </a>
            </li>
            <li className="mb-2">
              <a href className="text-textRgb hover:underline">
                DW News
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Help */}
        <div className="w-full md:w-1/6 mb-8 md:mb-0">
          <h2 className="text-lg font-bold mb-4 text-textRgb">Help</h2>
          <ul>
            <li className="mb-2">
              <a href className="text-textRgb hover:underline">
                Support
              </a>
            </li>
            <li className="mb-2">
              <a href className="text-textRgb hover:underline">
                Sign up
              </a>
            </li>
            <li className="mb-2">
              <a href className="text-textRgb hover:underline">
                Guide
              </a>
            </li>
            <li className="mb-2">
              <a href className="text-textRgb hover:underline">
                Reports
              </a>
            </li>
            <li className="mb-2">
              <a href className="text-textRgb hover:underline">
                Q&A
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 - Social Media */}
        <div className="w-full md:w-1/6 mb-8 md:mb-0">
          <h2 className="text-lg font-bold mb-4 text-textRgb">Social Media</h2>
          <div className="flex space-x-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-between items-center">
        <div className="text-gray-600 text-sm">
          © Datawarehouse™, 2020. All rights reserved.
          <br />
          Company Registration Number: 21479524.
        </div>
        <div className="w-12 h-12 bg-purple-300 rounded-full flex justify-center items-center text-white text-lg">
          💬
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
