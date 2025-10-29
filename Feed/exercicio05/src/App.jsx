import { useState } from "react"

export default function App() {
  const [description, setDescription] = useState([])
  const [email, setEmail] = useState("")
  const [coment, setComent] = useState("")
  const [firstComent, setFirstComent] = useState ("Seja o primeiro a comentar")



  const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
let currentDate = `${day}/${month}/${year}, ${hour}:${min}:${sec}`;



  const addComent = ({ email, coment ,currentDate}) => {
    const Coment = {email, coment , currentDate}
    setDescription(state => [...state, Coment])
  }


  const handleSubmit = (ev) =>{
    ev.preventDefault()
    addComent({ email, coment, currentDate })
    setEmail("")
    setComent("")
    setFirstComent("")
  }



  return (
    <div className="section">
      <h2>Seção de comentarios</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label><br />
        <input type="email" id="email" onChange={(ev) => setEmail(ev.target.value)}/><br />
        <label htmlFor="coment">Comentário</label><br />
        <textarea name="coment" id="coment" cols="40" rows="8" onChange={(ev) => setComent(ev.target.value)}></textarea><br />
        <button className="button">Enviar comentario</button>
        
      </form>
    
      <div> 
        <hr />
        {firstComent}
        {description.map((coment) => (
           <div>
           <div>
             <h3>{coment.email}</h3>
             <div>{coment.currentDate} </div>
             <div>{coment.coment}</div>
           </div>
         </div>
        ))} 
        </div>
      </div>
        
        
    
  )
}
