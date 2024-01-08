import { FC } from "react"

const Header: FC = () => {
  return (
    <header className="flex flex-col items-center">
      <div className="flex w-full max-w-6xl flex-row items-center justify-between px-6 py-4">
        <a href="/">
          <p className="text-2xl font-bold">Sakii</p>
        </a>
        <div className="flex flex-row items-center gap-x-3"></div>
      </div>
    </header>
  )
}

export default Header
