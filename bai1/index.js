//
function kiemTra() {
  var khuVuc = document.querySelector('input[name="selector"]:checked').value;
  var doiTuong = document.querySelector('input[name="choose"]:checked').value;
  //   console.log({ khuVuc, doiTuong });
  var monT1 = Number(document.getElementById("diemMonThu1").value);
  var monT2 = Number(document.getElementById("diemMonThu2").value);
  var monT3 = Number(document.getElementById("diemMonThu3").value);
  var diemChuan = Number(document.getElementById("diemChuan").value);
  //   console.log({ diemChuan, monT1, monT2, monT3, khuVuc, doiTuong });

  // output

  // xu ly
  var diemKhuVuc = 0;
  var diemDoiTuong = 0;

  if (khuVuc == "khuVucA") {
    diemKhuVuc = 2;
  } else if (khuVuc == "khuVucB") {
    diemKhuVuc = 1;
  } else {
    diemKhuVuc = 0.5;
  }

  if (doiTuong == "doiTuong1") {
    diemDoiTuong = 2.5;
  } else if (doiTuong == "doiTuong2") {
    diemDoiTuong = 1.5;
  } else {
    diemDoiTuong = 1;
  }

  // tong diem

  var tongDiem = monT1 + monT2 + monT3 + diemKhuVuc + diemDoiTuong;
  var dauRot = "";

  if (tongDiem < diemChuan) {
    dauRot = " Bạn đã rớt";
  } else {
    dauRot = "Bạn đã đậu";
  }

  //   console.log({ tongDiem, dauRot });
  document.getElementById(
    "result"
  ).innerHTML = `<p class="mt-5 w-1/4 p-4 bg-blue-100 text-blue-800 rounded shadow-md"> Tổng Điểm: ${tongDiem} - ${dauRot}</p>`;
}

document.getElementById("btn-kiemTra").addEventListener("click", kiemTra);
