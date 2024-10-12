import { cn } from '@/app/_lib/utils'
import { AnchorHTMLAttributes, ReactNode } from 'react'

interface IDownloadLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string | ReactNode
  url: string
  icon: ReactNode
  className?: string
}

export default function DownloadLink({
  url,
  name,
  icon,
  className,
  ...rest
}: IDownloadLink) {
  return (
    <a
      className={cn(
        'bg-accent rounded-md p-2 flex justify-center items-center gap-2 hover:bg-accent-hover transition-colors',
        className
      )}
      href={url}
      download
      {...rest}
    >
      {icon}
      <span>{name}</span>
    </a>
  )
}
