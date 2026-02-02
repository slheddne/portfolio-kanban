import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ExperienceCard from "@/components/ExperienceCard";
import EducationCard from "@/components/EducationCard";
import SkillCard from "@/components/SkillCard";
import ContactSection from "@/components/ContactSection";
import { profile, experiences, education, skills } from "@/data/portfolioData";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero
        name={profile.name}
        title={profile.title}
        subtitle={profile.subtitle}
        email={profile.email}
        linkedin={profile.linkedin}
        github={profile.github}
      />

      {/* Experience Section */}
      <Section
        id="experience"
        title="Work Experience"
        subtitle="My professional journey and the companies I've had the pleasure to work with"
      >
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              title={exp.title}
              company={exp.company}
              location={exp.location}
              period={exp.period}
              description={exp.description}
              badges={exp.badges}
              isLeft={index % 2 === 1}
            />
          ))}
        </div>
      </Section>

      {/* Education Section */}
      <Section
        id="education"
        title="Education"
        subtitle="My academic background and the institutions that shaped my skills"
        className="bg-muted/30"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {education.map((edu) => (
            <EducationCard
              key={edu.id}
              school={edu.school}
              degree={edu.degree}
              location={edu.location}
              period={edu.period}
              description={edu.description}
              badges={edu.badges}
            />
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section
        id="skills"
        title="Skills & Technologies"
        subtitle="The tools and technologies I use to bring ideas to life"
      >
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              title={skill.category}
              description={skill.description}
              iconName={skill.category}
              skills={skill.technologies}
              gradient={skill.gradient}
            />
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section
        id="contact"
        title="Get in Touch"
        subtitle="I'm always open to new opportunities and collaborations"
        className="bg-muted/30"
      >
        <ContactSection
          email={profile.email}
          linkedin={profile.linkedin}
          location={profile.location}
        />
      </Section>
    </main>
  );
}
