import { useEffect } from "react";

function useOutsideClick(element, callback) {

   useEffect(() => {
      function onClick(e) {
         if(element.current && !element.current.contains(e.target)) callback()
      }
      window.addEventListener('click', onClick);
      return () => window.removeEventListener('click', onClick);
   }, [])
}

export default useOutsideClick;