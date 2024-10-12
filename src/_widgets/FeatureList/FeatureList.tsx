import FeatureItem from '@/_features/FeatureItem/FeatureItem'
import {
  Blocks,
  Building2,
  ChartBarDecreasing,
  Globe,
  MonitorCog,
  SunMoon,
} from 'lucide-react'

const featureItemsList = [
  {
    name: 'Key skills statistics',
    icon: <ChartBarDecreasing />,
    description:
      'View up-to-date statistics on required skills, the output is available as “raw” data that can be copied and saved with the further possibility of your own analysis, also the output is presented in the form of a chart, if you just need to know the most demanded skills in the specialty.',
  },
  {
    name: 'Cities diagram',
    icon: <Building2 />,
    description:
      'In addition to a chart with the most in-demand skills, you can also view statistics on job openings relative to the city.',
  },
  {
    name: 'Cross-platform',
    icon: <MonitorCog />,
    description:
      'The app is available for Windows, macOS and Linux users. See download links above.',
  },
  {
    name: 'Multilanguage',
    icon: <Globe />,
    description:
      'Multiple language support is available, currently English and Russian.',
  },
  {
    name: 'Dark theme',
    icon: <SunMoon />,
    description:
      'The default theme is customized to match the theme of your device, but if you need to, you can change the theme within the app itself without affecting the theme of the device.',
  },
  {
    name: 'Region selection',
    icon: <Blocks />,
    description:
      'Choose only the regions you want when collecting statistics. Multiple selections are available.',
  },
]

export default function FeatureList() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {featureItemsList.map((featureItem) => (
        <FeatureItem
          key={featureItem.name}
          name={featureItem.name}
          icon={featureItem.icon}
          description={featureItem.description}
        />
      ))}
    </ul>
  )
}
