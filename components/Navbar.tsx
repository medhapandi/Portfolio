"use client";
import React, { useState, useEffect } from "react";
// forcing rebuild
import Link from "next/link";
import { personalDetails } from "@/app/config";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isAffix, setIsAffix] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Add 'affix' class when scrolled down
            if (window.scrollY > 20) {
                setIsAffix(true);
            } else {
                setIsAffix(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`custom-navbar ${isAffix ? "affix" : ""}`} data-spy="affix" data-offset-top="20">
            <div className={`container ${isAffix ? "" : "nav-centered"}`}>
                {isAffix && <Link className="logo" href="#">{personalDetails.name}</Link>}
                <ul className={`nav ${isOpen ? "show" : ""}`}>
                    <li className="item">
                        <Link className="link" href="#home" onClick={() => setIsOpen(false)}>Home</Link>
                    </li>
                    <li className="item">
                        <Link className="link" href="#about" onClick={() => setIsOpen(false)}>About</Link>
                    </li>
                    <li className="item">
                        <Link className="link" href="#skills" onClick={() => setIsOpen(false)}>Skills</Link>
                    </li>
                    <li className="item">
                        <Link className="link" href="#portfolio" onClick={() => setIsOpen(false)}>My Works</Link>
                    </li>
                    <li className="item">
                        <Link className="link" href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
                    </li>
                    <li className="item ml-md-3">
                        <Link href="#contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>Hire Me</Link>
                    </li>
                </ul>
                <button id="nav-toggle" className={`hamburger hamburger--elastic ${isOpen ? "is-active" : ""}`} onClick={() => setIsOpen(!isOpen)} type="button" aria-label="Toggle navigation">
                    <div className="hamburger-box">
                        <div className="hamburger-inner"></div>
                    </div>
                </button>
            </div>
        </nav>
    );
}
