import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const page = () => {
  return (
    <section className="pt-5 md:pt-20 min-h-[calc(100vh-70px)] flex items-center">
      <div className="w-full py-20 text-center">
        {/* Main content */}
        <h1 className="text-[40px] leading-12 sm:leading-20 sm:text-5xl md:text-7xl font-bold mb-6 relative z-10">
          <span className="block text-text-secondary">Hello, I&apos;m</span>
          <span className="block text-gradient">Abhay Chauhan</span>
        </h1>

        <h2 className="text-xl md:text-3xl text-text-muted mb-8 relative z-10">
          I&apos;m a Full-Stack Developer & UI/UX Enthusiast
        </h2>

        <p className="text-lg sm:text-xl text-text-muted mb-12 leading-relaxed max-w-3xl mx-auto relative z-10">
          I craft beautiful, functional web applications that provide
          exceptional user experiences. Passionate about clean code, modern
          technologies, and turning ideas into reality.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <Link href="/projects" className={cn(buttonVariants(), "btn")}>
            View My Work
          </Link>
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "outline" }), "btn")}
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default page;
