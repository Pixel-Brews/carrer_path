import { Link } from "react-router-dom";
import { Calendar, Home, BookOpen, User, BarChart2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { userProfile } from "@/data/mockData";

export const SideMenu = () => {
  return (
    <div className="h-full flex flex-col bg-white/50 backdrop-blur-md">
      <div className="p-6 flex items-center gap-4">
        <Avatar className="h-10 w-10">
          <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
          <AvatarFallback>
            {userProfile.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium">{userProfile.name}</div>
          <div className="text-sm text-muted-foreground">
            {userProfile.email}
          </div>
        </div>
      </div>

      <Separator />

      <div className="flex-1 p-6">
        <nav className="grid gap-4">
          <Link to="/landing">
            <Button variant="ghost" className="w-full justify-start">
              <Home className="mr-2 h-5 w-5" />
              Home
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button variant="ghost" className="w-full justify-start">
              <BarChart2 className="mr-2 h-5 w-5" />
              Dashboard
            </Button>
          </Link>
          <Link to="/career-paths">
            <Button variant="ghost" className="w-full justify-start">
              <BookOpen className="mr-2 h-5 w-5" />
              Career Paths
            </Button>
          </Link>
          <Link to="/calendar">
            <Button variant="ghost" className="w-full justify-start">
              <Calendar className="mr-2 h-5 w-5" />
              Calendar
            </Button>
          </Link>
        </nav>
      </div>

      <Separator />

      <div className="p-6">
        <div className="rounded-lg bg-black/5 p-4">
          <div className="text-sm font-medium">Progress Overview</div>
          <div className="mt-2 h-2 w-full bg-black/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-black rounded-full"
              style={{ width: `${userProfile.progress}%` }}
            />
          </div>
          <div className="mt-2 text-xs text-muted-foreground">
            {userProfile.completedTasks} of {userProfile.totalTasks} tasks
            completed
          </div>
        </div>
      </div>
    </div>
  );
};
