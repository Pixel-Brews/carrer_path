import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-white/20 bg-white/20 backdrop-blur-sm py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold tracking-tighter">
              CareerPathCraft
            </p>
            <p className="text-sm text-muted-foreground">
              Your learning journey, crafted for success
            </p>
          </div>

          <nav className="flex gap-6">
            <Link to="/landing" className="text-sm hover:underline">
              Home
            </Link>
            <Link to="/career-paths" className="text-sm hover:underline">
              Careers
            </Link>
            <a href="#" className="text-sm hover:underline">
              About
            </a>
            <a href="#" className="text-sm hover:underline">
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-6 border-t border-white/10 pt-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} CareerPathCraft. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};
