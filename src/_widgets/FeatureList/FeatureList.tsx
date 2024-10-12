import FeatureItem from '@/_features/FeatureItem/FeatureItem'
import {
  Blocks,
  Building2,
  ChartBarDecreasing,
  Globe,
  MonitorCog,
  SunMoon,
} from 'lucide-react'
import { getTranslations } from 'next-intl/server'

const featureItemsList = [
  {
    nameKey: 'keySkillsFeatureName',
    icon: <ChartBarDecreasing />,
    descriptionKey: 'keySkillsFeatureDescription',
  },
  {
    nameKey: 'citiesDiagramFeatureName',
    icon: <Building2 />,
    descriptionKey: 'citiesDiagramFeatureDescription',
  },
  {
    nameKey: 'crossPlatformFeatureName',
    icon: <MonitorCog />,
    descriptionKey: 'crossPlatformFeatureDescription',
  },
  {
    nameKey: 'multilanguageFeatureName',
    icon: <Globe />,
    descriptionKey: 'multilanguageFeatureDescription',
  },
  {
    nameKey: 'darkThemeFeatureName',
    icon: <SunMoon />,
    descriptionKey: 'darkThemeFeatureDescription',
  },
  {
    nameKey: 'regionSelectionFeatureName',
    icon: <Blocks />,
    descriptionKey: 'regionSelectionFeatureDescription',
  },
]

export default async function FeatureList() {
  const t = await getTranslations('HomePage')
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {featureItemsList.map((featureItem) => (
        <FeatureItem
          key={featureItem.nameKey}
          name={t(featureItem.nameKey)}
          icon={featureItem.icon}
          description={t(featureItem.descriptionKey)}
        />
      ))}
    </ul>
  )
}
