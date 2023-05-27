import { IconType } from 'react-icons'
import {
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'

const linksIcons: { [key: string]: IconType } = {
  ['github']: FaGithub,
  ['twitter']: FaTwitter,
  ['linkedin']: FaLinkedin,
  ['instagram']: FaInstagram,
  ['youtube']: FaYoutube,
  ['twitch']: FaTwitch,
  ['discord']: FaDiscord,
  ['email']: FaEnvelope,
}

export default linksIcons
