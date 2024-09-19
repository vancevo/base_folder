"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect } from "react";



export default function NavLink() {
  const pathName = usePathname();
  const menus = [
    {
      id: 1,
      label: "Feature01",
      href: `/dashboard/feature01`,
      isActive: pathName === `/dashboard/feature01`
    },
    {
      id: 2,
      label: "Feature02",
      href:`/dashboard/feature02`,
      isActive: pathName === `/dashboard/feature02`
    },
  ];

//   useEffect(() => {
    
//   }, [])

  return (
    <div className="my-4 flex gap-4">
      {menus.map((menu) => (
        <Link key={menu.id} href={menu.href} className={`${menu.isActive ? 'bg-amber-200' : ''}`}>
          {menu.label}
        </Link>
      ))}
    </div>
  );
}
