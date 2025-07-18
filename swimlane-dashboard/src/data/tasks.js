export const taskData = {
  columns: [
    { id: 'todo', title: 'To Do', color: '#6B7280' },
    { id: 'in-progress', title: 'In Progress', color: '#F59E0B' },
    { id: 'approved', title: 'Approved', color: '#10B981' },
    { id: 'reject', title: 'Reject', color: '#EF4444' }
  ],
  
  categories: [
    { id: 'research', name: 'Research', color: '#10B981' },
    { id: 'design', name: 'Design', color: '#EF4444' },
    { id: 'development', name: 'Development', color: '#3B82F6' },
    { id: 'interface', name: 'Interface', color: '#8B5CF6' },
    { id: 'presentation', name: 'Presentation', color: '#F59E0B' },
    { id: 'ux-research', name: 'UX Research', color: '#F59E0B' },
    { id: 'other', name: 'Other', color: '#6B7280' }
  ],

  users: [
    { id: 'user1', name: 'John Doe', avatar: 'JD', color: '#3B82F6' },
    { id: 'user2', name: 'Jane Smith', avatar: 'JS', color: '#10B981' },
    { id: 'user3', name: 'Mike Johnson', avatar: 'MJ', color: '#F59E0B' },
    { id: 'user4', name: 'Sarah Wilson', avatar: 'SW', color: '#EF4444' },
    { id: 'user5', name: 'Alex Brown', avatar: 'AB', color: '#8B5CF6' },
    { id: 'user6', name: 'Emma Davis', avatar: 'ED', color: '#EC4899' }
  ],

  tasks: [
    {
      id: 'task-1',
      title: 'User Interview',
      category: 'research',
      columnId: 'todo',
      assignees: ['user1'],
      attachments: 2,
      comments: 2,
      dueDate: 'Tomorrow',
      priority: 'high',
      description: 'Conduct user interviews to gather requirements and feedback',
      createdAt: '2024-07-15T10:00:00Z',
      updatedAt: '2024-07-17T14:30:00Z'
    },
    {
      id: 'task-2',
      title: 'Design System',
      category: 'design',
      columnId: 'todo',
      assignees: ['user2', 'user3'],
      attachments: 3,
      comments: 8,
      reports: 2,
      priority: 'medium',
      description: 'Create comprehensive design system with components and guidelines',
      createdAt: '2024-07-14T09:00:00Z',
      updatedAt: '2024-07-17T16:45:00Z'
    },
    {
      id: 'task-3',
      title: 'Speech',
      category: 'other',
      columnId: 'todo',
      assignees: ['user4', 'user5'],
      attachments: 1,
      comments: 3,
      hasStream: true,
      priority: 'low',
      description: 'Prepare speech for project presentation',
      createdAt: '2024-07-16T11:00:00Z',
      updatedAt: '2024-07-17T12:20:00Z'
    },
    {
      id: 'task-4',
      title: 'Wireframe',
      category: 'design',
      hasImage: true,
      columnId: 'todo',
      assignees: ['user1', 'user6'],
      hasImage: true,
      priority: 'high',
      description: 'Create wireframes for main user flows',
      createdAt: '2024-07-15T13:00:00Z',
      updatedAt: '2024-07-17T15:10:00Z'
    },

    {
      id: 'task-5',
      title: 'UI Design',
      category: 'design',
      columnId: 'in-progress',
      assignees: ['user2', 'user3'],
      attachments: 2,
      comments: 2,
      dueDate: 'Tomorrow',
      priority: 'high',
      description: 'Design user interface mockups based on wireframes',
      createdAt: '2024-07-13T08:00:00Z',
      updatedAt: '2024-07-17T13:15:00Z'
    },
    {
      id: 'task-6',
      title: 'Check Clients Feedback',
      category: 'design',
      columnId: 'in-progress',
      assignees: ['user4', 'user5'],
      hasImage: true,
      attachments: 8,
      dueDate: '22 April, 2022',
      priority: 'medium',
      description: 'Review and incorporate client feedback into designs',
      createdAt: '2024-07-12T14:00:00Z',
      updatedAt: '2024-07-17T11:30:00Z'
    },
    {
      id: 'task-7',
      title: 'Copyright',
      category: 'presentation',
      hasImage: true,
      columnId: 'in-progress',
      assignees: ['user1'],
      attachments: 4,
      dueDate: '22 April, 2022',
      priority: 'low',
      description: 'Handle copyright and legal documentation',
      createdAt: '2024-07-11T16:00:00Z',
      updatedAt: '2024-07-17T10:45:00Z'
    },
    {
      id: 'task-8',
      title: 'Filter sorting',
      category: 'ux-research',
      columnId: 'in-progress',
      assignees: ['user2', 'user3'],
      priority: 'medium',
      description: 'Implement filter and sorting functionality',
      createdAt: '2024-07-10T12:00:00Z',
      updatedAt: '2024-07-17T14:20:00Z'
    },

    {
      id: 'task-9',
      title: 'Prototype',
      category: 'development',
      columnId: 'approved',
      assignees: ['user4', 'user5', 'user6'],
      attachments: 35,
      comments: 243,
      priority: 'high',
      description: 'Build interactive prototype for user testing',
      createdAt: '2024-07-08T09:00:00Z',
      updatedAt: '2024-07-17T16:00:00Z'
    },
    {
      id: 'task-10',
      title: 'Detail Page',
      category: 'development',
      columnId: 'approved',
      assignees: ['user1', 'user2'],
      hasImage: true,
      attachments: 6,
      comments: 28,
      priority: 'medium',
      description: 'Develop detailed page layouts and functionality',
      createdAt: '2024-07-07T15:00:00Z',
      updatedAt: '2024-07-17T12:40:00Z'
    },
    {
      id: 'task-11',
      title: 'Animation preloaders',
      category: 'interface',
      columnId: 'approved',
      assignees: ['user3'],
      attachments: 4,
      comments: 5,
      priority: 'low',
      description: 'Create loading animations and preloaders',
      createdAt: '2024-07-09T10:00:00Z',
      updatedAt: '2024-07-17T15:30:00Z'
    },
    {
      id: 'task-12',
      title: 'Sorting category',
      category: 'ux-research',
      columnId: 'approved',
      assignees: ['user4', 'user5', 'user6'],
      priority: 'medium',
      description: 'Implement category sorting system',
      createdAt: '2024-07-06T11:00:00Z',
      updatedAt: '2024-07-17T13:50:00Z'
    },

    {
      id: 'task-13',
      title: 'Group Management',
      category: 'other',
      columnId: 'reject',
      assignees: ['user1'],
      comments: 329,
      hasGroupCall: true,
      priority: 'high',
      description: 'Manage user groups and permissions',
      createdAt: '2024-07-05T14:00:00Z',
      updatedAt: '2024-07-17T17:00:00Z'
    },
    {
      id: 'task-14',
      title: 'Design System',
      category: 'design',
      columnId: 'reject',
      assignees: ['user2'],
      attachments: 3,
      comments: 8,
      reports: 2,
      priority: 'medium',
      hasImage: true,
      description: 'Alternative design system approach',
      createdAt: '2024-07-04T08:00:00Z',
      updatedAt: '2024-07-17T16:15:00Z'
    },
    {
      id: 'task-15',
      title: 'Slider controls',
      category: 'interface',
      columnId: 'reject',
      assignees: ['user3', 'user4'],
      attachments: 8,
      comments: 31,
      priority: 'low',
      description: 'Interactive slider components',
      createdAt: '2024-07-03T13:00:00Z',
      updatedAt: '2024-07-17T14:05:00Z'
    },
    {
      id: 'task-16',
      title: 'Slider controls',
      category: 'design',
      columnId: 'reject',
      assignees: ['user5', 'user6'],
      hasImage: true,
      priority: 'medium',
      description: 'Design for slider control components',
      createdAt: '2024-07-02T16:00:00Z',
      updatedAt: '2024-07-17T11:45:00Z'
    }
  ]
};

