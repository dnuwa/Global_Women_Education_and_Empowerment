import React, { useState } from "react";

const TeamComponents = () => {
  const [show, setShow] = useState(`Assumptah`);
  return (
    <>
      <div className="bg-[#e4e2d8] mt-12 relative">
        <div
          className="absolute inset-0 bg-opacity-50 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dtuesm5ex/image/upload/v1683390711/GWEE/IMG-20230501-WA0045_h1hpqo.jpg')",
          }}
        ></div>
        <div className="mb-8 py-36 relative z-10 bg-black bg-opacity-30">
          <div className="flex items-center w-full">
            <div className="md:px-24 lg:px-36">
              <h1 className="font-bold tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white">
                Meet the our team
              </h1>
              <p className="py-5 text-xl text-gray-500 text-white">
                The Women Education and Empowerment team is a passionate and
                dedicated group of individuals who work towards promoting
                education and empowerment among women. Their mission is to
                provide women with the knowledge, skills, and resources needed
                to reach their full potential and make meaningful contributions
                to society. Through their efforts, the team aims to break down
                barriers and overcome societal obstacles that prevent women from
                achieving their goals. They recognize the value of education and
                empowerment in improving the lives of women and believe that by
                working together, we can create a more just and equitable world
                for all.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-6 lg:gap-1 md:px-24 lg:px-36">
        <div className="card rounded-none">
          <button
            className="text-center py-3 lg:py-12 text-center"
            onClick={() => setShow(`Assumptah`)}
          >
            <img
              src="https://res.cloudinary.com/dtuesm5ex/image/upload/v1683229056/Dr._Assumptah_Turyasiimwa_zg5jmf.png"
              className="h-52 mx-auto mb-4"
            />
            <p className="text-xs font-bold w-52">
              Dr. Assumptah Turyasiimwa, EdD, PMP.
            </p>
          </button>
        </div>
        <div className="card rounded-none">
          <button
            className="text-center py-3 lg:py-12 text-center"
            onClick={() => setShow(`Clemencia`)}
          >
            <img
              src="https://res.cloudinary.com/dtuesm5ex/image/upload/v1683390708/GWEE/IMG-20230501-WA0004_ylzztt.jpg"
              className="h-52 mx-auto mb-4"
            />
            <p className="text-xs font-bold w-52">Sister Clemencia Butetsi</p>
          </button>
        </div>
        <div className="card rounded-none">
          <button
            className="text-center py-3 lg:py-12 text-center"
            onClick={() => setShow(`Adizatu`)}
          >
            <img
              src="https://res.cloudinary.com/dtuesm5ex/image/upload/v1683229382/Adizatu_Alhassan_ylxoso.png"
              className="h-52 mx-auto mb-4"
            />
            <p className="text-xs font-bold w-52">
              Adizatu Alhassan, MPH, CHES.
            </p>
          </button>
        </div>
        <div className="card rounded-none">
          <button
            className="text-center py-3 lg:py-12 text-center"
            onClick={() => setShow(`Mary`)}
          >
            <img
              src="https://res.cloudinary.com/dtuesm5ex/image/upload/v1683229633/MARY_SATURDAY_BALIKUDEMBE_vwyynw.png"
              className="h-52 mx-auto mb-4"
            />
            <p className="text-xs font-bold w-52">
              Mary Saturday Balikudembe, BA/Educ
            </p>
          </button>
        </div>
        <div className="card rounded-none">
          <button
            className="text-center py-3 lg:py-12 text-center"
            onClick={() => setShow(`Agnes`)}
          >
            <img
              src="https://res.cloudinary.com/dtuesm5ex/image/upload/v1683390706/GWEE/IMG-20230501-WA0009_c1emsg.jpg"
              className="h-52 mx-auto mb-4"
            />
            <p className="text-xs font-bold w-52">Agnes Kabarungi</p>
          </button>
        </div>
        <div className="card rounded-none" onClick={() => setShow(`Rose`)}>
          <button className="text-center py-3 lg:py-12 text-center">
            <img
              src="https://res.cloudinary.com/dtuesm5ex/image/upload/v1684044340/rosek_jqi21s.jpg"
              className="h-52 mx-auto mb-4"
            />
            <p className="text-xs font-bold w-52">Rose K. Kabasinguzi </p>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 px-[20px] md:px-24 lg:px-36">
        <div
          className={`${show === `Assumptah` ? `card rounded-none` : `hidden`}`}
        >
          <div className="text-[12px] px-4">
            <p className="mb-5">
              <span className="font-bold">Dr. Assumptah Turyasiimwa's</span>{" "}
              passion for the education of girls and women is dated back to the
              time when she was an adolescent. Having grown up at a time when
              education of the girl-child in her society was seen as a privilege
              and a luxury reserved for a few, Assumptah started asking
              questions when she was fourteen years. At that time, some people
              in her community believed she was “ready for marriage”. Since
              then, she has been trying to find answers of how to protect, train
              and educate girls and women so that they can become independent,
              and able to make their own decisions.
            </p>
            <p className="mb-5">
              Assumptah has a doctorate in educational leadership (EdD) from
              California Lutheran University, California USA. She also has a
              master’s degree in Educational Administration and Planning (MED)
              and Bachelor’s degree with Education (BA/Educ), both, from
              Makerere University, Kampala Uganda. She also has a certificate in
              Project management (PMP). While doing her doctorate, Assumptah
              researched on the impact of policy on the education of the
              girl-child. This gave her a broad understanding of various
              strategic plans and policies in both developed and developing
              countries and the missing link to the success of the polilcies.
              This research built on her master’s thesis which analyzed how
              Universal Primary Education (UPE) impacted the education the rural
              girl child. Her research projects coupled with the 12 years’
              experience as a principal of a rural girl’s secondary school are a
              constant reminder that something needs to be done. The girl-child
              needs more than just a school in the neighborhood!!!!!This is why
              Global Women Education and Empowerment (GWEE) was founded. We are
              a team committed to finding ways and means of alleviating
              obstacles to the education of the girl-child globally Assumptah is
              also a volunteer with “Together Women Raise” a nonprofit that
              supports Girl’s education and advocates for global policies that
              promote girls and women education and welfare. She also sits on
              the United States Refugee Advisory Board (USRB), a body that
              advocates for refugees globally. During her free time Assumptah
              enjoys spending time with her family.
            </p>
            <p className="mb-5">
              Assumptah was able to go through school with the help people who
              believed in her and her potential. She would therefore like to
              give back to society by supporting girls born in disadvantaged
              environments to get proper education and training for
              self-sustainability.
            </p>
          </div>
        </div>
        <div
          className={`${show === `Clemencia` ? `card rounded-none` : `hidden`}`}
        >
          <div className="text-[12px] px-4">
            <p className="mb-5">
              <span className="font-bold">Sister Clemencia Butetsi</span> I am
              Sister Clemencia Butetsi. I belong to the Missionary Congregation
              of the Evangelizing Sisters of Mary. Part of our mission is to
              promote the dignity of women. Help in training and educating
              mothers to promote their Children's education and empowerment  for
              future health families and communities. I have passion for girl
              child and women education and empowerment for the following
              reasons:
            </p>
            <p className="mb-5">
              Iam interested in promoting girls and women education and
              empowerment,  because my wish and desire is to create a balanced
              society,  where equality and gender balance will be priority for
              the good of all of us.
            </p>
            <p className="mb-5">
              Education and empowerment of girls and women is essential to
              developing skill, literacy, health and social development of
              individuals, families, communities and countries.
            </p>
            <p className="mb-5">
              Girls and women will be able to reach their full potential and
              goals, contributing their skills, knowledge and talents to
              society, and will be able to raise happier, healthier and
              responsible children.
            </p>
            <p className="mb-5">
              Girls and women, will become more economically self-reliant, more
              actively involved in society's social, political and cultural
              life. 
            </p>
            <p className="mb-5">
              Eradication of poverty, domestic violence, oppression and
              dependence syndrome.  
            </p>
            <p className="mb-5">
              Learning, skills like critical thinking and conflict resolution,
              will raise their high self esteem and confidence and eradicate low
              self esteem and inferiority complex.
            </p>
          </div>
        </div>
        <div
          className={`${show === `Adizatu` ? `card rounded-none` : `hidden`}`}
        >
          <div className="text-[12px] px-4">
            <p className="mb-5">
              <span className="font-bold">Adizatu Alhassan</span> has been
              engaged in women’s health and girl child education through
              volunteers and school projects. She has worked on educating women
              on women’s health and involved in explaining to less privileged
              African families about the importance and benefits of girl child
              education; focusing on the saying: “if you educate a man, you
              educate an individual; but if you educate a woman, you educate a
              nation.
            </p>
            <p className="mb-5">
              Adizatu has her Bachelor of Science in Public Health at the
              California State University, Los Angeles and Master of Public
              Health in Public Health. She is also a Certified Health Education
              Specialist. She has volunteered at Northeastern Valley Health
              Corporation, analyzing data of women and children who were able to
              take care of themselves by attending health education classes and
              making it to their medical appointments. She also Volunteered at A
              Vision of Health, a nonprofit organization emphasizing on how to
              assist women in controlling chronic diseases by means of healthy
              lifestyle choices.
            </p>
            <p className="mb-5">
              Adizatu joined this organization to utilize her educational
              strategy to assist women and girls to get educated and know how to
              care for themselves.
            </p>
          </div>
        </div>
        <div className={`${show === `Mary` ? `card rounded-none` : `hidden`}`}>
          <div className="text-[12px] px-4">
            <p className="mb-5">
              <span className="font-bold">Mary Saturday Balikudembe</span>{" "}
              developed passion for the girl-child education and women
              empowerment in the year1989, after doing her Primary Leaving
              Examinations. With the release of the then PLE results and Mary
              appearing as the best performer in her school, members of her
              society called it “a waste of brains”, because, being a girl, she
              was considered only fit for marriage, as secondary school and
              advanced education was a preserve of boy children. This community
              mentality gave Mary the passion and zeal to prove that girls can
              also advance in education and become influential members of
              society.
            </p>
            <p className="mb-5">
              Mary has a Bachelor’s degree in Education (BA/Educ) from Uganda
              Martyrs University, Kampala Uganda and a diploma in Secondary
              Education (Dip. in Educ. Secondary) from the Institute of Teacher
              Education Kyambogo (ITEK) Kampala Uganda.
            </p>
            <p className="mb-5">
              Mary is also a member of the Uganda Girl Guides Association
              (UGGA); a voluntary organization, whose vision is “Producing girls
              of Virtue and Women of substance.” Mary has participated in UGGA’s
              advocacy for girl-child education, menstrual hygiene,
              anti-alcoholism campaign and others.
            </p>
          </div>
        </div>
        <div className={`${show === `Agnes` ? `card rounded-none` : `hidden`}`}>
          <div className="text-[12px] px-4">
            <p className="mb-5">
              <span className="font-bold"> Agnes Kabarungi</span> is a Ugandan
              educator, editor, poet and short story writer. A holder of a
              Bachelor of Arts in Education Degree from Makerere University,
              Kabarungi has taught English Language and Literature in English in
              a number of Ugandan schools. Her poems and short stories – most of
              them on gender, education and girl child empowerment – have been
              published in school magazines and other formal publications. She
              has several forthcoming pieces of literature.
            </p>
            <p className="mb-5">
              As an experienced teacher and mother of two beautiful daughters,
              Kabarungi has over the years interacted, lived and worked with
              girl children in and outside school environments across different
              Ugandan cultures. Through her teaching and parenting roles, she
              has had an opportunity to encourage and mentor girls on their
              education and career journeys. Passionate about girl child
              empowerment as a foundation for the transformation of the world,
              she believes that societies must rise above stereotypes and
              decisively remove barriers to education and girl child education
              in the information age.
            </p>
            <p className="mb-5">
              As a GWEE partner, Kabarungi’s work with the organization revolves
              around spreading the empowerment gospel in schools, development of
              materials for campaigns and organizing inter-school contests.
            </p>
          </div>
        </div>
        <div className={`${show === `Rose` ? `card rounded-none` : `hidden`}`}>
          <div className="text-[12px] px-4">
            <p className="mb-5">
              <span className="font-bold"> Rose K. Kabasinguzi </span> is a high
              school teacher based in central Uganda. She is an experienced
              Geography teacher among other education-related professional
              fields, currently in Mt. St. Mary's College Namagunga. This is an
              old girls school that has produced countless professionals in the
              service of mankind all over the globe.
            </p>
            <p className="mb-5">
              She is a teacher not only by training, but she believes, also by
              calling.
            </p>
            <p className="mb-5">
              Her primary role at the workstation is to help students set goals,
              and facilitate them with the information (knowledge) and skills
              they require to achieve those goals. It has always given her
              pleasure to hear of or meet such old students that have immense
              successes, especially whenever they recognise her role in their
              formation. This sweet testimony is available all the time.
            </p>
            <p className="mb-5">
              Through her interaction with her girls in and out of class, she
              has come to appreciate the enormous potential a girl child
              possesses; yet aware, unfortunately, that so many such girls are
              stuck in homes with no means of accessing formal education; and as
              a result, their potential remains unlocked.
            </p>
            <p className="mb-5">
              She believes strongly in the catch phrase 'When you educate a girl
              you educate a nation’. Girls can only overcome the socio-economic
              barriers if they are empowered through education. Only then do
              they find that voice that has been silenced by societal
              stereotypes. She believes, and has seen, that when girls are
              empowered, they are able to lead, influence and inspire.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamComponents;
