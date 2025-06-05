
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";

const FloatingDock = ({ items = [], desktopClassName, mobileClassName }) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockDesktop = ({ items, className }) => {
  return (
    <div
      className={cn(
        "mx-auto hidden md:flex h-16 gap-4 items-center rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4 pb-3 fixed bottom-8 left-1/2 transform -translate-x-1/2",
        className
      )}
    >
      {items.map((item) => (
        <Link
          to={item.href}
          key={item.title}
          className="h-10 w-10 rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

const FloatingDockMobile = ({ items, className }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("relative block md:hidden", className)}>
      {open && (
        <div className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2">
          {items.map((item) => (
            <Link
              to={item.href}
              key={item.title}
              className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-800 flex items-center justify-center"
        aria-label="Toggle navigation"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
      </button>
    </div>
  );
};

export default FloatingDock;
