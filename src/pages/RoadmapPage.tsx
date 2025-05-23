import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import {
  BookOpen,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  ExternalLink,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { FrostedPanel } from "@/components/ui/frosted-panel";
import { Navbar } from "@/components/Layout/Navbar";
import { Footer } from "@/components/Layout/Footer";
import { careerPaths, roadmapNodes } from "@/data/mockData";
import { RoadmapNode } from "@/types";

const RoadmapPage = () => {
  const { courseId = "dsa" } = useParams<{ courseId: string }>();
  const [selectedNode, setSelectedNode] = useState<RoadmapNode | null>(null);
  const [isNodeDialogOpen, setIsNodeDialogOpen] = useState(false);
  const [isNodeSheetOpen, setIsNodeSheetOpen] = useState(false);

  const courseInfo = careerPaths.find((course) => course.id === courseId);
  const nodes = roadmapNodes[courseId as keyof typeof roadmapNodes] || [];

  if (!courseInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
          <Link to="/career-paths">
            <Button>Go Back to Career Paths</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleNodeClick = (node: RoadmapNode) => {
    setSelectedNode(node);

    // Use dialog for desktop and sheet for mobile
    if (window.innerWidth >= 768) {
      setIsNodeDialogOpen(true);
    } else {
      setIsNodeSheetOpen(true);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-200">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Link to="/career-paths">
                <Button variant="ghost" size="sm">
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  All Paths
                </Button>
              </Link>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">
                  {courseInfo.title}
                </h1>
                <p className="text-muted-foreground">
                  {courseInfo.description}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-sm">
                  <div className="font-medium">Progress</div>
                  <div className="text-muted-foreground">
                    {courseInfo.completedModules} of {courseInfo.totalModules}{" "}
                    modules
                  </div>
                </div>

                <div className="h-10 w-10 rounded-full border-2 border-black flex items-center justify-center text-sm font-medium">
                  {courseInfo.progress}%
                </div>
              </div>
            </div>
          </motion.div>

          {/* Roadmap Visualization */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Learning Roadmap</CardTitle>
              <CardDescription>
                Follow this structured path to master {courseInfo.title}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto pb-6">
                <div className="min-w-[768px]">
                  <div className="flex flex-col gap-10 relative">
                    {/* Connecting Line */}
                    <div className="absolute top-14 left-[50%] w-0.5 h-[calc(100%-28px)] bg-black/20 -z-10"></div>

                    {nodes.map((node, index) => (
                      <motion.div
                        key={node.id}
                        className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                      >
                        <div
                          className={`relative w-[400px] ${index % 2 === 0 ? "pr-16" : "pl-16"}`}
                        >
                          {/* Connecting Dot */}
                          <div
                            className="absolute top-6 h-4 w-4 rounded-full bg-black border-2 border-white z-10 shadow-sm"
                            style={{
                              [index % 2 === 0 ? "right" : "left"]: "-8px",
                            }}
                          ></div>

                          {/* Horizontal Line */}
                          <div
                            className="absolute top-8 h-0.5 bg-black/20 w-16"
                            style={{
                              [index % 2 === 0 ? "right" : "left"]: "0",
                            }}
                          ></div>

                          <FrostedPanel
                            className={`w-full p-4 ${node.completed ? "border-green-300" : ""} cursor-pointer transition-transform hover:scale-105`}
                            intensity="medium"
                            border
                            onClick={() => handleNodeClick(node)}
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-bold">{node.title}</h3>
                              {node.completed && (
                                <div className="bg-green-500/10 text-green-600 p-1 rounded-full">
                                  <Check className="h-4 w-4" />
                                </div>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                              {node.description}
                            </p>
                            <div className="flex justify-between items-center text-xs text-muted-foreground">
                              <div className="flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                <span>
                                  {new Date(node.deadline).toLocaleDateString()}
                                </span>
                              </div>
                              <div className="flex items-center">
                                <BookOpen className="h-3 w-3 mr-1" />
                                <span>{node.resources.length} resources</span>
                              </div>
                            </div>
                          </FrostedPanel>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tips & Resources */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <motion.div variants={fadeIn} initial="hidden" animate="visible">
              <Card>
                <CardHeader>
                  <CardTitle>Study Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-black/5 p-1 mt-0.5">
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="text-sm">
                        Focus on understanding concepts before moving to the
                        next module
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-black/5 p-1 mt-0.5">
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="text-sm">
                        Practice with exercises after completing each topic
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-black/5 p-1 mt-0.5">
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="text-sm">
                        Set aside at least 5 hours per week for effective
                        learning
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-black/5 p-1 mt-0.5">
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="text-sm">
                        Join community discussions to enhance understanding
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Deadlines</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {nodes
                      .filter((node) => !node.completed)
                      .slice(0, 3)
                      .map((node) => (
                        <div key={node.id} className="flex items-center gap-3">
                          <div className="bg-black/5 p-2 rounded-md">
                            <Calendar className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="font-medium text-sm">
                              {node.title}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Due by{" "}
                              {new Date(node.deadline).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      ))}

                    <div className="pt-2">
                      <Link to="/calendar">
                        <Button variant="outline" size="sm" className="w-full">
                          View All Deadlines
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              <Card className="lg:col-span-1 md:col-span-2">
                <CardHeader>
                  <CardTitle>Additional Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-black/5 p-2 rounded-md">
                        <BookOpen className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">
                          Comprehensive Guide
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Complete textbook for {courseInfo.title}
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Open
                      </Button>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="bg-black/5 p-2 rounded-md">
                        <BookOpen className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">
                          Practice Problems
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Collection of exercises with solutions
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Open
                      </Button>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="bg-black/5 p-2 rounded-md">
                        <BookOpen className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">
                          Community Forum
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Discuss topics with other learners
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Open
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Node Details Dialog (Desktop) */}
      <Dialog open={isNodeDialogOpen} onOpenChange={setIsNodeDialogOpen}>
        {selectedNode && (
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="flex items-center justify-between">
                <span>{selectedNode.title}</span>
                {selectedNode.completed && (
                  <span className="bg-green-500/10 text-green-600 text-xs px-2 py-1 rounded-full flex items-center">
                    <Check className="h-3 w-3 mr-1" />
                    Completed
                  </span>
                )}
              </DialogTitle>
              <DialogDescription>{selectedNode.description}</DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Deadline</h4>
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(selectedNode.deadline).toLocaleDateString()}
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="text-sm font-medium mb-2">Learning Resources</h4>
                <div className="space-y-3">
                  {selectedNode.resources.map((resource, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-black/5 p-3 rounded-md"
                    >
                      <div className="bg-white p-1 rounded">
                        <BookOpen className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">
                          {resource.title}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {resource.type}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div className="flex justify-between">
                <Button variant="outline">
                  {selectedNode.completed
                    ? "Mark as Incomplete"
                    : "Mark as Complete"}
                </Button>
                <Button>Continue Learning</Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>

      {/* Node Details Sheet (Mobile) */}
      <Sheet open={isNodeSheetOpen} onOpenChange={setIsNodeSheetOpen}>
        {selectedNode && (
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="flex items-center justify-between">
                <span>{selectedNode.title}</span>
                {selectedNode.completed && (
                  <span className="bg-green-500/10 text-green-600 text-xs px-2 py-1 rounded-full flex items-center">
                    <Check className="h-3 w-3 mr-1" />
                    Completed
                  </span>
                )}
              </SheetTitle>
              <SheetDescription>{selectedNode.description}</SheetDescription>
            </SheetHeader>

            <div className="space-y-4 mt-6">
              <div>
                <h4 className="text-sm font-medium mb-2">Deadline</h4>
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(selectedNode.deadline).toLocaleDateString()}
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="text-sm font-medium mb-2">Learning Resources</h4>
                <div className="space-y-3">
                  {selectedNode.resources.map((resource, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-black/5 p-3 rounded-md"
                    >
                      <div className="bg-white p-1 rounded">
                        <BookOpen className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">
                          {resource.title}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {resource.type}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div className="flex flex-col gap-2">
                <Button>Continue Learning</Button>
                <Button variant="outline">
                  {selectedNode.completed
                    ? "Mark as Incomplete"
                    : "Mark as Complete"}
                </Button>
              </div>
            </div>
          </SheetContent>
        )}
      </Sheet>

      <Footer />
    </div>
  );
};

export default RoadmapPage;
