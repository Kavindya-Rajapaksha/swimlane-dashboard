// src/components/Column.tsx
import React from "react";
import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";

type ColumnProps = {
  column: {
    id: string;
    title: string;
    color: string;
  };
  tasks: any[];
  categories: any[];
  users: any[];
  index: number;
};

const COLUMN_WIDTH = 290;

const Column: React.FC<ColumnProps> = ({ column, tasks, categories, users, index }) => {
  const { setNodeRef } = useDroppable({
    id: column.id,
    data: {
      type: "column",
      columnId: column.id,
    },
  });

  return (
    <div
      ref={setNodeRef}
      style={{
        display: "flex",
        flex: `0 0 ${COLUMN_WIDTH}px`,
        minWidth: COLUMN_WIDTH,
        maxWidth: COLUMN_WIDTH,
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
        padding: 5,
        minHeight: 400, // Ensure column has minimum height for dropping
      }}
      data-column-id={column.id}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          alignItems: "center",
          width: "100%",
        }}
      >
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            categories={categories}
            users={users}
            columnColor={column.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;