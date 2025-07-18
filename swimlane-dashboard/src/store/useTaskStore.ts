import { create } from "zustand";
import { persist } from "zustand/middleware";
import { taskData } from "../data/tasks";

export interface Task {
  id: string;
  title: string;
  category: string;
  columnId: string;
  assignees?: string[];
  attachments?: number;
  comments?: number;
  dueDate?: string;
  priority?: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  reports?: number;
  hasStream?: boolean;
  hasimg?: boolean;
  hasGroupCall?: boolean;
}

interface TaskStore {
  tasks: Task[];
  searchQuery: string;
  filteredTasks: Task[];
  setSearchQuery: (query: string) => void;
  updateTaskColumn: (taskId: string, newColumnId: string) => void;
  reorderTasks: (taskId: string, newIndex: number, columnId: string) => void;
  moveTask: (taskId: string, toColumnId: string, toIndex: number) => void;
  addTask: (task: Task) => void;
  updateTask: (taskId: string, updates: Partial<Task>) => void;
  deleteTask: (taskId: string) => void;
  resetTasks: () => void;
}

export const useTaskStore = create<TaskStore>()(
  persist(
    (set, get) => ({
      tasks: JSON.parse(JSON.stringify(taskData.tasks)), 
      filteredTasks: JSON.parse(JSON.stringify(taskData.tasks)), 
      searchQuery: "",

      setSearchQuery: (query: string) => {
        set({ searchQuery: query });
        if (!query.trim()) {
          set({ filteredTasks: get().tasks });
          return;
        }
        const filtered = get().tasks.filter((task) => {
          const searchLower = query.toLowerCase();
          return (
            task.title.toLowerCase().includes(searchLower) ||
            task.description?.toLowerCase().includes(searchLower) ||
            task.category.toLowerCase().includes(searchLower) ||
            task.priority?.toLowerCase().includes(searchLower) ||
            task.dueDate?.toLowerCase().includes(searchLower)
          );
        });
        set({ filteredTasks: filtered });
      },

      updateTaskColumn: (taskId: string, newColumnId: string) => {
        const updatedTasks = get().tasks.map((task) =>
          task.id === taskId ? { ...task, columnId: newColumnId } : task
        );
        set({ tasks: updatedTasks });
        const { searchQuery } = get();
        if (searchQuery.trim()) {
          get().setSearchQuery(searchQuery);
        } else {
          set({ filteredTasks: updatedTasks });
        }
      },

      reorderTasks: (taskId: string, newIndex: number, columnId: string) => {
        const { tasks } = get();
        const columnTasks = tasks.filter((task) => task.columnId === columnId);
        const taskIndex = columnTasks.findIndex((task) => task.id === taskId);
        if (taskIndex === -1) return;
        const [movedTask] = columnTasks.splice(taskIndex, 1);
        columnTasks.splice(newIndex, 0, movedTask);
        const otherTasks = tasks.filter((task) => task.columnId !== columnId);
        const updatedTasks = [...otherTasks, ...columnTasks];
        set({ tasks: updatedTasks });
        const { searchQuery } = get();
        if (searchQuery.trim()) {
          get().setSearchQuery(searchQuery);
        } else {
          set({ filteredTasks: updatedTasks });
        }
      },

      moveTask: (taskId: string, toColumnId: string, toIndex: number) => {
        const { tasks } = get();
        const taskToMove = tasks.find((t) => t.id === taskId);
        if (!taskToMove) return;

        const tasksWithoutMoved = tasks.filter((t) => t.id !== taskId);

        const updatedTask = { ...taskToMove, columnId: toColumnId };

        const destinationColumnTasks = tasksWithoutMoved.filter(
          (t) => t.columnId === toColumnId
        );

        destinationColumnTasks.splice(toIndex, 0, updatedTask);

        const otherColumnTasks = tasksWithoutMoved.filter(
          (t) => t.columnId !== toColumnId
        );

        const reorderedTasks = [...otherColumnTasks, ...destinationColumnTasks];

        set({ tasks: reorderedTasks });
        const { searchQuery } = get();
        if (searchQuery.trim()) {
          get().setSearchQuery(searchQuery);
        } else {
          set({ filteredTasks: reorderedTasks });
        }
      },

      addTask: (task: Task) => {
        const updatedTasks = [...get().tasks, task];
        set({ tasks: updatedTasks });
        const { searchQuery } = get();
        if (searchQuery.trim()) {
          get().setSearchQuery(searchQuery);
        } else {
          set({ filteredTasks: updatedTasks });
        }
      },

      updateTask: (taskId: string, updates: Partial<Task>) => {
        const updatedTasks = get().tasks.map((task) =>
          task.id === taskId ? { ...task, ...updates } : task
        );
        set({ tasks: updatedTasks });
        const { searchQuery } = get();
        if (searchQuery.trim()) {
          get().setSearchQuery(searchQuery);
        } else {
          set({ filteredTasks: updatedTasks });
        }
      },

      deleteTask: (taskId: string) => {
        const updatedTasks = get().tasks.filter((task) => task.id !== taskId);
        set({ tasks: updatedTasks });
        const { searchQuery } = get();
        if (searchQuery.trim()) {
          get().setSearchQuery(searchQuery);
        } else {
          set({ filteredTasks: updatedTasks });
        }
      },

      resetTasks: () => {
        set({
          tasks: taskData.tasks,
          filteredTasks: taskData.tasks,
          searchQuery: "",
        });
      },
    }),
    {
      name: "task-storage",
      partialize: (state) => ({
        tasks: state.tasks,
        searchQuery: state.searchQuery,
      }),
    }
  )
);
