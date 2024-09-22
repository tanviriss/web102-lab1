import './App.css';
import Calendar from './components/Calendar';

const App = () => {
  
  return (
    <div className="App">
      <h1 className="font-bold">Itinerary for 7 Days in HackHarvard</h1>
      <h2>Welcome to Harvard, Tanvir! Check out this calendar to have the best experience there! </h2>
      <Calendar />
   </div>

  )
}

export default App