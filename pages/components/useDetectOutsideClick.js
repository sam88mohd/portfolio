import { useEffect, useState } from "react";

export const useDetectOutsideClick = (el, initialState) => {
  const [toggle, setToggle] = useState(initialState);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (el.current !== null && !el.current.contains(e.target)) {
        setToggle(!toggle);
      }
    };

    if (toggle) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [toggle, el]);

  return [toggle, setToggle];
};
