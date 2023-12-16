import React, { useCallback, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  removeTask,
  markAsComplete,
  selectTasks,
} from "../../app/todos/tasksSlice";
import { PAGE_SIZE, statusTask } from "../../constant/constant";
import { DialogModal, TaskEdit, PaginationItem } from "..";
import {
  Button,
  List,
  ListItemText,
  IconButton,
  Checkbox,
  ListItemIcon,
  ListItem,
  Box,
} from "@mui/material";
import {
  BoxAction,
  BoxList,
  ListBoxItem,
  ListItemStatus,
  TypographyEmpty,
} from "./TaskLists.styled";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Task } from "../../types/TaskType";

const TaskLists: React.FC = () => {
  const { tasks } = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [editTask, setEditTask] = useState<Task | null>(null);
  const [removeId, setRemoveId] = useState<number | null>(null);

  const handleRemove = useCallback(() => {
    if (removeId !== null) {
      dispatch(removeTask(removeId));
      setRemoveId(null);
    }
  }, [removeId]);

  const handleRemoveId = useCallback((id: number) => {
    setRemoveId(id);
  }, []);
  const handleEdit = useCallback((task: any) => {
    setEditTask(task);
  }, []);

  const handleMarkComplete = useCallback((taskId: number) => {
    dispatch(markAsComplete(taskId));
  }, []);

  const handleCancel = useCallback(() => {
    setEditTask(null);
  }, []);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return tasks.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, tasks]);
  const handlePage = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  return (
    <>
      {currentTableData.length ? (
        <List>
          {currentTableData.map((task) => (
            <BoxList key={task.id}>
              <ListBoxItem>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={task.status === statusTask.completed.text}
                    tabIndex={-1}
                    disabled={task.status === statusTask.overdue.text}
                    disableRipple
                    onClick={() => handleMarkComplete(task.id)}
                  />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    textDecoration:
                      task.status === statusTask.completed.text
                        ? "line-through"
                        : "auto",
                  }}
                 
                  primary={
                    <>
                      <span>{task.title}</span>
                      {task.description && task.description.length > 0 && (
                        <span>
                          {" "}
                          -{" "}
                          {task.description.length < 20
                            ? task.description
                            : `${task.description.slice(0, 20)}...`}
                        </span>
                      )}
                    </>
                  }
                  secondary={task?.deadline && `${task.deadline}`}
                />
                <BoxAction>
                  <ListItemStatus
                    sx={{ backgroundColor: statusTask[`${task.status}`].color }}
                  >
                    {task.status}
                  </ListItemStatus>
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    onClick={() => handleEdit(task)}
                  >
                    <EditIcon sx={{ color: "#2eb94c" }} />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleRemoveId(task.id)}
                  >
                    <DeleteIcon sx={{ color: "#b92e2e" }} />
                  </IconButton>
                </BoxAction>
              </ListBoxItem>
            </BoxList>
          ))}
        </List>
      ) : (
        <TypographyEmpty variant="h4">Empty Todo List</TypographyEmpty>
      )}

      <PaginationItem
        currentPage={currentPage}
        totalCount={tasks.length}
        pageSize={PAGE_SIZE}
        onPageChange={(page) => handlePage(page)}
      />
      {editTask && (
        <DialogModal title="Edit Task" open={true}>
          <TaskEdit editTaskItem={editTask} handleCancel={handleCancel} />
        </DialogModal>
      )}

      {removeId && (
        <DialogModal
          title="Are you sure you want to delete this task?"
          open={true}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={() => setRemoveId(null)}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="error"
            onClick={handleRemove}
          >
            Remove
          </Button>
        </DialogModal>
      )}
    </>
  );
};

export default TaskLists;
