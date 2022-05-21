import { useState } from "react";
import "./App.css";
import AppointmentsForm from "./components/appointments/AppointmentsForm";
import Header from "./components/sections/Header";

function App() {
  const [appointments,setApointments]=useState([]);

  const company = {
    name: "Patita Feliz",
    slogan: "Porque es parte de nuestra familia, lo cuidamos",
  };

  const createAppointment=(appointment)=>{
    setApointments(
      [...appointments,
      appointment]
    )
  };
  return (
    <>
      <Header company={company} />
      <main className="py-3">
        <section className="container">
          <div className="row">
            <AppointmentsForm
            createAppointment={createAppointment}
          />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
