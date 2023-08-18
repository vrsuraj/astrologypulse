import React from "react";
import { useTransition, a } from "@react-spring/web";
export default function PopupModel({ children, active }) {
  const transitions = useTransition(active, {
    from: { opacity: 0, transform: "translateY(-60%) translateX(-50%)" },
    enter: { opacity: 1, transform: "translateY(-50%) translateX(-50%)" },
    leave: { opacity: 0, transform: "translateY(-40%) translateX(-50%)" },
    exitBeforeEnter: true,
  });
  return (
    <>
      {transitions((style, item) => (
        <a.div style={style} className="absolute top-1/2 left-1/2  z-[2]">
          {children}
        </a.div>
      ))}
    </>
  );
}
