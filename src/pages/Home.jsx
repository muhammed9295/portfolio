import React from "react";

function Home() {
  return (
    <section className="bg-primary min-h-[calc(100vh-80px)]">
      <div className="container mx-auto px-5 flex flex-col items-center py-3 gap-6 md:gap-10">
        <img src="/hero-image.svg" alt="hero-image" />
        <span className="flex flex-col items-center gap-4">
          <h1 className="text-5xl md:text-6xl lg:text-[64px] md:w-5/6 font-bold text-white text-center leading-tight">
            Unlock Digital Excellence with{" "}
            <span className="text-accent">Muhammed Sheikh</span>
          </h1>
          <p className="md:w-5/6 text-center text-neutral text-[20px] font-normal">
            Transforming brands with 7+ years of expertise in Full Stack
            Development and Digital Marketing. Elevate your digital presence
            today.
          </p>
        </span>
        <span className="flex gap-5">
          <button className="btn btn-secondary w-40 text-[20px] text-primary font-normal hover:bg-accent hover:border-accent">
            Get in touch
          </button>
          <button className="btn btn-outline btn-secondary w-40 text-[20px] text-primary font-normal">
            View Projects
          </button>
        </span>
      </div>
    </section>
  );
}

export default Home;
