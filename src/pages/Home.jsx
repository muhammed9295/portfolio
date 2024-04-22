import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const PDF_URL = "http://localhost:5173/muhammed-sheikh.pdf";

  const downloadFile = (url) => {

    fetch(url)
    .then((response)=> response.blob())
    .then((blob)=>{
      const blobUrl = window.URL.createObjectURL(new Blob([blob]))
      const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = blobUrl;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
    })
    
  };

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
          <button
            onClick={()=>{downloadFile(PDF_URL)}}
            className="btn btn-secondary w-40 text-[20px] text-primary font-normal hover:bg-accent hover:border-accent"
          >
            Download CV
          </button>
          <Link to="/projects">
          <button className="btn btn-outline btn-secondary w-40 text-[20px] text-primary font-normal">
            View Projects
          </button>
          </Link>
        </span>
      </div>
    </section>
  );
}

export default Home;
