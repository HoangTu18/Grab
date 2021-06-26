//file này là mới tương tác với html, 
//Bước 2: khi click vào nút tính tiền mới lấy 3 giá trị đầu vào,
//sau đó new 1 đối tượng grab và tính tiền

//onclick
//const taxi = new Grab("suv", 20, 4);


document.querySelector('#tinhTienBtn').addEventListener("click", (e) => {
    e.preventDefault();
    let loaiXe = document.querySelector(`[name="selector"]:checked`).value;
    console.log(loaiXe);

    let soKM = document.querySelector('#kilometers').value;
    let tgCho = document.querySelector('#WaitTimes').value;

    const taxi = new Grab(loaiXe, soKM, tgCho);
    console.log(taxi.tinhTien());

    document.querySelector('#xuatTien').innerHTML = taxi.tinhTien();
    document.querySelector('#divThanhTien').style.display = 'block';
})


document.querySelector('#inHoaDonBtn').addEventListener("click", (e) => {
    e.preventDefault();

    let loaiXe = document.querySelector(`[name="selector"]:checked`).value;
    let soKM = document.querySelector('#kilometers').value;
    let tgCho = document.querySelector('#WaitTimes').value;

    const taxi = new Grab(loaiXe, soKM, tgCho);

    document.querySelector('#kmDauTien').innerHTML = 1;
    document.querySelector('#soKM2').innerHTML = taxi.soKm2;
    document.querySelector('#soKM3').innerHTML = taxi.soKm3;
    document.querySelector('#tgCho').innerHTML = taxi.thoiGianCho;

    document.querySelector('#gia1').innerHTML = taxi.giaMoCua;
    document.querySelector('#gia2').innerHTML = taxi.gia2;
    document.querySelector('#gia3').innerHTML = taxi.gia3;
    document.querySelector('#giaCho').innerHTML = taxi.giaCho;

    document.querySelector('#thanhTien1').innerHTML = Number(taxi.giaMoCua);
    document.querySelector('#thanhTien2').innerHTML = Number((taxi.soKm2) * (taxi.gia2));
    document.querySelector('#thanhTien3').innerHTML = Number((taxi.soKm3) * (taxi.gia3));
    document.querySelector('#tienChoooo').innerHTML = Number((taxi.thoiGianCHOOOO) * (taxi.giaCho));

    document.querySelector('#tongTiennn').innerHTML = taxi.tinhTien();

    document.querySelector('#tableeee').style.display = 'block';
})


