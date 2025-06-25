
import { ExternalLink, Github, Code, Database, Globe, Brain } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "National Institute of Technology Delhi Website",
      description: "Comprehensive redevelopment of NIT Delhi website alongside partner Vidhi Bhawra. Enhanced design, functionality, and user experience with modern, responsive platform.",
      technologies: ["JavaScript", "HTML", "CSS", "WordPress"],
      category: "Web Development",
      icon: Globe,
      color: "from-blue-400 to-cyan-400",
      link: "#",
      github: "#",
      features: ["Responsive Design", "Enhanced UX", "Modern Interface", "Performance Optimized"]
    },
    {
      title: "Khalsa College Engineering Website",
      description: "Developed comprehensive website for Khalsa College of Engineering & Technology using modern web technologies, focusing on user-friendly design and accessibility.",
      technologies: ["JavaScript", "HTML", "CSS", "WordPress"],
      category: "Web Development",
      icon: Globe,
      color: "from-purple-400 to-blue-400",
      link: "#",
      github: "#",
      features: ["College Portal", "Student Resources", "Faculty Information", "Event Management"]
    },
    {
      title: "Image Resizer Tool",
      description: "Built a user-friendly Image Resizer tool to solve real-world problems. Enhanced front-end skills while creating an intuitive application for image processing.",
      technologies: ["JavaScript", "HTML", "CSS"],
      category: "Utility Tool",
      icon: Code,
      color: "from-green-400 to-blue-400",
      link: "#",
      github: "#",
      features: ["Drag & Drop", "Multiple Formats", "Batch Processing", "Real-time Preview"]
    },
    {
      title: "Health Monitoring & Analysis",
      description: "Health data analysis project using unsupervised learning techniques to identify natural groupings within health datasets, facilitating personalized healthcare management.",
      technologies: ["Python", "Jupyter Notebook", "Machine Learning"],
      category: "Data Science",
      icon: Brain,
      color: "from-pink-400 to-purple-400",
      link: "#",
      github: "#",
      features: ["Unsupervised Learning", "Data Visualization", "Health Insights", "Pattern Recognition"]
    },
    {
      title: "Survey Form Application",
      description: "Comprehensive Java-based application for seamless feedback collection and analysis with customizable templates, real-time validation, and secure data storage.",
      technologies: ["Java", "Database"],
      category: "Desktop Application",
      icon: Database,
      color: "from-orange-400 to-red-400",
      link: "#",
      github: "#",
      features: ["Custom Templates", "Real-time Validation", "Data Analytics", "Secure Storage"]
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website showcasing my projects, skills, and experience with beautiful animations and user-friendly interface.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      category: "Personal Project",
      icon: Globe,
      color: "from-cyan-400 to-purple-400",
      link: "#",
      github: "#",
      features: ["Responsive Design", "Dark Theme", "Animations", "Modern UI"]
    }
  ];

  const categories = ["All", "Web Development", "Data Science", "Utility Tool", "Desktop Application", "Personal Project"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my work, demonstrating my skills in various technologies and problem-solving approaches
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 group hover:transform hover:scale-105"
            >
              {/* Project Header */}
              <div className={`p-6 bg-gradient-to-r ${project.color} bg-opacity-10`}>
                <div className="flex items-center justify-between mb-4">
                  <project.icon className={`w-8 h-8 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`} />
                  <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="text-xs text-gray-400 flex items-center gap-1">
                        <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-400 text-xs rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    View Live
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center justify-center px-4 py-2 border border-purple-500/50 text-purple-400 text-sm font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Want to see more?</h3>
            <p className="text-gray-300 mb-6">
              Check out my GitHub profile for more projects and contributions
            </p>
            <a
              href="https://github.com/alokkumarsgl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              <Github size={20} />
              Visit GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
