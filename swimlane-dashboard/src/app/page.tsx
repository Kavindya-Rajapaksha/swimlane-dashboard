'use client';

import Board from "@/components/Board";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <div className="p-4">
        <ProjectCard />
      </div>
    <div>
        <Board />
      </div>
    </div>
  );
}