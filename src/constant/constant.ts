type Status = {
  text: 'pending' | 'completed' | 'overdue' | 'removed';
  color: string;
};

type StatusTask = {
  pending: Status;
  completed: Status;
  overdue: Status;
  removed: Status;
};

export const statusTask: StatusTask = {
  pending: { text: 'pending', color: '#FFA500' },
  completed: { text: 'completed', color: '#008000' },
  overdue: { text: 'overdue', color: '#808080' },
  removed: { text: 'removed', color: '#FF0000' },
};

export const PAGE_SIZE: number = 5;