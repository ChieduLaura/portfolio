import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { cn } from "@/lib/utils";

const categories = ["All", "Frontend/UI", "Full Stack", "Data/AI"];

const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A modern, responsive admin dashboard for e-commerce platforms with real-time analytics and inventory management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["React", "TypeScript", "Tailwind"],
    category: "Frontend/UI",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "AI Chatbot Interface",
    description: "An intelligent chatbot interface powered by natural language processing with a beautiful, intuitive UI.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tags: ["React", "Python", "OpenAI"],
    category: "Data/AI",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Social Media Platform",
    description: "A full-stack social media application with real-time messaging, posts, and user authentication.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    category: "Full Stack",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Data Visualization Tool",
    description: "Interactive data visualization dashboard for analyzing and presenting complex datasets beautifully.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["D3.js", "Python", "Pandas"],
    category: "Data/AI",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Portfolio Template",
    description: "A stunning portfolio template for developers and designers with smooth animations and modern design.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    tags: ["React", "Framer Motion", "Tailwind"],
    category: "Frontend/UI",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "ML Model Dashboard",
    description: "A comprehensive dashboard for training, monitoring, and deploying machine learning models.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    tags: ["Python", "TensorFlow", "FastAPI"],
    category: "Data/AI",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "Task Management App",
    description: "A beautiful and intuitive task management application with drag-and-drop functionality.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "MongoDB"],
    category: "Full Stack",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 8,
    title: "Finance Tracker",
    description: "Personal finance tracking application with expense categorization and visual reports.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    tags: ["Next.js", "Prisma", "Chart.js"],
    category: "Full Stack",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              My <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of my work across frontend development, full-stack applications,
              and data science projects.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-up delay-100">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-wine"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;