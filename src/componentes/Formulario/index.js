import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'



const Formulario = () =>{

    const nivel= [
        'Ensino Fundamental',
        'Ensino Médio',
        'Nível Superior Cursando',
        'Nível Superior Completo',
        'Pós-Graduado Cursando',
        'Pós-Graduado Completo'

    ]
    return (
        <section className="formulario">
            <form>
                <h2 className="text">Crie seu Plano de Estudo Personalizado</h2>
                <p>Transforme seus objetivos em resultados com um plano de estudo adaptado ao seu perfil</p>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Tempo" placeholder="Digite o tempo disponível para estudo em horas" />
                <CampoTexto label="Motivo" placeholder="Digite o motivo do estudo. Ex: provas, concurso..." />
                <ListaSuspensa label="Nível de Escolaridade" item={nivel}/>
                <Botao texto="Criar Plano de Estudo"/>
            </form>

        </section>
    )
}

export default Formulario;