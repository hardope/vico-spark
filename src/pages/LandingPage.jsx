import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaFacebook, FaPhoneAlt, FaLinkedin, FaTimes } from "react-icons/fa";
import engineer from "../assets/engineer.png";
import bulb from "../assets/bulb.jpg";
import breakers from "../assets/breakers.jpg";
import field_engineer from "../assets/field-engineer.jpg";
import engineering from "../assets/engineering.jpg";

export default function ElectricalEngineerLanding() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [projects, setProjects] = useState([
        {
            image: field_engineer,
            title: "Electrical System Installation",
            description:
                "This project showcases my expertise in designing and implementing large-scale electrical distribution systems. The installation features advanced automation controls and energy-efficient solutions, ensuring optimal performance while maintaining safety standards."
            },
        {
            image: breakers,
            title: "Breaker Panel Upgrade",
            description:
                "Upgraded an outdated breaker panel to a modern, efficient system ensuring safety and compliance with new regulations."
            },
        {
            image: engineering,
            title: "Industrial Automation Project",
            description:
                "Designed and implemented automation systems to streamline industrial operations, reducing downtime and increasing productivity."
            },
        {
            image: bulb,
            title: "Energy-Efficient Lighting",
            description:
                "Developed lighting solutions that reduce energy consumption while providing optimal brightness and longevity."
            }
    ]);

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden"
            >
                {/* Electric border effect with lower z-index */}
                <div className="absolute inset-0 z-0 border-t-4 border-b-4 border-blue-500/30 rounded-lg pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-400/10 to-transparent" />
                </div>

                <motion.img
                    src={engineer}
                    alt="Engineer"
                    className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full border-4 border-blue-400 shadow-[0_0_20px_rgba(66,135,245,0.5)] mb-4 relative z-10"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: [0, 360] }}
                    transition={{ duration: 1, ease: "easeOut", times: [0, 1] }}
                    />

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-400 tracking-tight drop-shadow-[0_0_15px_rgba(66,135,245,0.8)] relative z-10">
                    Victor Okeowo ~ Vico Spark
                </h1>
                
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400 mt-4 animate-pulse relative z-10">
                    Bringing Power to Life
                </h3>

                <p className="text-lg md:text-xl mt-6 max-w-2xl leading-relaxed text-gray-300 relative z-10">
                    Experienced Electrical Engineer specializing in power systems, installations, and consulting. Committed to delivering high-quality, safe, and efficient electrical solutions.
                </p>

                {/* Social Links with electric glow */}
                <div className="mt-8 flex space-x-6 relative z-10">
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
                            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                        <Icon size={28} className="text-white" />
                            <span className="sr-only">Social Link</span>
                        </motion.a>
                    ))}
                </div>
            </motion.section>

            {/* About Section */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="py-16 px-6 max-w-4xl mx-auto text-center"
            >
                <div className="bg-black border border-blue-500/20 rounded-xl p-8 shadow-[0_0_20px_rgba(66,135,245,0.2)]">
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">About Me</h2>
                    <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                        With over a decade of experience in the electrical industry, I have worked on large-scale power distribution, industrial automation, and sustainable energy solutions. I specialize in designing, implementing, and maintaining electrical systems that meet both safety and efficiency standards.
                    </p>
                </div>
            </motion.section>

            {/* Portfolio Section */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="py-16 px-4"
            >
                <div className="bg-black/90 border border-blue-500/20 rounded-xl p-8 shadow-[0_0_20px_rgba(66,135,245,0.2)]">
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-10 text-center">Review Our work</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            onClick={() => setSelectedImage({ project, index })}
                            whileHover={{ scale: 1.05, zIndex: 10, boxShadow: "0 0 30px rgba(66,135,245,0.4)" }}
                            whileTap={{ scale: 0.98 }}
                            className="group cursor-pointer overflow-hidden rounded-xl border border-blue-500/20 transition-all duration-300 relative"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full aspect-square object-cover transform transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="w-full text-center pb-6">
                                <h3 className="text-2xl font-semibold text-blue-400 mb-2">{project.title}</h3>
                                <p className="text-gray-300 text-sm">Click to view details</p>
                            </div>
                            </div>
                        </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Image Viewer Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-lg">
                    <div className="max-w-4xl w-full">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full max-w-[90vw] max-h-[80vh] flex items-center justify-center"
                            onClick={() => setSelectedImage(null)}
                        >
                            <motion.div
                                className="relative w-full max-w-[80%] max-h-[70vh] md:max-w-[60%] lg:max-w-[50%] overflow-hidden"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={selectedImage.project.image}
                                    alt={selectedImage.project.title}
                                    className="w-full h-auto object-contain rounded-lg shadow-[0_0_40px_rgba(66,135,245,0.4)]"
                                />
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 transition-colors rounded-full p-3"
                                >
                                    <FaTimes size={24} className="text-white" />
                                    <span className="sr-only">Close</span>
                                </button>
                                {/* Project Information */}
                                <div className="mt-4 p-4 bg-black/80 border-t border-blue-500/20 rounded-b-lg text-center">
                                    <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">
                                        {selectedImage.project.title}
                                    </h3>
                                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                                        {selectedImage.project.description}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            )}
            <footer className="bg-black text-center py-8">
                <p className="text-gray-300">
                    &copy; 2025 Victor Okeowo. All rights reserved.
                </p>
                <p className="text-gray-300">
                    Designed By <a href="mailto:adeyeriopeoluwa05@gmail.com" className="text-blue-400">Opeoluwa Adeyeri</a>
                </p>
            </footer>
        </div>
    );
}
