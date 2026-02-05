"use client";
import React from "react";
import { personalDetails, basePath } from "@/app/config";
import { FadeIn, SlideUp } from "./MotionWrappers";

export default function About() {
    return (
        <section className="section pt-0" id="about">
            <div className="container text-center">
                <div className="about">
                    {/* Image removed by user request */}
                    <SlideUp className="about-caption" delay={0.4}>
                        <p className="section-subtitle">{personalDetails.about.title}</p>
                        <h2 className="section-title mb-3">About Me</h2>
                        <p style={{ whiteSpace: "pre-line", color: "#000000", fontWeight: 500, fontSize: "16px", lineHeight: "1.8" }}>
                            {personalDetails.about.description}
                        </p>
                        <a href={`${basePath}/assets/Med.pdf`} download="Medha_P_Resume.pdf" className="btn-rounded btn btn-outline-primary mt-4">
                            <i className="ti-download"></i> Download CV
                        </a>
                    </SlideUp>
                </div>
            </div>
        </section>
    );
}
