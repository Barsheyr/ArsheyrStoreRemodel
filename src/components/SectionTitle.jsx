import { useState, useEffect } from "react";

const SectionTitle = ({ text, subtitle }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="border-b border-base-300 pb-5">
      {/* <h2 className="text-3xl font-medium tracking-wider capitalize">{text}</h2> */}
      <h2
        className={`text-3xl font-medium tracking-tight text-watch-primary transition-all duration-700 sm:text-4xl ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {text}
      </h2>

      {subtitle && (
        <p
          className={`mt-3 max-w-[600px] text-watch-muted transition-all duration-700 delay-150 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
export default SectionTitle;
