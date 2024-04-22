import React from "react";
import Footer from "../components/Footer";
import Card from "../components/Card";


function Projects() {

const projects = [
  {
    id: 1,
    title: "Descrify",
    description: "Descrify is an AI-driven tool that ingeniously generates captivating titles and detailed descriptions for Amazon products, enhancing their visibility and appeal.",
    image: "/projects/descrify.jpg",
    tech1:"React js",
    tech2:"Node js",
    tech3:"Express js",
    tech4:"MongoDB",
    link: "https://descrify.online/",
    githubLink:"https://github.com/muhammed9295?tab=repositories"
  },
  {
    id: 2,
    title: "Mdshk Properties",
    description: "Mdshk Properties is a cutting-edge real estate portal offering comprehensive property listings to streamline your home buying or selling journey.",
    image: "/projects/mdshk-properties.jpg",
    tech1:"Next js",
    tech2:"Node js",
    tech3:"Express js",
    tech4:"MongoDB",
    link: "https://descrify.online/",
    githubLink:"https://github.com/muhammed9295?tab=repositories"
  },
  {
    id: 3,
    title: "HR Admin Panel",
    description: `A comprehensive HR solution for managing employee data, a CRUD applicaton which
    demonstrates Add, Update and Delete employe data.`,
    image: "/projects/hr-dashboard.jpg",
    tech1:"React js",
    tech2:"Node js",
    tech3:"Express js",
    tech4:"MongoDB",
    link: "https://www.courserapid.com",
    githubLink:"https://github.com/muhammed9295?tab=repositories"
  },
  {
    id: 4,
    title: "Annafa Academy",
    description: `Annafa Academy is an e-learning hub offering interactive Islamic courses, expert instructors, and a vibrant online community for students.`,
    image: "/projects/annafa-academy.jpg",
    tech1:"React js",
    tech2:"HTML",
    tech3:"CSS",
    tech4:"Javascript",
    link: "https://annafa.netlify.app",
    githubLink:"https://github.com/muhammed9295?tab=repositories"
  },
  {
    id: 5,
    title: "Hextrap Solutions",
    description: `Hextrap Solutions is a leading software and web development agency leveraging innovative technologies to craft tailored digital experiences for businesses.`,
    image: "/projects/hextrap.jpg",
    tech1:"React js",
    tech2:"HTML",
    tech3:"CSS",
    tech4:"Javascript",
    link: "https://hextrap.com",
    githubLink:"https://github.com/muhammed9295?tab=repositories"
  },
  {
    id: 6,
    title: "KIAS - International School",
    description: `KIAS is an esteemed international school providing a world-class education and empowering students to become global citizens and leaders.`,
    image: "/projects/kias.jpg",
    tech1:"Next js",
    tech2:"HTML",
    tech3:"CSS",
    tech4:"Javascript",
    link: "https://kias.netlify.app",
    githubLink:"https://github.com/muhammed9295?tab=repositories"
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
              Here are some examples of my works..
            </p>
          </div>

          {/* Project Card section */}
          <div className="flex justify-center items-center my-10">
            <div className="flex flex-wrap gap-10">
              {
                projects.map((project)=> {
                  return (
                    <span key={project.id}>
                  <Card id={project.id} title={project.title} description={project.description} image={project.image} tech1={project.tech1} tech2={project.tech2} tech3={project.tech3} tech4={project.tech4} link={project.link} githubLink={project.githubLink} />
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
