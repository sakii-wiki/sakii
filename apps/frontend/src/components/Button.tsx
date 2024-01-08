import { ComponentProps, FC } from "react"
import { twMerge } from "tailwind-merge"

const Button: FC<ComponentProps<"button">> = (props) => {
  return (
    <button
      {...props}
      className={twMerge(
        "flex flex-row items-center gap-x-2 rounded-xl bg-neutral-100 px-4 py-2 font-medium transition duration-200 hover:bg-neutral-200",
        props.className,
      )}
    ></button>
  )
}

export default Button
