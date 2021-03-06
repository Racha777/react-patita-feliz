import Swal from 'sweetalert2';
const AppointmentAppointment = ({ appointment,readAppointment,deleteAppointment }) => {
  const { id, mascota, propietario, fecha, hora, sintomas } = appointment;
  const urlWhatsapp = "https://wa.me/51999122789?text=Confirmo%20mi%20cita:";

  const handleDelete=(id)=>{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-2',
        cancelButton: 'btn btn-danger mx-2'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿Estas seguro?',
      text: "No podras revertir esta accion!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminala!',
      cancelButtonText: 'No, cancela!',
      reverseButtons: false
    }).then((result) => {
      if (result.isConfirmed) {
        deleteAppointment(id);
        swalWithBootstrapButtons.fire(
          'Eliminada!',
          'La cita ha sido eliminada.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelada',
          'La cita esta a salvo',
          'error'
        )
      }
    })
  };

  return (
    <li
      className="d-flex flex-column gap-2 list-group-item list-group-item-action"
      aria-current="true"
    >
      <div className="d-flex align-items-center justify-content-between">
        <h5 className="fs-5">Mascota: {mascota}</h5>
        <small className="badge bg-primary rounded-pill">
          {fecha} {hora}
        </small>
      </div>
      <p className="m-0">Sintomas: {sintomas}</p>
      <h6 className="m-0">
        <span className="fw-folder">Propietario:</span>
        {propietario}
      </h6>
      <div className="d-flex align-items-center justify-content-center">
        <div className="d-flex gap-1">
          <a
            href={`${urlWhatsapp} Mascota: ${mascota}, Propietario: ${propietario}, Fecha: ${fecha}, Hora: ${hora}, Sintomas: ${sintomas}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            Confirmar
          </a>
          <button
            className="btn btn-success btn-sm"
            onClick={()=>readAppointment(id)}
            >
                Editar
            </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={()=>handleDelete(id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </li>
    // <li key={id} className="cita">
    //   <p>Mascota: <span>{mascota}</span></p>
    //   <p>Propietario: <span>{propietario}</span></p>
    //   <p>Fecha: <span>{fecha}</span></p>
    //   <p>Hora: <span>{hora}</span></p>
    //   <p>Sintomas: <span>{sintomas}</span></p>
    //   <div className="d-grid gap-2">
    //     <a
    //       href={`${urlWhatsapp} Mascota: ${mascota}, Propietario: ${propietario}, Fecha: ${fecha}, Hora: ${hora}, Sintomas: ${sintomas}`}
    //       taget="_blank"
    //       rel='noopener noreferrer'
    //       className="btn btn-danger"
    //     ></a>
    //   </div>
    // </li>
  );
};

export default AppointmentAppointment;
