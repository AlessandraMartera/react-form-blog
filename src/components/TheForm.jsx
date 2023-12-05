import { useState } from 'react'


export default function TheForm() {
  const initialFormData = {
    name: '',
    price: 0,
  }

  const [articolsList, setArticolsList] = useState([
    { id: 0, name: "pallina di natale", price: 2 }, 
    { id: 1, name: "bastoncino di zucchero", price: 4 }
  ])

  const [formData, setFormData] = useState(initialFormData)

  function changeValueForm(value, fieldName){
    const newFormData = { 
      id: articolsList.length,
      ...formData };
    // aggiorno la chiave fieldName con il valore newValue
    newFormData[fieldName] = value
    // passo l'oggetto modificato a setFormData
    setFormData(newFormData);
  } 

  function sendForm(e){
    e.preventDefault();

    setArticolsList([...articolsList, {
      ...formData,
    }]);

    // Resetto il form
    setFormData(initialFormData);
    
  }

  function destroyArticol(id){
    setArticolsList(articolsList.filter((articol) => articol.id !== id))
    console.log(articolsList)
  }

  return (
    <>
    <ul>
     { articolsList.map((articol, idx) => { 

        // console.log(articolsList)
      return ( <li key={idx}> NOME ARTICOLO: {articol.name} - PREZZO: {articol.price} € <button onClick={() => {destroyArticol(idx)}}>X</button> </li>
        
      )
     })}
    </ul>

    <form onSubmit={sendForm}>
    
      <div>
        <label htmlFor="name">nome articolo</label>
        <input type="text" value={formData.name} onChange={(e) => changeValueForm(e.target.value, "name")}/>
      </div> 

      <div>
        <label htmlFor="price">prezzo articolo</label>
        <input type="number" value={formData.price} onChange={(e) => changeValueForm(e.target.value, "price")}/>
      </div>

      <button>send</button>
    </form>
    </>
  )
}
