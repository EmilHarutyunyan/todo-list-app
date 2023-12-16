import { Button, DialogActions, DialogContent } from "@mui/material";
import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { editTask } from "../../app/todos/tasksSlice";
import { schemaTask } from "../../schema/TaskForm.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { statusTask } from "../../constant/constant";
import { TextFieldEdit } from "./TaxEdit.styled";
import { formatDate } from "../../utils/utils";
import { Task, TaskEditProps, TaskFormData } from "../../types/TaskType";


const TaskEdit: React.FC<TaskEditProps> = ({ editTaskItem, handleCancel }) => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskFormData>({
    resolver: yupResolver(schemaTask),
    defaultValues: editTaskItem,
  });

  const onSubmit: SubmitHandler<TaskFormData> = (data) => {
    const changeTask: Task = {
      id: editTaskItem.id,
      title: data.title,
      description: data.description,
      deadline: data.deadline
        ? formatDate(data.deadline)
        : editTaskItem.deadline,
      status: statusTask.pending.text,
    };
    dispatch(editTask(changeTask));
    handleCancel();
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DialogContent>
        <TextFieldEdit
          label="Title"
          {...register("title")}
          error={!!errors.title}
          helperText={errors?.title?.message}
          fullWidth
        />
        <TextFieldEdit
          label="Description"
          {...register("description")}
          error={!!errors.description}
          helperText={errors.description?.message}
          fullWidth
        />
        <TextFieldEdit
          label="Deadline"
          type="datetime-local"
          {...register("deadline")}
          error={!!errors.deadline}
          helperText={errors.deadline?.message}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </form>
  );
};

export default TaskEdit;
