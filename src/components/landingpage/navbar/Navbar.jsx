'use client'

import { motion } from "framer-motion";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";



const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    React Pro
                </motion.span>
                <div className="social">
                    <motion.a
                        initial={{ opacity: 0, scale: 0.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        href="#"
                    >
                        <img src="/facebook.png" alt="" />
                    </motion.a>
                    <motion.a
                        initial={{ opacity: 0, scale: 0.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        href="#"
                    >
                        <img src="/instagram.png" alt="" />
                    </motion.a>
                    <motion.a
                        initial={{ opacity: 0, scale: 0.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        href="#"
                    >
                        <img src="/youtube.png" alt="" />
                    </motion.a>
                    <motion.a
                        initial={{ opacity: 0, scale: 0.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        href="#"
                    >
                        <img src="/dribbble.png" alt="" />
                    </motion.a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;