import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { SEO } from "@/src/constants/seo"

export const metadata: Metadata = {
  title: "Resume",
  description: `${SEO.description} - View and download my resume.`,
}

export default function ResumePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 pb-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Resume</h1>
            <p className="text-gray-400 text-lg">My professional experience and qualifications</p>
          </div>

          {/* Resume Content */}
          <div className="glass-card p-8 border-white/10 rounded-xl">
            <div className="prose prose-invert max-w-none">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">SHIVANSH RASTOGI</h2>
                {/* <p className="text-xl text-purple-400 mb-4">B. Tech Computer Science and Engineering Student</p> */}
                <p className="text-gray-400">Bhubaneswar, Odisha | +91-8924837542 | shivansh.rastogi1204@gmail.com</p>
                <p><a href="https://www.linkedin.com/in/shivansh-rastogi12/" className="text-purple-400" target="_blank" rel="noopener noreferrer">Linkedin</a></p>
              </div>

              <div className="space-y-8">
                <section>
                  <h3 className="text-2xl font-semibold text-white mb-4 border-b border-white/20 pb-2">Education</h3>
                  <div>
                    <h4 className="font-semibold text-white">B. Tech Computer Science and Engineering</h4>
                    <p className="text-purple-400">Kalinga Institute of Industrial Technology, Bhubaneswar, Odisha</p>
                    <p className="text-gray-400 text-sm">2022 - 2026</p>
                    {/* <p className="text-gray-300">CGPA: 7.33</p> */}
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-white mb-4 border-b border-white/20 pb-2">Technical Skills</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                    <div>
                      <h4 className="font-semibold text-purple-400 mb-2">Languages</h4>
                      <p>Java, C, JavaScript, SQL</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-400 mb-2">Frameworks/Tools</h4>
                      <p>HTML, CSS, React.js, Node.js, Tailwind CSS, Bootstrap</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-400 mb-2">Developer Tools</h4>
                      <p>Git/GitHub, Postman, VS Code, IntelliJ, Canva</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-white mb-4 border-b border-white/20 pb-2">Experience</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-white">Social Media and Marketing Analyst</h4>
                          <p className="text-purple-400">KIIT YOUTH RED CROSS SOCIETY</p>
                        </div>
                        <span className="text-gray-400 text-sm">October 2023 - Present</span>
                      </div>
                      <ul className="text-gray-300 text-sm space-y-1 ml-4">
                        <li>• Led a city-wide cloth donation drive benefiting 500+ individuals in slum areas by coordinating volunteers, scheduling logistics, and promoting the event through digital outreach on Instagram and WhatsApp.</li>
                        <li>• Designed and executed content strategies across Instagram and LinkedIn, increasing follower count by 45% and average post engagement by 60% within 2 months through data-driven posting schedules and interactive content formats.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-white mb-4 border-b border-white/20 pb-2">Projects</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-white">Dice Game</h4>
                          <p className="text-purple-400">React, Vite, Styled-Components</p>
                        </div>
                      </div>
                      <ul className="text-gray-300 text-sm space-y-1 ml-4">
                        <li>• Developed a browser-based dice game with interactive UI and real-time scoring logic.</li>
                        <li>• Implemented gameplay using React and styled-components for modular design.</li>
                        <li>• Optimized development and build workflow using Vite.</li>
                        <li>• Deployed the project on Vercel for fast, serverless hosting.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-white">Pokedex</h4>
                          <p className="text-purple-400">React, Vite, PokeAPI</p>
                        </div>
                      </div>
                      <ul className="text-gray-300 text-sm space-y-1 ml-4">
                        <li>• Developed a Pokedex web app using React and Vite with dynamic data fetched from the PokeAPI.</li>
                        <li>• Integrated local storage to persist Pokemon details across browser sessions.</li>
                        <li>• Utilized component-based architecture and ES6+ for clean, modular code.</li>
                        <li>• Deployed the application on Vercel for fast, serverless performance.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-white mb-4 border-b border-white/20 pb-2">Positions of Responsibility</h3>
                  <div className="space-y-6">
                    <div>
                      <ul className="text-gray-300 text-sm space-y-1 ml-4">
                        <li>• Managed and led cross-functional teams in KIIT YRC, creating and managing content for multiple platforms aligned with organizational goals.</li>
                        <li>• Represented the state-level cricket team in tournaments, leading strategic planning and achieving consistent team success through effective strategies.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-semibold text-white mb-4 border-b border-white/20 pb-2">Certifications</h3>
                  <div className="space-y-6">
                    <div>
                      <ul className="text-gray-300 text-sm space-y-1 ml-4">
                        <li>• Software Engineer - HackerRank (August 2025)</li>
                        <li>• JavaScript (Intermediate) - HackerRank (August 2025)</li>
                        <li>• Problem Solving (Basic) - HackerRank (April 2025)</li>
                        <li>• Python Full Stack Development - Eduskills (December 2024)</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}