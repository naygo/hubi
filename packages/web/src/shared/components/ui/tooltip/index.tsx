import clsx from 'clsx'

interface Props {
  position: 'top' | 'bottom' | 'left' | 'right'
  text: string
  children: React.ReactNode
}

export default function Tooltip({ position, text, children }: Props) {
  return (
    <div id="tooltip" className="relative cursor-pointer group">
      <div className="mx-2 my-1">{children}</div>
      <span
        className={clsx(
          'absolute hidden group-hover:inline-block bg-yellow text-black text-xs p-2 whitespace-nowrap rounded',
          position === 'top'
            ? 'left-1/2 -translate-x-1/2 bottom-[calc(100%+5px)]'
            : '',
          position === 'bottom'
            ? 'left-1/2 -translate-x-1/2 top-[calc(100%+5px)]'
            : '',
          position === 'left'
            ? 'top-1/2 -translate-y-1/2 right-[calc(100%+5px)]'
            : '',
          position === 'right'
            ? 'top-1/2 -translate-y-1/2 left-[calc(100%+5px)]'
            : '',
        )}
      >
        {text}
      </span>
      <span
        className={clsx(
          'absolute hidden group-hover:inline-block border-[6px]',
          position === 'top'
            ? 'left-1/2 -translate-x-1/2 bottom-full border-l-transparent border-r-transparent border-b-0 border-t-yellow'
            : '',
          position === 'bottom'
            ? 'left-1/2 -translate-x-1/2 top-full border-l-transparent border-r-transparent border-t-0 border-b-yellow'
            : '',
          position === 'left'
            ? 'top-1/2 -translate-y-1/2 right-full border-t-transparent border-b-transparent border-r-0 border-l-yellow'
            : '',
          position === 'right'
            ? 'top-1/2 -translate-y-1/2 left-full border-t-transparent border-b-transparent border-l-0 border-r-yellow'
            : '',
        )}
      ></span>
    </div>
  )
}
