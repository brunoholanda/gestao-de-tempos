import React from 'react';
import style from './Botao.module.scss'

interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children: React.ReactNode
}

function Botao({onClick, type, children}: Props) {
    return (
        <button onClick={onClick} type={type} className={style.botao}>
            {children}
        </button>
    )
}
//como era feito antigamento logo abaixo
class Botao1 extends React.Component<{
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children: any
}> {
    render() {

        const { type = "button", onClick } = this.props;

        return (
            <button onClick={onClick} type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;