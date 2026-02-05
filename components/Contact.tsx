"use client";
import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { FadeIn, SlideUp } from "./MotionWrappers";
import { personalDetails } from "@/app/config";

// EmailJS Configuration
const EMAILJS_SERVICE_ID = "service_9nqmicm";
const EMAILJS_TEMPLATE_ID = "template_eu8poyj";
const EMAILJS_PUBLIC_KEY = "d9lEFxvX8DrNdF73A";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_name: personalDetails.name,
                },
                EMAILJS_PUBLIC_KEY
            );

            setSubmitStatus("success");
            setStatusMessage("Message sent successfully! I'll get back to you soon.");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("EmailJS Error:", error);
            setSubmitStatus("error");
            setStatusMessage("Failed to send message. Please try again or email me directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="section" id="contact">
            <div className="container text-center">
                <FadeIn>
                    <p className="section-subtitle">Get In Touch</p>
                </FadeIn>
                <SlideUp>
                    <h6 className="section-title mb-6">Contact Me</h6>
                </SlideUp>

                {/* Two Column Layout */}
                <div className="row" style={{ marginTop: '40px' }}>
                    {/* Left Column: Contact Info */}
                    <div className="col-md-6 mb-4">
                        <FadeIn>
                            <div className="service-card" style={{
                                height: '100%',
                                textAlign: 'left',
                                padding: '35px'
                            }}>
                                <h3 style={{
                                    fontSize: '22px',
                                    fontWeight: 700,
                                    marginBottom: '12px',
                                    color: '#000000'
                                }}>
                                    Let's work together
                                </h3>
                                <p style={{
                                    opacity: 1,
                                    color: '#333333',
                                    fontWeight: 500,
                                    marginBottom: '32px',
                                    lineHeight: 1.7,
                                    fontSize: '15px'
                                }}>
                                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                                </p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    {/* Email */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                        <div style={{
                                            width: '44px',
                                            height: '44px',
                                            borderRadius: '12px',
                                            background: 'rgba(163, 130, 248, 0.15)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}>
                                            <i className="ti-email" style={{ fontSize: '18px', color: '#a382f8' }}></i>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '12px', color: '#555', fontWeight: 600, marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '1px' }}>Email</p>
                                            <a href={`mailto:${personalDetails.email}`} style={{
                                                fontWeight: 600,
                                                fontSize: '15px',
                                                textDecoration: 'none',
                                                color: '#000000'
                                            }}>
                                                {personalDetails.email}
                                            </a>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                        <div style={{
                                            width: '44px',
                                            height: '44px',
                                            borderRadius: '12px',
                                            background: 'rgba(163, 130, 248, 0.15)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}>
                                            <i className="ti-mobile" style={{ fontSize: '18px', color: '#a382f8' }}></i>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '12px', color: '#555', fontWeight: 600, marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '1px' }}>Phone</p>
                                            <a href={`tel:${personalDetails.phone}`} style={{
                                                fontWeight: 600,
                                                fontSize: '15px',
                                                textDecoration: 'none',
                                                color: '#000000'
                                            }}>
                                                {personalDetails.phone}
                                            </a>
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                        <div style={{
                                            width: '44px',
                                            height: '44px',
                                            borderRadius: '12px',
                                            background: 'rgba(163, 130, 248, 0.15)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}>
                                            <i className="ti-location-pin" style={{ fontSize: '18px', color: '#a382f8' }}></i>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '12px', color: '#555', fontWeight: 600, marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '1px' }}>Location</p>
                                            <p style={{ fontWeight: 600, margin: 0, fontSize: '15px' }}>{personalDetails.location}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid rgba(163, 130, 248, 0.2)' }}>
                                    <p style={{ fontSize: '12px', color: '#555', fontWeight: 600, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Connect with me</p>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <a href={personalDetails.social.github} target="_blank" rel="noopener noreferrer" className="transition-all duration-200 ease-out hover:-translate-y-1" style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '10px',
                                            background: 'rgba(163, 130, 248, 0.15)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#a382f8',
                                            textDecoration: 'none'
                                        }}>
                                            <i className="ti-github" style={{ fontSize: '16px' }}></i>
                                        </a>
                                        <a href={personalDetails.social.linkedin} target="_blank" rel="noopener noreferrer" className="transition-all duration-200 ease-out hover:-translate-y-1" style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '10px',
                                            background: 'rgba(163, 130, 248, 0.15)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#a382f8',
                                            textDecoration: 'none'
                                        }}>
                                            <i className="ti-linkedin" style={{ fontSize: '16px' }}></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="col-md-6 mb-4">
                        <SlideUp delay={0.2}>
                            <div className="service-card" style={{
                                height: '100%',
                                textAlign: 'left',
                                padding: '35px'
                            }}>
                                <h3 style={{
                                    fontSize: '22px',
                                    fontWeight: 700,
                                    marginBottom: '8px',
                                    color: '#000000'
                                }}>
                                    Send me a message
                                </h3>
                                <p style={{
                                    opacity: 1,
                                    marginBottom: '28px',
                                    fontSize: '15px',
                                    color: '#333',
                                    fontWeight: 500
                                }}>
                                    Fill out the form below and I'll get back to you soon.
                                </p>

                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    {/* Name Field */}
                                    <div>
                                        <label htmlFor="name" style={{
                                            display: 'block',
                                            fontSize: '13px',
                                            fontWeight: 600,
                                            marginBottom: '8px',
                                            color: '#171717'
                                        }}>
                                            Your name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your name"
                                            className="contact-input"
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <label htmlFor="email" style={{
                                            display: 'block',
                                            fontSize: '13px',
                                            fontWeight: 600,
                                            marginBottom: '8px',
                                            color: '#171717'
                                        }}>
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter your email"
                                            className="contact-input"
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    {/* Message Field */}
                                    <div>
                                        <label htmlFor="message" style={{
                                            display: 'block',
                                            fontSize: '13px',
                                            fontWeight: 600,
                                            marginBottom: '8px',
                                            color: '#171717'
                                        }}>
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Enter your message"
                                            className="contact-textarea"
                                            required
                                            disabled={isSubmitting}
                                        ></textarea>
                                    </div>

                                    {/* Status Message */}
                                    {submitStatus !== "idle" && (
                                        <div style={{
                                            padding: '10px 15px',
                                            borderRadius: '8px',
                                            fontSize: '14px',
                                            fontWeight: 500,
                                            backgroundColor: submitStatus === "success" ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)',
                                            color: submitStatus === "success" ? '#2e7d32' : '#d32f2f',
                                            border: `1px solid ${submitStatus === "success" ? '#2e7d32' : '#d32f2f'}`
                                        }}>
                                            {statusMessage}
                                        </div>
                                    )}

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="btn btn-primary transition-all duration-200 ease-out hover:-translate-y-1"
                                        disabled={isSubmitting || submitStatus === "success"}
                                        style={{
                                            width: '100%',
                                            padding: '14px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '8px',
                                            marginTop: '8px',
                                            opacity: isSubmitting ? 0.9 : 1,
                                            cursor: (isSubmitting || submitStatus === "success") ? 'default' : 'pointer',
                                            backgroundColor: submitStatus === "success" ? '#4CAF50' : undefined,
                                            borderColor: submitStatus === "success" ? '#4CAF50' : undefined,
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{
                                                    width: '20px',
                                                    height: '20px',
                                                    border: '3px solid rgba(255,255,255,0.3)',
                                                    borderTopColor: '#fff',
                                                    borderRadius: '50%',
                                                    animation: 'spin 1s linear infinite'
                                                }}></span>
                                                <span style={{ marginLeft: '10px' }}>Sending...</span>
                                            </>
                                        ) : submitStatus === "success" ? (
                                            <>
                                                <div style={{
                                                    width: '20px',
                                                    height: '20px',
                                                    position: 'relative',
                                                    marginRight: '8px'
                                                }}>
                                                    <svg viewBox="0 0 52 52" style={{
                                                        width: '20px',
                                                        height: '20px',
                                                        display: 'block'
                                                    }}>
                                                        <circle cx="26" cy="26" r="25" fill="none" stroke="#fff" strokeWidth="4" style={{ opacity: 0.5 }} />
                                                        <path fill="none" stroke="#fff" strokeWidth="4" d="M14.1 27.2l7.1 7.2 16.7-16.8" style={{
                                                            strokeDasharray: 100,
                                                            strokeDashoffset: 0,
                                                            animation: 'checkmark 0.5s ease-in-out forwards'
                                                        }} />
                                                    </svg>
                                                </div>
                                                Message Sent!
                                            </>
                                        ) : (
                                            <>
                                                <i className="ti-location-arrow"></i>
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>
    );
}
