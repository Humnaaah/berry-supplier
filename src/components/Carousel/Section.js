import React from "react";

const Section = ({ children }) => {
  return (
    <section
      style={{
        margin: "40px 0 40px 0"
      }}
    >
      {children}
    </section>
  );
};

export default Section;
