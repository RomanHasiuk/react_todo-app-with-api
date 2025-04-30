export interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export type FilterStatus = 'all' | 'active' | 'completed';
