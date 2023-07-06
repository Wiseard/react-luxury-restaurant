import { useState } from 'react'
import './reservation.css'
import { toast } from 'react-toastify'

const Reservation = () => {
  // Test
  const minToday = new Date().toISOString().slice(0, 10)
  // Date Input
  const todayDate = new Date()
  const formatDate =
    todayDate.getDate() < 10 ? `0${todayDate.getDate()}` : todayDate.getDate()
  const formatMonth =
    todayDate.getMonth() + 1 < 10
      ? `0${todayDate.getMonth() + 1}`
      : todayDate.getMonth() + 1
  const formattedDate = [todayDate.getFullYear(), formatMonth, formatDate].join(
    '-'
  )
  const [valueDate, setValueDate] = useState(formattedDate)

  // Name Input
  const [name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    // Reset Inputs
    document.getElementById('people').selectedIndex = ''
    document.getElementById('time').selectedIndex = ''
    setValueDate(formattedDate)
    setName('')
    // Confirmation message
    toast.success('Reservation confirmed')
  }
  return (
    <section className="reservation__container" id="reservation">
      <div className="header">
        <h2>Make a Reservation</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <form onSubmit={handleSubmit} className="reservation__container__form">
        <div className="form__guests grid">
          {/* Name */}
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Guest Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {/* Persons */}
          <select name="people" id="people" required>
            <option value="2">2 people</option>t
            <option value="3">3 people</option>
            <option value="4">4 people</option>
          </select>
        </div>
        <div className="form__time grid">
          {/* Date */}
          <input
            type="date"
            id="start"
            name="start"
            min={minToday}
            // min={valueDate}
            value={valueDate}
            onChange={(e) => setValueDate(e.target.value)}
            required
          ></input>
          {/* Hours */}
          <select name="time" id="time" required>
            <option value="12:00 am">12:00 am</option>
            <option value="12:30 pm">12.30 pm</option>
            <option value="1:00 pm">1:00 pm</option>
            <option value="1:30 pm">1:30 pm</option>
            <option value="7:00 pm">7:00 pm</option>
            <option value="7:30 pm">7:30 pm</option>
            <option value="8:00 pm">8:00 pm</option>
            <option value="8:30 pm">8:30 pm</option>
          </select>
        </div>
        <button className="btn-book" type="submit">
          book a table
        </button>
      </form>
    </section>
  )
}
export default Reservation
