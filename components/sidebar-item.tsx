"use client";

import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  label: string;
  iconSrc?: string; // Optional string for the icon source
  icon?: ReactNode; // Optional React element for the icon
  href: string;
};

export const SidebarItem = ({ label, iconSrc, icon, href }: Props) => {
  return (
    <Link className="flex justify-start items-center text-2xl" href={href}>
      {icon ? (
        <div className="mr-5">{icon}</div> // Rendering the icon if provided
      ) : (
        iconSrc && (
          <Image
            src={iconSrc}
            alt={label}
            className="mr-5"
            height={32}
            width={32} // Adjusted width to match height for square icons
          />
        )
      )}
      {label}
    </Link>
  );
};
