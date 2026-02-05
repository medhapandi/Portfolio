"use client";
import { StaggerContainer, StaggerItem, FadeIn, SlideUp } from "./MotionWrappers";
import { basePath } from "@/app/config";

export default function Services() {
    return (
        <section className="section" id="service">
            <div className="container text-center">
                <FadeIn>
                    <p className="section-subtitle">What I Do ?</p>
                </FadeIn>
                <SlideUp>
                    <h6 className="section-title mb-6">Service</h6>
                </SlideUp>
                <StaggerContainer className="row">
                    <StaggerItem className="col-md-6 col-lg-3">
                        <div className="service-card transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-transparent">
                            <div className="body">
                                <img src={`${basePath}/assets/imgs/pencil-case.svg`} alt="UI/UX Design Services" className="icon" />
                                <h6 className="title">UI/UX Design</h6>
                                <p className="subtitle" style={{ color: "#333", fontWeight: 500 }}>Creating intuitive user interfaces with user research, personas,
                                    customer journey mapping, and role-based dashboard designs focused on usability.</p>
                            </div>
                        </div>
                    </StaggerItem>
                    <StaggerItem className="col-md-6 col-lg-3">
                        <div className="service-card transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-transparent">
                            <div className="body">
                                <img src={`${basePath}/assets/imgs/responsive.svg`} alt="Web Design Services" className="icon" />
                                <h6 className="title">Web Design</h6>
                                <p className="subtitle" style={{ color: "#333", fontWeight: 500 }}>Designing beautiful, responsive websites using Figma and Canva with
                                    consistent branding and audience-focused aesthetics.</p>
                            </div>
                        </div>
                    </StaggerItem>
                    <StaggerItem className="col-md-6 col-lg-3">
                        <div className="service-card transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-transparent">
                            <div className="body">
                                <img src={`${basePath}/assets/imgs/toolbox.svg`} alt="Front-end Development" className="icon" />
                                <h6 className="title">Front-end Dev</h6>
                                <p className="subtitle" style={{ color: "#333", fontWeight: 500 }}>Building responsive web interfaces using HTML & CSS with clean, semantic
                                    code and modern design principles.</p>
                            </div>
                        </div>
                    </StaggerItem>
                    <StaggerItem className="col-md-6 col-lg-3">
                        <div className="service-card transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-transparent">
                            <div className="body">
                                <img src={`${basePath}/assets/imgs/analytics.svg`} alt="Visual Design Services" className="icon" />
                                <h6 className="title">Visual Design</h6>
                                <p className="subtitle" style={{ color: "#333", fontWeight: 500 }}>Creating stunning digital creatives, social media graphics, banners, and
                                    brand-consistent visual content using Canva and Figma.</p>
                            </div>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </div>
        </section>
    );
}
