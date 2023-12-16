

export interface Task {
  id: number;
  title: string;
  description?: string;
  deadline: string;
  status: 'pending' | 'completed' | 'overdue' | 'removed';
}

export interface TaskFormData {
  title: string;
  description?: string;
  deadline?: string;
}

export interface PaginationItemProps {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
}
export interface TaskEditProps {
  editTaskItem: Task;
  handleCancel: () => void;
}