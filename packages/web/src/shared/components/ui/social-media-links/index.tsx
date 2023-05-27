import Link from 'next/link'

import { FaDiscord, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'

export default function SocialMediaLinks() {
  const links = [
    {
      url: 'https://discord.com/invite/hubinclusivo',
      Icon: FaDiscord,
    },
    {
      url: 'https://www.instagram.com/hub_inclusivo/',
      Icon: FaInstagram,
    },
    {
      url: 'https://www.tiktok.com/@hubinclusivo',
      Icon: FaTiktok,
    },
    {
      url: 'https://twitter.com/hubinclusivo',
      Icon: FaTwitter,
    },
  ]
  return (
    <div className="flex gap-5 mt-3">
      {links.map(({ url, Icon }) => (
        <Link key={url} href={url} target="__blank">
          <Icon
            size={40}
            className={`
              border border-gray 
              fill-gray 
              p-2 rounded 
              cursor-pointer 
              hover:fill-yellow hover:border-yellow hover:bg-black-dark
            `}
          />
        </Link>
      ))}
    </div>
  )
}
