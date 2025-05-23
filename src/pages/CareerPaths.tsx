import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Navbar } from "@/components/Layout/Navbar";
import { Footer } from "@/components/Layout/Footer";
import { careerPaths } from "@/data/mockData";

const CareerPaths = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-200">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
              Career Paths
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore structured learning paths designed to help you master
              various tech domains and advance your career.
            </p>
          </motion.div>

          {/* Path Categories */}
          <motion.div
            className="flex flex-wrap gap-2 justify-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Button variant="outline" className="rounded-full">
              All Paths
            </Button>
            <Button variant="ghost" className="rounded-full">
              Programming
            </Button>
            <Button variant="ghost" className="rounded-full">
              Web Development
            </Button>
            <Button variant="ghost" className="rounded-full">
              Data Science
            </Button>
            <Button variant="ghost" className="rounded-full">
              DevOps
            </Button>
            <Button variant="ghost" className="rounded-full">
              Mobile
            </Button>
          </motion.div>

          {/* Career Path Cards */}
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {careerPaths.map((path) => (
              <motion.div key={path.id} variants={fadeIn}>
                <Card className="overflow-hidden h-full transition-all hover:shadow-md">
                  <div className="h-48 bg-slate-200 relative overflow-hidden">
                    <img
                      src={path.image}
                      alt={path.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium">
                      {path.progress}% Complete
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle>{path.title}</CardTitle>
                    <CardDescription>{path.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-1 text-sm">
                        <span>Progress</span>
                        <span>
                          {path.completedModules}/{path.totalModules} modules
                        </span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-black rounded-full"
                          style={{ width: `${path.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex gap-2">
                        <span className="bg-black/5 rounded-full px-3 py-1">
                          {path.totalModules} Modules
                        </span>
                        <span className="bg-black/5 rounded-full px-3 py-1">
                          {Math.round(path.totalModules * 2.5)} Hours
                        </span>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="border-t pt-4 flex justify-between">
                    <Button variant="ghost" size="sm">
                      Details
                    </Button>
                    <Link to={`/roadmap/${path.id}`}>
                      <Button size="sm">
                        View Roadmap
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Coming Soon */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="inline-block bg-black/5 backdrop-blur-sm rounded-full px-4 py-1 text-sm mb-4">
              Coming Soon
            </div>
            <h2 className="text-2xl font-bold tracking-tight mb-8">
              More Career Paths Being Developed
            </h2>

            <div className="grid gap-6 md:grid-cols-3 max-w-3xl mx-auto">
              <div className="border border-dashed border-slate-300 rounded-lg p-6 text-center">
                <div className="text-2xl font-bold mb-2">UI/UX Design</div>
                <p className="text-muted-foreground text-sm mb-4">
                  Master the art of creating beautiful and usable interfaces
                </p>
                <div className="text-xs text-muted-foreground">
                  Coming July 2023
                </div>
              </div>

              <div className="border border-dashed border-slate-300 rounded-lg p-6 text-center">
                <div className="text-2xl font-bold mb-2">Cybersecurity</div>
                <p className="text-muted-foreground text-sm mb-4">
                  Learn to protect systems and networks from digital attacks
                </p>
                <div className="text-xs text-muted-foreground">
                  Coming August 2023
                </div>
              </div>

              <div className="border border-dashed border-slate-300 rounded-lg p-6 text-center">
                <div className="text-2xl font-bold mb-2">Cloud Computing</div>
                <p className="text-muted-foreground text-sm mb-4">
                  Develop skills for AWS, Azure and Google Cloud platforms
                </p>
                <div className="text-xs text-muted-foreground">
                  Coming September 2023
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CareerPaths;
