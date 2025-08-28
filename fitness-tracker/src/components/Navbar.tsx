import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black p-4 flex justify-center gap-4 shadow-md">
      {["Home", "History", "Exercises", "Progress"].map((page) => (
        <Link
          key={page}
          to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
          className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
        >
          {page}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
