import { Link } from "react-router-dom";
import { FrostedPanel } from "@/components/ui/frosted-panel";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <FrostedPanel intensity="heavy" border className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tighter">
              CareerPathCraft
            </h1>
            <p className="text-muted-foreground mt-2">
              Sign in to continue your learning journey
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="w-full p-2 rounded-md border border-white/20 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full p-2 rounded-md border border-white/20 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="rounded border-gray-300"
                />
                <label htmlFor="remember" className="text-sm text-gray-600">
                  Remember me
                </label>
              </div>

              <a href="#" className="text-sm text-black hover:underline">
                Forgot password?
              </a>
            </div>

            <Button className="w-full">Login</Button>

            <Button variant="outline" className="w-full">
              Sign up
            </Button>

            <div className="relative my-4">
              <Separator />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-gradient-to-br from-slate-100 to-slate-200 px-2 text-xs text-gray-500">
                  OR
                </span>
              </div>
            </div>

            <Link to="/landing">
              <Button variant="secondary" className="w-full">
                Continue as Guest
              </Button>
            </Link>
          </div>
        </FrostedPanel>

        <p className="text-center mt-4 text-sm text-gray-600">
          By continuing, you agree to our{" "}
          <a href="#" className="text-black hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-black hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
