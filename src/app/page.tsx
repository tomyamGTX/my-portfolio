import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header stays at the top */}
      <Header />

      {/* Page content */}
      <div className="grid grid-rows-[1fr_20px] items-center justify-items-center min-h-screen px-8 sm:px-20 pt-24 pb-20 gap-16">
        <main className="flex flex-col gap-8 row-start-1 items-center sm:items-start text-center sm:text-left">
          {/* Profile Photo */}
          <Image
            className="rounded-full shadow-lg"
            src="/profile.png" // put your photo in /public/profile.png
            alt="Your name"
            width={120}
            height={120}
            priority
          />

          {/* Name + Role */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Hi, I’m Kimi Mdnoor 👋
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-md">
            I’m a Flutter & Next.js Developer passionate about building modern,
            responsive, and user-friendly apps.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full transition-colors flex items-center justify-center bg-black text-white dark:bg-white dark:text-black font-medium text-sm sm:text-base h-10 sm:h-12 px-6 hover:bg-gray-800 dark:hover:bg-gray-200"
              href="/projects"
            >
              View Projects
            </a>
            <a
              className="rounded-full border border-gray-400 dark:border-gray-600 transition-colors flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-800 font-medium text-sm sm:text-base h-10 sm:h-12 px-6"
              href="#contact"
            >
              Contact Me
            </a>
          </div>
        </main>

        {/* Footer */}
        <footer className="row-start-2 flex gap-6 flex-wrap items-center justify-center text-gray-500 dark:text-gray-400">
          <a
            className="hover:text-black dark:hover:text-white"
            href="https://github.com/tomyamGTX"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="hover:text-black dark:hover:text-white"
            href="https://linkedin.com/in/hakimi-mdnoor-11510720b"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="hover:text-black dark:hover:text-white"
            href="mailto:hakimimdnoor90@gmail.com"
          >
            Email
          </a>
        </footer>
      </div>
    </div>
  );
}
