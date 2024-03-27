import './App.css'
import { Employ } from './Components/Employ';
import { Team } from './Components/Team';

function App() {
  
  return (
    <div className='App w-full min-h-screen flex justify-center items-center gap-8'>
      <Employ />
      <Team />
    </div>
  )
}
export default App
