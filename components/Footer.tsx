import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <a 
          href={`mailto:${personalInfo.email}`} 
          className="text-sm font-sans text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-300"
        >
          {personalInfo.email}
        </a>

        <span className="text-xs font-sans text-[var(--text-hint)] tracking-widest uppercase">
          © {currentYear} {personalInfo.name}
        </span>

        <div className="flex items-center space-x-6">
          <a 
            href={personalInfo.socialLinks.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs font-sans uppercase tracking-widest text-[var(--text-hint)] hover:text-[var(--text-primary)] transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a 
            href={personalInfo.socialLinks.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs font-sans uppercase tracking-widest text-[var(--text-hint)] hover:text-[var(--text-primary)] transition-colors duration-300"
          >
            GitHub
          </a>
          <a 
            href={personalInfo.socialLinks.dribbble} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs font-sans uppercase tracking-widest text-[var(--text-hint)] hover:text-[var(--text-primary)] transition-colors duration-300"
          >
            Dribbble
          </a>
        </div>
      </div>
    </footer>
  );
}
