import './App.css'
import AvailabilityCalendar from './components/AvailabilityCalendar'
import BookingForm from './components/BookingForm'

function App() {
  

  return (
    <>
      <BookingForm nameUser="Delphine" />
      <AvailabilityCalendar />
    </>
  )
}

export default App
