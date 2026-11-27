import { type ReactNode } from "react"

type ButtonProps = {
    children: ReactNode;
    className?: string;
}
const Button = ({ children, className="" }:ButtonProps) => {
  return (
    <button className={`bg-violet-600 hover:bg-violet-500 transition-colors rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed ${className}`}>{children}</button>
  )
}

export default Button