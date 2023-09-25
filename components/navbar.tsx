import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-b from-black to-transparent">
      <div className="container py-10">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold uppercase text-white">
            Movie Library
          </h3>
          <div className="flex items-center space-x-24">
            <ul className="flex space-x-16">
              <li>
                <Link href="/" className="font-medium text-white">
                  Movies
                </Link>
              </li>
              <li>
                <Link href="/" className="font-medium text-white">
                  TV Shows
                </Link>
              </li>
              <li>
                <Link href="/" className="font-medium text-white">
                  Pricing
                </Link>
              </li>
            </ul>
            <Link
              href="/"
              className="rounded-lg bg-yellow-600 px-6 py-2 font-medium text-white"
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
