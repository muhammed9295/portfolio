import React from "react";
import { HiOfficeBuilding } from "react-icons/hi";
import { IoMdPin } from "react-icons/io";
import { FaCalendarAlt, FaCircle } from "react-icons/fa";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      {/* About section */}
      <section className="bg-primary min-h-screen py-10">
        <div className="container mx-auto px-5">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Mobile visibility */}
            <div className="block lg:hidden sm:p-10">
            <div className="bg-[#363636] p-8 rounded-lg flex flex-col gap-5 sticky top-10">
                <img
                  src="/profile-pic.png"
                  alt="muhammed-sheikh"
                  className="rounded-md"
                />
                <div className="flex flex-col gap-3">
                  <h2 className="text-[28px] text-neutral font-semibold ">
                    Technical Skills
                  </h2>
                  <ul className="text-secondary">
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[10px]" /> Front End
                      Development
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[10px]" /> Back End
                      Development
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[10px]" /> Full
                      Stack Development
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[10px]" /> Digital
                      Marketing
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[10px]" /> Adobe
                      suites
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[10px]" /> UI/UX &
                      Graphic Design
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  <h2 className="text-[28px] text-neutral font-semibold">
                    Other Information
                  </h2>
                  <ul className="text-secondary">
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[10px]" />
                      Nationality: Indian
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[10px]" /> UAE Driving License: Yes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Mobile visibility */}

            <div className="lg:col-span-8">
              <div className="grid gap-5">
                <h2 className="text-[42px] text-white font-bold underline underline-offset-8 decoration-2 decoration-accent ">
                  About Me
                </h2>
                <p className="text-[18px] text-secondary font-normal">
                  Meticulous Full Stack Developer with 7+ years of experience in
                  crafting responsive and scalable web applications. Spearheaded
                  the architecture and development of 5+ complex web
                  applications using ReactJS, NextJs, and Headless CMS. Mentored
                  5+ junior developers and conducted code reviews to maintain
                  high code quality standards. Implemented UI/UX enhancements,
                  streamlined database management, and efficient testing
                  methodologies.
                </p>
              </div>

              {/* Work Experience */}
              <div className="grid gap-5 my-10">
                <h2 className="text-[42px] text-white font-bold underline underline-offset-8 decoration-2 decoration-accent">
                  Work Experience
                </h2>
                {/* Experience 1 */}
                <div className="collapse collapse-arrow bg-[#363636]">
                  <input type="radio" name="my-accordion-2" defaultChecked />

                  <div className="collapse-title">
                    <div className="flex justify-between items-center">
                      <h3 className="text-accent text-[20px] font-semibold">
                        Lead Full Stack developer / Technical Lead
                      </h3>
                      <div className="hidden sm:block badge badge-accent text-primary font-medium">
                        Full time
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row  justify-between items-center my-2">
                      <div className="flex gap-1 sm:gap-8">
                        <span className="flex gap-2 items-center text-neutral">
                          <HiOfficeBuilding />
                          <p>Hextrap Solutions</p>
                        </span>

                        <span className="flex gap-2 items-center text-neutral">
                          <IoMdPin />
                          <p>Karnataka, India</p>
                        </span>
                      </div>

                      <div className="flex gap-2 items-center text-neutral">
                        <FaCalendarAlt />
                        <p>2022 - 2024</p>
                      </div>
                    </div>
                  </div>

                  <div className="collapse-content">
                    <ul className="text-secondary grid gap-2">
                      <li className="flex gap-2 items-start">
                        <FaCircle className="text-accent text-[10px] mt-[7px]" />
                        Led the architecture and development of complex web
                        applications using ReactJS, NextJs, Headless CMS like
                        Strapi, Wordpress and Woocommerce.
                      </li>
                      <li className="flex gap-2 items-center">
                        <FaCircle className="text-accent text-[10px]" />
                        Incorporated animations and advanced UI/UX features to
                        enhance user engagement.
                      </li>
                      <li className="flex gap-2 items-center">
                        <FaCircle className="text-accent text-[10px]" />
                        Managed databases including MongoDB, MySQL, and
                        Backend-as-a-Service (BAAS) solutions like Supabase and
                        Appwrite
                      </li>
                      <li className="flex gap-2 items-center">
                        <FaCircle className="text-accent text-[10px]" />
                        Implemented efficient testing methodologies using
                        Postman.
                      </li>
                      <li className="flex gap-2 items-center">
                        <FaCircle className="text-accent text-[10px]" />
                        Mentored junior developers and conducted code reviews to
                        maintain high code quality standards.
                      </li>
                      <li className="flex gap-2 items-center">
                        <FaCircle className="text-accent text-[10px]" />
                        Employed Tailwind CSS, Daisy UI and Shadcn for
                        consistent and responsive design across applications.
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Experience 1 */}

                {/* Experience 2 */}
                <div className="collapse collapse-arrow bg-[#363636]">
                  <input type="radio" name="my-accordion-2" defaultChecked />

                  <div className="collapse-title">
                    <div className="flex justify-between items-center">
                      <h3 className="text-accent text-[20px] font-semibold">
                        Full Stack Developer / Marketing Specialist
                      </h3>
                      <div className="hidden sm:block badge badge-accent text-primary font-medium">
                        Full time
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row  justify-between items-center my-2">
                      <div className="flex gap-1 sm:gap-8">
                        <span className="flex gap-2 items-center text-neutral">
                          <HiOfficeBuilding />
                          <p>Higitech Middle East</p>
                        </span>

                        <span className="flex gap-2 items-center text-neutral">
                          <IoMdPin />
                          <p>Dubai, UAE</p>
                        </span>
                      </div>

                      <div className="flex gap-2 items-center text-neutral">
                        <FaCalendarAlt />
                        <p>2021 - 2022</p>
                      </div>
                    </div>
                  </div>

                  <div className="collapse-content">
                    <ul className="text-secondary grid gap-2">
                      <li className="flex gap-2 items-start">
                        <FaCircle className="text-accent text-[10px] mt-[7px]" />
                        Architected and delivered 5+ front-end and back-end
                        applications utilizing React Js, Next Js, Node Js, and
                        MySQL Database.
                      </li>
                      <li className="flex gap-2 items-center">
                        <FaCircle className="text-accent text-[10px]" />
                        Built a comprehensive CRM system for the organization
                        using React Js, Node Js, and Express Js.
                      </li>
                      <li className="flex gap-2 items-center">
                        <FaCircle className="text-accent text-[10px]" />
                        Engineered RESTful APIs using Node Js and Express Js for
                        seamless communication between front-end and back-end
                        systems.
                      </li>
                      <li className="flex gap-2 items-center">
                        <FaCircle className="text-accent text-[10px]" />
                        Leveraged Linux, Nginx, and Docker for containerization
                        and deployment.
                      </li>
                      <li className="flex gap-2 items-center">
                        <FaCircle className="text-accent text-[10px]" />
                        Managed the full lifecycle of the company's database
                        management system, including MongoDB and MySQL.
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Experience 2 */}

                {/* Experience 3 */}
                <div className="collapse collapse-arrow bg-[#363636]">
                  <input type="radio" name="my-accordion-2" defaultChecked />

                  <div className="collapse-title">
                    <div className="flex justify-between items-center">
                      <h3 className="text-accent text-[20px] font-semibold">
                        Full Stack Developer
                      </h3>
                      <div className="hidden sm:block badge badge-accent text-primary font-medium">
                        Full time
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row  justify-between items-center my-2">
                      <div className="flex gap-1 sm:gap-8">
                        <span className="flex gap-2 items-center text-neutral">
                          <HiOfficeBuilding />
                          <p>Elements Labs</p>
                        </span>

                        <span className="flex gap-2 items-center text-neutral">
                          <IoMdPin />
                          <p>Karnataka, India</p>
                        </span>
                      </div>

                      <div className="flex gap-2 items-center text-neutral">
                        <FaCalendarAlt />
                        <p>2018 - 2021</p>
                      </div>
                    </div>
                  </div>

                  <div className="collapse-content">
                    <ul className="text-secondary grid gap-2">
                      <li className="flex gap-2 items-start">
                        <FaCircle className="text-accent text-[10px] mt-[7px]" />
                        Engineered user-friendly websites, optimizing
                        SEO-friendly pages, resulting in a 30% increase in user
                        clicks and higher rank on Google.
                      </li>
                      <li className="flex gap-2 items-start">
                        <FaCircle className="text-accent text-[10px] mt-[7px]" />
                        Crafted an interactive UI/UX and dynamic website,
                        ensuring high traffic, maximum user experience, and
                        elevated company sales revenue.
                      </li>
                      <li className="flex gap-2 items-center">
                        <FaCircle className="text-accent text-[10px]" />
                        Integrated RESTful APIs for seamless communication
                        between front-end and back-end systems.
                      </li>
                      <li className="flex gap-2 items-center">
                        <FaCircle className="text-accent text-[10px]" />
                        Designed, developed, and managed websites using
                        Wordpress, Shopify, HTML5, ReactJs, and NextJs.
                      </li>
                      <li className="flex gap-2 items-center">
                        <FaCircle className="text-accent text-[10px]" />
                        Conducted training for 5+ staff members on internal web
                        functions and minor updates/changes.
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Experience 3 */}

                {/* Experience 4 */}
                <div className="collapse collapse-arrow bg-[#363636]">
                  <input type="radio" name="my-accordion-2" defaultChecked />

                  <div className="collapse-title">
                    <div className="flex justify-between items-center">
                      <h3 className="text-accent text-[20px] font-semibold">
                        Front End Developer
                      </h3>
                      <div className="hidden sm:block badge badge-accent text-primary font-medium">
                        Full time
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row  justify-between items-center my-2">
                      <div className="flex gap-1 sm:gap-8">
                        <span className="flex gap-2 items-center text-neutral">
                          <HiOfficeBuilding />
                          <p>Crafts Enterprises</p>
                        </span>

                        <span className="flex gap-2 items-center text-neutral">
                          <IoMdPin />
                          <p>Karnataka, India</p>
                        </span>
                      </div>

                      <div className="flex gap-2 items-center text-neutral">
                        <FaCalendarAlt />
                        <p>2017 - 2018</p>
                      </div>
                    </div>
                  </div>

                  <div className="collapse-content">
                    <ul className="text-secondary grid gap-2">
                      <li className="flex gap-2 items-center">
                        <FaCircle className="text-accent text-[10px]" />
                        Collaborated on developing responsive web applications
                        using HTML, CSS, and JavaScript.
                      </li>
                      <li className="flex gap-2 items-center">
                        <FaCircle className="text-accent text-[10px]" />
                        Assisted in implementing front-end functionalities with
                        ReactJS and Bootstrap.
                      </li>
                      <li className="flex gap-2 items-center">
                        <FaCircle className="text-accent text-[10px]" />
                        Contributed to version control and code management using
                        Git.
                      </li>
                      <li className="flex gap-2 items-center">
                        <FaCircle className="text-accent text-[10px]" />
                        Participated in UI/UX design discussions and utilized
                        Figma for prototyping.
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Experience 4 */}

                {/* Experience 5 */}
                <div className="collapse collapse-arrow bg-[#363636]">
                  <input type="radio" name="my-accordion-2" defaultChecked />

                  <div className="collapse-title">
                    <div className="flex justify-between items-center">
                      <h3 className="text-accent text-[20px] font-semibold">
                        Project Engineer
                      </h3>
                      <div className="hidden sm:block badge badge-accent text-primary font-medium">
                        Full time
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row  justify-between items-center my-2">
                      <div className="flex gap-1 sm:gap-8">
                        <span className="flex gap-2 items-center text-neutral">
                          <HiOfficeBuilding />
                          <p>Hidayath Heavy Industry</p>
                        </span>

                        <span className="flex gap-2 items-center text-neutral">
                          <IoMdPin />
                          <p>Dubai, UAE</p>
                        </span>
                      </div>

                      <div className="flex gap-2 items-center text-neutral">
                        <FaCalendarAlt />
                        <p>2015 - 2017</p>
                      </div>
                    </div>
                  </div>

                  <div className="collapse-content">
                    <ul className="text-secondary grid gap-2">
                      <li className="flex gap-2 items-center">
                        <FaCircle className="text-accent text-[10px]" />
                        Facilitated in preparation & implementation of Project
                        execution plan.
                      </li>
                      <li className="flex gap-2 items-start">
                        <FaCircle className="text-accent text-[12px] mt-[7px]" />
                        Monitored work in progress by coordinating all
                        project-related personnel on day-to-day progress of work
                        activities, procurement, & operations to ensure timely
                        completion of the project.
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Experience 5 */}
              </div>
              {/* Work Experience */}

              {/* Education */}
              <div className="grid gap-5 my-10">
                <h2 className="text-[42px] text-white font-bold underline underline-offset-8 decoration-2 decoration-accent">
                  Education
                </h2>
                {/* Education - 1 */}
                <div className="px-5">
                  <div className="flex justify-between items-center">
                    <h3 className="text-neutral text-[20px] font-normal">
                      Bachelor of Engineering
                    </h3>
                    <div className="badge badge-accent text-primary font-medium">
                      First class
                    </div>
                  </div>
                  <div className="flex justify-between items-center my-2">
                    <div className="flex gap-8">
                      <span className="flex gap-2 items-center text-neutral">
                        <HiOfficeBuilding />
                        <p>Nitte University</p>
                      </span>

                      <span className="flex gap-2 items-center text-neutral">
                        <IoMdPin />
                        <p>Karkala, India</p>
                      </span>
                    </div>

                    <div className="flex gap-2 items-center text-neutral">
                      <FaCalendarAlt />
                      <p>21 Sep 2021 - 21 Sep 2024</p>
                    </div>
                  </div>
                  <div className="divider bg-neutral h-[1px]"></div>
                </div>
                {/* Education - 1 */}

                {/* Education - 2 */}
                <div className="px-5">
                  <div className="flex justify-between items-center">
                    <h3 className="text-neutral text-[20px] font-normal">
                      Pre-University Education
                    </h3>
                    <div className="badge badge-accent text-primary font-medium">
                      Full time
                    </div>
                  </div>
                  <div className="flex justify-between items-center my-2">
                    <div className="flex gap-8">
                      <span className="flex gap-2 items-center text-neutral">
                        <HiOfficeBuilding />
                        <p>Nitte University</p>
                      </span>

                      <span className="flex gap-2 items-center text-neutral">
                        <IoMdPin />
                        <p>Karkala, India</p>
                      </span>
                    </div>

                    <div className="flex gap-2 items-center text-neutral">
                      <FaCalendarAlt />
                      <p>21 Sep 2021 - 21 Sep 2024</p>
                    </div>
                  </div>
                </div>
                {/* Education - 2 */}
              </div>
              {/* Education */}
            </div>

            <div className="hidden lg:block lg:col-span-4 p-10">
              <div className="bg-[#363636] p-8 rounded-lg flex flex-col gap-5 sticky top-10">
                <img
                  src="/profile-pic.png"
                  alt="muhammed-sheikh"
                  className="rounded-md"
                />
                <div className="flex flex-col gap-3">
                  <h2 className="text-[28px] text-neutral font-semibold ">
                    Technical Skills
                  </h2>
                  <ul className="text-secondary">
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[10px]" /> Front End
                      Development
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[10px]" /> Back End
                      Development
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[10px]" /> Full
                      Stack Development
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[10px]" /> Digital
                      Marketing
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[10px]" /> Adobe
                      suites
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[10px]" /> UI/UX &
                      Graphic Design
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  <h2 className="text-[28px] text-neutral font-semibold">
                    Other Information
                  </h2>
                  <ul className="text-secondary">
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[10px]" />
                      Nationality: Indian
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[10px]" /> UAE Driving License: Yes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}

      {/* Footer section */}
      <Footer />
      {/* Footer section */}
    </>
  );
}

export default About;
