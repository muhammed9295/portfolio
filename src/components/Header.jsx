import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function Header() {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <header className="bg-primary py-6">
      <nav className="container px-5 mx-auto flex justify-between items-center">
        <img src="/logo.png" width="50px" height="50px" alt="logo" />
        <ul className="hidden lg:flex gap-8">
          <Link to="/">
            <li className="text-[20px] font-medium text-neutral hover:text-accent">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="text-[20px] font-medium text-neutral hover:text-accent">
              About
            </li>
          </Link>
          <Link to="/tech-stack">
            <li className="text-[20px] font-medium text-neutral hover:text-accent">
              Tech Stack
            </li>
          </Link>
          <Link to="/projects">
            <li className="text-[20px] font-medium text-neutral hover:text-accent">
              Projects
            </li>
          </Link>
          <Link to="/contact">
            <li className="text-[20px] font-medium text-neutral hover:text-accent">
              Contact
            </li>
          </Link>
        </ul>

        <div className="hidden lg:flex gap-8 text-[24px] text-neutral">
          <Link to="#">
            <motion.div
              whileHover={{
                boxShadow: "0 0 20px rgba(255, 159, 77, 0.5)",
                scale: 1.1,
              }}
              className="rounded-full"
            >
              <FaFacebook className="hover:text-accent" />
            </motion.div>
          </Link>
          <Link to="#">
            <motion.div
              whileHover={{
                boxShadow: "0 0 20px rgba(255, 159, 77, 0.5)",
                scale: 1.1,
              }}
              className="rounded-full"
            >
              <FaInstagram className="hover:text-accent" />
            </motion.div>
          </Link>
          <Link to="#">
            <motion.div
              whileHover={{
                boxShadow: "0 0 20px rgba(255, 159, 77, 0.5)",
                scale: 1.1,
              }}
              className="rounded-full"
            >
              <FaLinkedin className="hover:text-accent" />
            </motion.div>
          </Link>
          <Link to="#">
            <motion.div
              whileHover={{
                boxShadow: "0 0 20px rgba(255, 159, 77, 0.5)",
                scale: 1.1,
              }}
              className="rounded-full"
            >
              <FaGithub className="hover:text-accent" />
            </motion.div>
          </Link>
        </div>

        {/* Responsive Menu */}
        <div className="lg:hidden">
          <button
            className="w-10 h-7 flex flex-col justify-between z-50 relative"
            onClick={() => setOpen((prev) => !prev)}
          >
            <motion.div
              className="w-10 h-1 bg-white rounded origin-left"
              variants={topVariants}
              animate={open ? "opened" : "closed"}
            ></motion.div>
            <motion.div
              className="w-10 h-1 bg-white rounded"
              variants={centerVariants}
              animate={open ? "opened" : "closed"}
            ></motion.div>
            <motion.div
              className="w-10 h-1 bg-white rounded origin-left"
              variants={bottomVariants}
              animate={open ? "opened" : "closed"}
            ></motion.div>
          </button>

          {/* Menu items */}
          {open && (
            <motion.div
              variants={listVariants}
              initial="closed"
              animate="opened"
              className="absolute top-0 right-0 w-[98%] h-screen bg-neutral text-white flex flex-col items-center justify-center gap-8 text-2xl z-40"
            >
              <Link to="/">
                <p>Home</p>
              </Link>
              <Link to="/about">About</Link>
              <Link to="/tech-stack">Tech Stack</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>

              <div className="py-5 flex gap-10 text-3xl text-white">
                <Link to="#">
                  <FaFacebook className="hover:text-accent" />
                </Link>
                <Link to="#">
                  <FaInstagram className="hover:text-accent" />
                </Link>
                <Link to="#">
                  <FaLinkedin className="hover:text-accent" />
                </Link>
                <Link to="#">
                  <FaGithub className="hover:text-accent" />
                </Link>
              </div>
            </motion.div>
          )}
          {/* Menu items */}
        </div>
        {/* Responsive Menu */}
      </nav>
    </header>
  );
}

export default Header;
