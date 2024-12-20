function tinhTien() {
  var hoTen = document.getElementById("hoTen").value;
  var soKw = Number(document.getElementById("soKw").value);
  //   console.log({ hoTen, soKw });

  // xu ly
  var soKwDaDung = 0;
  var soKwDau = 0;
  var soKw50Ke = 0;
  var soKw100Ke = 0;
  var soKw150Ke = 0;
  var soKwConLai = 0;
  // tinh so kw da dung

  if (soKw == soKwDau) {
    soKwDau = 500;
  } else if (soKw == soKw50Ke) {
    soKw50Ke = 650;
  } else if (soKw == soKw100Ke) {
    soKw100Ke = 850;
  } else if (soKw == soKw150Ke) {
    soKw150Ke = 1100;
  } else {
    soKwConLai = 1300;
  }

  //   // tinh tien

  if (soKw <= 50) {
    tien = soKw * 500;
  } else if (soKw <= 100) {
    tien = 50 * 500 + (soKw - 50) * 650;
  } else if (soKw <= 200) {
    tien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else if (soKw <= 350) {
    tien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
  } else {
    tien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
  }
  //
  //   console.log(soKwDaDung);
  document.getElementById(
    "result"
  ).innerHTML = `<p class="bg-blue-100 border border-blue-400 text-blue-800 p-4 rounded"> Tên: ${hoTen} <br /> Số KW đã dùng: ${soKw} Kw <br> Tổng tiền: ${tien.toLocaleString()} đ </p>`;
}

document.getElementById("btn-tinhTien").addEventListener("click", tinhTien);
