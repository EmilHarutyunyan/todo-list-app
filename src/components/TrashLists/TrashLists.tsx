import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { Task } from "../../types/TaskType";

const TrashLists: React.FC<{ trash: Task[] }> = ({ trash }) => {
  return (
    <List>
      {trash.map((task) => (
        <ListItem key={task.id}>
          <ListItemText
            primary={
              <>
                <span>{task.title}</span>
                {task.description && task.description.length > 0 && (
                  <span>
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
        </ListItem>
      ))}
    </List>
  );
};

export default TrashLists;
