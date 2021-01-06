export const Navbar: React.FC = () => {
  return (
    <>
      <div className="flex flex-row w-full justify">
        <nav className="absolute top-0 left-0 z-10 flex items-center w-full p-4 bg-transparent md:flex-row md:flex-no-wrap md:justify-start">
          <div className="flex flex-wrap items-center justify-between w-full mx-auto md:flex-no-wrap">
            <a
              className="hidden text-xl text-white uppercase lg:font-semibold lg:inline-block"
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              Call center Dashboard
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
