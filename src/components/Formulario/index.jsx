import { useState, useEffect } from "react"

const Formulario = () => {
    let [MateriaA, setMateriaA] = useState(0);
    let [MateriaB, setMateriaB] = useState(0);
    let [MateriaC, setMateriaC] = useState(0);
    let [nome, setNome] = useState('');

    useEffect(()=> {
        console.log("o componente iniciou");

        return () => {
            console.log("o componente finalizou");
        }

        
    },[]);

    useEffect(()=> {
        console.log("o estado mudou");
    },[nome]);

    useEffect(() => {
        console.log("materia A mudou para: " + MateriaA)
    },[MateriaA, MateriaB, MateriaC]);

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {

            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = MateriaA + MateriaB + MateriaC;
        const media = soma / 3;

        if(media >= 7){
            return(
                <p>olá {nome}, você foi aprovado</p>
            )
        } else {
            return(
                <p>olá {nome}, você não foi aprovado</p>
            )
        }
    }
    return(
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

        <input type="text" placeholder="Seu nome" onChange={alteraNome} />
        <input type="number" placeholder="Nota Materia A" onChange={({target}) => setMateriaA(parseInt(target.value))}/>
        <input type="number" placeholder="Nota Materia B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/> 
        <input type="number" placeholder="Nota Materia C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/> 
        {renderizaResultado()}
        </form>
    )
} 

export default Formulario