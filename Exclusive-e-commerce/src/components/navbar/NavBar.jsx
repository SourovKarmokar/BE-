import { Heart, ShoppingCart, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../container/Container";
import logo from "../../assets/logo.png";
import { useSelector } from "react-redux";

const navLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Product", path: "/product" },
  { id: 3, name: "Contact", path: "/contact" },
  { id: 4, name: "About", path: "/about" },
  { id: 5, name: "Sign Up", path: "/signup" },
];

export default function Navbar() {
  const data = useSelector((select) => select.cartInfo.value);
  console.log(data);

  return (
    <>
      <Container>
        <div className="flex justify-between items-center mt-10">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" className="h-auto" />
          </Link>

          {/* Navigation Links */}
          <nav className="flex gap-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className="font-poppins text-base text-primary hover:underline hover:underline-offset-4 transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Search & Icons */}
          <div className="flex items-center gap-x-6">
            {/* Search Input */}
            <div className="relative w-56">
              <input
                type="search"
                placeholder="What are you looking for?"
                className="w-full py-2 px-5 pr-10 text-xs font-poppins text-primary bg-[#F5F5F5] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>

            {/* Icons */}
            <button className="hover:text-red-500 transition-colors">
              <Heart className="w-6 h-6" />
            </button>
            <Link to="/cart" className="relative">
              <button className="hover:text-blue-500 transition-colors">
                <ShoppingCart className="w-6 h-6" />
              </button>

              
              {data.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[11px] font-bold rounded-full min-w-[18px] h-[18px] px-1 flex justify-center items-center shadow-md
                animate-bounce">
                  {data.length}
                </span> 
              )}
            </Link>
          </div>
        </div>
      </Container>

      {/* Divider */}
      <div className="border-b border-black/30 mt-4" />
    </>
  );
}
