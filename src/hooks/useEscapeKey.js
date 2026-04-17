import React from 'react';


function useEscapeKey(onEscape) {
    // Code to dismiss all toasts

    React.useEffect(() => {
        function handleKeyDown(event) {
          if (event.code === 'Escape') {
            onEscape?.();
          }
        }
    
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, [onEscape])

};

export default useEscapeKey;