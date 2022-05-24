import { useEffect, useState } from "react";
import Swal from 'sweetalert2';

const AppointmentsForm = ({ appointment, submitAppointmentsFormsForm }) => {
  const [formAppointment, setFormAppointment] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [alert, setAlert] = useState(false);

  const { mascota, propietario, fecha, hora, sintomas } = formAppointment;

  const handleChange = (e) => {
    setFormAppointment({
      ...formAppointment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      [
        mascota.trim(),
        propietario.trim(),
        fecha.trim(),
        hora.trim(),
        sintomas.trim(),
      ].includes("")
    ) {
      setAlert(true);
    } else {
      submitAppointmentsFormsForm(formAppointment);
      setFormAppointment({
        mascota: "",
        propietario: "",
        fecha: "",
        hora: "",
        sintomas: "",
      });
      setAlert(false);
    }
  };

  useEffect(() => {
    if (appointment.id) {
      const { id,mascota, propietario, fecha, hora, sintomas } = appointment;
      setFormAppointment({
        id,
        mascota,
        propietario,
        fecha,
        hora,
        sintomas,
      });
    }
  }, [appointment]);

  return (
    <section className="d-flex flex-column align-items-center col-md-4">
      <h3 className="text-center" id="formTitle">
        🐱{appointment.id ? "Editar" : "Crear"} cita🐱
      </h3>
      <form className="text-dark rounded p-4" onSubmit={handleSubmit}>
        <div
          className="text-dark form-floating mb-3"
          style={{ display: "none" }}
        >
          <input
            type="number"
            className="form-control"
            name="id"
            placeholder="Id"
            id="formId"
            readOnly
          />
          <label htmlFor="id" className="text-dark">
            Id
          </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="mascota"
            placeholder="Nombre de la Mascota"
            value={mascota}
            onChange={handleChange}
            required
          />
          <label htmlFor="mascota" className="text-dark">
            Nombre de la Mascota
          </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="propietario"
            placeholder="Nombre del propietario"
            value={propietario}
            onChange={handleChange}
            required
          />
          <label htmlFor="propietario" className="text-dark">
            Nombre del propietario
          </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="date"
            className="form-control"
            name="fecha"
            placeholder="Fecha"
            value={fecha}
            onChange={handleChange}
            required
          />
          <label htmlFor="fecha" className="text-dark">
            Fecha
          </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="time"
            className="form-control"
            name="hora"
            placeholder="Hora"
            value={hora}
            onChange={handleChange}
            required
          />
          <label htmlFor="hora" className="text-dark">
            Hora
          </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="sintomas"
            placeholder="Síntomas"
            value={sintomas}
            onChange={handleChange}
            required
          />
          <label htmlFor="sintomas" className="text-dark">
            Síntomas
          </label>
        </div>
        <button type="submit" className="btn btn-primary w-100" id="formButton">
          {appointment.id ? "Editar" : "Crear"}
        </button>
      </form>
      {alert && (
        <div className="badge bg-warning text-dark align-self-center">
          Todos los campos son obligatorios
        </div>
      )}
    </section>
  );
};

export default AppointmentsForm;
