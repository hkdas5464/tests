import { sidebarLinks } from "../constants";
import {
  Home,
  Video,
  ListVideo,
  User,
  History,
  Flame,
  Music,
  Gamepad2,
  Trophy,
  Youtube,
  CirclePlay,
  Blocks,
  Settings,
  Flag,
  CircleHelp,
  MessageSquareWarning,
} from "lucide-react";

const iconComponents = {
  Home,
  Video,
  ListVideo,
  User,
  History,
  Flame,
  Music,
  Gamepad2,
  Trophy,
  Youtube,
  CirclePlay,
  Blocks,
  Settings,
  Flag,
  CircleHelp,
  MessageSquareWarning,
};
import { HeaderLeftSection } from "./Navbar";
import React from "react";

// Sidebar component with conditional styling based on isSidebarOpen prop
const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <aside
      className={`
      ${
        isSidebarOpen
          ? "max-lg:left-0 w-64 px-3 max-md:px-2"
          : "max-lg:left-[-100%] w-0 px-0"
      } 
      max-lg:absolute max-lg:h-screen max-lg:top-0 pb-5 z-20 bg-white mb-2 overflow-y-auto  custom_scrollbar dark:bg-neutral-900
    `}
    >
      <div className="lg:hidden pb-4 pt-2 px-1 sticky top-0 bg-white dark:bg-neutral-900">
        <HeaderLeftSection toggleSidebar={toggleSidebar} />
      </div>

      {sidebarLinks.map((category, catIndex) => (
        <div key={catIndex}>
          <h4
            className={`text-base font-medium mb-2 ml-2 ${category.categoryTitle && "mt-4"} whitespace-nowrap overflow-hidden text-ellipsis dark:text-neutral-300`}
          >
            {category.categoryTitle}
          </h4>
          {category.links.map((link, index) => {
            const IconComponent = iconComponents[link.icon];
            return (
              <React.Fragment key={`${catIndex}-${index}`}>
                <Link link={link} IconComponent={IconComponent} />
                {index === category.links.length - 1 &&
                  catIndex !== sidebarLinks.length - 1 && (
                    <div className="h-[1px] w-full bg-neutral-200 dark:bg-neutral-700"></div>
                  )}
              </React.Fragment>
            );
          })}
        </div>
      ))}
    </aside>
  );
};

// Link component for each sidebar link
export const Link = ({ link, IconComponent }) => {
  return (
    <a
      href={link.url}
      className={`flex items-center py-2 px-3 rounded-lg  hover:bg-neutral-200 mb-2 whitespace-nowrap overflow-hidden text-ellipsis dark:text-neutral-300 dark:hover:bg-neutral-500`}
    >
      {IconComponent && <IconComponent className="mr-2 h-5 w-5" />}
      {link.title}
    </a>
  );
};

export default Sidebar;