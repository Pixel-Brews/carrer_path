// Type definitions for the CareerPathCraft application

// User profile
export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  progress: number;
  completedTasks: number;
  totalTasks: number;
}

// Career path
export interface CareerPath {
  id: string;
  title: string;
  description: string;
  image: string;
  progress: number;
  totalModules: number;
  completedModules: number;
}

// Resource
export interface Resource {
  title: string;
  type: string;
  link: string;
}

// Roadmap node
export interface RoadmapNode {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  deadline: string;
  resources: Resource[];
}

// Calendar event
export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  type: string;
  courseId: string;
  nodeId?: string;
  description?: string;
}

// Task
export interface Task {
  id: string;
  title: string;
  courseId: string;
  nodeId: string;
  completed: boolean;
  dueDate: string;
}

// Roadmap nodes collection
export interface RoadmapNodes {
  [courseId: string]: RoadmapNode[];
}
