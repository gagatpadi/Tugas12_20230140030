function kirimData() {
  const name = document.getElementById("nama").value;
  const nim = document.getElementById("nim").value;
  const peminatanRadio = document.querySelector("input[name=peminatan]:checked");
  const alamat = document.getElementById("alamat").value;

  if (!name || !nim || !peminatanRadio || !alamat) {
    showToast("Harap isi semua data!", true);
    return;
  }

  const peminatan = peminatanRadio.value;

  const message = `
    Data berhasil dikirim broo!!!!
    Nama       : ${name}
    NIM        : ${nim}
    Peminatan  : ${peminatan}
    Alamat     : ${alamat}
  `;

  showToast(message);
}

function showToast(message, isError = false) {
  const toast = document.getElementById("toast");
  toast.classList.remove("hidden");
  toast.classList.remove("bg-green-500", "bg-red-500");
  toast.classList.add(isError ? "bg-red-500" : "bg-green-500");
  toast.textContent = message;

  setTimeout(() => {
    toast.classList.add("hidden");
  }, 5000);
}