export const fetchTasks = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(taskData);
    }, 500); 
  });
};

export const fetchTasksByColumn = (columnId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredTasks = taskData.tasks.filter(task => task.columnId === columnId);
      resolve(filteredTasks);
    }, 300);
  });
};

export const fetchTaskById = (taskId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const task = taskData.tasks.find(task => task.id === taskId);
      if (task) {
        resolve(task);
      } else {
        reject(new Error('Task not found'));
      }
    }, 200);
  });
};

export const updateTask = (taskId, updates) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const taskIndex = taskData.tasks.findIndex(task => task.id === taskId);
      if (taskIndex !== -1) {
        taskData.tasks[taskIndex] = {
          ...taskData.tasks[taskIndex],
          ...updates,
          updatedAt: new Date().toISOString()
        };
        resolve(taskData.tasks[taskIndex]);
      } else {
        reject(new Error('Task not found'));
      }
    }, 300);
  });
};

export const createTask = (newTask) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const task = {
        id: `task-${Date.now()}`,
        ...newTask,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      taskData.tasks.push(task);
      resolve(task);
    }, 400);
  });
};

export const deleteTask = (taskId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const taskIndex = taskData.tasks.findIndex(task => task.id === taskId);
      if (taskIndex !== -1) {
        const deletedTask = taskData.tasks.splice(taskIndex, 1)[0];
        resolve(deletedTask);
      } else {
        reject(new Error('Task not found'));
      }
    }, 200);
  });
};

export default taskData;