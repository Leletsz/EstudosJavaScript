import Profile from "./components/profile"
import John from "./assets/John.png"
function App() {
  return (
    <>
     <Profile name="John Doe" photo={John}/>
     <Profile name="John dont doe" photo={John}/>
    </>
  )
}
export default App
