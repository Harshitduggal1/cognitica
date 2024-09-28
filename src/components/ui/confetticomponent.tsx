import React, { forwardRef, useImperativeHandle, useRef } from "react";
import Confetti from "react-confetti";

export type ConfettiRef = {
  fire: () => void;
};

const ConfettiComponent = forwardRef<ConfettiRef>((props, ref) => {
  const confettiRef = useRef(null);

  useImperativeHandle(ref, () => ({
    fire: () => {
      if (confettiRef.current) {
        (confettiRef.current as any).fire();
      }
    },
  }));

  return <Confetti ref={confettiRef} {...props} />;
});

ConfettiComponent.displayName = 'ConfettiComponent';

export default ConfettiComponent;