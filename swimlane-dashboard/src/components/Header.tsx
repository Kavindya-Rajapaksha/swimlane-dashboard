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
  className="flex items-center pl-[35px] pr-[35px] w-screen h-[80px]"
>
          <div className="flex items-center flex-shrink-0">
            <img
              src="/assets/BoardApp.svg"
              alt="Logo"
              className="h-24 w-40 hidden md:block"
              style={{ minWidth: 32, minHeight: 32 }}
            />
            <img
              src="/assets/LogoOnly.svg"
              alt="Logo Only"
              className="ml-10 h-10 w-10 md:hidden"
              style={{ minWidth: 20, minHeight: 20 }}
            />
          </div>

          <div className="flex items-center ml-auto gap-[20px]">
            <div className="flex items-center gap-[10px] sm:gap-[20px] md:hidden">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#3772FF",
                  textTransform: "none",
                  fontWeight: 700,
                  borderRadius: 2,
                  height: 40,
                  minWidth: 40,
                  fontSize: 12,
                  boxShadow: "0px 2px 8px rgba(55, 125, 255, 0.10)",
                  "&:hover": { backgroundColor: "#2563eb" },
                  padding: 1,
                }}
              >
                Create
                <img
                  src="/assets/Plus.svg"
                  alt="plus"
                  className="w-5 h-5"
                />
              </Button>
              <TextField
                variant="outlined"
                placeholder="Search..."
                size="small"
                value={searchQuery}
                onChange={handleSearchChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img
                        src="/assets/Search.svg"
                        alt="search"
                        className="w-5 h-5"
                      />
                    </InputAdornment>
                  ),
                  sx: {
                    borderRadius: 2,
                    background: "#F4F5F7",
                    height: 36,
                    fontSize: 12,
                    "& fieldset": { border: "none" },
                    minWidth: 60,
                    maxWidth: 120,
                    marginLeft: 0,
                  },
                }}
                className="w-20 sm:w-28"
              />
              <img
                src="/assets/Settings.svg"
                alt="settings"
                className="w-6 h-6 md:hidden"
              />
              <img
                src="/assets/NotificationBell.svg"
                alt="notifications"
                className="w-6 h-6 md:hidden"
              />
              <img
                src="/assets/User profile.svg"
                alt="user"
                className="w-6 h-6 rounded-full bg-[#E6E8EC] md:hidden"
              />
            </div>

            {/* Medium and up: Create, search, icons */}
            <div className="hidden md:flex items-center gap-[20px]">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#3772FF",
                  textTransform: "none",
                  fontWeight: 700,
                  borderRadius: 2,
                  height: 48,
                  minWidth: 170,
                  fontSize: 12,
                  boxShadow: "0px 2px 8px rgba(55, 125, 255, 0.10)",
                  "&:hover": { backgroundColor: "#2563eb" },
                }}
              >
                Create new board
                <img
                  src="/assets/Plus.svg"
                  alt="plus"
                  className="w-6 h-6"
                />
              </Button>
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
                        src="/assets/Search.svg"
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
                    minWidth: 120,
                    maxWidth: 240,
                  },
                }}
                className="w-28 md:w-40 lg:w-56 xl:w-72 2xl:w-96"
              />
              {/* Icons group with right margin */}
              <div className="flex items-center gap-[20px] mr-[40px]">
                <img src="/assets/Settings.svg" alt="settings" className="w-6 h-6" />
                <img src="/assets/NotificationBell.svg" alt="notifications" className="w-6 h-6" />
                <img src="/assets/User profile.svg" alt="user" className="w-6 h-6 rounded-full bg-[#E6E8EC]" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}