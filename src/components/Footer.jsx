import React from "react";

const Footer = () => {
  return (
    <main className="py-20">
      <div>
        <div className="flex lg:flex-row flex-col items-center space-y-10  text-center lg:text-justify justify-between text-white max-w-6xl mx-auto">
          <div>
            <h1 className="text-3xl font-bold items-center">
              Arsheyr <span className="text-sm mt-5"> store </span>
            </h1>
          </div>
          <div>
            <h1 className="font-bold">SUPPORT</h1>
            <ul className="mt-5 text-gray-400">
              <li>Contact Us</li>
              <li> FAQs </li>
              <li> Size Guide </li>
              <li> Shipping & Returns </li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold">SHOP</h1>
            <ul className="mt-5 text-gray-400">
              <li> Mens's Shopping</li>
              <li> Women's Shopping </li>
              <li> Kid's Shopping </li>
              <li> Discounts </li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold">COMPANY</h1>
            <ul className="mt-5 text-gray-400">
              <li> Our Story</li>
              <li> Careers </li>
              <li> Terms & Conditions </li>
              <li> Privacy & Cookie policy </li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold">CONTACT</h1>
            <ul className="mt-5 text-gray-400">
              <li>Contact Us</li>
              <li> FAQs </li>
              <li> Size Guide </li>
              <li> Shipping & Returns </li>
            </ul>
          </div>
        </div>

        <div className="w-[100%] h-0.5 bg-gray-800 mt-20"></div>
      </div>
    </main>
  );
};

export default Footer;
