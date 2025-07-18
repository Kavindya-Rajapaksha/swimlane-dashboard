'use client'

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import type { Task, Category, User } from "@/utils/types";

type TaskCardProps = {
  task: Task;
  categories: Category[];
  users: User[];
  columnColor: string;
};

const TaskCard: React.FC<TaskCardProps> = ({ task, categories }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    cursor: "grab",
  };

  const category = categories.find((c) => c.id === task.category);

  return (
    <Card
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      variant="outlined"
      sx={{
        width: 260,
        minHeight: 140, 
        borderRadius: "12px",
        boxShadow: 1,
        background: "#fff",
        ...style,
      }}
    >
      <CardContent sx={{ p: 1, "&:last-child": { pb: 2 } }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center" gap={1}>
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                bgcolor: category?.color || "grey.300",
                mr: 1,
              }}
            />
            <Typography
              variant="caption"
              color="text.secondary"
              fontWeight={500}
            >
              {category?.name}
            </Typography>
          </Box>
          <IconButton size="small">
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </Box>

        <Typography variant="subtitle1" fontWeight={600} color="text.primary">
          {task.title}
        </Typography>

        <Box display="flex" alignItems="center" gap={1} mb={1}>
          {task.attachments !== undefined && (
            <img
              src="/assets/User Profile.svg"
              alt="plus"
              className="w-4 h-4"
            />
          )}
          <Box
            display="flex"
            alignItems="center"
            bgcolor="grey.100"
            px={1}
            py={0.2}
            borderRadius={1}
            gap={0.5}
          >
            <img src="/assets/Flash.svg" alt="plus" className="w-3 h-3" />

            <Typography variant="caption" color="grey.600">
              {task.priority
                ? task.priority.charAt(0).toUpperCase() + task.priority.slice(1)
                : ""}
            </Typography>
          </Box>
        </Box>

        {(task.hasimg ||
          task.title.toLowerCase().includes("feedback") ||
          task.title.toLowerCase().includes("wireframe")) && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={1}
          >
            <img
              src="/assets/Upload.svg"
              alt="Upload"
              style={{
                width: 220,
                height: "auto", 
                maxHeight: 100,
                borderRadius: 9,
              }}
            />
          </Box>
        )}

        <Box borderBottom={1} borderColor="grey.100" my={1} />

        <Box display="flex" alignItems="center" gap={2} color="grey.500">
          {task.attachments !== undefined && (
            <Box display="flex" alignItems="center" gap={0.5}>
              <img src="/assets/link.svg" alt="plus" className="w-4 h-4" />
              <Typography variant="caption">{task.attachments}</Typography>
            </Box>
          )}
          {task.comments !== undefined && (
            <Box display="flex" alignItems="center" gap={0.5}>
              <img
                src="/assets/Message.svg"
                alt="Message"
                style={{ width: 15, height: 15 }}
              />
              <Typography variant="caption">{task.comments}</Typography>
            </Box>
          )}
          {task.dueDate && (
            <Box display="flex" alignItems="center" gap={0.5}>
              <img
                src="/assets/Calendar.svg"
                alt="plus"
                style={{ width: 15, height: 15 }}
              />{" "}
              <Typography variant="caption">Due: {task.dueDate}</Typography>
            </Box>
          )}
          {task.reports && (
            <Box
              display="flex"
              alignItems="center"
              gap={0.5}
              color="error.main"
              fontWeight={700}
            >
              <img src="/assets/RedReport.svg" alt="plus" className="w-3 h-3" />{" "}
              <Typography variant="caption">{task.reports} Reports</Typography>
            </Box>
          )}
          {task.hasStream && (
            <Box
              display="flex"
              alignItems="center"
              gap={0.5}
              color="primary.main"
              fontWeight={700}
            >
              <img src="/assets/Bell.svg" alt="plus" className="w-3 h-3" />
              <Typography variant="caption">Stream</Typography>
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
