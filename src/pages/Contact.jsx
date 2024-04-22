import React from "react";
import Footer from "../components/Footer";
import { IoMail, IoCall } from "react-icons/io5";

function Contact() {
  return (
    <>
      {/* Contact section */}
      <section className="bg-primary min-h-screen py-10">
        <div className="container mx-auto px-5 grid gap-6">
          <div className="my-5 grid gap-5">
            <h2 className="text-[42px] text-white font-bold">Get in touch</h2>
            <p className="text-neutral text-[20px] font-normal lg:w-1/2">
            Ready to take your digital presence to the next level? Contact Me today to discuss your project requirements and see how I can help you achieve your goals.
            </p>
          </div>

          <div className="my-5 grid gap-2">
            <span className="flex gap-3 items-center text-2xl text-white">
              <IoMail className="text-accent" /> mdshk.92@gmail.com
            </span>
            <span className="flex gap-3 items-center text-2xl text-white">
              <IoCall className="text-accent" /> +91 9972218671
            </span>
          </div>

          <div className="">
            <form className="grid gap-5">
              <div className="flex flex-col lg:flex-row gap-3 sm:gap-5">
                <label className="form-control w-full">
                  <div className="label mb-2">
                    <span className="label-text text-secondary text-[20px]">
                      First Name
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-accent w-full bg-primary text-neutral"
                  />
                </label>

                <label className="form-control w-full">
                  <div className="label mb-2">
                    <span className="label-text text-secondary text-[20px]">
                      Last Name
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-accent w-full bg-primary text-neutral"
                  />
                </label>
              </div>

              <div className="flex flex-col lg:flex-row gap-3 sm:gap-5">
                <label className="form-control w-full">
                  <div className="label mb-2">
                    <span className="label-text text-secondary text-[20px]">
                      Phone number
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-accent w-full bg-primary text-neutral"
                  />
                </label>

                <label className="form-control w-full">
                  <div className="label mb-2">
                    <span className="label-text text-secondary text-[20px]">
                      Email
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-accent w-full bg-primary text-neutral"
                  />
                </label>
              </div>

              <label className="form-control">
                <div className="label mb-2">
                  <span className="label-text text-secondary text-[20px]">Your Message</span>
                </div>
                <textarea
                  className="textarea textarea-bordered textarea-accent h-40 bg-primary text-neutral"
                  placeholder="Your Message"
                ></textarea>                
              </label>

              <button className="btn btn-secondary w-36 ">Submit</button>
            </form>
          </div>
        </div>
      </section>
      {/* Contact section */}

      {/* Footer */}
      <Footer />
      {/* Footer */}
    </>
  );
}

export default Contact;
