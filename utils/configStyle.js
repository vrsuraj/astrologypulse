export function getStyle(customStyle) {
  const styles = customStyle
    ? Object.fromEntries(
        Object.entries(customStyle).filter(
          ([key, value]) => value !== undefined && value != ""
        )
      )
    : {};
  return styles;
}

// get background style like image or color
export function getBackground(object) {
  const type = object?.type;
  if (type == "IMAGE") {
    return {
      backgroundImage: `url(${object?.value})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  }
  return { background: object?.value };
}

// get border color
// export function getStyles(object) {
//   let styles = {};

//   // Background Image
//   if (object?.type === "IMAGE") {
//     styles.backgroundImage = `url(${object?.value})`;
//     styles.backgroundSize = "cover";
//     styles.backgroundPosition = "center";
//   } else {
//     styles.background = object?.value;
//   }

//   // Border
//   if (object?.border) {
//     styles.border = object.border; // e.g., "2px solid red"
//   }

//   // Additional style properties can be added here using similar conditions

//   return styles;
// }
