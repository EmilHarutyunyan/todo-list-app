import React, { memo, FC } from "react";
import { usePagination, } from "../../hook/usePagination";
import { Pagination } from "@mui/material";
import { BoxPage } from "./PaginationItem.styled";
import { PaginationItemProps } from "../../types/TaskType";



const PaginationItem: FC<PaginationItemProps> = memo(
  (props) => {
    const {
      onPageChange,
      totalCount,
      siblingCount = 1,
      currentPage,
      pageSize,
    } = props;

    const paginationRange: (string | number)[] | undefined = usePagination({
      currentPage,
      totalCount,
      siblingCount,
      pageSize,
    });

    if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
      return null;
    }

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      onPageChange(value);
    };
    return (
      <BoxPage>
        <Pagination
          count={paginationRange?.length}
          color="primary"
          page={currentPage}
          onChange={handleChange}
        />
      </BoxPage>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.currentPage === nextProps.currentPage &&
      prevProps.totalCount === nextProps.totalCount &&
      prevProps.pageSize === nextProps.pageSize
    );
  },
);

export default PaginationItem;
