import {useState, useEffect, useRef} from "react"
import "./Cupcake.css"

const Cupcake = ({foto,sabor,color}) =>{

    const [vendido, setVendido] = useState(false)
    const [reservado, setReservado] = useState(false)


    const fotoCupcake= useRef()

    const vender = () => {
        setVendido(true)
        setReservado(true)
    }
    const reservar = () => setReservado(true)

    useEffect(()=>{
        // console.log("Estamos por iniciar el componente",Date.now())
        const elementoDOM = fotoCupcake.current
        if(reservado){
            elementoDOM.classList.add("vendido")
        }
    }, [reservado])

    return (
        <div className="cupcake" id="test">
        <img ref={fotoCupcake} src={foto} alt={sabor} width="500px" height="500px"/>
        <h2>{color}</h2>
        <p>{`Sabor: ${sabor}`}</p>
        <p>
            <b>Estado: </b>
            {
                reservado ? "Reservado" : "Disponible"
            }
        </p>
        {
            !reservado && <button id="btn-reservado" onClick={reservar}>Reservar</button>
        }
        <p>
            <b>Estado: </b>
            {
                vendido ? "Vendido" : "A la venta"
            }
        </p>
        {
            !vendido && <button id="btn-vender" onClick={vender}>Vender</button>
        }
    </div>
    )
}

export default Cupcake









// import {Component} from "react"

// class Cupcake extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             vendido: false
//         }
//         this.vender = this.vender.bind(this)
//     }

//     vender(){
//         this.setState(
//             {
//                 vendido:true
//             }
//         )
//     }


// componentWillMount(){
//     console.log("El componente se montará")
//     let test = document.getElementById("test")
//     console.log(test)
// }

// componentDidMount(){
//     console.log("El componente se montó")
//     let test = document.getElementById("test")
//     console.log(test)
// }


// componentWillUpdate(){
//     console.log("El componente se actualizara")
//     let test = document.getElementById("btn-vender")
//     console.log(test)
// }

// componentDidUpdate(){
//     console.log("El componente se actualizó")
//     let test = document.getElementById("btn-vender")
//     console.log(test)
// }


//     render(){
//         console.log("montajeee")
//         return(

//         )
//     }
// }

// export default Cupcake

/*
*   Ciclo de vida
*-Nacer, crecer, reproducirse, morir
*
*Lifecycle de los componentes
*
*-El componente puede:
*
* Se va a montar : componentWillMount()
*Montaje: render()
*Se ha montado: componentDidMount()
*
*
*Cuando se va a actualizar: componentWillUpdate()
*Montaje: render()
*Se ha actualizado: componentDidUpdate
*
*Se desmontará: componentWillUnmount()
*/ 