import Swal from "sweetalert2";

function sendErrorAlert(html) {
    return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        html: html,
        timer: 2500,
      })
}

function sendSuccessAlert(html) {
    return Swal.fire({
        title: 'Beleza!',
        html: html,
        icon: 'success',
        timer: 2500,
      })
}

function sendConfirmAlert(title, buttonText ) {
    return Swal.fire({
        title: title,
        showCancelButton: true,
        confirmButtonText: buttonText,
        cancelButtonText: 'Cancelar',
        timer: 2500,
      })
}


export {
    sendErrorAlert,
    sendSuccessAlert,
    sendConfirmAlert
};