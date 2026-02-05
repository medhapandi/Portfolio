import { personalDetails } from "@/app/config";

export default function Footer() {
    return (
        <footer className="footer">
            <p className="mb-0">Copyright &copy; {new Date().getFullYear()} {personalDetails.name}. All Rights Reserved.
            </p>
            <div className="social-links text-right m-auto ml-sm-auto">
                <a href={`mailto:${personalDetails.email}`} className="link" title="Email"><i className="ti-email"></i></a>
                <a href={personalDetails.social.linkedin}
                    className="link" title="LinkedIn" target="_blank"><i className="ti-linkedin"></i></a>
                <a href={personalDetails.social.github} className="link" title="GitHub" target="_blank"><i
                    className="ti-github"></i></a>
            </div>
        </footer>
    );
}
