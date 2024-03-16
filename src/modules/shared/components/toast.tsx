import React from "react";

export const Toast = (
    {message, toastType = 'info', closeToast }: { 
        message: string, 
        toastType?: 'info' | 'success' | 'warning' | 'error',
        closeToast?: () =>{}
    }) => {
    return (
    <div className="toast">
        <div className={`alert ${getAlertClass(toastType)}`}>
            <span>{ message }</span>
            <button onClick={closeToast}>
            <svg xmlns="http://www.w3.org/2000/svg" 
                className="h-3 w-3" 
                fill="none" viewBox="0 0 24 24" 
                stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>
    </div>
  )
}

const getAlertClass = (toastType: string) => {
    switch (toastType) {
      case 'success':
        return 'alert-success';
      case 'error':
        return 'alert-error';
      default:
        return 'alert-info';
    }
  };