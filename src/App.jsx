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

  const updateAppointment = (appointment) => {
    console.log('Editar');
    const updateAppoinments=appointments.map((element)=>{
      return appointment.id===element.id?appointment:element;
    });
    setApointments(updateAppoinments);
    setAppointment({});
  };

  const createAppointment = (appointment) => {
    console.log('Crear');
    appointment.id = uuidv4();
    setApointments([...appointments, appointment]);
  };

  const readAppointment = (id) => {
    const appointment = appointments.find((element) => {
      return element.id === id;
    });
    setAppointment(appointment);
  };

  const deleteAppointment = (id) => {
    setApointments(appointments.filter((element) => {
      return element.id !== id;
    }));
  };

  const submitAppointmentsFormsForm=(appointment)=>{
    if(appointment.id){
      updateAppointment(appointment);
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
            <AppointmentsForm submitAppointmentsFormsForm={submitAppointmentsFormsForm} appointment={appointment}/>
            <AppointmentsAppointments
              appointments={appointments}
              readAppointment={readAppointment}
              deleteAppointment={deleteAppointment}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
