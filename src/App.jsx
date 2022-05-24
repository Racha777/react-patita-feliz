import { useState } from "react";
import "./App.css";
import AppointmentsForm from "./components/appointments/AppointmentsForm";
import Header from "./components/sections/Header";
import { v4 as uuidv4 } from "uuid";
import AppointmentsAppointments from "./components/appointments/AppointmentsAppointments";

function App() {
  const [appointment, setAppointment] = useState({});
  const [appointments, setApointments] = useState([
    {
      id: "a1",
      mascota: "Chocolate",
      propietario: "Elliot",
      fecha: "2022-05-21",
      hora: "11:11",
      sintomas: "Ladra mucho",
    },
  ]);

  const company = {
    name: "Patita Feliz",
    slogan: "Porque es parte de nuestra familia, lo cuidamos",
  };

  const createAppointment = (appointment) => {
    appointment.id = uuidv4();
    setApointments([...appointments, appointment]);
  };

  const readAppointment = (id) => {
    const appointment = appointments.find((element) => {
      return element.id === id;
    });
    setAppointment(appointment);
  };

  const submitAppointment=(appointment)=>{
    if(appointment.id){
      console.log('editar');
    }else{
      createAppointment(appointment);
    }
  };

  return (
    <>
      <Header company={company} />
      <main className="py-3">
        <section className="container">
          <div className="row justify-content-between gap-4">
            <AppointmentsForm submitAppointment={submitAppointment} appointment={appointment}/>
            <AppointmentsAppointments
              appointments={appointments}
              readAppointment={readAppointment}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
