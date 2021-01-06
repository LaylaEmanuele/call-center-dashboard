export const Footer: React.FC = () => {
  return (
    <footer className="block py-4 ">
      <div className="container px-4 mx-auto ">
        <hr className="mb-4 border-gray-300 border-b-1" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="w-full px-4 md:w-4/12">
            <div className="py-1 text-sm font-semibold text-gray-600">
              Copyright © {new Date().getFullYear()}{' '}
              <a
                href="#"
                className="py-1 text-sm font-semibold text-gray-600 hover:text-gray-800"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
