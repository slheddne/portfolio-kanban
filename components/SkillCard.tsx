"use client";

import { Badge } from "@/components/ui/badge";
import { Code2, Server, Database, Wrench, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Frontend: Code2,
  Backend: Server,
  Databases: Database,
  "DevOps & Tools": Wrench,
};

interface SkillCardProps {
  title: string;
  description: string;
  iconName: string;
  skills: string[];
  gradient: string;
}

const SkillCard = ({ title, description, iconName, skills, gradient }: SkillCardProps) => {
  const Icon = iconMap[iconName] || Code2;

  return (
    <div className="group glass-card rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
      {/* Icon with gradient background */}
      <div
        className={`w-14 h-14 rounded-xl ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className="h-7 w-7 text-white" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-2">{title}</h3>

      {/* Description */}
      <p className="text-muted-foreground mb-6">{description}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="hover:bg-primary/10 hover:border-primary transition-colors cursor-default"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
