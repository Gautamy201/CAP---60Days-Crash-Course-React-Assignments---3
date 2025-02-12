// src/components/FocusInput2.jsx

import { useRef, useEffect } from "react";

function FocusInput2() {
  const inputRef = useRef(null);

  useEffect(() => {
    // complete the missing code
    setTimeout(() => {
      inputRef.current.focus();
    }, 3000);
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Focus me on component mount"
      />
    </div>
  );
}

export default FocusInput2;
