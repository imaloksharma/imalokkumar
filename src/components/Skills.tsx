
import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Programming');

  const skillCategories = {
    'Programming': [
      { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-orange-400' },
      { name: 'Python', level: 85, color: 'from-blue-400 to-green-400' },
      { name: 'Java', level: 80, color: 'from-red-400 to-orange-400' },
      { name: 'C++', level: 85, color: 'from-blue-400 to-purple-400' },
      { name: 'C', level: 80, color: 'from-gray-400 to-blue-400' },
      { name: 'HTML', level: 95, color: 'from-orange-400 to-red-400' },
      { name: 'CSS', level: 90, color: 'from-blue-400 to-cyan-400' },
    ],
    'Frameworks': [
      { name: 'React', level: 85, color: 'from-cyan-400 to-blue-400' },
      { name: 'Node.js', level: 75, color: 'from-green-400 to-teal-400' },
      { name: 'jQuery', level: 80, color: 'from-blue-400 to-purple-400' },
      { name: 'WordPress', level: 85, color: 'from-blue-400 to-gray-600' },
      { name: 'TensorFlow', level: 70, color: 'from-orange-400 to-red-400' },
      { name: 'Flask', level: 75, color: 'from-gray-400 to-green-400' },
    ],
    'Tools & Platforms': [
      { name: 'Git', level: 85, color: 'from-orange-400 to-red-400' },
      { name: 'VS Code', level: 90, color: 'from-blue-400 to-cyan-400' },
      { name: 'Linux', level: 80, color: 'from-yellow-400 to-orange-400' },
      { name: 'AWS', level: 75, color: 'from-orange-400 to-yellow-400' },
      { name: 'Docker', level: 70, color: 'from-blue-400 to-cyan-400' },
      { name: 'Postman', level: 80, color: 'from-orange-400 to-red-400' },
    ],
    'Databases': [
      { name: 'SQL', level: 85, color: 'from-blue-400 to-purple-400' },
      { name: 'NoSQL', level: 75, color: 'from-green-400 to-blue-400' },
      { name: 'MongoDB', level: 70, color: 'from-green-400 to-teal-400' },
      { name: 'MySQL', level: 80, color: 'from-blue-400 to-cyan-400' },
    ],
    'Design & Others': [
      { name: 'Adobe Creative Suite', level: 80, color: 'from-red-400 to-pink-400' },
      { name: 'UI/UX Design', level: 75, color: 'from-purple-400 to-pink-400' },
      { name: 'DevOps', level: 70, color: 'from-blue-400 to-green-400' },
      { name: 'Machine Learning', level: 75, color: 'from-purple-400 to-blue-400' },
      { name: 'Cloud Computing', level: 80, color: 'from-cyan-400 to-blue-400' },
    ]
  };

  return (
    <section id="skills" className="py-24 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {Object.keys(skillCategories).map((category) => (
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

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories[activeCategory as keyof typeof skillCategories].map((skill, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:bg-gray-900/70 transition-all duration-300 group"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <span className="text-purple-400 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                    style={{
                      width: `${skill.level}%`,
                      animation: `skillBar 1.5s ease-out ${index * 0.1}s both`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Summary */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Professional Certifications</h3>
              <p className="text-gray-300 mb-6">
                Continuously improving my skills through industry-recognized certifications
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-gray-900/50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-purple-400">25+</div>
                  <div className="text-gray-400 text-sm">Certifications</div>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-blue-400">AWS</div>
                  <div className="text-gray-400 text-sm">Cloud Certified</div>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-green-400">Google</div>
                  <div className="text-gray-400 text-sm">AI Certified</div>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-orange-400">LinkedIn</div>
                  <div className="text-gray-400 text-sm">Learning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes skillBar {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
