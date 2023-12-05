import { useState } from 'react'


export default function TheForm() {
  const initialFormData = {
    name: '',
    price: 0,
  }

  const [articolsList, setArticolsList] = useState([
    { name: "pallina di natale", price: 2 }, 
    { name: "bastoncino di zucchero", price: 4 }
  ])

  const [formData, setFormData] = useState(initialFormData)

  function changeValueForm(value, fieldName){
    const newFormData = { ...formData };
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

  return (
    <>
    <ul>
     { articolsList.map((articol, idx) => { 
      
      return ( <li key={idx}> NOME ARTICOLO: {articol.name} - PREZZO: {articol.price} € </li>
        
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
