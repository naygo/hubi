import linksIcons from './icons'

export interface Team {
  name: string
  nick?: string
  photo: string
  links?: TeamLink[]
  roles?: string[]
}
export interface TeamLink {
  name: TeamLinkName
  url: string
}

export type TeamLinkName = keyof typeof linksIcons

const team: Team[] = [
  {
    name: 'Hugo Jeller',
    nick: 'Hugo Geleia',
    photo:
      'https://cdn.discordapp.com/avatars/158292575323815937/42f7e02b1a8a29ff694bab1783c22bf9.webp?size=160',
    links: [
      {
        name: 'github',
        url: 'https://github.com/HugoJF',
      },
    ],
    roles: ['DevOps'],
  },
  {
    name: 'Ives Watanabe',
    nick: 'Ivete Piriguete',
    photo:
      'https://cdn.discordapp.com/avatars/335839500510953473/117bdc56930396670ab6d57756a4ddcc.webp?size=160',
    links: [
      {
        name: 'github',
        url: 'https://github.com/mwives',
      },
    ],
    roles: ['Developer'],
  },
  {
    name: 'Jenniffer Aysha',
    nick: 'Baiana',
    links: [
      {
        name: 'twitter',
        url: 'https://twitter.com/jennifferbaiana',
      },
    ],
    photo:
      'https://media.discordapp.net/attachments/778762662397476904/1112109960243970239/image.png',
    roles: ['Staff', 'Social Media'],
  },
  {
    name: 'Madu',
    nick: 'Roquetes',
    photo:
      'https://cdn.discordapp.com/avatars/419325153105936397/e71dc49ccef3b76af55e25f842f7c5b0.webp?size=160',
    roles: ['Project Manager', 'Community Manager'],
  },
  {
    name: 'Nayla Gomes',
    nick: 'Mãe',
    photo:
      'https://cdn.discordapp.com/avatars/207177571433971715/19d0cefe0cab208813121afac51483ea.webp?size=160',
    links: [
      {
        name: 'github',
        url: 'https://github.com/naygo',
      },
      {
        name: 'email',
        url: '',
      },
    ],
    roles: ['Staff', 'Developer', 'Project Manager'],
  },
  {
    name: 'Ruben',
    nick: 'Rubão',
    photo:
      'https://cdn.discordapp.com/avatars/248213462482812928/a_c91ab21f924169192dd3c2d96e1cdb17.gif?size=160',
    roles: ['Social Media', 'Community Manager'],
  },
  {
    name: 'Thiago Berenguer',
    nick: 'Arquiteto',
    photo:
      'https://cdn.discordapp.com/avatars/189145827309125633/65186601af5c0a23004fe926073df778.webp?size=160',
    roles: ['Staff', 'Designer', 'Project Manager'],
  },
]

export default team
