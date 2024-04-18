import React from "react";

function Header() {
  return (
    <header className="bg-primary py-6">
      <nav className="container mx-auto flex text-neutral justify-between">
        <img src="" alt="logo" />
        <ul className="flex gap-8">
          <li>Home</li>
          <li>About</li>
          <li>Tech Stack</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        
        <div className="">
          social media icons
        </div>
      </nav>
    </header>
  );
}

export default Header;
