import Link from "next/link"
import { SVGProps } from "react"
import { NavLink } from "./navigation-link"

export default function Navigation() {
  return (
    <header className="sticky top-0 bg-gradient-to-b from-slate-200 via-slate-100 to-slate-100/0 px-3 pb-1 pt-3">
      <nav className="mx-auto my-6 flex max-w-3xl items-center justify-between rounded-full bg-white px-6 py-4 shadow shadow-slate-500/20">
        <Link
          href="/"
          className="relative flex w-14 origin-left transform-gpu text-red-600 transition hover:scale-150 hover:text-red-400">
          <Logo className="w-14" />
        </Link>
        <ul className="flex items-center space-x-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/bio">Bio</NavLink>
          <NavLink href="/posts">Writing</NavLink>
        </ul>
      </nav>
    </header>
  )
}

function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 44" {...props}>
      <path
        fill="currentColor"
        d="M14.35 19.02c-1.68 0-2.99-.46-3.91-1.4-.93-.93-1.39-2.31-1.39-4.15V9.22H6.1v-3.6h2.95V1.65l4.35-.5v4.47h4.8v3.6h-4.8v3.8c0 .82.17 1.4.5 1.76.33.35.9.52 1.67.52a4.5 4.5 0 0 0 2.43-.73l-.55 3.75c-.35.24-.78.41-1.3.53a8.1 8.1 0 0 1-1.8.17Zm5.87-13.39h4.35v13.1h-4.35V5.63Zm2.2-.93c-.8 0-1.42-.21-1.86-.64a2.23 2.23 0 0 1-.66-1.68c0-.7.22-1.27.66-1.71A2.49 2.49 0 0 1 22.41 0c.8 0 1.4.22 1.84.65.43.43.65 1 .65 1.71s-.21 1.28-.64 1.7c-.42.43-1.04.64-1.84.64Zm4.9.93h4.35V9.7c.24-1.55.67-2.67 1.3-3.35.62-.68 1.56-1.02 2.83-1.02 1.35 0 2.4.38 3.17 1.14a5.03 5.03 0 0 1 1.35 3.18c.24-1.53.68-2.64 1.32-3.31.64-.68 1.58-1.01 2.83-1.01 1.5 0 2.64.46 3.42 1.4.77.93 1.16 2.2 1.16 3.8l-.05 8.2-4.3.5V11.4c0-.72-.2-1.28-.58-1.69-.38-.4-.92-.61-1.62-.61-.48 0-.9.09-1.28.26-.36.18-.65.43-.85.77v8.6h-4.35V11.4c0-.72-.19-1.28-.57-1.69-.38-.4-.93-.61-1.63-.61a3 3 0 0 0-1.27.26 2.1 2.1 0 0 0-.88.79v8.58h-4.35V5.63ZM2.95 29.15H.5v-3.5h2.45v-.52c0-1.6.47-2.83 1.41-3.67.94-.84 2.32-1.26 4.14-1.26.43 0 .83.03 1.2.1s.67.17.9.3l.6 3.32a3.71 3.71 0 0 0-.88-.28c-.3-.06-.61-.09-.95-.09-.71 0-1.24.15-1.57.44-.33.29-.5.74-.5 1.36v.3h3.88v3.5H7.3v9.6H2.95v-9.6Zm22.87 8.55c-.61.42-1.4.75-2.37.99-.97.24-2.05.36-3.25.36-1.7 0-3.15-.28-4.35-.84a6.06 6.06 0 0 1-2.73-2.37 6.92 6.92 0 0 1-.92-3.64c0-1.28.3-2.45.89-3.49a6.26 6.26 0 0 1 2.58-2.46c1.14-.6 2.49-.9 4.05-.9 1.5 0 2.78.3 3.82.89a5.63 5.63 0 0 1 2.33 2.47c.52 1.06.78 2.29.78 3.69v.65H15.27v-2.42h8.25l-.87.55a3.6 3.6 0 0 0-.39-1.45 2.49 2.49 0 0 0-.99-1.03 3.16 3.16 0 0 0-1.6-.38 3.2 3.2 0 0 0-1.75.47c-.48.3-.84.72-1.07 1.25-.23.52-.35 1.1-.35 1.73v.53a2.85 2.85 0 0 0 1.94 2.87c.64.25 1.43.38 2.36.38 1.15 0 2.22-.18 3.22-.54 1-.36 1.86-.87 2.58-1.53l-.78 4.22Zm15.95 0c-.61.42-1.4.75-2.37.99-.97.24-2.05.36-3.25.36-1.7 0-3.15-.28-4.35-.84a6.06 6.06 0 0 1-2.73-2.37 6.92 6.92 0 0 1-.92-3.64c0-1.28.3-2.45.89-3.49a6.26 6.26 0 0 1 2.58-2.46c1.14-.6 2.49-.9 4.05-.9 1.5 0 2.78.3 3.82.89a5.63 5.63 0 0 1 2.33 2.47c.52 1.06.78 2.29.78 3.69v.65H31.22v-2.42h8.25l-.87.55a3.6 3.6 0 0 0-.39-1.45 2.49 2.49 0 0 0-.99-1.03 3.16 3.16 0 0 0-1.6-.38 3.2 3.2 0 0 0-1.75.47c-.48.3-.84.72-1.07 1.25-.23.52-.35 1.1-.35 1.73v.53a2.85 2.85 0 0 0 1.94 2.87c.64.25 1.43.38 2.36.38 1.15 0 2.22-.18 3.22-.54 1-.36 1.86-.87 2.58-1.53l-.78 4.22Zm2.9-17.2 4.35-.5v18.75h-4.35zm20.15 17.2c-.61.42-1.4.75-2.37.99-.97.24-2.05.36-3.25.36-1.7 0-3.15-.28-4.35-.84a6.06 6.06 0 0 1-2.73-2.37 6.92 6.92 0 0 1-.92-3.64c0-1.28.3-2.45.89-3.49a6.26 6.26 0 0 1 2.58-2.46c1.14-.6 2.49-.9 4.05-.9 1.5 0 2.77.3 3.82.89a5.63 5.63 0 0 1 2.33 2.47c.52 1.06.78 2.29.78 3.69v.65H54.27v-2.42h8.25l-.87.55a3.6 3.6 0 0 0-.39-1.45 2.49 2.49 0 0 0-.99-1.03 3.16 3.16 0 0 0-1.6-.38 3.2 3.2 0 0 0-1.75.47c-.48.3-.84.72-1.07 1.25-.23.52-.35 1.1-.35 1.73v.53a2.85 2.85 0 0 0 1.94 2.87c.64.25 1.43.38 2.36.38 1.15 0 2.22-.18 3.22-.54 1-.36 1.86-.87 2.58-1.53l-.78 4.22Zm5.68 5.55a8.6 8.6 0 0 1-1.36-.11 5.24 5.24 0 0 1-1.2-.34l-.57-3.8c.59.27 1.25.4 2 .4.6 0 1.04-.12 1.32-.36.27-.24.53-.66.78-1.27l.08-.17-5.2-11.95h4.7l2.85 7.25 2.77-7.25h4.53L75.52 39.5c-.38.95-.78 1.7-1.2 2.23-.41.53-.92.92-1.52 1.16-.6.24-1.37.36-2.3.36Z"
      />
    </svg>
  )
}
