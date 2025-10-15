"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const ContactInfoCard = ({
  icon,
  value,
  containerClassName,
}: {
  icon: React.ReactNode;
  value: string;
  containerClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 py-2 rounded-sm",
        containerClassName
      )}
    >
      <div className="p-2 rounded-xl bg-primary shrink-0">{icon}</div>
      <span className="text-text-muted select-text">{value}</span>
    </div>
  );
};

const page = () => {
  return (
    <section className="pt-14 sm:pt-20 min-h-[calc(100vh-70px)]">
      <div className="text-center mb-10">
        <h2 className="text-4xl text-gradient font-bold">Contact</h2>
      </div>
      <div className="pb-20">
        <div className="text-center">
          <p className="text-text-muted leading-relaxed mb-10 text-lg md:text-xl">
            Let&apos;s work together to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-text-secondary mb-6">
              Let&apos;s Connect
            </h3>
            <p className="text-text-muted mb-8">
              I&apos;m always open to new opportunities and collaborations.
            </p>
            <div className="space-y-4">
              <ContactInfoCard
                icon={<Mail size={20} />}
                value="abhaychauhan14744@gmail.com"
              />
              <ContactInfoCard
                icon={<MapPin size={20} />}
                value="Delhi NCR, India"
              />
              <Link href="https://github.com/abhaychauhan8802">
                <ContactInfoCard icon={<Github size={20} />} value="Github" />
              </Link>
              <Link href="https://linkedin.com/in/abhaychauhan07">
                <ContactInfoCard
                  icon={<Linkedin size={20} />}
                  value="Linkedin"
                  containerClassName="mt-4"
                />
              </Link>
            </div>
          </div>

          <div className="rounded-sm p-4 max-sm:py-8 sm:p-8 bg-card border">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label>Your Name</Label>
                <Input type="text" placeholder="Your Name" className="input" />
              </div>
              <div className="space-y-2">
                <Label>Email Address</Label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="input"
                />
              </div>
              <div className="space-y-2">
                <Label>Write your message</Label>
                <Textarea
                  rows={10}
                  placeholder="Type your message here..."
                  className="input resize-none h-36"
                ></Textarea>
              </div>
              <Button
                onClick={() => alert("Message sent! (This is a demo)")}
                className="w-full"
              >
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
