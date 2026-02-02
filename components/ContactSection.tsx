"use client";

import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, Send } from "lucide-react";

interface ContactSectionProps {
  email: string;
  linkedin: string;
  location: string;
}

const ContactSection = ({ email, linkedin, location }: ContactSectionProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="glass-card rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a
                  href={`mailto:${email}`}
                  className="font-semibold hover:text-primary transition-colors"
                >
                  {email}
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Linkedin className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:text-primary transition-colors"
                >
                  Connect with me
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-semibold">{location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <div className="glass-card rounded-2xl p-8 flex flex-col justify-center items-center text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 animate-pulse-glow">
            <Send className="h-10 w-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
          <p className="text-muted-foreground mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Button
            size="lg"
            className="group"
            onClick={() => window.location.href = `mailto:${email}`}
          >
            <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Send me an Email
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
