import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FrostedPanel } from "@/components/ui/frosted-panel";
import { Navbar } from "@/components/Layout/Navbar";
import { Footer } from "@/components/Layout/Footer";

const Landing = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-200">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-6">
              Craft Your Career Path to Success
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Structure your learning journey with roadmaps, resources, and
              progress tracking for tech career advancement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button size="lg" className="font-medium">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/career-paths">
                <Button variant="outline" size="lg" className="font-medium">
                  Explore Paths
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/20 backdrop-blur-sm">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Features That Power Your Learning
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeIn}>
              <FrostedPanel className="h-full p-6" hoverable border>
                <div className="h-12 w-12 bg-black/5 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Career Roadmaps</h3>
                <p className="text-gray-700">
                  Clear, structured learning paths designed by industry experts
                  to guide your career progression.
                </p>
              </FrostedPanel>
            </motion.div>

            <motion.div variants={fadeIn}>
              <FrostedPanel className="h-full p-6" hoverable border>
                <div className="h-12 w-12 bg-black/5 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Curated Resources</h3>
                <p className="text-gray-700">
                  Handpicked learning materials, including articles, videos, and
                  practice exercises for each topic.
                </p>
              </FrostedPanel>
            </motion.div>

            <motion.div variants={fadeIn}>
              <FrostedPanel className="h-full p-6" hoverable border>
                <div className="h-12 w-12 bg-black/5 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Progress Tracking</h3>
                <p className="text-gray-700">
                  Monitor your achievements, track deadlines, and visualize your
                  growth with intuitive dashboards.
                </p>
              </FrostedPanel>
            </motion.div>

            <motion.div variants={fadeIn}>
              <FrostedPanel className="h-full p-6" hoverable border>
                <div className="h-12 w-12 bg-black/5 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Task Management</h3>
                <p className="text-gray-700">
                  Organize learning tasks, set priorities, and never miss a
                  deadline with our intuitive task manager.
                </p>
              </FrostedPanel>
            </motion.div>

            <motion.div variants={fadeIn}>
              <FrostedPanel className="h-full p-6" hoverable border>
                <div className="h-12 w-12 bg-black/5 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Community Support</h3>
                <p className="text-gray-700">
                  Connect with peers, share experiences, and collaborate on
                  learning journeys together.
                </p>
              </FrostedPanel>
            </motion.div>

            <motion.div variants={fadeIn}>
              <FrostedPanel className="h-full p-6" hoverable border>
                <div className="h-12 w-12 bg-black/5 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Customizable Paths</h3>
                <p className="text-gray-700">
                  Adapt learning paths to fit your goals, timelines, and
                  preferred learning style.
                </p>
              </FrostedPanel>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Join thousands of learners who are advancing their careers with
              structured learning paths.
            </p>
            <Link to="/career-paths">
              <Button size="lg" className="font-medium">
                Explore Career Paths
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
