import {getBackground,getStyle} from "../../../utils/configStyle";

// recieved data of section config 
export default function SectionStyle(data:any) {
const bgStyle = data?.background ? getBackground(data?.background) : "";
const styles = getStyle({...bgStyle});
return styles;
}