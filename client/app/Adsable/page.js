import Image from "next/image";

export default function ProjectShowcase() {
  return (
    <main className="min-h-screen bg-[#050014] text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Project Banner */}
          <div className="relative rounded-3xl overflow-hidden border border-purple-500/20 bg-gradient-to-br from-purple-900/30 to-indigo-900/20 backdrop-blur">
            <div className="p-8">
              <span className="inline-flex px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm">
                2026
              </span>

              <h1 className="mt-8 text-5xl font-bold">
                AdsAble AI
              </h1>

              <p className="mt-4 text-xl text-gray-300">
                AI Advertisement & Video Generation Platform
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <div className="px-3 py-2 rounded-lg bg-white/10">
                  React
                </div>

                <div className="px-3 py-2 rounded-lg bg-white/10">
                  Next.js
                </div>

                <div className="px-3 py-2 rounded-lg bg-white/10">
                  TypeScript
                </div>

                <div className="px-3 py-2 rounded-lg bg-white/10">
                  PostgreSQL
                </div>
              </div>

              <div className="mt-10">
                <Image
                  src="/assets/Adsable.png"
                  alt="AdsAble AI"
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
              href="https://github.com/Ayush-Coder077/AdsAble.Ai"
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
              AdsAble AI is a full-stack SaaS platform that enables
              users to generate AI-powered advertisements and videos.
              The platform integrates AI content generation, video
              creation, subscription management, payment processing,
              and authentication into a seamless experience.
            </p>
          </div>

          {/* Features */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Features
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>✅ AI Advertisement Generation</li>
              <li>✅ AI Video Generation</li>
              <li>✅ Clerk Authentication</li>
              <li>✅ Stripe Subscription Billing</li>
              <li>✅ Credit-Based Usage System</li>
              <li>✅ PostgreSQL Database</li>
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
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "Prisma",
              "PostgreSQL",
              "Stripe",
              "Clerk",
              "Google Veo API",
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
            One of the biggest challenges was integrating AI-powered
            video generation while maintaining a smooth user
            experience. To solve this, asynchronous processing,
            token-based credits, and efficient API handling were
            implemented to keep the platform responsive and scalable.
          </p>
        </div>

      </section>
    </main>
  );
}