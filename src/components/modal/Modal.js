import FormRegistration from "../form/FormRegistration";
import useEscape from "../../hooks/useEscape";
import useOutsideClick from "../../hooks/useOutsideClick";
import { useState, useRef } from "react";

const Modal = () => {
   const [activeModal, setActiveModal] = useState(true);

   const ref = useRef();

   useEscape(() => {
      setActiveModal(false);
   });

   useOutsideClick(ref, () => {
      setActiveModal(false);
   });

   return (
      <div className={activeModal ? "modal active" : "modal"} onClick>
         <div className="modal-body" onClick={(e) => e.stopPropagation(e)} ref={ref}>
            <FormRegistration />
         </div>
      </div>
   )
}

export default Modal;