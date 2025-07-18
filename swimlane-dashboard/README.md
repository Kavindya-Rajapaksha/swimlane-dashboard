# Swimlane Dashboard

A modern, drag-and-drop project management dashboard built with Next.js, React, Zustand, Material UI, and Tailwind CSS. The Swimlane Dashboard helps teams organize, track, and manage tasks visually using swimlanes and columns, similar to a Kanban board.

---

## 🚀 Features

- **Visual Task Management:** Organize tasks into columns (To Do, In Progress, Approved, Reject) with drag-and-drop support.
- **Project Overview:** View project cards with status, team members, and quick actions.
- **Sidebar Navigation:** Access boards, messages, calendar, team members, and support from a responsive sidebar.
- **Task Details:** Each task supports categories, assignees, attachments, comments, due dates, priorities, and more.
- **User Avatars:** Visual representation of team members assigned to tasks.
- **Persistent State:** Uses Zustand for state management and persistence.
- **Responsive UI:** Built with Material UI and Tailwind CSS for a modern, mobile-friendly experience.

---

## 📦 Tech Stack

- [Next.js](https://nextjs.org/) 15+
- [React](https://react.dev/) 19+
- [Material UI](https://mui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [dnd-kit](https://dndkit.com/) (drag-and-drop)
- TypeScript

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm, yarn, pnpm, or bun

### Installation

Clone the repository and install dependencies:

```bash
git clone <repo-url>
cd swimlane-dashboard
npm install # or yarn or pnpm or bun
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the dashboard.

### Building for Production

```bash
npm run build
npm start
```

---

## 📁 Folder Structure

```
src/
  app/           # Next.js app directory (pages, layout, global styles)
  components/    # Reusable React components (Board, Column, TaskCard, etc.)
  data/          # Static data (tasks, users, columns)
  store/         # Zustand state management
  theme/         # Theme and color definitions
  utils/         # Utility functions
public/assets/   # SVG icons and imgs
```

---

## ✨ Credits

- [Next.js](https://nextjs.org/)
- [Material UI](https://mui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [dnd-kit](https://dndkit.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)

---

