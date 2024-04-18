import React from "react";
import Footer from "../components/Footer";

function TechStack() {
  return (
    <>
      {/* TechStack section */}
      <section className="bg-primary min-h-screen py-10">
        <div className="container mx-auto px-5">

          <div className="grid gap-4 mt-10">
            <h2 className="text-[42px] text-white font-bold">My Tech Stack</h2>
            <p className="text-neutral text-[20px] font-normal">Technologies I've been working with recently</p>
          </div>

          {/* Tech icons */}
          <div className="flex gap-28 flex-wrap mt-24">
            <span className="flex flex-col items-center justify-end gap-2">
              <img src="/icons/html.svg" alt="html" />
              <p className="text-secondary font-normal">HTML</p>
            </span>

            <span className="flex flex-col items-center justify-end gap-2">
              <img src="/icons/css.svg" alt="css" />
              <p className="text-secondary font-normal">CSS</p>
            </span>

            <span className="flex flex-col items-center justify-end gap-2">
              <img src="/icons/javascript.svg" alt="javascript" />
              <p className="text-secondary font-normal">JAVASCRIPT</p>
            </span>


            <span className="flex flex-col items-center justify-end gap-3">
              <img src="/icons/react.svg" alt="react" />
              <p className="text-secondary font-normal">REACT JS</p>
            </span>


            <span className="flex flex-col items-center justify-end gap-2">
              <img src="/icons/nextjs.svg" alt="nextjs" />
              <p className="text-secondary font-normal">NEXT JS</p>
            </span>


            <span className="flex flex-col items-center justify-end gap-2">
              <img src="/icons/python.svg" alt="python" />
              <p className="text-secondary font-normal">PYTHON</p>
            </span>

            <span className="flex flex-col items-center justify-end gap-2">
              <img src="/icons/django.svg" alt="django" />
              <p className="text-secondary font-normal">DJANGO</p>
            </span>

            <span className="flex flex-col items-center justify-end gap-2">
              <img src="/icons/typescript.svg" alt="typescript" />
              <p className="text-secondary font-normal">TYPESCRIPT</p>
            </span>

            <span className="flex flex-col items-center justify-end gap-2">
              <img src="/icons/tailwind.svg" alt="tailwindcss" />
              <p className="text-secondary font-normal">TAILWIND CSS</p>
            </span>

            <span className="flex flex-col items-center justify-end gap-2">
              <img src="/icons/bootstrap.svg" alt="bootstrap" />
              <p className="text-secondary font-normal">BOOTSTRAP</p>
            </span>

            <span className="flex flex-col items-center justify-end gap-2">
              <img src="/icons/express-js.svg" alt="expressjs" />
              <p className="text-secondary font-normal">EXPRESS JS</p>
            </span>

            <span className="flex flex-col items-center justify-end gap-2">
              <img src="/icons/mongodb.svg" alt="mongodb" />
              <p className="text-secondary font-normal">MONGO DB</p>
            </span>

            <span className="flex flex-col items-center justify-end gap-2">
              <img src="/icons/nodejs.svg" alt="nodejs" />
              <p className="text-secondary font-normal">NODE JS</p>
            </span>

            <span className="flex flex-col items-center justify-end gap-2">
              <img src="/icons/git.svg" alt="git" />
              <p className="text-secondary font-normal">GIT</p>
            </span>

            <span className="flex flex-col items-center justify-end gap-2">
              <img src="/icons/github.svg" alt="github" />
              <p className="text-secondary font-normal">GIT HUB</p>
            </span>

            <span className="flex flex-col items-center justify-end gap-2">
              <img src="/icons/vscode.svg" alt="vscode" />
              <p className="text-secondary font-normal">VS CODE</p>
            </span>
          </div>
          {/* Tech icons */}

        </div>
      </section>
      {/* TechStack section */}

      {/* Footer */}
      <Footer />
      {/* Footer */}
    </>
  );
}

export default TechStack;
