// Mock data for CareerPathCraft application

// User profile data
export const userProfile = {
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "/placeholder.svg",
  progress: 65, // Overall progress percentage
  completedTasks: 24,
  totalTasks: 37,
};

// Career paths data
export const careerPaths = [
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    description:
      "Master the fundamentals of DSA for technical interviews and problem-solving.",
    image: "/placeholder.svg",
    progress: 75,
    totalModules: 12,
    completedModules: 9,
  },
  {
    id: "webdev",
    title: "Web Development",
    description:
      "Learn frontend and backend technologies to build modern web applications.",
    image: "/placeholder.svg",
    progress: 45,
    totalModules: 15,
    completedModules: 7,
  },
  {
    id: "ml",
    title: "Machine Learning",
    description:
      "Explore machine learning concepts and build intelligent applications.",
    image: "/placeholder.svg",
    progress: 20,
    totalModules: 10,
    completedModules: 2,
  },
  {
    id: "devops",
    title: "DevOps Engineering",
    description:
      "Master the tools and practices for CI/CD, containerization, and cloud.",
    image: "/placeholder.svg",
    progress: 10,
    totalModules: 8,
    completedModules: 1,
  },
];

// Roadmap node data for different career paths
export const roadmapNodes = {
  dsa: [
    {
      id: "dsa-1",
      title: "Basic Data Structures",
      description: "Arrays, Linked Lists, Stacks, Queues",
      completed: true,
      deadline: "2023-05-15",
      resources: [
        { title: "Arrays & Strings", type: "Video", link: "#" },
        { title: "Linked Lists Deep Dive", type: "Article", link: "#" },
      ],
    },
    {
      id: "dsa-2",
      title: "Advanced Data Structures",
      description: "Trees, Graphs, Heaps, Hash Tables",
      completed: true,
      deadline: "2023-06-20",
      resources: [
        { title: "Tree Traversals", type: "Practice", link: "#" },
        { title: "Graph Algorithms", type: "Video", link: "#" },
      ],
    },
    {
      id: "dsa-3",
      title: "Searching Algorithms",
      description: "Binary Search, DFS, BFS",
      completed: true,
      deadline: "2023-07-10",
      resources: [
        { title: "Binary Search Problems", type: "Practice", link: "#" },
        { title: "Graph Search Algorithms", type: "Article", link: "#" },
      ],
    },
    {
      id: "dsa-4",
      title: "Sorting Algorithms",
      description: "Quick Sort, Merge Sort, Heap Sort",
      completed: false,
      deadline: "2023-08-05",
      resources: [
        { title: "Sorting Algorithms Visualized", type: "Video", link: "#" },
        { title: "Implementing Sort Functions", type: "Practice", link: "#" },
      ],
    },
    {
      id: "dsa-5",
      title: "Dynamic Programming",
      description: "Memoization, Tabulation, Common DP Problems",
      completed: false,
      deadline: "2023-09-15",
      resources: [
        { title: "DP Introduction", type: "Video", link: "#" },
        { title: "DP Problem Set", type: "Practice", link: "#" },
      ],
    },
  ],
  webdev: [
    {
      id: "web-1",
      title: "HTML & CSS Fundamentals",
      description: "Document structure, selectors, box model, flexbox",
      completed: true,
      deadline: "2023-04-10",
      resources: [
        { title: "HTML Crash Course", type: "Video", link: "#" },
        { title: "CSS Flexbox Guide", type: "Article", link: "#" },
      ],
    },
    {
      id: "web-2",
      title: "JavaScript Basics",
      description: "Variables, functions, objects, arrays, DOM manipulation",
      completed: true,
      deadline: "2023-05-20",
      resources: [
        { title: "JavaScript Fundamentals", type: "Course", link: "#" },
        { title: "DOM Manipulation", type: "Article", link: "#" },
      ],
    },
    {
      id: "web-3",
      title: "Frontend Frameworks",
      description: "React, state management, components, hooks",
      completed: false,
      deadline: "2023-07-15",
      resources: [
        { title: "React Fundamentals", type: "Video", link: "#" },
        { title: "State Management in React", type: "Article", link: "#" },
      ],
    },
    {
      id: "web-4",
      title: "Backend Development",
      description: "Node.js, Express, RESTful APIs",
      completed: false,
      deadline: "2023-09-01",
      resources: [
        { title: "Node.js for Beginners", type: "Course", link: "#" },
        { title: "Building REST APIs", type: "Practice", link: "#" },
      ],
    },
    {
      id: "web-5",
      title: "Database Integration",
      description: "SQL, MongoDB, ORMs",
      completed: false,
      deadline: "2023-10-20",
      resources: [
        { title: "SQL Basics", type: "Video", link: "#" },
        { title: "MongoDB Tutorial", type: "Article", link: "#" },
      ],
    },
  ],
  ml: [
    {
      id: "ml-1",
      title: "Python Fundamentals",
      description: "Variables, data types, functions, libraries",
      completed: true,
      deadline: "2023-05-15",
      resources: [
        { title: "Python for Data Science", type: "Course", link: "#" },
        { title: "NumPy & Pandas", type: "Practice", link: "#" },
      ],
    },
    {
      id: "ml-2",
      title: "Data Preprocessing",
      description: "Cleaning, normalization, feature engineering",
      completed: false,
      deadline: "2023-06-30",
      resources: [
        { title: "Data Cleaning with Pandas", type: "Video", link: "#" },
        { title: "Feature Engineering Guide", type: "Article", link: "#" },
      ],
    },
    {
      id: "ml-3",
      title: "Supervised Learning",
      description: "Regression, classification, decision trees, SVMs",
      completed: false,
      deadline: "2023-08-15",
      resources: [
        { title: "Intro to Machine Learning", type: "Course", link: "#" },
        { title: "Classification Algorithms", type: "Practice", link: "#" },
      ],
    },
    {
      id: "ml-4",
      title: "Unsupervised Learning",
      description: "Clustering, dimensionality reduction, PCA",
      completed: false,
      deadline: "2023-10-01",
      resources: [
        { title: "Clustering Algorithms", type: "Video", link: "#" },
        { title: "PCA Explained", type: "Article", link: "#" },
      ],
    },
    {
      id: "ml-5",
      title: "Deep Learning",
      description: "Neural networks, CNNs, RNNs, transformers",
      completed: false,
      deadline: "2023-11-20",
      resources: [
        { title: "Neural Networks Fundamentals", type: "Course", link: "#" },
        { title: "Building a CNN", type: "Practice", link: "#" },
      ],
    },
  ],
  devops: [
    {
      id: "devops-1",
      title: "Linux Fundamentals",
      description: "Shell commands, file system, permissions",
      completed: true,
      deadline: "2023-06-10",
      resources: [
        { title: "Linux Command Line Basics", type: "Course", link: "#" },
        { title: "Shell Scripting", type: "Practice", link: "#" },
      ],
    },
    {
      id: "devops-2",
      title: "Version Control",
      description: "Git, branching strategies, workflows",
      completed: false,
      deadline: "2023-07-20",
      resources: [
        { title: "Git Fundamentals", type: "Video", link: "#" },
        { title: "Git Workflows", type: "Article", link: "#" },
      ],
    },
    {
      id: "devops-3",
      title: "Containerization",
      description: "Docker, container orchestration, Kubernetes",
      completed: false,
      deadline: "2023-09-05",
      resources: [
        { title: "Docker for Beginners", type: "Course", link: "#" },
        { title: "Kubernetes Basics", type: "Practice", link: "#" },
      ],
    },
    {
      id: "devops-4",
      title: "CI/CD Pipelines",
      description: "Jenkins, GitHub Actions, automation",
      completed: false,
      deadline: "2023-10-15",
      resources: [
        { title: "CI/CD Pipeline Setup", type: "Video", link: "#" },
        { title: "GitHub Actions Tutorial", type: "Article", link: "#" },
      ],
    },
    {
      id: "devops-5",
      title: "Cloud Platforms",
      description: "AWS, Azure, GCP, cloud architecture",
      completed: false,
      deadline: "2023-12-01",
      resources: [
        { title: "AWS Essentials", type: "Course", link: "#" },
        { title: "Cloud Architecture Patterns", type: "Article", link: "#" },
      ],
    },
  ],
};

