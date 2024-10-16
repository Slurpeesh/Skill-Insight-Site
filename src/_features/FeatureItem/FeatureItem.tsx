import { ReactNode } from 'react'

interface IFeatureItem {
  icon: ReactNode
  name: string
  description: string
}

export default function FeatureItem({ icon, name, description }: IFeatureItem) {
  return (
    <li className="bg-muted p-2 rounded-lg">
      <div className="flex gap-2 mb-2">
        {icon}
        <h3 className="font-medium text-xl">{name}</h3>
      </div>
      <p>{description}</p>
    </li>
  )
}
