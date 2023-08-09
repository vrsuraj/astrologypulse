export function dynamicRouter(button_config) {
  let url = {};
  // switch (button_config.target_page) {
  //   case "component":
  //     url["url"] = `#${button_config.button_route}`;

  //     break;
  //   case "external_page":
  //     url["url"] = button_config.button_route;
  //     url["target"] = "_blank";
  //     break;
  //   default:
  url["link"] = button_config;
  url["target"] = "_self";

  return url;
}

// back url for response page
export function BackUrl(path) {
  const getPath = path.split("/")[1];
  const check = getPath.replace("-response", "");
  return check;
}
