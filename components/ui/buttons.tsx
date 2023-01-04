import React from 'react'

type ButtonProps = {
    children: React.ReactNode,
    isLoading?: boolean,
    loadingText?: string,
}

const baseButtonStyle = "rounded-full px-10 py-2 border";

export const ButtonPrimary = ({ children, isLoading, loadingText, ...props } : ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  
  if (isLoading) {
    return (
      <button { ...props } disabled className={baseButtonStyle+" disabled:opacity-75 bg-dark align-middle text-light border-primary hover:bg-dark hover:text-primary hover:border-dark hover:drop-shadow-xl font-bold transition-all duration-300"} >
          <div className="flex items-center justify-center gap-x-2">
            <div className="animate-spin w-5 h-5 border-b-0 border-l-0 border-primary border-2 rounded-full mr-2" />
            { loadingText }
          </div>
      </button>
    )
  }
  return (
    <button { ...props } className={baseButtonStyle+" bg-primary align-middle text-light border-primary hover:bg-dark hover:text-primary hover:border-dark hover:drop-shadow-xl font-bold transition-all duration-300"} >
        { children }
    </button>
  )
}

export const ButtonPrimaryOutline = ({ children, ...props } : ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
      <button { ...props } className={baseButtonStyle+" border-primary text-primary hover:bg-light hover:text-dark hover:border-light hover:drop-shadow-xl font-bold transition-all duration-300"} >
          { children }
      </button>
    )
  }

  export const ButtonWhite = ({ children, ...props } : ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
      <button { ...props } className={baseButtonStyle+" bg-lightSecondary text-dark dark:bg-transparent dark:border-light dark:text-light hover:bg-light hover:text-dark dark:hover:bg-lightSecondary dark:hover:border-dark dark:hover:text-dark hover:drop-shadow-2xl font-bold transition-all duration-300"} >
          { children }
      </button>
    )
  }

  export const ButtonDark = ({ children, ...props } : ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
      <button { ...props } className={baseButtonStyle+" bg-dark dark:bg-transparent dark:border-light dark:text-light text-light border-dark hover:bg-light hover:text-dark dark:hover:border-light dark:hover:text-primary dark:hover:border-primary hover:drop-shadow-2xl font-bold transition-all duration-300"} >
          { children }
      </button>
    )
  }
