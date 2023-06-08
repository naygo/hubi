interface Props {
  title: string
  description: string
}

export function HeaderTitlePage({ title, description }: Props) {
  return (
    <header className="border-b bg-black-light border-black-lighter py-10 px-5">
      <div className="container m-auto">
        <h1 className="font-bold text-yellow text-3xl md:text-5xl mb-2">
          {title.toLocaleUpperCase()}
        </h1>
        <span className="text-gray text-xs md:text-base">{description}</span>
      </div>
    </header>
  )
}
