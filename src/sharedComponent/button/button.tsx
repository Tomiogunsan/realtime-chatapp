import React from "react";
import { PolymorphicComponentProps } from "./button.type";
import clsx from "clsx";

type ButtonProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  {
    children: React.ReactNode;
    className?: string;
    variant: "primary" | "link";
    onClick?: () => void;
  }
>;

const btnClasses = "px-4 py-3 transition duration-300";

const VARIANTS = {
  primary: "bg-[#3da3dd] text-[#f4f4fe] hover:bg-[#3d3fdb]",
  link: "text-[#165dff] hover:text-[#3d3fdb]  !px-0 !pb-1",
};

export default function Button<C extends React.ElementType = "button">(
  props: ButtonProps<C>
) {
  const { children, as, className, variant, ...buttonProps } = props;
  const Component = as || "button";
  return (
    <Component
      className={clsx(className, btnClasses, variant && VARIANTS[variant])}
      {...buttonProps}
    >
      {children}
    </Component>
  );
}