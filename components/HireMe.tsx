"use client";
import { FadeIn, SlideUp } from "./MotionWrappers";

export default function HireMe() {
    return (
        <section className="section" id="hire">
            <div className="container">
                <div className="hire-me-box">
                    <FadeIn>
                        <h2 className="hire-title">Want to work together?</h2>
                    </FadeIn>
                    <SlideUp delay={0.1}>
                        <p className="hire-subtitle">Always feel free to contact & hire me</p>
                    </SlideUp>
                    <SlideUp delay={0.2}>
                        <a href="#contact" className="btn btn-primary btn-lg">Hire Me</a>
                    </SlideUp>
                </div>
            </div>
        </section>
    );
}
