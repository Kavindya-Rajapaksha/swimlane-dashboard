"use client";

import React, { useMemo } from "react";
import { DndContext, closestCenter, DragEndEvent, DragOverEvent } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { taskData } from "../data/tasks";
import Column from "./Column";
import { useTaskStore } from "../store/useTaskStore";

const tabData = [
  { label: "To Do", color: "#E5E7EB", textColor: "#374151" },
  { label: "In Progress", color: "#FFA800", textColor: "#374151" },
  { label: "Approved", color: "#B0EF8F", textColor: "#374151" },
  { label: "Reject", color: "#FF2D55", textColor: "#ffffff" },
];

const COLUMN_WIDTH = 308;
const TAB_HEIGHT = 70;

const Board = () => {
  const { filteredTasks, moveTask } = useTaskStore();

  // Memoize tasks by column to prevent unnecessary re-renders
  const tasksByColumn = useMemo(() => {
    const grouped: Record<string, any[]> = {};
    taskData.columns.forEach(col => {
      grouped[col.id] = filteredTasks.filter(task => task.columnId === col.id);
    });
    return grouped;
  }, [filteredTasks]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (!over || active.id === over.id) return;

    const activeTaskId = active.id as string;
    const activeTask = filteredTasks.find(task => task.id === activeTaskId);
    
    if (!activeTask) return;

    // If dropped on a column header/container
    if (over.data?.current?.type === "column") {
      const toColumnId = over.id as string;
      const toColumnTasks = tasksByColumn[toColumnId] || [];
      moveTask(activeTaskId, toColumnId, toColumnTasks.length);
      return;
    }

    // If dropped on another task
    const overTaskId = over.id as string;
    const overTask = filteredTasks.find(task => task.id === overTaskId);
    
    if (!overTask) return;

    const toColumnId = overTask.columnId;
    const toColumnTasks = tasksByColumn[toColumnId] || [];
    const overIndex = toColumnTasks.findIndex(task => task.id === overTaskId);
    
    // If dropping in the same column, calculate the correct index
    if (activeTask.columnId === toColumnId) {
      const activeIndex = toColumnTasks.findIndex(task => task.id === activeTaskId);
      const newIndex = overIndex > activeIndex ? overIndex : overIndex;
      moveTask(activeTaskId, toColumnId, newIndex);
    } else {
      // Moving to different column
      moveTask(activeTaskId, toColumnId, overIndex);
    }
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div
        className="custom-scrollbar"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start", // Changed from "center" to "flex-start"
          overflowX: "auto",
          width: "100%",
          background: "#f7f8fa",
          minHeight: "100vh",
        }}
      >
        {taskData.columns.map((col, idx) => (
          <div
            key={col.id}
            style={{
              display: "flex",
              flexDirection: "column",
              flex: "0 0 290px",
              minWidth: COLUMN_WIDTH,
              maxWidth: 350,
              boxSizing: "border-box",
              minHeight: "100vh",
            }}
          >
            {/* Column Header */}
            <div
              style={{
                height: TAB_HEIGHT,
                minHeight: TAB_HEIGHT,
                maxHeight: TAB_HEIGHT,
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderTop: "1px solid #D9D9D9",
                borderBottom: "1px solid #D9D9D9",
                background: "#fff",
                padding: 15,
                fontWeight: 600,
                color: tabData[idx]?.textColor,
                backgroundColor: "#fff",
                position: "sticky",
                top: 0,
                zIndex: 10,
                flexShrink: 0,
                borderLeft: idx !== 0 ? "2px solid #D9D9D9" : "none",
              }}
            >
              <span
                style={{
                  background: tabData[idx]?.color,
                  color: tabData[idx]?.textColor,
                  borderRadius: 20,
                  padding: "0.2rem 1.5rem",
                  fontWeight: 600,
                  fontSize: "1rem",
                }}
              >
                {tabData[idx]?.label}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span
                  style={{
                    width: 28,
                    height: 28,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src="/assets/Blackplus.svg"
                    alt="plus"
                    style={{ width: 24, height: 24 }}
                  />
                </span>
                <span
                  style={{
                    width: 28,
                    height: 28,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src="/assets/Dots.svg"
                    alt="more"
                    style={{ width: 24, height: 24 }}
                  />
                </span>
              </span>
            </div>

            {/* Column Content */}
            <div
              style={{
                flex: 1,
                paddingTop: 12,
                minHeight: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderLeft: idx !== 0 ? "2px solid #D9D9D9" : "none",
              }}
            >
              <SortableContext
                items={tasksByColumn[col.id]?.map(t => t.id) || []}
                strategy={verticalListSortingStrategy}
              >
                <Column
                  column={col}
                  tasks={tasksByColumn[col.id] || []}
                  categories={taskData.categories}
                  users={taskData.users}
                  index={idx}
                />
              </SortableContext>
            </div>
          </div>
        ))}
        <div style={{ minWidth: 32 }} />
      </div>
    </DndContext>
  );
};

export default Board;