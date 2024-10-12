import { cn } from '@/app/_lib/utils'
import Image from 'next/image'
import { AnchorHTMLAttributes, ReactNode } from 'react'

interface IDownloadLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string | ReactNode
  url: string
  iconUrl: string
  alt: string
  className?: string
}

export default function DownloadLink({
  url,
  name,
  iconUrl,
  alt,
  className,
  ...rest
}: IDownloadLink) {
  return (
    <a
      className={cn(
        'bg-red-600 rounded-md p-2 flex justify-center items-center gap-2',
        className
      )}
      href={url}
      download
      {...rest}
    >
      <Image src={iconUrl} alt={alt} width={32} height={32} />
      <span>{name}</span>
    </a>
  )
}
