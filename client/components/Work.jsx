"use client";

import { useRouter } from "next/navigation";

export default function Work() {
    const router = useRouter();

    const work = [
        {
            name: "Full Stack Ai powered project",
            icon: "/assets/work-1.png",
            description: "AdsAble.Ai",
            link: "/Adsable",
        },
        {
            name: "Modern Ecommerce Platform",
            icon: "/assets/work-2.png",
            description: "CLOTHIQ Ecommerce Clothing Website",
            link: "/clothiq",
        },
        {
            name: "ExcelWeb",
            icon: "/assets/work-3.png",
            description: "Data Collection & Tracking Platform",
            link: "/ExcelWeb",
        },
        {
            name: "UI/UX designing",
            icon: "/assets/work-4.png",
            description: "UI/UX Design",
            link: "/projects/uiux",
        },
    ];

    return (
        <div
            id="work"
            className="w-full px-[12%] py-10 scroll-mt-20"
        >
            <h4 className="text-center mb-2 text-lg font-Ovo">
                My Portfolio
            </h4>

            <h2 className="text-center text-5xl font-Ovo">
                My Latest Work
            </h2>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                Welcome to my web development portfolio! Explore a collection
                of projects showcasing my expertise in full-stack development,
                AI integration, and modern web technologies.
            </p>

            <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
                {work.map((item) => (
                    <div
                        key={item.name}
                        onClick={() => router.push(item.link)}
                        className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group overflow-hidden"
                        style={{
                            backgroundImage: `url(${item.icon})`,
                        }}
                    >
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />

                        <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                            <div>
                                <h2 className="font-semibold">
                                    {item.name}
                                </h2>

                                <p className="text-sm text-gray-700">
                                    {item.description}
                                </p>
                            </div>

                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img
                                    src="/assets/send-icon.png"
                                    alt=""
                                    className="w-5"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={() => router.push("/projects")}
                className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-8 mx-auto my-20 duration-300 dark:text-white"
            >
                Show More

                <img
                    src="/assets/right-arrow-bold.png"
                    alt=""
                    className="w-4 dark:hidden"
                />

                <img
                    src="/assets/right-arrow-bold-dark.png"
                    alt=""
                    className="w-4 hidden dark:block"
                />
            </button>
        </div>
    );
}