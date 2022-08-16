import { ButtonStyle } from "./ButtonStyle"

export const MyButton = ({type, text,handle, width, height, padding, margin, color, backcolor ,abrirModal}) => {
    return (
        <ButtonStyle type={type} width={width} height={height} padding={padding} margin={margin} color={color} backcolor={backcolor} onClick={abrirModal}>{text}</ButtonStyle>
    )
}