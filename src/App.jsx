import { useState } from "react";
import "./App.css";
import AppointmentsForm from "./components/appointments/AppointmentsForm";
import Header from "./components/sections/Header";
import { v4 as uuidv4 } from "uuid";
import AppointmentsAppointments from "./components/appointments/AppointmentsAppointments";

function App() {
  const [appointments, setApointments] = useState([]);

  const company = {
    name: "Patita Feliz",
    slogan: "Porque es parte de nuestra familia, lo cuidamos",
  };

  const createAppointment = (appointment) => {
    appointment.id = uuidv4();
    setApointments([...appointments, appointment]);
  };
  return (
    <>
      <Header company={company} />
      <main className="py-3">
        <section className="container">
          <div className="row justify-content-between gap-4">
            <AppointmentsForm createAppointment={createAppointment} />
            <AppointmentsAppointments
              appointments={appointments}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
