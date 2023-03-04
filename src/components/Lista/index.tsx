import Item from './Item';
import style from './Lista.module.scss';

function Lista() {

    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'Javascript',
        tempo: '01:00:00'
    }, {
        tarefa: 'Typerscript',
        tempo: '03:00:00'
    }]
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item 
                        key={index}
                        {...item}
                    /> //assim eu utilizei todos os itens que estao dentro do item tsx
                ))}
            </ul>
        </aside>
    )
}

export default Lista;