import { ButtonStyle } from "./ButtonStyle"

export const MyButton = ({text,handle, width, height, padding, margin}) => {
    return (
        <ButtonStyle width={width} height={height} padding={padding} margin={margin} onClick={()=>handle()}>{text}</ButtonStyle>
    )
}