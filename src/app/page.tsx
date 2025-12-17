const Page = () => {
  return (
    <div className="space-y-8">

      {/* Card 1 */}
      <figure className="md:flex bg-slate-100 rounded-2xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto rounded-full mx-auto"
          src="/pic.jpg"
          alt="Pic1"
        />

        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “This is first text for first image. Tailwind CSS makes
              styling fast and responsive.”
            </p>
          </blockquote>

          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              M Asif
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              PAIB Student
            </div>
          </figcaption>
        </div>
      </figure>

      {/* Card 2 */}
      <figure className="md:flex bg-slate-100 rounded-2xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto rounded-full mx-auto"
          src="/pic2.jpg"
          alt="Pic2"
        />

        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “This is second text for second image. Next.js with
              Tailwind is powerful and easy.”
            </p>
          </blockquote>

          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              4K
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Wallpaper
            </div>
          </figcaption>
        </div>
      </figure>

    </div>
  )
}

export default Page
