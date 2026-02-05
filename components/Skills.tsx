"use client";
import { StaggerContainer, StaggerItem, FadeIn, SlideUp } from "./MotionWrappers";
import { basePath } from "@/app/config";

const skills = [
    { name: "Figma", icon: `${basePath}/assets/imgs/pencil-case.svg` },
    { name: "Canva", icon: `${basePath}/assets/imgs/responsive.svg` },
    { name: "HTML & CSS", icon: `${basePath}/assets/imgs/toolbox.svg` },
    { name: "Google Analytics", icon: `${basePath}/assets/imgs/analytics.svg` },
    { name: "User Research", icon: `${basePath}/assets/imgs/responsive.svg` },
    { name: "Social Media", icon: `${basePath}/assets/imgs/pencil-case.svg` },
];

export default function Skills() {
    return (
        <section className="section-sm" id="skills">
            <div className="container text-center">
                <FadeIn>
                    <p className="section-subtitle">What I Use ?</p>
                </FadeIn>
                <SlideUp>
                    <h6 className="section-title mb-6">Skills & Tools</h6>
                </SlideUp>
                <StaggerContainer className="skills-grid">
                    {skills.map((skill, index) => (
                        <StaggerItem key={index} className="skill-item">
                            <div className="skill-card">
                                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                                <span className="skill-name">{skill.name}</span>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
