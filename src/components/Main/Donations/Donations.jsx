import React, { useState } from 'react'

function Donations() {

  const [count, setCount] = useState(0);
  const [values, setValues] = useState({
    email: '',
    product: ''
});
    // useState devuelve un array [state, ()setState]
    // asique usamos destructuring para sacarlos a variables

    const handleAddClick = () => {
        setCount(count + 1)
    }

    const handleSubClick = () => {
        setCount(count - 1)
    }

    const handleChange = (e) => {
      setValues({
          ...values,
          [e.target.name]: e.target.value
      })
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      // En lugar de alert, un POST con los datos
      //...
      alert(`${count} productos enviados por ${values.email}. Producto: ${values.product}. Gracias!`)
  }

    return (
        <section>
            <h1>Donaciones</h1>

            <h3>Cantidad: {count}</h3>
            <button name='add' onClick={handleAddClick} >+</button>
            <button name='sub' onClick={handleSubClick} >-</button>

            <h3>Datos de la donación:</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input name="email" type="text" onChange={handleChange}></input>
                <br/><br/>
                <label htmlFor="product">Producto donado</label>
                <input name="product" type="text" onChange={handleChange}></input>
                <button>Enviar donación</button>
            </form>
            
            <h4>Email: {values.email} Producto: {values.product} - Total donaciones: {count}</h4>
        </section>
    );
}

export default Donations
