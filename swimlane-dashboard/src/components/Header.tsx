'use client'
import React, { useState, useCallback } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { useTaskStore } from "../store/useTaskStore";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const { setSearchQuery: setStoreSearchQuery } = useTaskStore();

  const debouncedSearch = useCallback(
    (query: string) => {
      const timeoutId = setTimeout(() => {
        setStoreSearchQuery(query);
      }, 300);
      return () => clearTimeout(timeoutId);
    },
    [setStoreSearchQuery]
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };

  return (
    <>
      <header
        className="border-b bg-white"
        style={{ borderColor: "#E6E8EC" }}
      >
        <div
          className="flex items-center justify-between pl-[35px] pr-2 sm:pr-6 w-full max-w-[1440px] h-[80px]"
        >
          {/* Left: Logo and App Name */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <img
              src="/assets/logo.svg"
              alt="Logo"
              className="h-8 w-8"
              style={{ minWidth: 32, minHeight: 32 }}
            />
          </div>

          {/* Right: Actions */}
          <div className="flex items-center flex-nowrap">
            {/* Create new board button (MUI) */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#3772FF",
                textTransform: "none",
                fontWeight: 700,
                borderRadius: 2,
                height: 48,
                minWidth: 140, 
                fontSize: 12,
                boxShadow: "0px 2px 8px rgba(55, 125, 255, 0.10)",
                "&:hover": { backgroundColor: "#2563eb" },
              }}
              className="hidden md:flex"
            >
              Create new board
              <img
                src="/assets/plus.svg"
                alt="plus"
                className="w-6 h-6"
              />
            </Button>
            
            <div className="w-[30px]"></div>
            <div className="flex items-center gap-[48px]">
              <TextField
                variant="outlined"
                placeholder="Search tasks ..."
                size="small"
                value={searchQuery}
                onChange={handleSearchChange}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img
                        src="/assets/search.svg"
                        alt="search"
                        className="w-6 h-6"
                      />
                    </InputAdornment>
                  ),
                  sx: {
                    borderRadius: 2,
                    background: "#F4F5F7",
                    height: 48,
                    "& fieldset": { border: "none" },
                  },
                }}
              />
              {/* Icons group: settings, notification, user */}
              <div className="flex items-center gap-[14px]">
                <img
                  src="/assets/Settings.svg"
                  alt="settings"
                  className="w-6 h-6"
                />
                <img
                  src="/assets/NotificationBell.svg"
                  alt="notifications"
                  className="w-6 h-6"
                />
                <img
                  src="/assets/User profile.svg"
                  alt="user"
                  className="w-6 h-6 rounded-full bg-[#E6E8EC]"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}