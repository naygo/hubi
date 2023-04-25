import styles from './styles.module.scss'

export default function Leaderboard() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div>
        <h1 className={`text-8xl yellow`}>LEADERBOARD</h1>
      </div>
      <input
        className={styles.input}
        name="player"
        placeholder="Pesquisar uma jogadora..."
      />
      <div className={styles.table}>
        <div className="grid grid-cols-6 gap-12">
          <h3 className="col-span-1">CLASSIFICAÇÃO</h3>
          <h3 className="col-span-1">PONTUAÇÃO</h3>
          <h3 className="col-span-3"></h3>
          <h3 className="col-span-1">PARTIDAS</h3>
        </div>
        {rank.map((player, index) => (
          <div
            key={player.id}
            className={`${styles.tableContent} ${
              index == 0 ? 'h-20 rounded-b-3xl' : 'h-10 rounded-full'
            } mt-3 text-center grid grid-cols-6 gap-6 items-center`}
          >
            <p className="col-span-1 text-center">{index + 1}</p>
            <p className="col-span-1 text-center">{player.pontuacao}</p>
            <p className="col-span-3 text-left">{player.nickname}</p>
            <p className="col-span-1 text-left">{player.pontuacao}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const rank = [
  {
    id: 1,
    pontuacao: 1213,
    nickname: 'azureesz',
    partidas: 1,
  },
  {
    id: 2,
    pontuacao: 234,
    nickname: 'lyssaz',
    partidas: 1,
  },
  {
    id: 3,
    pontuacao: 1213,
    nickname: 'ilorde',
    partidas: 1,
  },
  {
    id: 4,
    pontuacao: 1213,
    nickname: 'erinvlr',
    partidas: 1,
  },
  {
    id: 5,
    pontuacao: 1213,
    nickname: 'aurayse',
    partidas: 1,
  },
  {
    id: 6,
    pontuacao: 1213,
    nickname: 'Rapunzel_f',
    partidas: 1,
  },
  {
    id: 7,
    pontuacao: 1213,
    nickname: 'patomac',
    partidas: 1,
  },
  {
    id: 8,
    pontuacao: 1213,
    nickname: '1srN',
    partidas: 1,
  },
]
