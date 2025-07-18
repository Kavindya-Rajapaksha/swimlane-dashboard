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

export interface Column {
  id: string;
  title: string;
  color: string;
}

export interface Category {
  id: string;
  name: string;
  color: string;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  color: string;
}