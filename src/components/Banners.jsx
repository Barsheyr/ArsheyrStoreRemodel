import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Banners = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div>
      {/* Full-width Banner */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Luxury Watches"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center text-white md:px-6">
          <h2
            className={`text-3xl font-medium sm:text-4xl md:text-5xl transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Craftsmanship That Stands the Test of Time
          </h2>
          <p
            className={`mx-auto mt-6 max-w-2xl text-lg text-white/80 transition-all duration-700 delay-150 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Each timepiece is meticulously assembled by our master watchmakers,
            combining traditional techniques with modern innovation.
          </p>
          <div
            className={`mt-10 transition-all duration-700 delay-300 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link
              to="/collections/all"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-black shadow-md transition-colors hover:bg-white/90"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banners;
