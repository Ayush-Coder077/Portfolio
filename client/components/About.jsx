export default function About() {
    const tools = [
        { name: 'vscode', icon: '/assets/vscode.png', },
        { name: 'firebase', icon: '/assets/firebase.png', },
        { name: 'mongodb', icon: '/assets/mongodb.png', },
        { name: 'Github', icon: '/assets/github.png', },
        { name: 'git', icon: '/assets/git.png', },
                { name: 'Tailwind', icon: '/assets/tailwind.png', },
        { name: 'API', icon: '/assets/APi.png', },
                { name: 'Node', icon: '/assets/Node.png', },

       

    ];

    const tool1 = [
         { name: 'Gemini', icon: '/assets/gemini.png', },
          { name: 'webhook', icon: '/assets/Webhook.png', },
           { name: 'postman', icon: '/assets/postman.png', },
            { name: 'prisma', icon: '/assets/prisma.png', },
             { name: 'stripe', icon: '/assets/stripe.png', },
              { name: 'supabase', icon: '/assets/supabase.png', },
               { name: 'vercel', icon: '/assets/vercel.png', },
    ]

    const tool2 = [
                { name: 'postgresql', icon: '/assets/postgre.png', },
        { name: 'send', icon: '/assets/send.png', },
                { name: 'uptime', icon: '/assets/uptime.png', },
        { name: 'json', icon: '/assets/json.png', },
        { name: 'canva ', icon: '/assets/canva.png', },
        { name: 'SQl', icon: '/assets/sql.png', },


    ]


    const data = [
        {
            name: 'Languages',
            icon1: '/assets/code-icon.png',
            icon2: '/assets/code-icon-dark.png',
            description: 'HTML, CSS, JavaScript React Js, Next Js, Python, Java, C++',
        },
        {
            name: 'Education',
            icon1: '/assets/edu-icon.png',
            icon2: '/assets/edu-icon-dark.png',
            description: 'BSc in Computer Science',
        },
        {
            name: 'Projects',
            icon1: '/assets/project-icon.png',
            icon2: '/assets/project-icon-dark.png',
            description: 'Built more than 5 projects',
        },
    ];
    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
            <h2 className="text-center text-5xl font-Ovo">About me</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                <div className="relative flex justify-center items-center">

  <div className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 blur-3xl"></div>

  <div className="relative max-w-max mx-auto">

  <img
    src="/assets/profile2.png"
    alt=""
    className="w-72 sm:w-80 rounded-3xl"
  />

 <div className="absolute -bottom-4 -right-4 w-28 h-28 rounded-full bg-[#1d1d1d] shadow-2xl flex items-center justify-center">

  {/* Rotating RGB Ring */}
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

  {/* Center Icon */}
 <img
  src="/assets/dev-icon.png"
  alt=""
  className="relative z-10 w-[70%] h-[70%] object-contain"
/>

</div>
</div>

</div>
                <div className="flex-1">
                    <p className="mb-10 max-w-2xl font-Ovo">Software Developer and Full-Stack Developer with a strong foundation in modern web technologies. Passionate about creating high-quality applications, solving complex problems, and delivering impactful digital experiences.</p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {data.map((data) => (
                            <li key={data.name} className="border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50">
                                <img src={data.icon1} alt="" className="w-7 mt-3 dark:hidden" />
                                <img src={data.icon2} alt="" className="w-7 mt-3 hidden dark:block" />
                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{data.name}</h3>
                                <p className="text-gray-600 text-sm dark:text-white/80">{data.description}</p>
                            </li>
                        ))}
                    </ul>
                    <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tools i use</h4>

                    <ul className="flex items-center gap-3 sm:gap-5">
                        {tools.map((tool) => (
                            <li key={tool.name} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 bg-slate-400">
                                <img src={tool.icon} alt={tool.name} className="w-5 sm:w-7" />
                            </li>
                        ))}
                    </ul>

                     <ul className="flex items-center gap-3 sm:gap-5 mt-4">
                        {tool1.map((tool) => (
                            <li key={tool.name} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 white:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 bg-slate-400">
                                <img src={tool.icon} alt={tool.name} className="w-5 sm:w-7" />
                            </li>
                        ))}
                    </ul>

 <ul className="flex items-center gap-3 sm:gap-5 mt-4">
                        {tool2.map((tool) => (
                            <li key={tool.name} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 white:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 bg-slate-400">
                                <img src={tool.icon} alt={tool.name} className="w-5 sm:w-7" />
                            </li>
                        ))}
                    </ul>
                       
                    
                </div>
            </div>
        </div>
    )
}