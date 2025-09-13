"use client"

import { GraduationCap, Code, Users } from "lucide-react"

const hardSkills = [
  "React",
  "Next.js",
  "Python",
  "C++",
  "Tailwind CSS",
  "React Native",
  "MongoDB",
  "Node.js",
  "Express",
  "SQL",
  "JavaScript",
  "TypeScript",
  "Git",
  "Docker",
  "AWS",
  "Firebase",
]

const softSkills = [
  "Teamwork",
  "Problem Solving",
  "Communication",
  "Adaptability",
  "Leadership",
  "Creativity",
  "Time Management",
  "Critical Thinking",
  "Project Management",
  "Mentoring",
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Summary */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Computer Science student at Lahore University of Management Sciences, dedicated to
              creating innovative web experiences that bridge the gap between cutting-edge technology and user-centric
              design.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With expertise in full-stack development and a keen interest in AI engineering, I thrive on solving
              complex problems and building scalable solutions that make a real impact.
            </p>

            {/* Education */}
            <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div>
                <h4 className="text-lg font-medium text-blue-300">BS Computer Science</h4>
                <p className="text-gray-400">Lahore University of Management Sciences</p>
                <p className="text-gray-500">Aug 2022 - Present</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-8">
            {/* Hard Skills */}
            <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30">
              <div className="flex items-center mb-4">
                <Code className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Hard Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {hardSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 px-3 py-1 rounded-full text-sm font-medium text-blue-300 hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30">
              <div className="flex items-center mb-4">
                <Users className="text-green-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 px-3 py-1 rounded-full text-sm font-medium text-green-300 hover:from-green-600/30 hover:to-blue-600/30 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
