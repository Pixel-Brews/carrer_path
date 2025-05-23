import { Link } from "react-router-dom";
import {
  BarChart,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  ListTodo,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FrostedPanel } from "@/components/ui/frosted-panel";
import { Navbar } from "@/components/Layout/Navbar";
import { Footer } from "@/components/Layout/Footer";
import { userProfile, careerPaths, tasks } from "@/data/mockData";

const Dashboard = () => {
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

  // Get the most recent 3 tasks
  const recentTasks = [...tasks]
    .sort(
      (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime(),
    )
    .slice(0, 3);

  // Get courses in progress
  const inProgressCourses = careerPaths
    .filter((path) => path.progress > 0 && path.progress < 100)
    .slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-200">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, {userProfile.name}. Here's an overview of your
              learning progress.
            </p>
          </motion.div>

          {/* Overview Cards */}
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeIn}>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Overall Progress
                  </CardTitle>
                  <BarChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {userProfile.progress}%
                  </div>
                  <div className="mt-2 h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-black rounded-full"
                      style={{ width: `${userProfile.progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    {userProfile.completedTasks} of {userProfile.totalTasks}{" "}
                    tasks completed
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Courses In Progress
                  </CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {inProgressCourses.length}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    {careerPaths.filter((path) => path.progress === 100).length}{" "}
                    courses completed
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Upcoming Tasks
                  </CardTitle>
                  <ListTodo className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{recentTasks.length}</div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Next due:{" "}
                    {recentTasks[0]?.dueDate &&
                      new Date(recentTasks[0].dueDate).toLocaleDateString()}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Study Streak
                  </CardTitle>
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7 days</div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Keep going! You're building momentum.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Quick Actions */}
          <motion.h2
            className="text-xl font-bold tracking-tight mt-12 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Quick Actions
          </motion.h2>
          <motion.div
            className="grid gap-6 md:grid-cols-3 mb-12"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeIn}>
              <Link to="/career-paths">
                <FrostedPanel
                  className="h-full p-6 flex flex-col items-center text-center"
                  hoverable
                  border
                >
                  <BookOpen className="h-8 w-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Career Paths</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Explore and continue your learning journey through our
                    curated career paths.
                  </p>
                  <Button className="mt-auto" variant="outline">
                    View All Paths
                  </Button>
                </FrostedPanel>
              </Link>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Link to="/calendar">
                <FrostedPanel
                  className="h-full p-6 flex flex-col items-center text-center"
                  hoverable
                  border
                >
                  <Calendar className="h-8 w-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Calendar</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    View upcoming deadlines, events, and schedule your learning
                    sessions.
                  </p>
                  <Button className="mt-auto" variant="outline">
                    Open Calendar
                  </Button>
                </FrostedPanel>
              </Link>
            </motion.div>

            <motion.div variants={fadeIn}>
              <FrostedPanel
                className="h-full p-6 flex flex-col items-center text-center"
                hoverable
                border
              >
                <ListTodo className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Task Manager</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Organize your tasks, set priorities, and track completion.
                </p>
                <Button className="mt-auto" variant="outline">
                  Manage Tasks
                </Button>
              </FrostedPanel>
            </motion.div>
          </motion.div>

          {/* Recent Courses & Upcoming Tasks */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Recent Courses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Courses In Progress</CardTitle>
                  <CardDescription>
                    Continue where you left off in your learning journey
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {inProgressCourses.map((course) => (
                      <div
                        key={course.id}
                        className="border-b pb-4 last:border-b-0 last:pb-0"
                      >
                        <div className="flex justify-between mb-2">
                          <h3 className="font-medium">{course.title}</h3>
                          <span className="text-sm">{course.progress}%</span>
                        </div>
                        <div className="h-2 w-full bg-muted rounded-full overflow-hidden mb-2">
                          <div
                            className="h-full bg-black rounded-full"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {course.completedModules} of {course.totalModules}{" "}
                          modules completed
                        </div>
                        <div className="mt-2">
                          <Link to={`/roadmap/${course.id}`}>
                            <Button variant="outline" size="sm">
                              Continue
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}

                    <div className="text-center mt-4">
                      <Link to="/career-paths">
                        <Button variant="ghost" size="sm">
                          View All Courses
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Upcoming Tasks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Tasks</CardTitle>
                  <CardDescription>
                    Tasks due soon across all your courses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentTasks.map((task) => {
                      const courseInfo = careerPaths.find(
                        (c) => c.id === task.courseId,
                      );
                      const daysUntilDue = Math.max(
                        0,
                        Math.floor(
                          (new Date(task.dueDate).getTime() -
                            new Date().getTime()) /
                            (1000 * 60 * 60 * 24),
                        ),
                      );

                      return (
                        <div
                          key={task.id}
                          className="flex items-start gap-4 border-b pb-4 last:border-b-0 last:pb-0"
                        >
                          <div className="bg-black/5 p-2 rounded-md">
                            <Clock className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">{task.title}</div>
                            <div className="text-sm text-muted-foreground">
                              {courseInfo?.title}
                            </div>
                            <div className="text-xs mt-1 flex items-center">
                              <span
                                className={
                                  daysUntilDue <= 1
                                    ? "text-red-500"
                                    : "text-muted-foreground"
                                }
                              >
                                Due{" "}
                                {new Date(task.dueDate).toLocaleDateString()}
                                {daysUntilDue === 0
                                  ? " (Today)"
                                  : daysUntilDue === 1
                                    ? " (Tomorrow)"
                                    : `(${daysUntilDue} days)`}
                              </span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Complete
                          </Button>
                        </div>
                      );
                    })}

                    <div className="text-center mt-4">
                      <Button variant="ghost" size="sm">
                        View All Tasks
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
