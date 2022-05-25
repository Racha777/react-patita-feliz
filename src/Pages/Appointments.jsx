import { useEffect, useState } from "react";
import AppointmentsForm from "../components/appointments/AppointmentsForm";
import { v4 as uuidv4 } from "uuid";
import AppointmentsAppointments from "../components/appointments/AppointmentsAppointments";
import { showToast } from "../utils/SweetAlert";
const Appointments = () => {
  let localStorageAppointments =
    JSON.parse(localStorage.getItem("appointmentsData")) ?? [];

  const [appointment, setAppointment] = useState({});
  const [appointments, setApointments] = useState(localStorageAppointments);

  const updateAppointment = (appointment) => {
    console.log("Editar");
    const updateAppoinments = appointments.map((element) => {
      return appointment.id === element.id ? appointment : element;
    });
    setApointments(updateAppoinments);
    setAppointment({});
    showToast("warning", "Actualizado");
  };

  const createAppointment = (appointment) => {
    console.log("Crear");
    appointment.id = uuidv4();
    setApointments([...appointments, appointment]);
    showToast("success", "Creado");
  };

  const readAppointment = (id) => {
    const appointment = appointments.find((element) => {
      return element.id === id;
    });
    setAppointment(appointment);
    showToast("info", "Leido");
  };

  const deleteAppointment = (id) => {
    setApointments(
      appointments.filter((element) => {
        return element.id !== id;
      })
    );
  };

  const submitAppointmentsFormsForm = (appointment) => {
    if (appointment.id) {
      updateAppointment(appointment);
    } else {
      createAppointment(appointment);
    }
  };

  useEffect(() => {
    localStorage.setItem("appointmentsData", JSON.stringify(appointments));
  }, [appointments]);
  return (
    <section className="container">
      <div className="row justify-content-between gap-4">
        <AppointmentsForm
          submitAppointmentsFormsForm={submitAppointmentsFormsForm}
          appointment={appointment}
        />
        <AppointmentsAppointments
          appointments={appointments}
          readAppointment={readAppointment}
          deleteAppointment={deleteAppointment}
        />
      </div>
    </section>
  );
};

export default Appointments;
