import { useState } from "react"
import { Subtitle } from "./components/Subtitle"
import Title from "./components/Title"

function App() {
  const [password, setPassword] = useState("")
  const [Text, setCopyText] = useState("COPIAR")



  function copyToClipboard() {
    window.navigator.clipboard.writeText(password)
    setCopyText("Copiado!")
  }
  function Generate(){
    const characters = "1234567890!@#$%&*_qwertyuiopasdfghjklçzxcvbnm.QWERTYUIOPASDFGHJKLÇZXCVBNM"
    const length = 10
    let newPassword = ""
    for (let i = 0; i < length; i++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
    }
    setPassword(newPassword)
		setCopyText("Copiar")
  }





  return (
    
    <div>
      <button onClick={Generate}>Gerar</button>
      <button onClick={copyToClipboard}>{Text}</button>
      <h1>{password}</h1>
    </div>
    
  )
}
export default App
