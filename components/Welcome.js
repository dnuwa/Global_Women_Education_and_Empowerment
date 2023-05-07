import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Hero = () => {
  return (
    <div className="relative mt-12">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-opacity-50 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/gwe3.jpg')" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 bg-black bg-opacity-30">
        {/* Your text content here */}
        <blockquote className="py-36 text-center items-center lg:w-2/3 m-auto">
          <h1 className="italic text-3xl font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white">
            Global Women{" "}
            <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
              <span class="relative text-white">Education</span>
            </span>{" "}
            and{" "}
            <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
              <span class="relative text-white">Empowerment</span>
            </span>
          </h1>
          <p className="py-5 text-xl leading-normal text-white lg:text-xl xl:text-2xl dark:text-white">
            Supporting girls and women’s personal, and professional, growth
            through education, training and empowerment.
          </p>
        </blockquote>
      </div>
    </div>
  );
};

export default Hero;
