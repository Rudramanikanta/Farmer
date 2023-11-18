import React from 'react'
import {twMerge} from 'tailwind-merge'
export default function Samdisplay({className}) {
  return (
    <div
    className={twMerge(`
      h-fit 
      bg-gradient-to-b 
      from-emerald-800 
      p-6
      `,
      className
    )}>
    <div className="w-full mb-4 flex items-center justify-between">
       
      <div className="hidden md:flex gap-x-2 items-center">
        </div>
        </div>
        </div>
  )
}
