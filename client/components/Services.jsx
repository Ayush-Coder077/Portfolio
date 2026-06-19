export default function Services() {
    const services = [
        {
            name: 'Frontend Development',
            icon: '/assets/web-icon.png',
            description:
                'Building modern, responsive, and interactive user interfaces using React.js, Next.js, Tailwind CSS, and JavaScript.',
            link:'/ExcelWeb',
        },
        {
            name: 'Full Stack Development',
            icon: '/assets/mobile-icon.png',
            description:
                'Developing complete web applications with React, Node.js, Express.js, MongoDB, PostgreSQL, and REST APIs.',
            link: '/clothiq',
        },
        {
            name: 'AI SaaS Development',
            icon: '/assets/ui-icon.png',
            description:
                'Creating AI-powered applications with authentication, subscriptions, payment integration, and scalable backend architecture.',
            link: '/Adsable',
        },
        {
            name: 'Software Solutions',
            icon: '/assets/graphics-icon.png',
            description:
                'Designing efficient software solutions, automation tools, dashboards, and management systems for real-world problems.',
            link: '#projects',
        },
    ];

    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">
                What I Offer
            </h4>

            <h2 className="text-center text-5xl font-Ovo">
                My Services
            </h2>

            <p className="text-center max-w-3xl mx-auto mt-5 mb-12 font-Ovo">
                I'm a Full Stack Developer passionate about building
                scalable web applications, AI-powered platforms, and
                modern user experiences. I specialize in React.js,
                Next.js, Node.js, TypeScript, MongoDB, and PostgreSQL.
            </p>

            <div className="grid grid-cols-auto gap-6 my-10">
                {services.map((service) => (
                    <div
                        key={service.name}
                        className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
                    >
                        <img
                            src={service.icon}
                            alt={service.name}
                            className="w-10"
                        />

                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">
                            {service.name}
                        </h3>

                        <p className="text-sm text-gray-600 leading-6 dark:text-white/80">
                            {service.description}
                        </p>

                        <a
                            href={service.link}
                            className="flex items-center gap-2 text-sm mt-5"
                        >
                            View Projects
                            <img
                                src="/assets/right-arrow.png"
                                alt=""
                                className="w-4"
                            />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}