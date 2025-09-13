"use client"

import { Briefcase, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Parcel2Ship",
    location: "Remote",
    duration: "May 2025 - July 2025",
    description: [
      "Developed and maintained web applications using modern technologies",
      "Collaborated with cross-functional teams to deliver high-quality software solutions",
      "Implemented responsive user interfaces and optimized application performance",
      "Participated in code reviews and contributed to best practices documentation",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Web Developer Intern",
    company: "Transhelp (US-Based Startup)",
    location: "Remote",
    duration: "July 2023 - August 2023",
    description: [
      "Built responsive web applications using React and modern JavaScript frameworks",
      "Collaborated with the design team to implement pixel-perfect UI components",
      "Optimized website performance and improved user experience metrics",
      "Integrated third-party APIs and services to enhance application functionality",
    ],
    technologies: ["React", "JavaScript", "CSS3", "REST APIs"],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Briefcase className="text-blue-400 mr-3" size={24} />
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  </div>
                  <h4 className="text-xl font-semibold text-blue-300 mb-2">{exp.company}</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="mr-2" size={16} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2" size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <ul className="space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-3 mt-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 px-3 py-1 rounded-full text-sm font-medium text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
