"use client";

import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

interface EducationCardProps {
  school: string;
  degree: string;
  location: string;
  period: string;
  description: string;
  badges?: string[];
}

const EducationCard = ({
  school,
  degree,
  location,
  period,
  description,
  badges = [],
}: EducationCardProps) => {
  return (
    <div className="glass-card rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 rounded-xl bg-accent/10 text-accent">
          <GraduationCap className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold">{school}</h3>
          <p className="text-lg text-accent font-semibold">{degree}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
        <span className="flex items-center gap-1">
          <MapPin className="h-4 w-4" />
          {location}
        </span>
        <span className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          {period}
        </span>
      </div>

      <p className="text-muted-foreground mb-4">{description}</p>

      {badges.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-accent/10 text-accent hover:bg-accent/20"
            >
              {badge}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};

export default EducationCard;
