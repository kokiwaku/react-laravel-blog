import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Waku Blog</Link>
          <div className="space-x-4">
            <Link to="/posts" className="hover:text-orange-500">Posts</Link>
            <Link to="/contact" className="hover:text-orange-500">Contact</Link>
            <Link to="/profile" className="hover:text-orange-500">Profile</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};