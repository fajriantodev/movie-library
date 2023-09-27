import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-b from-black to-transparent">
      <div className="container py-10">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold uppercase text-yellow-500 transition-colors duration-200 hover:text-yellow-600"
          >
            Movie Library
          </Link>
          <div className="flex items-center space-x-24">
            <ul className="flex space-x-16">
              <li>
                <Link
                  href="/"
                  className="font-medium text-white hover:underline"
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="font-medium text-white hover:underline"
                >
                  TV Shows
                </Link>
              </li>
            </ul>
            <Link
              href="/"
              className="rounded-lg border border-yellow-600 bg-yellow-600 px-6 py-2 font-medium text-white transition-colors duration-200 hover:bg-transparent"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
