
import { Code, GraduationCap, Award, MapPin } from 'lucide-react';

const About = () => {
  const stats = [
    {
  icon: Code,
  label: 'Live Projects Completed',
  value: <a href="https://msnext.in/our-project/" target="_blank" rel="noopener noreferrer">37+</a>
},

    { icon: GraduationCap, label: '5th Sem CGPA', value: '8.35' },
    { icon: Award, label: 'Certifications', value: '45+' },
    { icon: MapPin, label: 'Internships', value: '7+' },
  ];

  return (
    <section id="about" className="py-24 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a passionate Full-Stack Web & Software Developer currently pursuing B.Tech in Computer Science Engineering 
                at Khalsa College of Engineering & Technology, Amritsar with a strong CGPA of 8.35.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                My journey in tech has been enriched by valuable internships at prestigious institutions like NIT Delhi, 
                IBM SkillsBuild, and various other organizations. I've gained hands-on experience in web development, 
                machine learning, and cloud technologies.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm passionate about solving real-world problems through technology and constantly learning new skills. 
                My experience ranges from front-end development to full-stack solutions, with a growing interest in AI and machine learning.
              </p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-2xl backdrop-blur-sm border border-purple-500/20">
              <h4 className="text-xl font-bold text-white mb-4">Education</h4>
              <div className="space-y-3">
                <div className="border-l-2 border-purple-400 pl-4">
                  <h5 className="font-semibold text-purple-400">B.Tech in Computer Science Engineering</h5>
                  <p className="text-gray-300">Khalsa College of Engineering & Technology, Amritsar</p>
                  <p className="text-gray-400 text-sm">Sep 2022 - Present | CGPA: 8.35</p>
                </div>
                <div className="border-l-2 border-blue-400 pl-4">
                  <h5 className="font-semibold text-blue-400">Intermediate</h5>
                  <p className="text-gray-300">Nand Higher Secondary School, Sugauli</p>
                  <p className="text-gray-400 text-sm">July 2019 - July 2021</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-6 rounded-2xl border border-purple-500/20 text-center group hover:from-purple-500/20 hover:to-blue-500/20 transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-gray-900/50 p-6 rounded-2xl backdrop-blur-sm border border-purple-500/20">
              <h4 className="text-xl font-bold text-white mb-4">Recent Achievements</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>7th Position in Tech-A-Thon 2.0 Hackathon, Delhi University</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Microsoft Learn Student Ambassador (MLSA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Multiple Tech Event Organizer at KCET Amritsar</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>45+ Professional Certifications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
