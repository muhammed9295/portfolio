import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <section className="bg-primary">
      <footer className="container mx-auto py-10 px-5">
        <div className="divider bg-neutral h-[1px] mb-10"></div>
        <div className="flex flex-col gap-8 justify-between items-center lg:flex-row">
          <img src="/logo.png" width="50px" alt="logo" />
          <ul className="flex gap-5">
          <Link to="/">
            <li className="text-[20px] text-neutral font-normal hover:text-accent">Home</li>
            </Link>
            <Link to="/about">
            <li className="text-[20px] text-neutral font-normal hover:text-accent">About</li>
            </Link>
            <Link to="/projects">
            <li className="text-[20px] text-neutral font-normal hover:text-accent">Projects</li>
            </Link>
            <Link to="/contact">
            <li className="text-[20px] text-neutral font-normal hover:text-accent">Contact</li>
            </Link>
          </ul>
        </div>

        <div className="flex flex-col gap-8 justify-between items-center py-10 lg:flex-row">
          <p className="text-neutral text-[16px] font-normal">
            © Designed by <Link to="/" className="hover:text-accent">Muhammed Sheikh</Link>
          </p>
          <span className="flex items-center gap-8 text-[20px] text-neutral">
            <Link to="https://www.facebook.com/muhammedsheikhh" target="_blank">
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
            <Link to="https://www.instagram.com/muhammed_shyk" target="_blank">
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
            <Link to="https://www.linkedin.com/in/muhammedsheikh" target="_blank">
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
            <Link to="https://github.com/muhammed9295" target="_blank">
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
          </span>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
