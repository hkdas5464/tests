'use client'
import Navbar from "./layout/Navbar";
import { categories, videos } from "./constants";
import VideoItem from "./components/VideoItem";
import CategoryPill from "./components/CategoryPill";
import Sidebar from "./layout/Sidebar";
import { useEffect, useState } from "react";

const YoutubeApp = () => {
  // State to control sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Hide sidebar on mobile by default
  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setIsSidebarOpen(false);
    }
  }, []);

  // Toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="max-h-screen flex flex-col dark:bg-neutral-900">
      {/* <Navbar toggleSidebar={toggleSidebar} /> */}
      <div className="flex overflow-auto">
        {/* <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} /> */}
        <div className="w-full px-4 max-md:px-3 pl-7 overflow-x-hidden custom_scrollbar">
          <div className="flex w-full gap-3 overflow-x-auto no_scrollbar pb-3 sticky top-0 z-10 bg-white dark:bg-neutral-900">
            {/* Mapping through categories to render a CategoryPill for each
            {categories.map((category) => (
              <CategoryPill key={category} category={category} />
            ))} */}
          </div>
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mt-5 pb-6">
            {/* Mapping through videos to render a VideoItem for each */}
            {videos.map((video) => (
              <VideoItem key={video.id} video={video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeApp;