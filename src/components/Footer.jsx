// import React from "react";

// const Footer = () => {
//   return (
//     <main className="py-20">
//       <div>
//         <div className="flex lg:flex-row flex-col items-center space-y-10  text-center lg:text-justify justify-between text-white max-w-6xl mx-auto">
//           <div>
//             <h1 className="text-3xl font-bold items-center">
//               Arsheyr <span className="text-sm mt-5"> store </span>
//             </h1>
//           </div>
//           <div>
//             <h1 className="font-bold">SUPPORT</h1>
//             <ul className="mt-5 text-gray-400">
//               <li>Contact Us</li>
//               <li> FAQs </li>
//               <li> Size Guide </li>
//               <li> Shipping & Returns </li>
//             </ul>
//           </div>
//           <div>
//             <h1 className="font-bold">SHOP</h1>
//             <ul className="mt-5 text-gray-400">
//               <li> Mens's Shopping</li>
//               <li> Women's Shopping </li>
//               <li> Kid's Shopping </li>
//               <li> Discounts </li>
//             </ul>
//           </div>
//           <div>
//             <h1 className="font-bold">COMPANY</h1>
//             <ul className="mt-5 text-gray-400">
//               <li> Our Story</li>
//               <li> Careers </li>
//               <li> Terms & Conditions </li>
//               <li> Privacy & Cookie policy </li>
//             </ul>
//           </div>
//           <div>
//             <h1 className="font-bold">CONTACT</h1>
//             <ul className="mt-5 text-gray-400">
//               <li>Contact Us</li>
//               <li> FAQs </li>
//               <li> Size Guide </li>
//               <li> Shipping & Returns </li>
//             </ul>
//           </div>
//         </div>

//         <div className="w-[100%] h-0.5 bg-gray-800 mt-20"></div>
//       </div>
//     </main>
//   );
// };

// export default Footer;

import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-watch-primary py-16 text-white px-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="text-xl font-bold tracking-tighter">
              Arsheyr Store
            </Link>
            <p className="mt-4 text-white/70">
              Crafting timepieces that blend precision engineering with elegant
              design.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-base font-medium uppercase tracking-wider">
              Collections
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/collections/all"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  All Watches
                </Link>
              </li>
              <li>
                <Link
                  to="/collections/men"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  Men's Watches
                </Link>
              </li>
              <li>
                <Link
                  to="/collections/women"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  Women's Watches
                </Link>
              </li>
              <li>
                <Link
                  to="/collections/automatic"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  Automatic
                </Link>
              </li>
              <li>
                <Link
                  to="/collections/quartz"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  Quartz
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-medium uppercase tracking-wider">
              Information
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/care-guide"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  Watch Care
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-medium uppercase tracking-wider">
              Newsletter
            </h3>
            <p className="mb-4 text-white/70">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-md border border-white/20 bg-white/10 px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                required
              />
              <button
                type="submit"
                className="rounded-md bg-white px-4 py-2 text-sm font-medium text-watch-primary transition-colors hover:bg-white/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between space-y-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} SleekWatch. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-white/50">
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
