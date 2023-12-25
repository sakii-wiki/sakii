const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center">
      <div className="max-w-6xl w-full flex flex-row items-center justify-between px-6 py-4">
        <a href="/">
          <p className="text-2xl font-bold">Sakii</p>
        </a>
        <div className="flex flex-row items-center gap-x-3"></div>
      </div>
    </header>
  )
}

export default Header
