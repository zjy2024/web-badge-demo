import React from 'react'

type BadgeProps = {
  value: number;
  badgeContainerStyle?: React.CSSProperties;
  badgeStyle?: React.CSSProperties;
  children: React.ReactNode
}

export const Badge: React.FC<BadgeProps> = props => {
  const { children, value, badgeContainerStyle = {}, badgeStyle = {} } = props
  return (
    <div style={{ position: 'relative', ...badgeContainerStyle }}>
      {children}
      <div className="w-50 h-50 bg-red-500 rounded-full absolute"
           style={{ top: '-6px', right: '-6px', zIndex: 10, ...badgeStyle }}>
        {value}
      </div>
    </div>
  )
}
