import Pill from "@/components/Pill";
import { skills } from "@/lib/skills";

const perSkill = [
  {
    title: "Frontend Development",
    skill: skills.frontend,
  },
  {
    title: "Backend Development",
    skill: skills.backend,
  },
  {
    title: "Database Management",
    skill: skills.database,
  },
  {
    title: "Dev Ops",
    skill: skills.devops,
  },
  {
    title: "AI Tools",
    skill: skills.ai,
  },
  {
    title: "Others",
    skill: skills.others,
  },
  {
    title: "Soft Skills",
    skill: skills.softskills,
  },
];

const SkillSection = ({
  skills,
  title,
}: {
  skills: string[];
  title: string;
}) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-text-secondary">{title}</h2>
      <div className="flex gap-3 mt-4 flex-wrap">
        {skills.map((skill) => (
          <Pill key={skill} text={skill} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-semibold text-text-secondary text-center">
        Skills & Expertise
      </h1>

      {perSkill.map(({ title, skill }) => (
        <SkillSection key={title} title={title} skills={skill} />
      ))}
    </div>
  );
};

export default Skills;
