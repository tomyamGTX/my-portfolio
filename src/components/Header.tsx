"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-6xl mx-auto px-6 sm:px-12 py-4 flex justify-between items-center">
                {/* Logo / Name */}
                <Link
                    href="/"
                    className="text-xl font-bold text-gray-900 dark:text-white hover:opacity-80"
                >
                    Kimi Mdnoor
                </Link>

                {/* Navigation */}
                <nav className="flex gap-6 text-gray-700 dark:text-gray-300">
                    <Link
                        href="/"
                        className={`hover:text-black dark:hover:text-white ${pathname === "/" ? "font-semibold text-black dark:text-white" : ""
                            }`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/projects"
                        className={`hover:text-black dark:hover:text-white ${pathname === "/projects"
                                ? "font-semibold text-black dark:text-white"
                                : ""
                            }`}
                    >
                        Projects
                    </Link>          <Link
                        href="/blogs"
                        className={`hover:text-black dark:hover:text-white ${pathname === "/blogs"
                                ? "font-semibold text-black dark:text-white"
                                : ""
                            }`}
                    >
                        Blogs
                    </Link>
                </nav>
            </div>
        </header>
    );
}
