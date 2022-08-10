import { ButtonStyle } from "./ButtonStyle"

export const MyButton = ({text,handle, width, height, padding, margin, color, backcolor}) => {
    return (
        <ButtonStyle width={width} height={height} padding={padding} margin={margin} color={color} backcolor={backcolor} onClick={()=>handle()}>{text}</ButtonStyle>
    )
}