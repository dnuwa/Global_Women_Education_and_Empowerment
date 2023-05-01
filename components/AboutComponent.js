import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const AboutComponents = () => {
  return (
    <>
      <div className="h-46 bg-[#e4e2d8]">
        <div className="flex flex-wrap lg:w-[1340px] xl:w-[1340px] px-[20px] mx-auto">
          <div className="flex items-center w-full">
            <div className="max-w-2xl mb-8 pt-20">
              <h1 className="text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white">
                About us
              </h1>
              <p className="py-5 text-xl text-gray-500">
                Find out more about Global Women Education and Empowerment: our
                vision, mission, organisational structure and ways of working.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[1340px] xl:w-[1340px] px-[20px] mx-auto">
        <div className="flex flex-col w-full h-full bg-white rounded-2xl pt-14">
          <p className="text-2xl">Our mission</p>
          <p className="mb-4">
            A world where all girls and women are educated and empowered for
            social and economic development and sustainability.
          </p>
        </div>
        <div className="flex flex-col w-full h-full bg-white rounded-2xl">
          <p className="text-2xl">Our vision</p>
          <p className="mb-4">
            Supporting girls and women’s personal, and professional, growth
            through education, training and empowerment
          </p>
        </div>
        <div className="flex flex-col w-full h-full bg-white rounded-2xl">
          <p className="text-2xl">Our core values </p>
          <p className="mb-4">Equality, Equity, Justice, Empowerment</p>
        </div>
        <div className="flex flex-col w-full h-full bg-white rounded-2xl max-w-4xl">
          <p className="text-2xl">Our partners </p>
          <p className="mb-4">
            We partner with other organizations for significant and long term
            impact. We build on existing structures in society to reach the
            different segments of society to empower women.
          </p>
        </div>

        <div className="flex flex-col w-full h-full bg-white rounded-2xl px-12">
          <ul className="list-disc">
            <li>
              <p className="text-xl pb-1">Civil Society:</p>
              <p className="mb-4 text-[12px] max-w-2xl">
                GWEE understands that culture and tradition have contributed to
                girls and women lagging boys in terms of education and
                empowerment. We partner with local councils to understand the
                intricacies of cultural customs and norms and how best we can
                approach it.
              </p>
            </li>
            <li>
              <p className="text-xl pb-1">Schools:</p>
              <p className="mb-4 text-[12px] max-w-2xl">
                We partner with secondary schools to work with students and
                teachers to address challenges to girls education and women
                empowerment .We use a whole school approach to handle challenges
                by incorporating the solution in the curriculum.
              </p>
            </li>
            <li>
              <p className="text-xl pb-1">
                Community Based Organizations and Local Non-profit
                organizations.
              </p>
              <p className="mb-4 text-[12px] max-w-2xl">
                We work with local founded Community Based Organizations and Non
                governmental organizations especially those founded by women and
                those that promote women. We believe that success is achievable
                when society owns their objectives.
              </p>
            </li>
            <li>
              <p className="text-xl pb-1">International organizations.</p>
              <p className="mb-4 text-[12px] max-w-2xl">
                Global nonprofit and donor organizations mean a lot to us. We
                endeavor to use locally available resources and we ask for help
                to sponsor our programs to empower girls and women
              </p>
            </li>
            <li>
              <p className="text-xl pb-1">
                Universities and other higher institutions.
              </p>
              <p className="mb-4 text-[12px] max-w-2xl">
                Universities and higher institutions that promote gender
                equality are important to us. We work with departments and
                schools that promote gender equity.
              </p>
            </li>
            <li>
              <p className="text-xl pb-1">
                Local Governments and Government ministries.
              </p>
              <p className="mb-4 text-[12px] max-w-2xl">
                GWEE recognizes that there is no change that is not supported by
                existing structures of society and government. Cultural and
                social change is a long term process that needs government
                support.
              </p>
            </li>

            <li>
              <p className="text-xl pb-1">
                Refugee and disaster preparedness organizations.
              </p>
              <p className="mb-4 text-[12px] max-w-2xl">
                Girls and women in areas of conflict, refugee camps and those
                displaced for various reasons are very vulnerable and going to
                school may be seen as a luxury. We partner with other
                organizations to keep them in schools and to empower them where
                they are settled.
              </p>
            </li>
            <li>
              <p className="text-xl pb-1">Disability organizations:</p>
              <p className="mb-4 text-[12px] max-w-2xl">
                GWEE recognizes that disability and inability are two different
                things. As a result, GWEE partners with different organizations
                supporting girls and women with disabilities. We recognize and
                support those who are physically and developmentally disabled to
                achieve their goals in life.
              </p>
            </li>
            <li>
              <p className="text-xl pb-1">
                Churches and religious Organizations.
              </p>
              <p className="mb-4 text-[12px] max-w-2xl">
                Religiious organizations have a big impact on society values. We
                work with religious organizations to influence culture and
                support girls and women.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutComponents;
