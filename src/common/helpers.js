import Swal from "sweetalert2";
export default {
  showValidationErrors(error) {
    let errors = Object.values(error.response.data.errors)
      .map(item => {
        return item
          .map(i => {
            return i;
          })
          .join("<br/>");
      })
      .join("<br/>");
    Swal.fire({
      title: error.response.data.message,
      html: `<div style="color: #f27474;">${errors}</div>`,
      type: "error",
      showCancelButton: false,
      showConfirmButton: false
    });
    document.body.style = "padding-right: 0 !important";
  },

  flushMessage(message) {
    Swal.fire({
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 3000,
      type: "success",
      title: message
    });
    document.body.style = "padding-right: 0 !important";
  }
};
