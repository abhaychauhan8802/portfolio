import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import Skills from "./_components/Skills";

const ICON_SIZE = 20;

const socialLinks = [
  {
    name: "Github",
    href: "https://github.com/abhaychauhan8802",
    icon: <Github size={ICON_SIZE} />,
  },
  {
    name: "Linkedin",
    href: "https://linkedin.com/in/abhaychauhan07",
    icon: <Linkedin size={ICON_SIZE} />,
  },
];

const page = () => {
  return (
    <section className="pt-14 sm:pt-20 min-h-[calc(100vh-70px)]">
      <div className="text-center mb-10">
        <h2 className="text-4xl text-gradient font-bold">About Me</h2>
      </div>

      <div className="pb-20">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-text-muted mb-6">
            Passionate Full-Stack Developer with a Creative Mind
          </h2>
          <p className="text-text-muted leading-relaxed mb-6 text-lg md:text-xl">
            As a dedicated full-stack developer, I specialize in building
            high-performance, scalable, and visually engaging web applications.
            With a strong foundation in modern technologies such as React,
            Node.js, Express, and MongoDB, I focus on writing clean,
            maintainable, and efficient code that ensures long-term reliability.
            I combine creative design thinking with a solid understanding of
            software architecture to craft intuitive user experiences backed by
            robust backend systems. Constantly learning and experimenting with
            emerging tools and frameworks, I strive to deliver innovative
            solutions that bridge functionality, performance, and aesthetics.
          </p>
        </div>

        <div className="flex gap-2 justify-center mt-6">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" })
              )}
            >
              {link.icon}
            </Link>
          ))}
        </div>

        {/* skills and experience */}
        <Skills />
      </div>
    </section>
  );
};

export default page;
