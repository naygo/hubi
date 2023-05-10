interface Props {
  size?: number
  className?: string
}

export function LogoNouns({ className, size }: Props) {
  return (
    <div className={className}>
      <svg
        width={size || 30}
        height={size || 30}
        viewBox="0 0 162 148"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M148 74C148 114.869 114.869 148 74 148C33.1309 148 -7.49495e-07 114.869 0 74C-1.7212e-07 33.1309 33.1309 1.09622e-06 74 0C102.966 2.05737e-06 128.045 16.6427 140.196 40.8876L127.208 44.126L130.051 55.5286C122.298 31.991 100.133 15 74 15C41.4152 15 15 41.4152 15 74C15 106.585 41.4152 133 74 133C106.585 133 133 106.585 133 74C133 70.5603 132.706 67.1894 132.141 63.911L135.43 77.1051L148 73.9711C148 73.9808 148 73.9904 148 74Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M59.1276 103.504L53.2852 80.0716L37.503 84.0065L41.398 99.6282L33.5069 101.596L27.6645 78.1632L51.3377 72.2608L47.4428 56.6391L94.7893 44.8343L98.6842 60.456L106.575 58.4885L102.68 42.8668L150.027 31.062L161.712 77.927L114.365 89.7318L108.523 66.2993L100.632 68.2668L106.474 91.6993L59.1276 103.504ZM88.8456 54.6126L96.6355 85.8559L80.8533 89.7908L73.0635 58.5475L88.8456 54.6126ZM144.32 40.7813L152.11 72.0246L136.209 75.9891L128.419 44.7458L144.32 40.7813Z"
          fill="white"
        />
      </svg>
    </div>
  )
}
