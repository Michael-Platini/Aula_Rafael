const anotherComponent = () => {
    const handleClick = () => {
        console.log("Clickou no botão");
    };
    return (
        <div>
            <p>Segundo Componente</p>
            <button onClick={handleClick}>Evento click</button>
            <hr/>
            <button onClick={() => console.log("teste")}>Evento click</button>
        </div>
    )
};

export default anotherComponent