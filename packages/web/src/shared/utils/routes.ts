export interface Route {
  name: string
  route: string
  permission: 'all' | 'guest' | 'user'
  disabled?: boolean
}

export const routes = {
  home: '/',
  lobby: '/lobby',
  leaderboard: '/leaderboard',
  agenda: '/agenda',
  faq: '/faq',
  contato: '/contato',
  login: '/login',
  signup: '/signup',
}

const arrayRoutes: Route[] = [
  { name: 'Lobby', route: routes.lobby, permission: 'user' },
  { name: 'Página Inicial', route: routes.home, permission: 'guest' },
  { name: 'Leaderboard', route: routes.leaderboard, permission: 'guest' },
  { name: 'Agenda', route: routes.agenda, permission: 'all', disabled: true },
  { name: 'FAQ', route: routes.faq, permission: 'all', disabled: true },
  { name: 'Contato', route: routes.contato, permission: 'all', disabled: true },
]

export function filterRoutesByPermission(userLogged: boolean) {
  return arrayRoutes.filter((route) => {
    if (route.permission === 'all') return true
    if (route.permission === 'guest' && !userLogged) return true
    if (route.permission === 'user' && userLogged) return true
    return false
  })
}
