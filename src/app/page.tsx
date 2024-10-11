import {
  Blocks,
  Building2,
  ChartBarDecreasing,
  Globe,
  MonitorCog,
  SunMoon,
} from 'lucide-react'
import Image from 'next/image'

export default async function Home() {
  const response = await fetch(
    'https://api.github.com/repos/Slurpeesh/Skill-Insight/releases/latest',
    {
      headers: {
        accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
    }
  )
  const data: IRelease = await response.json()
  const dataDownloadURLs = data.assets.map((item) => item.browser_download_url)
  const windowsExtensionURL = dataDownloadURLs.find((url: string) =>
    url.endsWith('.exe')
  )
  const macOSExtensionURL = dataDownloadURLs.find((url: string) =>
    url.endsWith('.zip')
  )
  const linuxRPMExtensionURL = dataDownloadURLs.find((url: string) =>
    url.endsWith('.rpm')
  )
  const linuxDebExtensionURL = dataDownloadURLs.find((url: string) =>
    url.endsWith('.deb')
  )

  return (
    <main className="p-5">
      <section className="bg-slate-800 p-5 rounded-lg flex flex-col md:flex-row gap-5 justify-evenly items-center">
        <div className="flex-1 flex flex-col gap-10 justify-between items-center">
          <h1 className="text-5xl font-bold text-center">Skill Insight</h1>
          <p className="text-lg">
            A cross-platform app that will help you determine what key skills
            are in demand in the labor market right now for your specialty,
            which will{' '}
            <span className="bg-red-500 p-1 font-bold">
              increase your chances of getting hired
            </span>
            .
            <br />
            Find out what skills companies and employers want to see from you
            right now in order of their demand and popularity.
            <br />
            See in which regions there are more vacancies in your specialty.
          </p>
          <div className="grid grid-cols-2 grid-rows-4 gap-2 max-w-72 m-auto">
            <h3 className="text-xl font-semibold text-center col-span-2 place-self-center">
              Download and give it a try!
            </h3>
            <a
              className="bg-red-600 rounded-md p-2 flex justify-center items-center gap-2 col-span-2"
              href={windowsExtensionURL}
              download
            >
              <Image
                src="/windowsIcon.svg"
                alt="Windows icon"
                width={32}
                height={32}
                quality={100}
              />
              <span>Windows</span>
            </a>
            <a
              className="bg-red-600 rounded-md p-2 flex justify-center items-center gap-2 col-span-2"
              href={macOSExtensionURL}
              download
            >
              <Image
                src="/macOSIcon.svg"
                alt="MacOS icon"
                width={32}
                height={32}
                quality={100}
              />
              <span>MacOS</span>
            </a>
            <a
              className="bg-red-600 rounded-md p-2 flex justify-center items-center gap-2"
              href={linuxRPMExtensionURL}
              download
            >
              <Image
                src="/linuxRPMIcon.svg"
                alt="Linux RPM package manager icon"
                width={32}
                height={32}
                quality={100}
              />
              <span>Linux</span> <em>.rpm</em>
            </a>
            <a
              className="bg-red-600 rounded-lg p-2 flex justify-center items-center gap-2"
              href={linuxDebExtensionURL}
              download
            >
              <Image
                src="/linuxDebIcon.svg"
                alt="Linux Debian package manager icon"
                width={32}
                height={32}
                quality={100}
              />
              <span>Linux</span> <em>.deb</em>
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/appPreview.png"
            alt="Window of Skill Insight application showind main feature: getting statistics of key skills by user's searching request"
            width={600}
            height={435}
          />
        </div>
      </section>
      <section className="mt-20">
        <h2 className="text-center text-3xl font-semibold mb-5">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <div className="bg-slate-800 p-2 rounded-lg">
            <div className="flex gap-2">
              <ChartBarDecreasing />
              <h3 className="font-medium text-xl">Key skills statistics</h3>
            </div>
            <p>
              View up-to-date statistics on required skills, the output is
              available as “raw” data that can be copied and saved with the
              further possibility of your own analysis, also the output is
              presented in the form of a chart, if you just need to know the
              most demanded skills in the specialty.
            </p>
          </div>
          <div className="bg-slate-800 p-2 rounded-lg">
            <div className="flex gap-2">
              <Building2 />
              <h3 className="font-medium text-xl">Cities diagram</h3>
            </div>
            <p>
              In addition to a chart with the most in-demand skills, you can
              also view statistics on job openings relative to the city.
            </p>
          </div>
          <div className="bg-slate-800 p-2 rounded-lg">
            <div className="flex gap-2">
              <MonitorCog />
              <h3 className="font-medium text-xl">Cross-platform</h3>
            </div>
            <p>
              The app is available for Windows, macOS and Linux users. See
              download links above.
            </p>
          </div>
          <div className="bg-slate-800 p-2 rounded-lg">
            <div className="flex gap-2">
              <Globe />
              <h3 className="font-medium text-xl">Multilanguage</h3>
            </div>
            <p>
              Multiple language support is available, currently English and
              Russian.
            </p>
          </div>
          <div className="bg-slate-800 p-2 rounded-lg">
            <div className="flex gap-2">
              <SunMoon />
              <h3 className="font-medium text-xl">Dark theme</h3>
            </div>
            <p>
              The default theme is customized to match the theme of your device,
              but if you need to, you can change the theme within the app itself
              without affecting the theme of the device.
            </p>
          </div>
          <div className="bg-slate-800 p-2 rounded-lg">
            <div className="flex gap-2">
              <Blocks />
              <h3 className="font-medium text-xl">Region selection</h3>
            </div>
            <p>
              Choose only the regions you want when collecting statistics.
              Multiple selections are available.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
