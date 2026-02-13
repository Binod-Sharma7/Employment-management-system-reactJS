import { useEffect } from "react";

const admin = [
  {
    id: 1,
    name: "Laxman Sharma",
    email: "a@b.c",
    password: "111"
  }
];

export const employees = [
  {
    id: 101,
    name: "Binod Sharma",
    email: "sharmabinod9844976377@gmail.com",
    password: "111",
    tasks: [
      {
        id: 1,
        title: "Design Login Page",
        description: "Create UI for login page",
        date: "2026-02-10",
        category: "UI",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        id: 2,
        title: "Fix Navbar Bug",
        description: "Navbar not responsive on mobile",
        date: "2026-02-08",
        category: "Bug",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        id: 3,
        title: "API Integration",
        description: "Integrate weather API",
        date: "2026-02-12",
        category: "Backend",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        id: 4,
        title: "Profile Page",
        description: "Create employee profile page",
        date: "2026-02-14",
        category: "UI",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        id: 5,
        title: "Form Validation",
        description: "Validate login form inputs",
        date: "2026-02-15",
        category: "Logic",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 102,
    name: "Aman Thapa",
    email: "emp2@gmail.com",
    password: "emp123",
    tasks: [
      {
        id: 1,
        title: "Create Dashboard",
        description: "Employee dashboard layout",
        date: "2026-02-11",
        category: "UI",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        id: 2,
        title: "Auth Logic",
        description: "Implement login validation",
        date: "2026-02-09",
        category: "Logic",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        id: 3,
        title: "Unit Testing",
        description: "Write test cases",
        date: "2026-02-13",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        id: 4,
        title: "Redux Setup",
        description: "Configure redux store",
        date: "2026-02-14",
        category: "State",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        id: 5,
        title: "Error Handling",
        description: "Handle API errors",
        date: "2026-02-15",
        category: "Logic",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 103,
    name: "Suman Karki",
    email: "emp3@gmail.com",
    password: "emp123",
    tasks: [
      {
        id: 1,
        title: "Database Schema",
        description: "Design MongoDB schema",
        date: "2026-02-07",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        id: 2,
        title: "Optimize Queries",
        description: "Improve DB performance",
        date: "2026-02-14",
        category: "Optimization",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        id: 3,
        title: "Backup Setup",
        description: "Automated DB backups",
        date: "2026-02-15",
        category: "DevOps",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        id: 4,
        title: "Indexing",
        description: "Add DB indexes",
        date: "2026-02-16",
        category: "Database",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        id: 5,
        title: "Data Migration",
        description: "Migrate old data",
        date: "2026-02-17",
        category: "Database",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 104,
    name: "Rohit Gurung",
    email: "emp4@gmail.com",
    password: "emp123",
    tasks: [
      {
        id: 1,
        title: "SEO Audit",
        description: "Analyze SEO issues",
        date: "2026-02-06",
        category: "SEO",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        id: 2,
        title: "Content Update",
        description: "Update landing page content",
        date: "2026-02-12",
        category: "Content",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        id: 3,
        title: "Broken Links",
        description: "Fix broken links",
        date: "2026-02-13",
        category: "Maintenance",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        id: 4,
        title: "Meta Tags",
        description: "Optimize meta tags",
        date: "2026-02-14",
        category: "SEO",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        id: 5,
        title: "Page Speed",
        description: "Improve page load speed",
        date: "2026-02-15",
        category: "Performance",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 105,
    name: "Nabin Poudel",
    email: "emp5@gmail.com",
    password: "emp123",
    tasks: [
      {
        id: 1,
        title: "Deploy App",
        description: "Deploy to production",
        date: "2026-02-09",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        id: 2,
        title: "Monitor Logs",
        description: "Check server logs",
        date: "2026-02-10",
        category: "Monitoring",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        id: 3,
        title: "Rollback Plan",
        description: "Prepare rollback strategy",
        date: "2026-02-14",
        category: "DevOps",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        id: 4,
        title: "CI/CD Pipeline",
        description: "Setup CI/CD",
        date: "2026-02-15",
        category: "DevOps",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        id: 5,
        title: "Security Check",
        description: "Audit security issues",
        date: "2026-02-16",
        category: "Security",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  }
];


export const setLocalEmployeesData = (data) => {
  localStorage.setItem("employees", JSON.stringify(data))
}
export const setLocalAdminData = (data) => {
  localStorage.setItem("admin", JSON.stringify(admin))
}

export const getLocalEmployeesData = () => {
  const employees = JSON.parse(localStorage.getItem("employees"))
  return employees;
}

export const getLocalAdminData = () => {
  const admin = JSON.parse(localStorage.getItem("admin"))
  return admin
}