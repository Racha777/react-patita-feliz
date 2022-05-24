import AppointmentAppointment from "./AppointmentAppointment";

const AppointmentsAppointments = ({ appointments,readAppointment }) => {
  return (
    <section className="d-flex flex-column gap-3 col-md-6">
      <h3 className="text-center">Citas</h3>
      <ul className="list-group">
        {appointments.length ? (
          appointments.map((appointment) => {
            
            
            return (
              <AppointmentAppointment
              key={appointment.id}
                appointment={appointment}
                readAppointment={readAppointment}
              />
            );
          })
        ) : (
          <li
            className="d-flex justify-content-center gap-2 list-group-item"
            aria-current="true"
          >
            <h4 className="fw-bolder m-0">No hay citas registradas</h4>
          </li>
        )}
      </ul>
    </section>
  );
};

export default AppointmentsAppointments;
