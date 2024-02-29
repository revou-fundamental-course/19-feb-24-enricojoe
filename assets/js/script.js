let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 2500); // Change slide every 2 seconds
}

function getRadioValue(nama) {
  var ele = document.getElementsByName(nama);
  var result;
  for (i = 0; i < ele.length; i++) {
      if (ele[i].checked) result = ele[i].value;
  }
  return result;
}

function tampilForm() {
  var nama = document.getElementById("nama").value;
  var tgl_lahir = document.getElementById("tgl-lahir").value;
  var jenis_kelamin = getRadioValue("jk");
  var pesan = document.getElementById("pesan").value;

  if (nama === '' || tgl_lahir === '' || jenis_kelamin === undefined || pesan === '') {
    alert('Isi semua kolom terlebih dahulu!!!');
    event.preventDefault();
  } else {
    var tampil = document.getElementById('hasil-area');
    tampil.innerHTML = 
    `
    <table>
      <tr>
        <td>
          <strong>Nama:</strong>
        </td>
        <td>
         ${nama}
        </td>
      </tr>
      <tr>
        <td>
          <strong>Tanggal Lahir:</strong>
        </td>
        <td>
          ${tgl_lahir}
        </td>
      </tr>
      <tr>
        <td>
          <strong>Jenis Kelamin:</strong>
        </td>
        <td>
          ${jenis_kelamin}
        </td>
      </tr>
      <tr>
        <td>
          <strong>Pesan:</strong>
        </td>
        <td>
          ${pesan}
        </td>
      </tr>
    `;
    event.preventDefault();
  }

}