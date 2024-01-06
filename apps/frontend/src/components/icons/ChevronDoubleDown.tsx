import { ComponentProps, FC } from "react"
import { twMerge } from "tailwind-merge"

const ChevronDoubleDown: FC<ComponentProps<"svg">> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={props.strokeWidth ?? 1.5}
      stroke="currentColor"
      className={twMerge("h-6 w-6", props.className)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
      />
    </svg>
  )
}

export default ChevronDoubleDown
