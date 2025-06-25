
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack Web Developer",
      company: "GreenApple",
      location: "Amritsar",
      period: "Aug 2024 - Sep 2024",
      type: "On-site",
      description: "Gained hands-on experience in web design and development, focusing on creating responsive and user-friendly websites. Collaborated with a team to design innovative layouts, optimize website performance, and enhance user interfaces.",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX"],
      color: "from-green-400 to-blue-400"
    },
    {
      title: "Data Science & Machine Learning Intern",
      company: "CSRBOX",
      location: "Online",
      period: "Oct 2024 - Nov 2024",
      type: "Remote",
      description: "Explored advanced concepts in data analysis and machine learning, focusing on real-world applications of predictive modeling and data-driven decision-making. Worked on projects involving data preprocessing, feature engineering, and implementing ML algorithms.",
      skills: ["Python", "Machine Learning", "Data Analysis", "TensorFlow", "Data Preprocessing"],
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Web Development Intern",
      company: "NIT Delhi",
      location: "Delhi",
      period: "June 2024 - Aug 2024",
      type: "On-site",
      description: "Redesigned the official website to enhance user experience, accessibility, and navigation. Collaborated with a team using HTML, CSS, and JavaScript to implement modern web development practices.",
      skills: ["HTML", "CSS", "JavaScript", "WordPress", "Team Collaboration"],
      color: "from-blue-400 to-cyan-400"
    },
    {
      title: "Front-End Web Development Intern",
      company: "IBM SkillsBuild",
      location: "Online",
      period: "July 2024 - August 2024",
      type: "Remote",
      description: "Completed Front-end Web Development internship gaining hands-on experience with HTML, CSS, JavaScript, and responsive design. Worked on interactive web projects, improving understanding of web development best practices.",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "Web Development Best Practices"],
      color: "from-cyan-400 to-blue-400"
    },
    {
      title: "Campus Ambassador",
      company: "Microsoft Learn Student Ambassadors",
      location: "Campus",
      period: "Oct 2023 - Mar 2024",
      type: "Leadership Role",
      description: "Organized multiple tech events at college, helping students explore Microsoft technologies like cloud computing and AI. Conducted workshops and webinars, providing hands-on learning opportunities while building a strong tech community.",
      skills: ["Leadership", "Event Management", "Microsoft Technologies", "Public Speaking", "Community Building"],
      color: "from-orange-400 to-red-400"
    },
    {
      title: "Graphic Designer Intern",
      company: "PHD Chamber of Commerce & Industry",
      location: "Amritsar",
      period: "Oct 2023 - Dec 2023",
      type: "On-site",
      description: "Designed creative and impactful visual materials to support various initiatives and events. Created posters, banners, brochures, and social media graphics that aligned with the organization's branding and objectives.",
      skills: ["Adobe Creative Suite", "Graphic Design", "Branding", "Social Media Graphics", "Visual Storytelling"],
      color: "from-pink-400 to-purple-400"
    },
    {
      title: "Full-Stack Web Developer",
      company: "GreenApple",
      location: "Amritsar",
      period: "Sep 2023 - Feb 2024",
      type: "On-site",
      description: "Completed internship under the guidance of Rishabh Sir, gaining hands-on experience in web development. Worked on responsive websites using HTML, CSS, and JavaScript, focusing on modern web practices and enhancing web application performance.",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "Web Performance"],
      color: "from-green-400 to-teal-400"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Journey through my professional experiences and internships at prestigious organizations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-blue-400 to-green-400 transform md:-translate-x-1/2"></div>

            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full transform md:-translate-x-1/2 z-10 shadow-lg"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ml-10 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-400 text-xs rounded-full border border-purple-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
