//Lưu Ý: trong file này không có bất cứ 1 tương tác nào với html hết, chỉ tạo ra class và phương thức tính tiền
//Bước 1: tạo lớp đối tượng grab:
//+ đối tượng Grab có 1 constructor nhận vào 3 tham số(tương đương 3 tham số nhận vào từ input):
//    - Loại grab
//    - số km
//    - thời gian chờ

class Grab {
    constructor(_loaiXe, _soKm, _tgCho) {
        this.loaiXe = _loaiXe;
        this.soKM = _soKm;
        this.soKm2 = 0;
        this.soKm3 = 0;
        this.thoiGianCho = _tgCho;
        this.thoiGianCHOOOO = Number(Math.ceil(this.thoiGianCho / 3));
        switch (_loaiXe) {
            case "car":
                this.giaMoCua = 8000;
                this.giaCho = 2000;
                this.gia2 = 7500;
                this.gia3 = 7000;
                break;

            case "suv":
                this.giaMoCua = 9000;
                this.giaCho = 3000;
                this.gia2 = 8500;
                this.gia3 = 8000;
                break;

            case "black":
                this.giaMoCua = 10000;
                this.giaCho = 3500;
                this.gia2 = 9500;
                this.gia3 = 9000;
                break;
            default:
                break;
        }
        if (_soKm > 1 && _soKm <= 19) {
            this.soKm2 = _soKm - 1;
        } else {
            this.soKm2 = 18;
            this.soKm3 = _soKm - 19;
        }
    }
    tinhTien() {
        return this.giaMoCua + this.soKm2 * this.gia2 + this.soKm3 * this.gia3 + this.thoiGianCHOOOO * this.giaCho;
    }
}



