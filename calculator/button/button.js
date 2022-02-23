import React from "react";

import { Section } from "./buttoncss";

function Button({ content, onButtonClick, type }) {
  return (
    <>
      <Section>
        <div
          className={`Button ${content === "0" ? "zero" : ""} ${type || ""}`}
          onClick={onButtonClick(content)}
        >
          {content}
        </div>
      </Section>
    </>
  );
}

export default Button;
