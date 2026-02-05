"use client";
import { personalDetails } from "@/app/config";
import { FadeIn, SlideUp } from "./MotionWrappers";

export default function Header() {
    return (
        <header id="home" className="header">
            <div className="overlay"></div>

            <div className="header-content container">
                <FadeIn delay={0.2}>
                    <h1 className="header-title">
                        <span className="up">HI!</span>
                        <span className="down">I am {personalDetails.name}</span>
                    </h1>
                </FadeIn>
                <p className="header-subtitle !opacity-100 !text-black !font-semibold">{personalDetails.title}</p>
                <SlideUp delay={0.6}>
                    <a href="#portfolio" className="btn btn-primary">Visit My Works</a>
                </SlideUp>
            </div>
        </header>
    );
}
