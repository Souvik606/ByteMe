"use client";

import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface Props {
  fullName: string;
  avatar: string;
  email: string;
}

const Sidebar = ({ fullName, avatar, email }: Props) => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <Link href="/">
        <div className="flex items-center space-x-2">
          <Image
            src="/mobile-logo.png"
            alt="logo"
            width={50}
            height={50}
            className="hidden h-auto md:block"
          />
          <p className="hidden text-3xl font-bold text-brand-100 lg:block">
            ByteMe
          </p>
        </div>
      </Link>

      <nav className="sidebar-nav">
        <ul className="flex flex-1 flex-col gap-4">
          {navItems.map(({ url, name, icon }) => (
            <Link key={name} href={url} className="lg:w-full">
              <li
                className={cn(
                  "sidebar-nav-item",
                  pathname === url && "shad-active",
                )}
              >
                <Image
                  src={icon}
                  alt={name}
                  width={24}
                  height={24}
                  className={cn(
                    "nav-icon",
                    pathname === url && "nav-icon-active",
                  )}
                />
                <p className="hidden text-lg font-bold lg:block">{name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>

      <Image
        src="/file-bg.png"
        alt="file"
        width={506}
        height={418}
        className="hidden w-full lg:block"
      />

      <div className="sidebar-user-info">
        <Image
          src={avatar}
          alt="Avatar"
          width={44}
          height={44}
          className="sidebar-user-avatar"
        />
        <div className="hidden lg:block">
          <p className="font-bold">{fullName}</p>
          <p className="text-xs">{email}</p>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
