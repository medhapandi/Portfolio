"use client";
import Link from "next/link";
import { StaggerContainer, StaggerItem, FadeIn, SlideUp } from "./MotionWrappers";
import { basePath } from "@/app/config";

export default function Portfolio() {
    return (
        <section className="section" id="portfolio">
            <div className="container text-center">
                <FadeIn>
                    <p className="section-subtitle">What I Did ?</p>
                </FadeIn>
                <SlideUp>
                    <h6 className="section-title mb-6">My Works</h6>
                </SlideUp>
                <StaggerContainer className="row">
                    <StaggerItem className="col-md-4">
                        <Link href="#" className="portfolio-card">
                            <img src={`${basePath}/assets/imgs/folio-1.jpg`} className="portfolio-card-img" alt="UI/UX Design" />
                            <div className="portfolio-info-glass">
                                <h4>UI/UX Design Project</h4>
                                <p>Category: UI/UX Design</p>
                            </div>
                        </Link>
                    </StaggerItem>
                    <StaggerItem className="col-md-4">
                        <Link href="#" className="portfolio-card">
                            <img className="portfolio-card-img" src={`${basePath}/assets/imgs/folio-2.jpg`} alt="Content & Visual Design" />
                            <div className="portfolio-info-glass">
                                <h4>Content & Visual Design</h4>
                                <p>Category: Visual Design</p>
                            </div>
                        </Link>
                    </StaggerItem>
                    <StaggerItem className="col-md-4">
                        <Link href="#" className="portfolio-card">
                            <img className="portfolio-card-img" src={`${basePath}/assets/imgs/folio-3.jpg`} alt="Social Media Creatives" />
                            <div className="portfolio-info-glass">
                                <h4>Social Media Creatives</h4>
                                <p>Category: Content Design</p>
                            </div>
                        </Link>
                    </StaggerItem>
                </StaggerContainer>
            </div>
        </section>
    );
}
