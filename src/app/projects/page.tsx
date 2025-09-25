import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Flutter Quran App",
      description: "A responsive Quran app with Tajweed & translations.",
      image: "/project1.jpg",
      link: "https://yourprojectlink1.com",
    },
    {
      title: "Next.js Portfolio",
      description: "My personal portfolio built with Next.js & Tailwind.",
      image: "/project2.jpg",
      link: "https://yourprojectlink2.com",
    },
    {
      title: "TikTok Live Companion",
      description: "A TikTok live overlay app for VTubers built in Electron.",
      image: "/project3.jpg",
      link: "https://yourprojectlink3.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header fixed at top */}
      <Header />

      {/* Page content */}
      <div className="max-w-6xl mx-auto px-6 sm:px-12 pt-24 pb-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          My Projects
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-lg mb-4 object-cover h-48"
              />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 flex-1">
                {project.description}
              </p>
              <Link
                href={project.link}
                target="_blank"
                className="mt-4 inline-block bg-black text-white dark:bg-white dark:text-black py-2 px-5 rounded-full text-sm hover:bg-gray-800 dark:hover:bg-gray-200 text-center"
              >
                View Project
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
