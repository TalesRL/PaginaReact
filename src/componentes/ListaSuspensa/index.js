import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    console.log(props.itens)

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select>
                <option value="">Selecione o nível de escolaridade</option>
                {props.item && props.item.map(item => { return <option >{item}</option>})}
            </select>
        </div>

    )
}
export default ListaSuspensa;