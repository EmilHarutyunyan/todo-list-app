import {
  Badge,
  Button,
  DialogActions,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectTasks } from "../../app/todos/tasksSlice";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DialogModal from "../DialogModal/DialogModal";
import { BoxTrash } from "./Trash.styled";
import { TrashLists } from "..";

const Trash: React.FC = () => {
  const { trash } = useAppSelector(selectTasks);
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, [open]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [open]);

  return (
    <>
      <BoxTrash>
        <Badge
          onClick={handleOpen}
          badgeContent={trash.length}
          sx={{
            "& .MuiBadge-badge": {
              color: "#fff",
              backgroundColor: "#1976d2",
            },
          }}
        >
          <DeleteForeverIcon sx={{ fontSize: "50px", color: "#1976d2" }} />
        </Badge>
      </BoxTrash>
      {open && (
        <DialogModal
          open={open}
          title="Remove List"
          scroll="paper"
          maxWidth="sm"
          fullWidth={true}
        >
          {trash.length ? <TrashLists trash={trash} /> : null}
          <DialogActions>
            <Button color="primary" onClick={handleClose}>
              Cancel
            </Button>
          </DialogActions>
        </DialogModal>
      )}
    </>
  );
};

export default Trash;
