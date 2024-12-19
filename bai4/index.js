function tinhTienCap() {
  var maKH = document.getElementById("maKhachHang").value;
  var soKenh = Number(document.getElementById("soKenh").value);
  var soKetNoi = Number(document.getElementById("connections").value);
  var loaiKhacHang = document.getElementById("customerType").value;

  // console.log({ soKetNoi, loaiKhacHang });
  // xu ly

  var tienThanhToan = 0;

  if (loaiKhacHang == "household") {
    // soKetNoi = 0;
    tienThanhToan = 4.5 + 20.5 + soKenh * 7.5;
  } else {
    // soKetNoi = 7.5;
    if (soKetNoi <= 10) {
      tienThanhToan = 15 + 7.5 * soKetNoi + 50 * soKenh;
    } else if (soKetNoi > 10) {
      tienThanhToan = 15 + 75 + (soKetNoi - 10) * 5 + 50 * soKenh;
    }
  }
  // Xuat ra man hinh

  document.getElementById(
    "result"
  ).innerHTML = `<p class="mt-5 w-1/5 bg-green-100 text-green-800 p-4 rounded-md"> Mã khách hàng: ${maKH}  <br /> Tổng tiền cáp: ${tienThanhToan}$  </p>`;
}

document.getElementById("btn-tinhTien").addEventListener("click", tinhTienCap);
