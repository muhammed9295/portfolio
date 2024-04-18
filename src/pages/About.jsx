import React from "react";
import { HiOfficeBuilding } from "react-icons/hi";
import { IoMdPin } from "react-icons/io";
import { FaCalendarAlt, FaCircle } from "react-icons/fa";
import Footer from "../components/Footer";

function About() {
  return (
    <div>
      {/* About section */}
      <section className="bg-primary min-h-screen py-10">
        <div className="container mx-auto px-5 text-white">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Mobile visibility */}
            <div className="block lg:hidden sm:p-10">
              <div className="bg-[#363636] p-4 sm:p-8 rounded-lg flex flex-col gap-5 sticky top-0">
                <img
                  src="/profile-pic.png"
                  alt="muhammed-sheikh"
                  className="rounded-md"
                />
                <div className="flex flex-col gap-3">
                  <h2 className="text-[28px] font-semibold">
                    Technical Skills
                  </h2>
                  <ul>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[12px]" /> Skill-1
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[12px]" /> Skill-2
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[12px]" /> Skill-3
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[12px]" /> Skill-4
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[12px]" /> Skill-5
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[12px]" /> Skill-6
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  <h2 className="text-[28px] font-semibold">Other Skills</h2>
                  <ul>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[12px]" /> Skill-1
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[12px]" /> Skill-2
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[12px]" /> Skill-3
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[12px]" /> Skill-4
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[12px]" /> Skill-5
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[12px]" /> Skill-6
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Mobile visibility */}

            <div className="lg:col-span-8">
              <div className="grid gap-5">
                <h2 className="text-[42px] text-white font-bold underline underline-offset-8 decoration-2 decoration-accent">
                  About Me
                </h2>
                <p className="text-[18px] text-neutral font-normal">
                  The Generator App is an online tool that helps you to export
                  ready-made templates ready to work as your future website. It
                  helps you to combine slides, panels and other components and
                  export it as a set of static files: HTML/CSS/JS.
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
                        Senior Web Developer
                      </h3>
                      <div className="badge badge-accent text-primary font-medium">
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
                          <p>Bengaluru, India</p>
                        </span>
                      </div>

                      <div className="flex gap-2 items-center text-neutral">
                        <FaCalendarAlt />
                        <p>21 Sep 2021 - 21 Sep 2024</p>
                      </div>
                    </div>
                  </div>

                  <div className="collapse-content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Amet animi laborum consequuntur inventore voluptate.
                      Placeat, pariatur asperiores praesentium vitae aut nam
                      vero recusandae odio autem! Atque, explicabo? Magni, animi
                      atque.
                    </p>
                  </div>
                </div>
                {/* Experience 1 */}

                {/* Experience 2 */}
                <div className="collapse collapse-arrow bg-[#363636]">
                  <input type="radio" name="my-accordion-2" defaultChecked />

                  <div className="collapse-title">
                    <div className="flex justify-between items-center">
                      <h3 className="text-accent text-[20px] font-semibold">
                        Senior Web Developer
                      </h3>
                      <div className="badge badge-accent text-primary font-medium">
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
                          <p>Bengaluru, India</p>
                        </span>
                      </div>

                      <div className="flex gap-2 items-center text-neutral">
                        <FaCalendarAlt />
                        <p>21 Sep 2021 - 21 Sep 2024</p>
                      </div>
                    </div>
                  </div>

                  <div className="collapse-content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Amet animi laborum consequuntur inventore voluptate.
                      Placeat, pariatur asperiores praesentium vitae aut nam
                      vero recusandae odio autem! Atque, explicabo? Magni, animi
                      atque.
                    </p>
                  </div>
                </div>
                {/* Experience 2 */}

                {/* Experience 3 */}
                <div className="collapse collapse-arrow bg-[#363636]">
                  <input type="radio" name="my-accordion-2" defaultChecked />

                  <div className="collapse-title">
                    <div className="flex justify-between items-center">
                      <h3 className="text-accent text-[20px] font-semibold">
                        Senior Web Developer
                      </h3>
                      <div className="badge badge-accent text-primary font-medium">
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
                          <p>Bengaluru, India</p>
                        </span>
                      </div>

                      <div className="flex gap-2 items-center text-neutral">
                        <FaCalendarAlt />
                        <p>21 Sep 2021 - 21 Sep 2024</p>
                      </div>
                    </div>
                  </div>

                  <div className="collapse-content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Amet animi laborum consequuntur inventore voluptate.
                      Placeat, pariatur asperiores praesentium vitae aut nam
                      vero recusandae odio autem! Atque, explicabo? Magni, animi
                      atque.
                    </p>
                  </div>
                </div>
                {/* Experience 3 */}
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
              <div className="bg-[#363636] p-8 rounded-lg flex flex-col gap-5 sticky top-0">
                <img
                  src="/profile-pic.png"
                  alt="muhammed-sheikh"
                  className="rounded-md"
                />
                <div className="flex flex-col gap-3">
                  <h2 className="text-[28px] font-semibold">
                    Technical Skills
                  </h2>
                  <ul>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[12px]" /> Skill-1
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[12px]" /> Skill-2
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[12px]" /> Skill-3
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[12px]" /> Skill-4
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[12px]" /> Skill-5
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[12px]" /> Skill-6
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  <h2 className="text-[28px] font-semibold">Other Skills</h2>
                  <ul>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[12px]" /> Skill-1
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[12px]" /> Skill-2
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[12px]" /> Skill-3
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[12px]" /> Skill-4
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[12px]" /> Skill-5
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaCircle className="text-accent text-[12px]" /> Skill-6
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
    </div>
  );
}

export default About;
