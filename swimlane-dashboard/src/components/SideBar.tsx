"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
  Badge,
  Divider,
  IconButton,
  Drawer,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  ChevronRight as ChevronRightIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";


interface BoardItem {
  name: string;
  active: boolean;
}

interface SideBarContentProps {
  boardsOpen: boolean;
  handleBoardsClick: () => void;
  boardItems: BoardItem[];
  isMobile: boolean;
  onClose: () => void;
  workspace?: string;
  handleWorkspaceChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SideBarContent = ({
  boardsOpen,
  handleBoardsClick,
  boardItems,
  isMobile,
  onClose,
}: SideBarContentProps) => (
  <Box
    sx={{
      width: 288,
      height: 'calc(100vh - 80px)',
      backgroundColor: "#f8f9fa",
      borderRight: "1px solid #e0e0e0",
      display: "flex",
      flexDirection: "column",
    }}
  >
    {isMobile && (
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 1,
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            background: "#fff",
            boxShadow: 1,
            borderRadius: 2,
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    )}
    
    <Box
      sx={{
        width: 240,
        height: 64,
        p: 1,
        borderBottom: "1px solid #e0e0e0",
        borderRadius: "12px",
        m: 2,
        background: "#fff",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", gap: 1, width: "100%" }}
      >
        <img
          src="/assets/User profile.svg"
          alt="user"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ lineHeight: 1, mb: 0.5 }}
          >
            workspace
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 700, color: "#23272E", lineHeight: 1 }}
          >
            Root folder
          </Typography>
        </Box>

        <Box
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <img
            src="/assets/ArrowDown.svg"
            alt="user"
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
    </Box>
    <List sx={{ flex: 1, py: 1 }}>
      <ListItem disablePadding>
        <ListItemButton
          sx={{
            mx: 1,
            borderRadius: 1,
            "&:hover": {
              backgroundColor: "#e2e8f0",
            },
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <img
            src="/assets/Dashboard.svg"
            alt="dashboard"
            style={{ width: 24, height: 24, objectFit: "cover" }}
          />
          <ListItemText
            primary="Dashboard"
            primaryTypographyProps={{
              fontSize: "14px",
              color: "#4a5568",
            }}
          />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton
          onClick={handleBoardsClick}
          sx={{
            mx: 1,
            borderRadius: 1,
            backgroundColor: boardsOpen ? "#e3f2fd" : "transparent",
            "&:hover": {
              backgroundColor: boardsOpen ? "#e3f2fd" : "#e2e8f0",
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 36 }}>
            <img
              src={boardsOpen ? "/assets/Boards.svg" : "/assets/File.svg"}
              alt="boards"
              style={{ width: 24, height: 24, objectFit: "cover" }}
            />
          </ListItemIcon>
          <ListItemText
            primary="Boards"
            primaryTypographyProps={{
              fontSize: "14px",
              fontWeight: 500,
              color: boardsOpen ? "#1976d2" : "#4B5563",
            }}
          />
          {boardsOpen ? (
            <ExpandLess sx={{ color: "#1976d2" }} />
          ) : (
            <ExpandMore sx={{ color: "#4B5563" }} />
          )}
        </ListItemButton>
      </ListItem>
      <Collapse in={boardsOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {boardItems.map((item: BoardItem, index: number) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                sx={{
                  ml: 2,
                  mr: 1,
                  borderRadius: 1,
                  backgroundColor: item.active ? "#e3f2fd" : "transparent",
                  "&:hover": {
                    backgroundColor: item.active ? "#e3f2fd" : "#e2e8f0",
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 24 }}>
                  <ChevronRightIcon
                    fontSize="small"
                    sx={{
                      color: item.active ? "#1976d2" : "#a0aec0",
                      fontSize: "16px",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{
                    fontSize: "13px",
                    color: item.active ? "#1976d2" : "#718096",
                    fontWeight: item.active ? 500 : 400,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
      <ListItem disablePadding>
        <ListItemButton
          sx={{
            mx: 1,
            borderRadius: 1,
            "&:hover": {
              backgroundColor: "#e2e8f0",
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 36, color: "#718096" }}>
            <img
              src="/assets/Message.svg"
              alt="dashboard"
              style={{ width: 24, height: 24, objectFit: "cover" }}
            />
          </ListItemIcon>
          <div style={{ display: "flex", alignItems: "center", gap: 125 }}>
            <ListItemText
              primary="Messages"
              primaryTypographyProps={{
                fontSize: "14px",
                color: "#4a5568",
              }}
            />
            <Badge
              badgeContent={3}
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#f56500",
                  color: "white",
                  fontSize: "11px",
                  height: "18px",
                  minWidth: "18px",
                },
              }}
            />
          </div>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton
          sx={{
            mx: 1,
            borderRadius: 1,
            "&:hover": {
              backgroundColor: "#e2e8f0",
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 36, color: "#718096" }}>
            <img
              src="/assets/Calendar.svg"
              alt="dashboard"
              style={{ width: 24, height: 24, objectFit: "cover" }}
            />
          </ListItemIcon>
          <ListItemText
            primary="Calendar"
            primaryTypographyProps={{
              fontSize: "14px",
              color: "#4a5568",
            }}
          />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton
          sx={{
            mx: 1,
            borderRadius: 1,
            "&:hover": {
              backgroundColor: "#e2e8f0",
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 36, color: "#718096" }}>
            <img
              src="/assets/User.svg"
              alt="dashboard"
              style={{ width: 24, height: 24, objectFit: "cover" }}
            />
          </ListItemIcon>
          <ListItemText
            primary="Team members"
            primaryTypographyProps={{
              fontSize: "14px",
              color: "#4a5568",
            }}
          />
        </ListItemButton>
      </ListItem>
    </List>
    <Box>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton
          sx={{
            mx: 1,
            borderRadius: 1,
            "&:hover": {
              backgroundColor: "#e2e8f0",
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 36, color: "#718096" }}>
            <img
            src="/assets/support.svg"
            alt="dashboard"
            style={{ width: 24, height: 24, objectFit: 'cover' }}
          />
          </ListItemIcon>
          <ListItemText
            primary="Support"
            primaryTypographyProps={{
              fontSize: "14px",
              color: "#4a5568",
            }}
          />
        </ListItemButton>
      </ListItem>
      {/* Logout */}
      <ListItem disablePadding sx={{ mb: 1 }}>
        <ListItemButton
          sx={{
            mx: 1,
            borderRadius: 1,
            backgroundColor: "#2d3748",
            color: "white",
            "&:hover": {
              backgroundColor: "#1a202c",
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 36, color: "white" }}>
            <img
            src="/assets/LogOut.svg"
            alt="dashboard"
            style={{ width: 24, height: 24, objectFit: 'cover' }}
          />
          </ListItemIcon>
          <ListItemText
            primary="Logout"
            primaryTypographyProps={{
              fontSize: "14px",
              color: "white",
            }}
          />
        </ListItemButton>
      </ListItem>
    </Box>
  </Box>
);

const SideBar = () => {
  const [boardsOpen, setBoardsOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [workspace, setWorkspace] = useState("Root folder");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600); 
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleBoardsClick = () => {
    setBoardsOpen(!boardsOpen);
  };

  const handleWorkspaceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWorkspace(event.target.value);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const boardItems = [
    { name: "Create routes", active: false },
    { name: "Delepment React App", active: false },
    { name: "Sport Xi Project", active: true },
    { name: "Wordpress theme", active: false },
  ];

  const sidebarContent = (
    <SideBarContent
      boardsOpen={boardsOpen}
      handleBoardsClick={handleBoardsClick}
      boardItems={boardItems}
      workspace={workspace}
      handleWorkspaceChange={handleWorkspaceChange}
      isMobile={isMobile}
      onClose={handleDrawerClose}
    />
  );

  return (
    <>
      {isMobile && !drawerOpen && (
        <IconButton
          onClick={() => setDrawerOpen(true)}
          sx={{
            position: "fixed",
            top: 16,
            left: 16,
            zIndex: 2000,
            background: "#fff",
            boxShadow: 1,
            borderRadius: 2,
          }}
        >
          <MenuIcon />
        </IconButton>
      )}
      {!isMobile && (
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {sidebarContent}
        </Box>
      )}
      {isMobile && (
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={handleDrawerClose}
          PaperProps={{
            sx: { width: 288 },
          }}
        >
          {sidebarContent}
        </Drawer>
      )}
    </>
  );
};

export default SideBar;