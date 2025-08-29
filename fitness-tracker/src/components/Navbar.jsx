import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    backgroundColor: "black",
    padding: "16px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
  };

  const linkStyle = {
    padding: "10px 20px",
    backgroundColor: "hotpink",
    color: "white",
    fontWeight: "bold",
    borderRadius: "25px",
    textDecoration: "none",
    transition: "all 0.3s ease",
  };

  const hoverStyle = {
    backgroundColor: "deeppink",
  };

  return (
    <nav style={navStyle}>
      {["Home", "History", "Exercises", "Progress"].map((page) => (
        <Link
          key={page}
          to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
          style={linkStyle}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = linkStyle.backgroundColor)
          }
        >
          {page}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
