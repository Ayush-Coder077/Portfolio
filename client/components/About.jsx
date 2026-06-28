export default function About() {
  const tools = [
    { name: "vscode", icon: "/assets/vscode.png" },
    { name: "firebase", icon: "/assets/firebase.png" },
    { name: "mongodb", icon: "/assets/mongodb.png" },
    { name: "Github", icon: "/assets/github.png" },
    { name: "git", icon: "/assets/git.png" },
    { name: "Tailwind", icon: "/assets/tailwind.png" },
    { name: "API", icon: "/assets/APi.png" },
    { name: "Node", icon: "/assets/Node.png" },
  ];

  const tool1 = [
    { name: "Gemini", icon: "/assets/gemini.png" },
    { name: "Webhook", icon: "/assets/Webhook.png" },
    { name: "Postman", icon: "/assets/postman.png" },
    { name: "Prisma", icon: "/assets/prisma.png" },
    { name: "Stripe", icon: "/assets/stripe.png" },
    { name: "Supabase", icon: "/assets/supabase.png" },
    { name: "Vercel", icon: "/assets/vercel.png" },
  ];

  const tool2 = [
    { name: "PostgreSQL", icon: "/assets/postgre.png" },
    { name: "Send", icon: "/assets/send.png" },
    { name: "Uptime", icon: "/assets/uptime.png" },
    { name: "JSON", icon: "/assets/json.png" },
    { name: "Canva", icon: "/assets/canva.png" },
    { name: "SQL", icon: "/assets/sql.png" },
  ];

  const data = [
    {
      name: "Languages",
      icon1: "/assets/code-icon.png",
      icon2: "/assets/code-icon-dark.png",
      description:
        "HTML, CSS, JavaScript, React.js, Next.js, Python, Java, C++",
    },
    {
      name: "Education",
      icon1: "/assets/edu-icon.png",
      icon2: "/assets/edu-icon-dark.png",
      description: "BSc in Computer Science",
    },
    {
      name: "Projects",
      icon1: "/assets/project-icon.png",
      icon2: "/assets/project-icon-dark.png",
      description: "Built more than 5 projects",
    },
  ];

  const ToolRow = ({ items }) => (
    <ul className="flex flex-wrap gap-3 mt-4 justify-center lg:justify-start">
      {items.map((tool) => (
        <li
          key={tool.name}
          className="flex items-center justify-center
          w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14
          border border-gray-300 dark:border-white/30
          rounded-lg bg-slate-400
          hover:-translate-y-1 duration-300"
        >
          <img
            src={tool.icon}
            alt={tool.name}
            className="w-4 sm:w-5 lg:w-7"
          />
        </li>
      ))}
    </ul>
  );

  return (
    <section
      id="about"
      className="w-full px-5 sm:px-8 lg:px-[12%] pt-4 pb-12 scroll-mt-20">
      <h4 className="text-center text-lg font-Ovo mb-2">Introduction</h4>

      <h2 className="text-center text-3xl sm:text-5xl font-Ovo">
        About Me
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 mt-12">

        {/* Image */}
        <div className="relative flex justify-center">
          <div className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 blur-3xl"></div>

          <div className="relative">
            <img
              src="/assets/profile2.png"
              alt="Profile"
              className="w-64 sm:w-72 lg:w-80 rounded-3xl"
            />

            <div className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#1d1d1d] flex items-center justify-center shadow-xl">
                 <svg
    viewBox="0 0 200 200"
    className="absolute inset-0 w-full h-full animate-spin_slow"
  >
    <defs>
      <linearGradient id="rgbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00F5FF" />
        <stop offset="50%" stopColor="#A855F7" />
        <stop offset="100%" stopColor="#FF0080" />
      </linearGradient>

      <path
        id="circlePath"
        d="
          M100,100
          m-72,0
          a72,72 0 1,1 144,0
          a72,72 0 1,1 -144,0
        "
      />
    </defs>

    <text
      fill="url(#rgbGradient)"
      fontSize="13"
      fontWeight="700"
      letterSpacing="4"
      fontFamily="Poppins, sans-serif"
    >
      <textPath href="#circlePath" startOffset="0%">
        SOFTWARE • FULL STACK • DEVELOPER 
      </textPath>
    </text>
  </svg>
              <img
                src="/assets/dev-icon.png"
                alt=""
                className="w-[70%]"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 w-full">

          <p className="text-sm sm:text-base leading-7 mb-8 max-w-2xl">
            Software Developer and Full-Stack Developer with a strong
            foundation in modern web technologies. Passionate about creating
            high-quality applications, solving complex problems, and
            delivering impactful digital experiences.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.map((item) => (
              <li
                key={item.name}
                className="border border-gray-300 dark:border-white/30 rounded-xl p-6 hover:-translate-y-1 duration-300"
              >
                <img
                  src={item.icon1}
                  alt=""
                  className="w-7 dark:hidden"
                />

                <img
                  src={item.icon2}
                  alt=""
                  className="w-7 hidden dark:block"
                />

                <h3 className="font-semibold mt-4 mb-2">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-600 dark:text-white/70">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>

          <h4 className="mt-8 font-semibold text-lg">
            Tools I Use
          </h4>

          <ToolRow items={tools} />
          <ToolRow items={tool1} />
          <ToolRow items={tool2} />
        </div>
      </div>
    </section>
  );
}