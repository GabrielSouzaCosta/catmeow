import React from 'react'

type ButtonProps = {
    children: React.ReactNode,
}

const baseButtonStyle = "rounded-full px-10 py-2 border";

export const ButtonPrimary = ({ children, ...props } : ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button { ...props } className={baseButtonStyle+" bg-primary text-light border-primary"} >
        { children }
    </button>
  )
}

export const ButtonPrimaryOutline = ({ children, ...props } : ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
      <button { ...props } className={baseButtonStyle+" border-primary text-primary"} >
          { children }
      </button>
    )
  }

  export const ButtonWhite = ({ children, ...props } : ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
      <button { ...props } className={baseButtonStyle+" bg-lightSecondary text-secondary"} >
          { children }
      </button>
    )
  }

  export const ButtonDark = ({ children, ...props } : ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
      <button { ...props } className={baseButtonStyle+" bg-dark text-light"} >
          { children }
      </button>
    )
  }
