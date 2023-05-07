import React from "react";

const CoreValues = () => {
  return (
    <div className="lg:px-24 mx-auto mt-2000 bg-[#fbf9f5]">
      <div className="flex flex-col justify-center py-12">
        <blockquote class="text-2xl font-semibold italic text-center text-slate-900 my-2">
          <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
            <span class="relative text-white">Our core values.</span>
          </span>
        </blockquote>
        <div className="py-12 px-[20px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="">
            <div className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block w-full">
              <div className="flex flex-col w-full h-full border bg-white p-8 dark:bg-trueGray-800">
                <blockquote className="lg:text-2xl font-semibold italic text-slate-900 mb-2">
                  <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                    <span className="relative text-white">Equality</span>
                  </span>
                </blockquote>
                <p className="relative text-white w-full">
                  Breaking down barriers with equality
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block w-full">
              <div className="flex flex-col w-full h-full bg-white p-8 dark:bg-trueGray-800 border">
                <blockquote className="lg:text-2xl font-semibold italic text-slate-900 mb-2">
                  <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                    <span className="relative text-white">Equity</span>
                  </span>
                </blockquote>
                <p className="relative text-white w-full">
                  Equity: Empowering the future
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block w-full">
              <div className="flex flex-col w-full h-full bg-white p-8 dark:bg-trueGray-800 border">
                <blockquote className="lg:text-2xl font-semibold italic text-slate-900 mb-2">
                  <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                    <span className="relative text-white">Justice</span>
                  </span>
                </blockquote>
                <p className="relative text-white w-full">
                  Justice for all not just forsome
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block w-full">
              <div className="flex flex-col w-full h-full bg-white p-8 dark:bg-trueGray-800 border">
                <blockquote className="lg:text-2xl font-semibold italic text-slate-900 mb-2">
                  <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                    <span className="relative text-white">Empowerment</span>
                  </span>
                </blockquote>
                <p className="relative text-white w-full">
                  Igniting change and growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
