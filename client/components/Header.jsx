export default function Header() {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <img
                src="/assets/user1.png"
                alt="Ayush Datkhile"
                className="rounded-full w-32"
            />

            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                Hi! I&apos;m Ayush Datkhile
                <img src="/assets/hand-icon.png" alt="" className="w-6 mb-1" />
            </h3>

            <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
                    Software Developer & Full Stack Developer

            </h1>

            <p className="max-w-2xl mx-auto font-Ovo">
    Software Developer with hands-on experience in MERN and PERN stack
    technologies. Skilled in building full-stack web applications, REST APIs,
    AI-powered SaaS platforms, and database-driven solutions using React.js,
    Node.js, TypeScript, MongoDB, and PostgreSQL.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a
                    href="#contact"
                    className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent"
                >
                    Contact Me
                    <img
                        src="/assets/right-arrow-white.png"
                        alt=""
                        className="w-4"
                    />
                </a>

               <a
  href="Ayush_Datkhile_Resume.pdf"
  download="Ayush_Datkhile_Resume.pdf"

                    className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white"
                >
                    My Resume
                    <img
                        src="/assets/download-icon.png"
                        alt=""
                        className="w-4 dark:invert"
                    />
                </a>
            </div>
        </div>
    );
}