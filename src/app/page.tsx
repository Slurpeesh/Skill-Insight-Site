import DownloadLink from '@/_features/DownloadLink/DownloadLink'
import FeatureList from '@/_widgets/FeatureList/FeatureList'
import { ExternalLink } from 'lucide-react'
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
  const latestReleaseTagName = data.tag_name
  const latestReleaseTagUrl = data.html_url
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
            <em className="bg-red-500 p-1 font-bold not-italic">
              increase your chances of getting hired
            </em>
            .
            <br />
            Find out what skills companies and employers want to see from you
            right now in order of their demand and popularity.
            <br />
            See in which regions there are more vacancies in your specialty.
          </p>
          <div className="grid grid-cols-2 grid-rows-4 gap-2 max-w-72 m-auto">
            <h3 className="text-xl font-semibold text-center col-span-2 place-self-center">
              Download and give it a try!{' '}
              <a
                href={latestReleaseTagUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:underline"
              >
                <span>{latestReleaseTagName}</span>
                <ExternalLink
                  className="inline align-text-top stroke-[2.5] ml-1"
                  width={16}
                  height={16}
                />
              </a>
            </h3>
            <DownloadLink
              name="Windows"
              url={windowsExtensionURL ?? ''}
              iconUrl="/windowsIcon.svg"
              alt="Windows icon"
              title="Download Skill Insight for Windows"
              aria-label="Download Skill Insight for Windows"
              className="col-span-2"
            />
            <DownloadLink
              name="MacOS"
              url={macOSExtensionURL ?? ''}
              iconUrl="/macOSIcon.svg"
              alt="MacOS icon"
              title="Download Skill Insight for MacOS"
              aria-label="Download Skill Insight for MacOS"
              className="col-span-2"
            />
            <DownloadLink
              name={
                <>
                  <span>Linux</span> <em>.rpm</em>
                </>
              }
              url={linuxRPMExtensionURL ?? ''}
              iconUrl="/linuxRPMIcon.svg"
              alt="Linux RPM package manager icon"
              title="Download Skill Insight for Linux"
              aria-label="Download Skill Insight for Linux"
            />
            <DownloadLink
              name={
                <>
                  <span>Linux</span> <em>.deb</em>
                </>
              }
              url={linuxDebExtensionURL ?? ''}
              iconUrl="/linuxDebIcon.svg"
              alt="Linux Debian package manager icon"
              title="Download Skill Insight for Linux"
              aria-label="Download Skill Insight for Linux"
            />
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/appPreview.png"
            alt="Window of Skill Insight application showind main feature: getting statistics of key skills by user's searching request"
            width={600}
            height={435}
            unoptimized
            priority
          />
        </div>
      </section>
      <section className="mt-20">
        <h2 className="text-center text-3xl font-semibold mb-5">Features</h2>
        <FeatureList />
      </section>
    </main>
  )
}
