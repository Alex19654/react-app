import { useEffect } from "react";

function useEscape(action) {

   useEffect(() => {
      function onKeyPress(e) {
         if(e.key === "Escape") action()
      }
      window.addEventListener('keyup', onKeyPress);
      return () => window.removeEventListener('keyup', onKeyPress);
   }, [])
}

export default useEscape;