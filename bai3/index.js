function tinhThue() {
  var hoTen = document.getElementById("hoTen").value;
  var tongThuNhap = Number(document.getElementById("tongThuNhap").value);
  var soNguoi = Number(document.getElementById("soNguoi").value);

  //   console.log({ hoTen, tongThuNhap, soNguoi });
  // xu ly

  var thuNhapChiuThue = tongThuNhap - 4000000 - soNguoi * 1600000;
  var tienThue = 0;
  var thueSuat;

  // tinh tien thue = thuNhapChiuThue * thue suat
  if (thuNhapChiuThue <= 60000000) {
    thueSuat = 0.05;
    tienThue = thuNhapChiuThue * thueSuat;
  } else if (thuNhapChiuThue <= 120000000) {
    thueSuat = 0.1;
    tienThue = thuNhapChiuThue * thueSuat;
  } else if (thuNhapChiuThue <= 210000000) {
    thueSuat = 0.15;
    tienThue = thuNhapChiuThue * thueSuat;
  } else if (thuNhapChiuThue <= 384000000) {
    thueSuat = 0.2;
    tienThue = thuNhapChiuThue * thueSuat;
  } else if (thuNhapChiuThue <= 624000000) {
    thueSuat = 0.25;
    tienThue = thuNhapChiuThue * thueSuat;
  } else if (thuNhapChiuThue <= 960000000) {
    thueSuat = 0.3;
    tienThue = thuNhapChiuThue * thueSuat;
  } else {
    thueSuat = 0.35;
    tienThue = thuNhapChiuThue * thueSuat;
  }
  // xuat ket qua
  document.getElementById(
    "result"
  ).innerHTML = `<p class="mt-5 w-1/2 p-4 bg-blue-100 text-blue-800 rounded shadow-md"> Họ và tên: ${hoTen}  <br /> Tiền thuế phải trả là: ${tienThue} VND  </p>`;
}

document.getElementById("btn-tinhThue").addEventListener("click", tinhThue);