// Calendar events data
export const calendarEvents = [
  {
    id: "event-1",
    title: "Complete DSA Module",
    date: "2023-06-15",
    type: "deadline",
    courseId: "dsa",
    nodeId: "dsa-4",
  },
  {
    id: "event-2",
    title: "Web Development Workshop",
    date: "2023-06-20",
    type: "workshop",
    courseId: "webdev",
    description: "Live workshop on React best practices",
  },
  {
    id: "event-3",
    title: "Python for ML Assignment",
    date: "2023-06-25",
    type: "assignment",
    courseId: "ml",
    nodeId: "ml-2",
  },
  {
    id: "event-4",
    title: "DevOps Git Final Project",
    date: "2023-07-01",
    type: "project",
    courseId: "devops",
    nodeId: "devops-2",
  },
  {
    id: "event-5",
    title: "DSA Practice Session",
    date: "2023-07-05",
    type: "session",
    courseId: "dsa",
    description: "Group problem-solving session",
  },
  {
    id: "event-6",
    title: "Frontend Framework Tutorial",
    date: "2023-07-10",
    type: "tutorial",
    courseId: "webdev",
    nodeId: "web-3",
  },
  {
    id: "event-7",
    title: "ML Model Deployment",
    date: "2023-07-15",
    type: "project",
    courseId: "ml",
    nodeId: "ml-3",
  },
  {
    id: "event-8",
    title: "Container Orchestration Webinar",
    date: "2023-07-20",
    type: "webinar",
    courseId: "devops",
    description: "Introduction to Kubernetes",
  },
];

// Tasks data
export const tasks = [
  {
    id: "task-1",
    title: "Complete sorting algorithms quiz",
    courseId: "dsa",
    nodeId: "dsa-4",
    completed: false,
    dueDate: "2023-06-15",
  },
  {
    id: "task-2",
    title: "Implement a React component from scratch",
    courseId: "webdev",
    nodeId: "web-3",
    completed: false,
    dueDate: "2023-06-20",
  },
  {
    id: "task-3",
    title: "Clean and preprocess the dataset",
    courseId: "ml",
    nodeId: "ml-2",
    completed: false,
    dueDate: "2023-06-25",
  },
  {
    id: "task-4",
    title: "Set up a Git repository with branching strategy",
    courseId: "devops",
    nodeId: "devops-2",
    completed: false,
    dueDate: "2023-07-01",
  },
  {
    id: "task-5",
    title: "Solve 5 dynamic programming problems",
    courseId: "dsa",
    nodeId: "dsa-5",
    completed: false,
    dueDate: "2023-07-05",
  },
  {
    id: "task-6",
    title: "Build a REST API with Node.js and Express",
    courseId: "webdev",
    nodeId: "web-4",
    completed: false,
    dueDate: "2023-07-10",
  },
];
