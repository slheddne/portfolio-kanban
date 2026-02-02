"use client";

import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  badges: string[];
  isLeft?: boolean;
}

const ExperienceCard = ({
  title,
  company,
  location,
  period,
  description,
  badges,
  isLeft = false,
}: ExperienceCardProps) => {
  return (
    <div className={`flex items-center gap-4 md:gap-8 ${isLeft ? "md:flex-row-reverse" : ""}`}>
      {/* Timeline dot */}
      <div className="hidden md:flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20" />
        <div className="w-0.5 h-full bg-border" />
      </div>

      {/* Card */}
      <div
        className={`flex-1 glass-card rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
          isLeft ? "md:text-right" : ""
        }`}
      >
        <div className={`flex items-start gap-4 mb-4 ${isLeft ? "md:flex-row-reverse" : ""}`}>
          <div className="p-3 rounded-xl bg-primary/10 text-primary">
            <Briefcase className="h-6 w-6" />
          </div>
          <div className={`flex-1 ${isLeft ? "md:text-right" : ""}`}>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-lg text-primary font-semibold">{company}</p>
          </div>
        </div>

        <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 ${isLeft ? "md:justify-end" : ""}`}>
          <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {location}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {period}
          </span>
        </div>

        <p className="text-muted-foreground mb-6">{description}</p>

        <div className={`flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : ""}`}>
          {badges.map((badge, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-primary/10 text-primary hover:bg-primary/20"
            >
              {badge}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
