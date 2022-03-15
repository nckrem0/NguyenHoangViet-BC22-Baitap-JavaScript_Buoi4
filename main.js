/**
 * Bài tập 1: Xuất 3 số theo số thứ tự tăng dần
 * Đầu Vào :
 * - Cho người dùng nhập vào 3 số nguyên.
 * Xử lý :
 * - Tạo biến cho người dùng nhập vào 3 số nguyên ( a , b , c)
 * - So sánh các trường hợp có thể xảy ra
 * - VD :
 * - (a <= b && b <= c)
 * - (a >= b && b >= c )
 * - (a >= b && b <= c)
 * Đầu ra : Show kết quả
 */

// function kiemTraThuTuSo (a ,b ,c) {
    var t1 ;
    var t2 ;
    var t3 ;
document.getElementById("btnKiemTraSo").onclick =function (){
            var a = document.getElementById("txtNumber").value;
            var b = document.getElementById("txtNumber1").value;
            var c = document.getElementById("txtNumber2").value;
            
            if (a <= b && b <= c) {
                t1 = c;
                t2 = b;
                t3 = a;
            }else if (a >= b && b >= c ) {
                t1 = a;
                t2 = b;
                t3 = c;
            }else if (a <= b && b >= c){
                if ( a < c){
                    t1 =b;
                    t2 =c;
                    t3 =a;
                }else {
                    t1 =b;
                    t2 =a;
                    t3 =c;
                }
            }else if (a >= b && b <= c) {
                if (a < c) {
                    t1 = c; 
                    t2 = a;
                    t3 = b;
                }
                else {
                    t1= a;
                    t2= c;
                    t3= b;
                }
            }
            var ketQua = " Tăng Dần: " + t3 + " " + t2 + " " +t1 ;
            document.getElementById("footerCheckNumber").innerHTML=ketQua;
            
}   

    
    // console.log(" Tăng Dần: " + t3 + " " + t2 + " " +t1) ;
//    return " Tăng Dần: " + t3 + " " + t2 + " " +t1;
// }
// document.getElementById("btnKiemTraSo").onclick =function (){
//     var a = document.getElementById("txtNumber").value;
//     var b = document.getElementById("txtNumber1").value;
//     var c = document.getElementById("txtNumber2").value;
//     var status = kiemTraThuTuSo(a, b, c);
//     var footer = document.getElementById("footerCheckNumber");
//     footer.innerHTML = status;
    
// }

/**
 * Bài tập 2: Viết Chương Trình Chào Hỏi
 * Đầu Vào :
 * - Máy tính sẽ hỏi ai là người sử dụng máy tính
 * Xử lý :
 * - Dựa vào câu trả lời để đưa ra lời chào phù hợp
 * - VD :
 * - Bố ( B ) : Chào Bố 
 * - Mẹ ( M ) : Chào Mẹ
 * - Anh ( A ) : Chào Anh 
 * - Em ( E ) : Chào Em 
 * Đầu ra : Show kết quả
 */
document.getElementById("btnKiemTraNguoiSuDungMayTinh").onclick = function (){
    var nguoiSuDungMayTinh = document.getElementById ("txtSuDungMayTinh").value  ;
    var ketQua ;
    
    if (nguoiSuDungMayTinh.toUpperCase () == "B"){
         ketQua= ("Chào Bố");
    }else if (nguoiSuDungMayTinh.toUpperCase () == "M"){
         ketQua=("Chào Mẹ");
    }else if (nguoiSuDungMayTinh.toUpperCase () == "A"){
         ketQua=("Chào Anh");
    }else if(nguoiSuDungMayTinh.toUpperCase () == "E") { 
         ketQua=("Chào Em");
    }else {
        ketQua = ("Không Biết")
    }
    document.getElementById("footerCheckNguoiSuDungMayTinh").innerHTML = ketQua;
}
    
    
    
/**
 * Bài tập 3: Viết chương trình xuất ra bao nhiêu số chẵn bao nhiêu số lẻ
 * Đầu Vào :
 * - Cho 3 số nguyên
 * Xử lý :
 * - Tạo biến cho 3 sô nguyên 
 * - Kiểm tra số chẵn và số lẻ 
 * - VD :
 * 
 * Đầu ra : Show kết quả
 */


document.getElementById("btnKiemTraChanLe").onclick= function (){
    var soThu1 = document.getElementById("soThu1").value;
    var soThu2 = document.getElementById("soThu2").value;
    var soThu3 = document.getElementById("soThu3").value;
    var count_1 = 0;
    var count_2 = 0;
    if (soThu1 % 2 === 0){
        count_1 = count_1 + 1;
    }else{
        count_2 = count_2 + 1;
    }
    if (soThu2 % 2 === 0){
        count_1 = count_1 + 1; 
    }else{
        count_2 = count_2 + 1;
    }
    if (soThu3 % 2 === 0){
        count_1 = count_1 + 1;
    } else {
        count_2 = count_2 + 1;
    }
    var ketQua = "Tổng Các Số Chẵn Là : " + count_1 +"</br>"+ "Tổng Các Số Lẻ Là : " + count_2 ;
    
    document.getElementById ("footerCheckChanLe").innerHTML = ketQua ;
}





/**
 * Bài tập 4: Kiểm tra tam giác đó là tam giác gì
 * Đầu Vào :
 * - Cho người dùng nhập vào 3 cạnh của tam giác
 * Xử lý :
 * - Tạo biến cho người dùng nhập vào 3 cạnh của tam giác ( a , b , c)
 * - So sánh các trường hợp có thể xảy ra
 * - VD :
 * - (a == b || a == c || b == c )) => Tam Giác Cân
 * - (a == b && b == c ) => Tam Giác Đều
 * - (a2== b2 + c2 || b2 == a2 + c2 || c2 == a2 +b2)) => Tam Giác Vuông
 * Đầu ra : Show kết quả
 */


document.getElementById("btnKiemTraTamGiac").onclick = function (){
    var a = document.getElementById("txtCanhA").value || 0;
    var b = document.getElementById("txtCanhB").value || 0 ;
    var c = document.getElementById("txtCanhC").value || 0;
    var a2 = a*a ;
    var b2 = b*b ;
    var c2 = c*c ;
    var ketQua = ("Đây Là Tam Giác Bình Thường");
    if (a <= 0 || b <= 0 || c <= 0) {
        ketQua = ("Đây Không Phải Là Tam Giác"); 
    }else if (a == b || a == c || b == c ) {
         ketQua = ("Đây Là Tam Giác Cân");  
    }else if (a== b && b == c ) {
         ketQua = ("Đây Là Tam Giác Đều"); 
    }else if (a2== b2 + c2 || b2 == a2 + c2 || c2 == a2 +b2) {
         ketQua = ("Đây Là Tam Giác Vuông"); 
    }
    document.getElementById("footerCheckTamGiac").innerHTML = ketQua ;
}
    
 