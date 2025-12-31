import Link from "next/link";

const Page = () => {
  return (
    <main className="pt-24 pb-16 bg-white dark:bg-slate-900">
      <section className="max-w-6xl mx-auto px-6 space-y-14">

        {/* Card 1 */}
        <figure className="md:flex items-center gap-10 bg-slate-100 dark:bg-slate-800 rounded-xl p-10 shadow-sm hover:shadow-lg transition">
          <img
            src="/pic.jpg"
            alt="M Asif"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover mx-auto md:mx-0 border-4 border-sky-500"
          />

          <div className="text-center md:text-left space-y-4">
            <p className="text-xl text-slate-700 dark:text-slate-200 leading-relaxed">
              Tailwind CSS and Next.js help in building modern, responsive, and
              performance-focused web applications with clean UI.
            </p>

            <div>
              <h3 className="text-sky-600 dark:text-sky-400 text-lg font-semibold">
                M Asif
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                PAIB Student | Frontend Developer
              </p>
            </div>
          </div>
        </figure>

        {/* Card 2 */}
        <figure className="md:flex items-center gap-10 bg-slate-100 dark:bg-slate-800 rounded-xl p-10 shadow-sm hover:shadow-lg transition">
          <img
            src="/pic2.jpg"
            alt="4K Wallpaper"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover mx-auto md:mx-0 border-4 border-yellow-500"
          />

          <div className="text-center md:text-left space-y-4">
            <p className="text-xl text-slate-700 dark:text-slate-200 leading-relaxed">
              A professional workflow with Next.js ensures scalability, SEO
              optimization, and fast user experience for real-world projects.
            </p>

            <div>
              <h3 className="text-yellow-600 dark:text-yellow-400 text-lg font-semibold">
                4K Visuals
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Premium Wallpaper Collection
              </p>
            </div>
          </div>
        </figure>

        {/* Footer Links */}
        <div className="flex justify-center gap-8 pt-12 border-t border-slate-300 dark:border-slate-700">
          <Link
            href="/about"
            className="px-8 py-3 rounded-md bg-yellow-500 text-white font-semibold
            hover:bg-yellow-600 transition"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="px-8 py-3 rounded-md border border-yellow-500 text-yellow-500 font-semibold
            hover:bg-yellow-500 hover:text-white transition"
          >
            Contact
          </Link>
        </div>

      </section>
    </main>
  );
};

export default Page;
