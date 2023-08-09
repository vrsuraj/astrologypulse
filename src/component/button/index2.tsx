"use client";
import React, { JSXElementConstructor, ReactElement, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { ButtonProps, ButtonTargetEnum } from "./button.type";
import { buttonStyles } from "./example.button.style";
import Link from "next/link";
import { useComponentVariant } from "../../../components/variants/button";

interface Props extends ButtonProps {
  children?: any;
}

export default function Button(props: Props) {
  const variantProps = useComponentVariant(
    "Button",
    props.variant
  ) as Partial<ButtonProps>;

  const {
    animation,
    color,
    custom_class,
    disabled,
    icon,
    loading,
    shape,
    target,
    shadow_size,
    children,
    extra,
    shadow_color,
    link,
    size,
    tone,
    with_ring,
  } = props;

  const theme = buttonStyles;
  const classes = useMemo(() => {
    return twMerge(
      theme.base({
        animation,
        color,
        className: "",
        disabled,
        icon,
        loading,
        shape,
        shadow_size,
        shadow_color,
        size,
        tone,
        with_ring,
        ...variantProps,
      })
    );
  }, [
    animation,
    custom_class,
    color,
    disabled,
    icon,
    loading,
    shape,
    shadow_size,
    shadow_color,
    size,
    theme,
    tone,
    with_ring,
  ]);

  const link_url = link || "#";
  const target_link = ButtonTargetEnum[target!] || ButtonTargetEnum["self"];
  // const displayIcon = icon || false;

  return (
    <Link href={link_url} legacyBehavior>
      <a
        onClick={() => (props?.callback ? props?.callback() : "")}
        target={target_link}
        className={`max-w-[250px] w-full px-5 md:px-10 py-3 ${classes} capitalize ${extra} `}
      >
        {children}
      </a>
    </Link>
  );
}
