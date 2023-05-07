import React from "react";

const Blogs = () => {
  return (
    <>
      <div className="h-46 bg-[#e4e2d8] relative">
        <div
          className="absolute inset-0 bg-opacity-50 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dtuesm5ex/image/upload/v1683390709/GWEE/IMG-20230501-WA0030_tlhode.jpg')",
          }}
        ></div>
        <div className="mb-8 py-36 relative z-10 bg-black bg-opacity-30">
          <div className="md:px-24 lg:px-36">
            <h1 className="font-bold tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white">
              Writtings from the community
            </h1>
            <p className="py-5 text-lg text-white">
              Welcome to our website's blog section, where we share our
              thoughts, insights, and experiences on various topics related to
              global women education and empowerment. We believe that education
              and empowerment are the keys to creating a more equitable and just
              society, where women can live to their full potential and
              contribute to the world's progress.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 px-[20px] mx-auto md:px-24 lg:px-36">
        <p className="my-4">
          Through our blog, we aim to raise awareness, inspire action, and
          provide a platform for diverse voices to share their stories and
          perspectives on these critical issues. We hope that our blog will
          serve as a resource and a community for those who share our vision of
          a world where all women have access to quality education and the tools
          to empower themselves and their communities.
        </p>
        <p className="italic">
          Please note that the blog section on our website focusing on global
          women education and empowerment will be coming soon. We are currently
          working on creating insightful and informative content that we hope
          will inspire, educate, and empower our readers. Stay tuned for
          updates, as we will be sharing our thoughts, experiences, and
          resources on a variety of topics related to women's education and
          empowerment. We believe that through our blog, we can contribute to
          the global movement towards gender equality and create a more just and
          equitable world for all.
        </p>
      </div>
    </>
  );
};

export default Blogs;
