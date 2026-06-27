import Image from "next/image";

export default function PortfolioShowcase() {
  return (
    <main className="min-h-screen bg-[#050014] text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Portfolio Banner */}
          <div className="relative rounded-3xl overflow-hidden border border-purple-500/20 bg-gradient-to-br from-purple-900/30 to-indigo-900/20 backdrop-blur">
            <div className="p-8">

              <span className="inline-flex px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm">
                2026
              </span>

              <h1 className="mt-8 text-5xl font-bold">
                Developer Portfolio
              </h1>

              <p className="mt-4 text-xl text-gray-300">
                Modern Full Stack Developer Portfolio built with Next.js
              </p>

              <div className="flex flex-wrap gap-4 mt-8">

                <div className="px-3 py-2 rounded-lg bg-white/10">
                  Next.js
                </div>

                <div className="px-3 py-2 rounded-lg bg-white/10">
                  React
                </div>

                <div className="px-3 py-2 rounded-lg bg-white/10">
                  Tailwind CSS
                </div>

                <div className="px-3 py-2 rounded-lg bg-white/10">
                  Formspree
                </div>

              </div>

              <div className="mt-10">
                <Image
                  src="/assets/portfolio.png"
                  alt="Portfolio"
                  width={700}
                  height={450}
                  className="rounded-2xl w-full"
                />
              </div>

            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-6">

            <a
              href="https://ayushdatkhile-dev.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 h-20 rounded-full border border-white/10 bg-black/30 hover:bg-purple-600 transition"
            >
              🌐 Live Website
            </a>

            <a
              href="https://github.com/Ayush-Coder077/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 h-20 rounded-full border border-white/10 bg-black/30 hover:bg-purple-600 transition"
            >
              💻 Source Code
            </a>

            <a
              href="#project-info"
              className="flex items-center justify-center gap-3 h-20 rounded-full border border-white/10 bg-black/30 hover:bg-purple-600 transition"
            >
              📄 Project Details
            </a>

          </div>
        </div>
      </section>

      {/* Project Info */}
      <section
        id="project-info"
        className="max-w-6xl mx-auto px-6 py-20"
      >

        <h2 className="text-4xl font-bold mb-8">
          About This Project
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Overview */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h3 className="text-2xl font-semibold mb-4">
              Overview
            </h3>

            <p className="text-gray-300 leading-8">
              This portfolio showcases my skills, projects, technical
              experience, and journey as a Full Stack Developer.
              It provides recruiters and developers with an interactive,
              responsive, and modern platform to explore my work,
              download my resume, and contact me directly.
            </p>

          </div>

          {/* Features */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h3 className="text-2xl font-semibold mb-4">
              Features
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>✅ Responsive Design</li>
              <li>✅ Dark & Light Theme</li>
              <li>✅ Project Showcase</li>
              <li>✅ Skills & Experience</li>
              <li>✅ Resume Download</li>
              <li>✅ Contact Form</li>
              <li>✅ Google reCAPTCHA</li>
              <li>✅ Formspree Integration</li>
              <li>✅ SEO Optimized</li>
              <li>✅ Smooth Animations</li>
            </ul>

          </div>

        </div>

        {/* Tech Stack */}
        <div className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-8">

          <h3 className="text-2xl font-semibold mb-4">
            Tech Stack
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
              "Next.js",
              "React",
              "JavaScript",
              "Tailwind CSS",
              "Formspree",
              "Google reCAPTCHA",
              "Vercel",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

        {/* Challenges */}
        <div className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-8">

          <h3 className="text-2xl font-semibold mb-4">
            Challenges & Solutions
          </h3>

          <p className="text-gray-300 leading-8">
            One of the biggest challenges was creating a portfolio that
            balances performance, responsiveness, and modern UI while
            remaining easy to maintain. Using Next.js, optimized image
            loading, reusable React components, Tailwind CSS, and
            Formspree with Google reCAPTCHA resulted in a fast,
            secure, and scalable portfolio experience.
          </p>

        </div>

      </section>
    </main>
  );
}