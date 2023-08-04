import { LucideIcon } from 'lucide-react'
import React from 'react'

interface HeadingWithIconProps {
  icon: LucideIcon;
  label: string;
}

const HeadingWithIcon: React.FunctionComponent<HeadingWithIconProps> = ({
  label,
  icon: Icon
}) => {
  return (
    <div className="flex items-center gap-4">
      <Icon className='h-6 w-6 text-blue-500' />
      <h3 className='text-xl font-bold'>{label} </h3>
    </div>
  )
}

export default HeadingWithIcon; 
