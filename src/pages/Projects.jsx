import React from "react";
import Footer from "../components/Footer";
import Card from "../components/Card";


function Projects() {

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    image: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    tech1:"React js",
    tech2:"Redux",
    tech3:"Node js",
    tech4:"Node js",
    link: "#"
  },
  {
    id: 2,
    title: "Project 2",
    description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    image: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    tech1:"React js",
    tech2:"Redux",
    tech3:"Node js",
    tech4:"Node js",
    link: "#"
  },

]

  return (
    <>
      {/* Project section */}
      <section className="bg-primary min-h-screen py-10">
        <div className="container mx-auto px-5">

          <div className="grid gap-4 mt-10">
            <h2 className="text-[42px] text-white font-bold">Projects</h2>
            <p className="text-neutral text-[20px] font-normal">
              Things I've built so far..
            </p>
          </div>

          {/* Project Card section */}
          <div className="flex justify-center items-center my-10">
            <div className="flex flex-wrap gap-10">
              {
                projects.map((project)=> {
                  return (
                    <span key={project.id}>
                  <Card id={project.id} title={project.title} description={project.description} image={project.image} tech1={project.tech1} tech2={project.tech2} tech3={project.tech3} tech4={project.tech4} />
                  </span>
                  )
                })
              }
              
              
            </div>
          </div>
          {/* Project Card section */}

        </div>
      </section>
      {/* Project section */}

      {/* Footer section */}
      <Footer />
      {/* Footer section */}
    </>
  );
}

export default Projects;
