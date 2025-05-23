import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SideMenu } from "./SideMenu";
import { userProfile } from "@/data/mockData";

export const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="w-full backdrop-blur-md bg-white/40 border-b border-white/20 fixed top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <SideMenu />
            </SheetContent>
          </Sheet>

          <Link to="/landing" className="text-xl font-bold tracking-tighter">
            CareerPathCraft
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/landing"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Dashboard
          </Link>
          <Link
            to="/career-paths"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Career Paths
          </Link>
          <Link
            to="/calendar"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Calendar
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          <Link to="/dashboard">
            <Avatar>
              <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
              <AvatarFallback>
                {userProfile.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>

      {isSearchOpen && (
        <div className="container mx-auto px-4 py-3 border-t border-white/20 bg-white/40 backdrop-blur-md transition-all">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search for courses, topics, resources..."
              className="w-full py-2 pl-10 pr-4 rounded-md border border-white/20 bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      )}
    </header>
  );
};
