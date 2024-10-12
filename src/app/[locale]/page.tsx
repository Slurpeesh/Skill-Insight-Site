import DownloadLink from '@/_features/DownloadLink/DownloadLink'
import LinuxDebSvg from '@/_svgs/LinuxDebSvg'
import LinuxRPMSvg from '@/_svgs/LinuxRPMSvg'
import MacOSSvg from '@/_svgs/MacOSSvg'
import WindowsSvg from '@/_svgs/WindowsSvg'
import FeatureList from '@/_widgets/FeatureList/FeatureList'
import { ExternalLink } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

export default async function Home() {
  const t = await getTranslations('HomePage')
  const response = await fetch(
    'https://api.github.com/repos/Slurpeesh/Skill-Insight/releases/latest',
    {
      headers: {
        accept: 'application/vnd.github+json',
        'User-Agent': `Skill Insight Site/1.0 ${process.env.USER_MAIL}`,
        'X-GitHub-Api-Version': '2022-11-28',
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
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
      <section className="bg-muted p-5 rounded-lg flex flex-col md:flex-row gap-5 justify-evenly items-center">
        <div className="flex-1 flex flex-col gap-10 justify-between items-center">
          <h1 className="text-5xl font-bold text-center">Skill Insight</h1>
          <p className="text-lg">
            {t('descriptionSection1')}{' '}
            <em className="bg-accent p-1 font-bold not-italic">
              {t('descriptionSection2Call')}
            </em>
            .
            <br />
            {t('descriptionSection3')}
            <br />
            {t('descriptionSection4')}
          </p>
          <div className="grid grid-cols-2 grid-rows-4 gap-2 max-w-72 m-auto">
            <h3 className="text-xl font-semibold text-center col-span-2 place-self-center">
              {t('downloadCall')}{' '}
              <a
                href={latestReleaseTagUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline whitespace-nowrap"
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
              icon={<WindowsSvg />}
              title={t('downloadWindowsAccessibility')}
              aria-label={t('downloadWindowsAccessibility')}
              className="col-span-2"
            />
            <DownloadLink
              name="MacOS"
              url={macOSExtensionURL ?? ''}
              icon={<MacOSSvg />}
              title={t('downloadMacOSAccessibility')}
              aria-label={t('downloadMacOSAccessibility')}
              className="col-span-2"
            />
            <DownloadLink
              name={
                <>
                  <span>Linux</span> <em>.rpm</em>
                </>
              }
              url={linuxRPMExtensionURL ?? ''}
              icon={<LinuxRPMSvg />}
              title={t('downloadLinuxAccessibility')}
              aria-label={t('downloadLinuxAccessibility')}
            />
            <DownloadLink
              name={
                <>
                  <span>Linux</span> <em>.deb</em>
                </>
              }
              url={linuxDebExtensionURL ?? ''}
              icon={<LinuxDebSvg />}
              title={t('downloadLinuxAccessibility')}
              aria-label={t('downloadLinuxAccessibility')}
            />
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/appPreview.png"
            alt={t('previewImageAlt')}
            width={600}
            height={435}
            unoptimized
            priority
          />
        </div>
      </section>
      <section className="mt-20">
        <h2 className="text-center text-3xl font-semibold mb-5">
          {t('features')}
        </h2>
        <FeatureList />
      </section>
    </main>
  )
}
