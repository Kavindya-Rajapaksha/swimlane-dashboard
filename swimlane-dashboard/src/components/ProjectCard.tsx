import React from "react";
import {
  Box,
  Typography,
  Chip,
  Avatar,
  Button,
  Divider,
  Stack,
} from "@mui/material";

const avatars = [
  "/assets/User profile.svg",
  "/assets/User profile.svg",
  "/assets/User profile.svg",
];

const ProjectCard = () => {
  return (
    <Box sx={{ maxWidth: "100%", maxHeight: 174,  background: "#fff" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 6, mb: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          Sport Xi Project
        </Typography>
        <Chip
          label="In progress"
          size="small"
          sx={{
            borderRadius: 1.5,
            backgroundColor: "#FFA800",
            color: "#23272E",
            fontWeight: 600,
            fontSize: 10,
            width: 81,
            height: 20,
          }}
        />
      </Box>
      {/* Subtitle */}
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        event production
      </Typography>
      {/* Assigned Avatars and Manage Button */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ minWidth: 60 }}
        >
          assigned
        </Typography>
        <Stack direction="row" spacing={-1} sx={{ mr: 1 }}>
          {avatars.map((src, idx) => (
            <Avatar
              key={idx}
              src={src}
              sx={{
                width: 28,
                height: 28,
                border: "2px solid #fff",
                fontSize: 14,
              }}
            />
          ))}
          <Avatar
            sx={{
              width: 28,
              height: 28,
              fontSize: 14,
              background: "#E6E8EC",
              color: "#23272E",
              border: "2px solid #fff",
            }}
          >
            +2
          </Avatar>
        </Stack>
        <Button
          variant="outlined"
          size="small"
          endIcon={
            <img
              src="/assets/Pencil.svg"
              alt="pencil"
              style={{ width: 13.26, height: 13.26, marginLeft: 4 }}
            />
          }
          sx={{
            width:101,
            textTransform: "none",
            borderRadius: 4,
            fontWeight: 500,
            fontSize: 12,
            minWidth: 120,
            color: "#B1B5C3",
            borderColor: "#E6E8EC",
            background: "#fff",
            borderWidth: 2,
            "&:hover": {
              borderColor: "#E6E8EC",
              background: "#fff",
            },
          }}
        >
          Manage
        </Button>
      </Box>
      <Divider sx={{ my: 2 }} />
      {/* Last updated */}
      <Typography variant="caption" color="text.secondary">
        Last updated on: 04 April, 2022
      </Typography>
    </Box>
  );
};

export default ProjectCard;
