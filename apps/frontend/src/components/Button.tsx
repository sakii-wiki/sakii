import { ComponentProps, FC } from 'react'
import { twMerge } from 'tailwind-merge'

const Button: FC = (props: ComponentProps<'button'>) => {
  return (
    <button
      {...props}
      className={twMerge(
        'flex flex-row items-center rounded-lg bg-neutral-100 px-4 py-2 transition duration-200 hover:bg-neutral-200',
        props.className,
      )}
    ></button>
  )
}

export default Button
