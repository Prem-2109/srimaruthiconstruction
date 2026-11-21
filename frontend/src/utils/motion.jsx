import React from "react";

// Robust transparent pass-through motion components that render directly without blank screens
const tags = [
  "div",
  "section",
  "article",
  "h1",
  "h2",
  "h3",
  "p",
  "span",
  "button",
  "a",
  "ul",
  "li",
  "form",
  "img",
  "header",
  "footer",
  "nav",
  "aside",
];

export const motion = tags.reduce((acc, Tag) => {
  acc[Tag] = React.forwardRef(function MotionComponent(
    {
      children,
      className = "",
      style = {},
      initial,
      animate,
      whileInView,
      whileHover,
      whileTap,
      viewport,
      transition,
      ...props
    },
    ref
  ) {
    return (
      <Tag ref={ref} className={className} style={style} {...props}>
        {children}
      </Tag>
    );
  });
  acc[Tag].displayName = `motion.${Tag}`;
  return acc;
}, {});

export const AnimatePresence = ({ children }) => <>{children}</>;
