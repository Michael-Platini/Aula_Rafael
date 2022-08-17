import AnotherComponent from './anotherComponent'

function firstComponent() {
    

   const name = "Michael";
    return (
        <div className="firstcomponent">
        <p>Primeiro Componente</p>
        <p>Nome: {name}</p>
        <AnotherComponent />
        </div>
    )
}

export default firstComponent