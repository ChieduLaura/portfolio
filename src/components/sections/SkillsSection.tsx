import { Code2, Database, Brain, Palette, Server, GitBranch } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, TypeScript, Next.js, Tailwind CSS",
    color: "text-primary",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Node.js, Python, PostgreSQL, REST APIs",
    color: "text-wine",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "SQL, ETL Pipelines, Data Modeling",
    color: "text-primary",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "TensorFlow, PyTorch, NLP, Computer Vision",
    color: "text-wine",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, Prototyping, Canva",
    color: "text-primary",
  },
  {
    icon: GitBranch,
    title: "DevOps & Tools",
    description: "Git, Docker, CI/CD, AWS",
    color: "text-wine",
  },
];

export const SkillsSection = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            What I <span className="text-gradient">Do</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Combining technical expertise with creative problem-solving to build
            innovative solutions across the full stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex p-3 rounded-xl bg-secondary mb-4 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-serif font-semibold mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
