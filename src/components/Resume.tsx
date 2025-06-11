import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Resume = () => {

    return (

        <div className="min-h-screen bg-gray-900 text-white dark:bg-gray-900 dark:text-white p-6 font-sans">
            <div className="bg-red-500 text-white p-4">
                Якщо бачиш червоний фон — Tailwind працює
            </div>
            <div className="max-w-3xl mx-auto">
                {/*<ThemeToggle />*/}
                <button
                    // onClick={handlePrint}
                    className="mb-6 bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded text-white font-semibold"
                >
                    Download PDF
                </button>

                <div className="bg-gray-800 p-6 rounded shadow-md">
                    <h1 className="text-3xl font-bold mb-2">Veretelnyk Bohdan</h1>
                    <p className="text-lg mb-4">Senior Frontend Developer</p>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold">Summary</h2>
                        <p>
                            Senior Frontend Engineer with 4+ years of experience designing and implementing scalable web
                            applications using React, TypeScript, and Next.js. Strong in architecture planning, UI/UX
                            collaboration, and performance optimization.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold">Skills</h2>
                        <ul className="list-disc list-inside">
                            <li>Languages: JavaScript, TypeScript</li>
                            <li>Frontend: React, Redux, Next.js, React Native, Styled Components</li>
                            <li>Backend: Node.js, Express</li>
                            <li>Tools: Git, REST APIs, Agile/Scrum</li>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold">Experience</h2>

                        <div className="mt-2">
                            <h3 className="text-lg font-bold">Frontend Developer – Hivex</h3>
                            <p className="text-sm italic">Jun 2022 – Present | Germany</p>
                            <ul className="list-disc list-inside mt-1">
                                <li>Developed core UI features for a sportsbook platform (Next.js).</li>
                                <li>Built reusable components like sidebar, navbar, tabs, bet builder.</li>
                                <li>Improved scalability and introduced architecture enhancements.</li>
                            </ul>
                        </div>

                        <div className="mt-4">
                            <h3 className="text-lg font-bold">Frontend Developer – Bananza.agency</h3>
                            <p className="text-sm italic">Sep 2020 – Jun 2022 | Ukraine</p>
                            <ul className="list-disc list-inside mt-1">
                                <li>Developed investment section of a banking platform with 300+ devs.</li>
                                <li>Replaced legacy logic, improving feature delivery speed.</li>
                                <li>Advocated clean code and onboarding best practices.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold">Education</h2>
                        <p>Master’s Degree in Finance, NULES of Ukraine (2011 – 2016)</p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold">Languages</h2>
                        <p>Ukrainian – Native, English – B2</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold">Contacts</h2>
                        <p>Email: bveretelnik@gmail.com</p>
                        <p>Phone: +49 160 95847273</p>
                        <p>
                            LinkedIn:{" "}
                            <a
                                className="text-blue-400 underline"
                                href="https://www.linkedin.com/in/bveretelnyk/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                bveretelnyk
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Resume;
