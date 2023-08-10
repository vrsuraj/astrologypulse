"use client";
import React, { JSXElementConstructor, ReactElement } from "react";
import { CardProps } from "./card.type";
import { CardStyle } from "./card.style";
import Text from "../text";
import Paragraph from "../paragraph";
import Image from "../image";
// import Button from "../button/index2";
import Link from "next/link";
import { ButtonTargetEnum } from "../button/button.type";
import { getStyle } from "@/utils/configStyle";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("../button/index2"), { ssr: false });

interface Props extends CardProps {
  children?: string | ReactElement<any, string | JSXElementConstructor<any>>;
}

export default function Card(props: Props) {
  const borderRadius = CardStyle["border_radius"][props?.border_radius!] || "";
  const borderWidth =
    (CardStyle["border_width"] as any)[props?.border?.border_width!] || "";
  const shadow = CardStyle["shadow"][props?.shadow!] || "";
  const padding = props?.padding || "md:p-7 p-5";
  const align =
    CardStyle["align"][props.align!] || CardStyle["align"]["center"];
  const textColor = props.text_color || "#fff";
  const buttonDisaply = props?.button?.display || false;
  const linkDisaply = props?.link?.display || false;
  const target_link =
    ButtonTargetEnum[props?.link?.target!] || ButtonTargetEnum["self"];
  const linkUrl = props?.link?.url || "#";
  const extraStyle = props.extra || "";
  const borderColor = props?.border?.border_color || "";
  const borderDisplay = props?.border?.display || false;

  const animation =
    (CardStyle["animation"] as any)[props.animation!] ||
    CardStyle["animation"]["scale"];

  const customStyle = {
    background: props?.color,
    borderColor: borderColor,
  };

  const styles = getStyle(customStyle);

  return (
    <>
      {linkDisaply ? (
        <Link href={linkUrl} legacyBehavior>
          <a
            target={target_link}
            style={{ ...styles }}
            className={`${
              borderDisplay ? `${borderWidth} border-third` : ""
            } ${borderRadius} ${shadow} ${padding} ${animation} w-full cursor-pointer ${extraStyle}`}
          >
            <div className={`${align}`}>
              {props.sub_heading && (
                <Text
                  variant="h6"
                  color={textColor}
                  size="xl"
                  weight="semibold"
                >
                  {props.sub_heading}
                </Text>
              )}
              {props.image_src && (
                <Image wrapper_class="max-w-[130px]" src={props.image_src} />
              )}
              {props.heading && (
                <Text variant="h3" color={textColor} size="xl" weight="medium">
                  {props.heading}
                </Text>
              )}
              {props.desc && (
                <Paragraph size="base" color={textColor}>
                  {props.desc}
                </Paragraph>
              )}
              {buttonDisaply && (
                <Button {...props?.button}>{props?.button?.children}</Button>
              )}
            </div>
          </a>
        </Link>
      ) : (
        <div
          style={{ ...styles }}
          className={`${
            borderDisplay ? `${borderWidth} border-third` : ""
          } ${borderRadius} ${shadow} ${padding} ${align} ${animation} w-full cursor-pointer ${extraStyle}`}
        >
          {props.sub_heading && (
            <Text variant="h6" color={textColor} size="xl" weight="medium">
              {props.sub_heading}
            </Text>
          )}
          {props.image_src && (
            <Image wrapper_class="max-w-[150px]" src={props.image_src} />
          )}
          {props.heading && (
            <Text variant="h3" color={textColor} size="xl" weight="medium">
              {props.heading}
            </Text>
          )}
          {props.desc && (
            <Paragraph size="sm" color={textColor}>
              {props.desc}
            </Paragraph>
          )}
          {buttonDisaply && (
            <Button {...props?.button}>{props?.button?.children}</Button>
          )}
        </div>
      )}
    </>
  );
}
