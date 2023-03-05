import Cronometro from "../Cronometro";
import Formulario from "../Formulario";
import Lista from "../Lista";
import style from './App.module.scss';
import React, { useState } from 'react';
import { Itarefa } from "../../types/tarefa";

function App() {

  const [tarefas, setTarefas] = useState<Itarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<Itarefa>();

  function selecionaTarefa(tarefaSelecionada: Itarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa, 
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}  
      />
      <Cronometro selecionado={selecionado}/>
    </div>
  );
}

export default App;
