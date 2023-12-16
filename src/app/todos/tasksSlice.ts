import { formatDate } from './../../utils/utils';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../store';
import { statusTask } from '../../constant/constant';
import StorageService from '../../service/LocalStorage.service';
import { Task } from '../../types/TaskType';

interface TasksState {
  tasks: Task[];
  trash: Task[],
}

const initialState: TasksState = {
  tasks: [],
  trash: []
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    initTask: (state, action: PayloadAction<TasksState>) => {

      state.tasks = action.payload.tasks || [];
      state.trash = action.payload.trash || [];
    },
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
      StorageService.setDate('todos', { tasks: state.tasks })
    },
    removeTask: (state, action: PayloadAction<number>) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      state.tasks[index].status = statusTask.pending.text;
      state.trash.push(state.tasks[index]);
      state.tasks.splice(index, 1);
      StorageService.setDate('todos', { tasks: state.tasks, trash: state.trash })
    },
    markAsComplete: (state, action: PayloadAction<number>) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      state.tasks[index].status = state.tasks[index].status === statusTask.completed.text ? statusTask.pending.text : statusTask.completed.text;
      StorageService.setDate('todos', { tasks: state.tasks })
    },

    editTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload.id);
      state.tasks[index] = action.payload;
      StorageService.setDate('todos', { tasks: state.tasks })

    },
  },
});

export const { initTask, addTask, editTask, removeTask, markAsComplete } = tasksSlice.actions;

export const selectTasks = (state: RootState) => state.tasks;


// Action Creator
export const getInitTodo = () => (dispatch: AppDispatch, getState: () => RootState) => {
  const todos: TasksState | null = StorageService.getDate('todos')
  if (todos) {
    const currentData: string = formatDate(new Date())
    const thisDate: string = currentData?.replace(' ', 'T');
    const dateCurrent: Date = new Date(thisDate);
    const taskOverdue = todos.tasks.map((task => {
      const taskDeadline: string = task.deadline?.replace(' ', 'T');
      const dateDeadline: Date = new Date(taskDeadline);
      return dateCurrent > dateDeadline ? { ...task, status: statusTask.overdue.text } : task;
    }))
    dispatch(initTask({ ...todos, tasks: taskOverdue }))
  }
};


export default tasksSlice.reducer;
