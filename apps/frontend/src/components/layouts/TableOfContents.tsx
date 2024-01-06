"use client"

import { NextPage } from "next"
import Button from "../Button"
import ChevronDoubleDown from "../icons/ChevronDoubleDown"
import { useRef, useState } from "react"

const TableOfContents: NextPage = () => {
  const [open, setOpen] = useState(false)
  const tobContainer = useRef<HTMLDivElement>(null)
  const tobContainerRect = tobContainer.current?.getBoundingClientRect()
  const tobHeader = useRef<HTMLDivElement>(null)
  const tobHeaderRect = tobHeader.current?.getBoundingClientRect()

  console.log(tobHeaderRect, "Rect")

  return (
    <div
      ref={tobContainer}
      style={{
        transform: open
          ? `translateY(calc(100% - ${
              (tobHeaderRect?.top ?? 0) -
              (tobContainerRect?.top ?? 0) +
              (tobHeaderRect?.height ?? 0)
            }px - 8px))`
          : "",
      }}
      className={`transition duration-300 bg-neutral-200/50 backdrop-blur-md rounded-xl py-3 px-4 w-60 flex flex-col gap-y-1`}
    >
      <header className="flex flex-row items-center justify-between" ref={tobHeader}>
        <p className="text-2xl font-bold">목차</p>
        <Button className="p-1" onClick={() => setOpen((prev) => !prev)}>
          <ChevronDoubleDown
            className={`w-5 h-5 transition duration-300 ${open ? "rotate-180" : ""}`}
          />
        </Button>
      </header>
      <div className="py-1"></div>
      <p className="text-base">1. 개요</p>
      <p className="text-base">2. 역사</p>
      <div className="flex flex-col pl-4 gap-y-1">
        <p className="text-base">2.1. 고대</p>
        <p className="text-base">2.2. 현대</p>
      </div>
      <p className="text-base">3. 여담</p>
    </div>
  )
}

export default TableOfContents
