import * as S from "./ModalStyle"


export function Modal({fecharModal}){
    return(
        <S.Back>
            <S.Container>
                <h1>Atenção!!!!</h1>
                <p>Todos os seus dados serão deletados.</p>
                <div className="butao">
                <button className="fechar" onClick={fecharModal}>Fechar</button>
                <button className="confirmar">Confirmar</button>
                </div>
            </S.Container>
        </S.Back>
    )
}