function kirimData() {
  const nama = document.getElementById("nama").value.trim();
  const nohp = document.getElementById("nohp").value.trim();
  const daerah = document.getElementById("daerah").value;
  const jenisKosEl = document.querySelector("input[name=jeniskos]:checked");

  if (!nama || !nohp || !daerah || !jenisKosEl) {
    showModal("⚠️ Harap isi semua kolom dan pilih jenis kosan.");
    return;
  }

  const jenisKos = jenisKosEl.value;
  const message = `📄 Detail Pencarian Kosan:\n\n🧑 Nama: ${nama}\n📱 Nomor HP: ${nohp}\n🏠 Jenis Kosan: ${jenisKos}\n📍 Daerah: ${daerah}`;
  showModal(message);
}

function showModal(content) {
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modalContent");

  modalContent.textContent = content;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}
