import CampoTexto from '../CampoTexto';
import './Formulario.css'

const Formulario = () =>{
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o plano de estudo.</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Nível" placeholder="Digite seu grau escolaridade" />
                <CampoTexto label="Tempo" placeholder="Digite o tempo disponível para estudo" />
                <CampoTexto label="Motivo" placeholder="Digite o motivo do estudo. Ex: provas, concurso..." />
            </form>

        </section>
    )
}

export default Formulario;