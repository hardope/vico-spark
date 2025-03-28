import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaFacebook, FaPhoneAlt, FaLinkedin, FaTimes } from "react-icons/fa";
import engineer from "../assets/engineer.png";

import firstMain from "../assets/first/main.jpg";
import firstone from "../assets/first/1.jpg";
import firsttwo from "../assets/first/2.jpg";

import secondMain from "../assets/second/main.jpg";
import secondone from "../assets/second/1.jpg";
import secondtwo from "../assets/second/2.jpg";

import thirdMain from "../assets/third/main.jpg";
import thirdone from "../assets/third/1.jpg";


export default function ElectricalEngineerLanding() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [projects, setProjects] = useState([
        {
            image: firstMain,
            album: [firstone, firsttwo],
            title: "Ceiling Light Installation",
            description:
                "Converting a 600mm x 600mm 2 feet by 4 fluorescent light into a  600mm x 600mm LED Panel light"
            },
        {
            image: secondMain,
            album: [secondone, secondtwo],
            title: "Installed waterproof socket outlet",
            description:
                "Installation of a 13A double waterproof Socket outlet."
            },
        {
            image: thirdMain,
            album: [thirdone],
            title: "Electrical panel control installation",
            description:
                "Installation of a 3 phase electrical panel control system."
            },
    ]);

    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            {/* Hero Section */}
            <header className="w-full py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black via-[#0a0a0a] to-[#121212]">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
                    <div className="w-full md:w-1/2 flex flex-col items-start space-y-6">
                        <motion.h1
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-4xl md:text-5xl font-bold text-blue-400 animate-pulse relative z-10"
                            >
                            Engineering the Future of Power Systems
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-gray-300 text-lg md:text-xl"
                            >
                            Innovative electrical solutions for tomorrow's challenges
                        </motion.p>
                        <motion.a
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            href="#projects"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold"
                        >
                            View Projects
                        </motion.a>
                    </div>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: [0, 360] }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full md:w-1/2 flex justify-center md:justify-end"
                >
                    <img
                    src={engineer}
                    alt="Engineer"
                    className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-blue-500 shadow-xl"
                    />
                </motion.div>
                </div>
            </header>

            {/* Profile Section */}
            <section
                id="about"
                className="w-full py-16 px-6 md:px-12 lg:px-24 bg-black border-t border-gray-800"
            >
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
                            Victor Okeowo ~ Vico Spark
                        </h2>
                        <h3 className="text-xl md:text-2xl text-blue-200 mb-4">
                            Bringing Power to Life
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Experienced Electrical Engineer specializing in power systems,
                            installations, and consulting. Committed to delivering
                            high-quality, safe, and efficient electrical solutions. With nearly
                            a decade of experience in the electrical industry, I have worked
                            on large-scale power distribution, industrial automation, and
                            sustainable energy solutions. I specialize in designing,
                            implementing, and maintaining electrical systems that meet both
                            safety and efficiency standards.
                        </p>

                        {/* Social Links */}
                        <div className="mt-6 flex space-x-4">
                        {[
                            {
                                href: "https://wa.me/+2349077008142",
                                icon: FaWhatsapp,
                                color: "bg-green-500 hover:bg-green-600",
                                target: "_blank"
                            },
                            {
                                href: "https://web.facebook.com/victor.okeowo.spark",
                                icon: FaFacebook,
                                color: "bg-blue-600 hover:bg-blue-700",
                                target: "_blank"
                            },
                            {
                                href: "https://www.linkedin.com/in/victor-okeowo-7742a8209/",
                                icon: FaLinkedin,
                                color: "bg-blue-500 hover:bg-blue-600",
                                target: "_blank"
                            },
                            {
                                href: "tel:+2349077008142",
                                icon: FaPhoneAlt,
                                color: "bg-gray-700 hover:bg-gray-800"
                            }
                        ].map(({ href, icon: Icon, color, target }) => (
                            <motion.a
                                key={href}
                                href={href}
                                target={target}
                                rel="noopener noreferrer"
                                className={`p-4 rounded-full ${color} transition-all duration-300 group`}
                                whileHover={{
                                    scale: 1.1,
                                    boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon size={20} className="text-white" />
                                <span className="sr-only">Social Link</span>
                            </motion.a>
                        ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects / Album Section */}
            <section
                id="projects"
                className="w-full py-16 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] border-t border-gray-800"
            >
                <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-10">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        onClick={() => setSelectedImage({ project, index })}
                        whileHover={{
                        scale: 1.02,
                        boxShadow: "0 0 30px rgba(66,135,245,0.4)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="cursor-pointer overflow-hidden rounded-lg border border-blue-500/20 transition-all duration-300 relative group"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full aspect-square object-cover transform transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="w-full text-center pb-4">
                                <h3 className="text-2xl font-semibold text-blue-400">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 text-sm">
                                    Click to view details
                                </p>
                            </div>
                        </div>
                    </motion.div>
                    ))}
                </div>
                </div>
            </section>

            {/* Areas of Expertise (Optional Section) */}
            <section className="w-full py-16 px-6 md:px-12 lg:px-24 bg-black border-t border-gray-800">
                <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-10">
                    Areas of Expertise
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-300">
                    <div className="bg-[#111111] p-6 rounded-lg shadow-sm hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-blue-300 mb-2">
                        Power Distribution
                    </h3>
                    <p>
                        Comprehensive planning and installation for large-scale
                        electrical power systems.
                    </p>
                    </div>
                    <div className="bg-[#111111] p-6 rounded-lg shadow-sm hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-blue-300 mb-2">
                        Renewable Energy
                    </h3>
                    <p>
                        Sustainable solutions that reduce carbon footprint and
                        operational costs.
                    </p>
                    </div>
                    <div className="bg-[#111111] p-6 rounded-lg shadow-sm hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-blue-300 mb-2">
                        Automation & Control
                    </h3>
                    <p>
                        Modernizing industrial processes for enhanced efficiency and
                        safety.
                    </p>
                    </div>
                    <div className="bg-[#111111] p-6 rounded-lg shadow-sm hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-blue-300 mb-2">
                        Safety & Systems
                    </h3>
                    <p>
                        Compliance with the latest regulations and standards for
                        electrical installations.
                    </p>
                    </div>
                </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="w-full py-16 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] border-t border-gray-800">
                <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
                    Let's Work Together
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                    Ready to bring your electrical project to life?
                </p>
                <a
                    href="tel:+2349077008142"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold"
                >
                    Get in Touch
                </a>
                </div>
            </section>

            {/* Image Viewer Modal */}
            {selectedImage && (
            <div className="fixed inset-0 h-screen z-50 flex items-center justify-center p-4 backdrop-blur-lg overflow-auto">
                <div className="max-w-4xl w-full h-[90%]">
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-black/80 p-4 rounded-lg"
                    onClick={() => setSelectedImage(null)}
                    >
                    {/* Main Image and Close Button */}
                    <motion.div
                        className="relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                        src={selectedImage.project.image}
                        alt={selectedImage.project.title}
                        className="w-full max-h-[70vh] h-auto object-contain rounded-lg shadow-[0_0_40px_rgba(66,135,245,0.4)]"
                        />
                        <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 transition-colors rounded-full p-3"
                        >
                        <FaTimes size={24} className="text-white" />
                        <span className="sr-only">Close</span>
                        </button>
                    </motion.div>

                    {/* Project Details */}
                    <div className="mt-4 p-4 border-t border-blue-500/20 text-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">
                        {selectedImage.project.title}
                        </h3>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        {selectedImage.project.description}
                        </p>
                    </div>

                    {/* Photo Album */}
                    {selectedImage.project.album.length > 0 && (
                        <div className="mt-4 p-4 border-t border-blue-500/20 text-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 space-x-3 space-y-3 overflow-x-auto justify-center">
                            {selectedImage.project.album.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`Album image ${idx + 1}`}
                                className="w-[100%] md:w-[97%] object-contain rounded-md"
                            />
                            ))}
                        </div>
                        </div>
                    )}
                    </motion.div>
                </div>
                </div>
            )}

            {/* Footer */}
            <footer className="w-full bg-black border-t border-gray-800 py-6 mt-auto">
                <div className="max-w-6xl mx-auto text-center text-gray-300">
                <p>&copy; 2025 Victor Okeowo. All rights reserved.</p>
                <p>
                    Designed By{" "}
                    <a
                    href="mailto:adeyeriopeoluwa05@gmail.com"
                    className="text-blue-400"
                    >
                    Opeoluwa Adeyeri
                    </a>
                </p>
                </div>
            </footer>
        </div>
    );
}
