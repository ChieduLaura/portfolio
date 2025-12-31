import { Layout } from "@/components/layout/Layout";
import { Award, BookOpen, Coffee, Heart } from "lucide-react";

const aboutStats = [
  { icon: Coffee, label: "Cups of Coffee", value: "500+" },
  { icon: BookOpen, label: "Courses Completed", value: "15+" },
  { icon: Award, label: "Certifications", value: "5" },
  { icon: Heart, label: "Open Source Contributions", value: "30+" },
];

const About = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get to know the person behind the code
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative animate-fade-up delay-100">
              <div className="relative rounded-3xl overflow-hidden">
                <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-rose/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto rounded-full bg-secondary flex items-center justify-center mb-4">
                      <span className="text-4xl font-serif font-bold text-gradient">YN</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Your photo here</p>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-rose/10 rounded-full blur-xl" />
            </div>

            {/* Content */}
            <div className="animate-fade-up delay-200">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                A Passionate Developer with a{" "}
                <span className="text-gradient">Creative Mind</span>
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hello! I'm a full-stack developer with a deep passion for creating
                  beautiful, functional web applications. My journey in tech started
                  with curiosity about how things work on the internet, and it has
                  evolved into a fulfilling career where I get to build and innovate
                  every day.
                </p>
                <p>
                  Beyond traditional web development, I'm deeply enthusiastic about
                  <span className="text-foreground font-medium"> Data Science </span>
                  and <span className="text-foreground font-medium">Artificial Intelligence</span>.
                  I love exploring how data can tell stories and how AI can solve
                  complex problems in creative ways.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies,
                  contributing to open-source projects, or enjoying a good cup of
                  coffee while reading about the latest trends in tech.
                </p>
              </div>

              {/* Skills Tags */}
              <div className="mt-8">
                <h3 className="text-sm font-semibold text-foreground mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "TensorFlow", "AWS", "Docker"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {aboutStats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift animate-fade-up"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="inline-flex p-3 rounded-xl bg-secondary text-primary mb-3">
                  <stat.icon className="h-6 w-6" />
                </div>
                <p className="text-2xl font-serif font-bold text-gradient">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Journey Timeline */}
          <div className="mt-20">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-center mb-12">
              My <span className="text-gradient">Journey</span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-8">
              {[
                { year: "2024", title: "AI & ML Focus", description: "Deep diving into machine learning and AI applications" },
                { year: "2023", title: "Full Stack Mastery", description: "Building end-to-end applications with modern frameworks" },
                { year: "2022", title: "Data Science Exploration", description: "Started exploring data analysis and visualization" },
                { year: "2021", title: "The Beginning", description: "Started my journey in web development" },
              ].map((item, index) => (
                <div
                  key={item.year}
                  className="flex gap-6 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-serif font-bold text-sm">
                      {item.year.slice(-2)}
                    </div>
                    {index < 3 && <div className="w-0.5 h-full bg-border mt-2" />}
                  </div>
                  <div className="pb-8">
                    <span className="text-sm text-primary font-medium">{item.year}</span>
                    <h3 className="text-lg font-serif font-semibold mt-1">{item.title}</h3>
                    <p className="text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
