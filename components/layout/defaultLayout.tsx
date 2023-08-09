import React, { ReactElement } from "react";
import Header3 from "../navigation/desktop";
import { dropdownMenu } from "../../jsondata/menu";
import Star from "../effect/star";
interface ILayout {
  children: ReactElement;
}

export default function Layout({ children }: ILayout) {
  return (
    <div>
      <div className={`w-full bg-gradient-to-b from-primary to-secondary`}>
        <Header3 bgTransparent={""} menudata={dropdownMenu} />
        <div
          style={{
            zIndex: 1,
            position: "relative",
          }}
          className="min-h-screen"
        >
          <Star />
          {children}
        </div>
      </div>
    </div>
  );
}
