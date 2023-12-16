import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Task, addTask } from "../../app/todos/tasksSlice";
import { useAppDispatch } from "../../app/hooks";
import { Button, TextField } from "@mui/material";
import { FormTask } from "./TaskForm.styled";
import { schemaTask } from "../../schema/TaskForm.schema";
import { statusTask } from "../../constant/constant";
import { formatDate } from "../../utils/utils";
import { TaskFormData } from "../../types/TaskType";



const TaskForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TaskFormData>({
    resolver: yupResolver(schemaTask),
  });
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<TaskFormData> = (data) => {
    const newTask: Task = {
      id: Date.now(),
      title: data.title,
      description: data.description,
      deadline: data.deadline
        ? formatDate(data.deadline)
        : formatDate(new Date()),
      status: statusTask.pending.text,
    };
    dispatch(addTask(newTask));
    reset();
  };

  return (
    <FormTask onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Title"
        type="text"
        {...register("title")}
        error={!!errors.title}
        helperText={errors?.title?.message}
      />

      <TextField
        label="Description"
        type="text"
        {...register("description")}
        error={!!errors.description}
        helperText={errors.description?.message}
      />

      <TextField
        type="datetime-local"
        
        {...register("deadline")}
        error={!!errors.deadline}
        helperText={errors.deadline?.message}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ height: 56 }}
        disabled={isSubmitting}
      >
        Add Task
      </Button>
    </FormTask>
  );
};

export default TaskForm;
