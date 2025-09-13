"use client"

import { ExternalLink, Github, Smartphone, Brain, MessageCircle, Car } from "lucide-react"

const projects = [
  {
    title: "Rigor - Fleet Management & Reimbursement System",
    description:
      "A comprehensive cross-platform React Native application featuring Agile development methodology and LLM-powered revenue estimation for efficient fleet management.",
    technologies: ["React Native", "Node.js", "MongoDB", "Express", "LLM Integration"],
    icon: <Smartphone className="text-blue-400" size={32} />,
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    title: "Detecting Alzheimer's Disease Progression using MRI scans",
    description:
      "Advanced medical imaging project utilizing Vision Transformer (ViT) architecture with semi-supervised segmentation pipeline for accurate disease progression analysis.",
    technologies: ["Python", "PyTorch", "Vision Transformer", "Medical Imaging", "Deep Learning"],
    icon: <Brain className="text-purple-400" size={32} />,
    gradient: "from-purple-600 to-pink-600",
  },
  {
    title: "Chat App Using Python",
    description:
      "Real-time messaging application built with TCP/IP socket-based architecture and RESTful API using Flask for seamless communication.",
    technologies: ["Python", "Flask", "Socket.IO", "TCP/IP", "REST API"],
    icon: <MessageCircle className="text-green-400" size={32} />,
    gradient: "from-green-600 to-teal-600",
  },
  {
    title: "Predictive Modeling for Car Price Prediction",
    description:
      "Machine learning project for Pakwheels utilizing multivariate regression analysis to accurately predict vehicle prices based on various market factors.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Data Analysis"],
    icon: <Car className="text-orange-400" size={32} />,
    gradient: "from-orange-600 to-red-600",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            Explore my portfolio of innovative projects that showcase my expertise in full-stack development, AI, and
            problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-900/50 rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-20 mr-4`}>
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-700/50 border border-slate-600/50 px-3 py-1 rounded-full text-sm font-medium text-gray-300 hover:bg-slate-600/50 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium">
                  <Github className="mr-2" size={18} />
                  View Code
                </button>
                <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300 font-medium">
                  <ExternalLink className="mr-2" size={18} />
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
