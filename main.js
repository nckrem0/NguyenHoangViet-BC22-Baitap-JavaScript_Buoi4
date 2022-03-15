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
    var a =5;
    var b =5;
    var c =5;
    
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
    
    console.log(" Tăng Dần: " + t3 + " " + t2 + " " +t1) ;
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

    var boSuDungMayTinh = 1 ;
    var meSuDungMayTinh = 2 ;
    var anhSuDungMayTinh = 3 ;
    var emSuDungMayTinh = 4 ;
    var nguoiSuDungMayTinh =4 ;
    if (nguoiSuDungMayTinh == boSuDungMayTinh){
        console.log("Chào Bố");
    }else if (nguoiSuDungMayTinh == meSuDungMayTinh){
        console.log("Chào Mẹ");
    }else if (nguoiSuDungMayTinh == anhSuDungMayTinh){
        console.log("Chào Anh");
    }else { 
        console.log("Chào Em");
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

var soNguyen1 = 1
var soNguyen2 = 21
var soNguyen3 = 32

if (soNguyen1 % 2 === 0){
    var soLe1 = 0 ;
    var soChan1 = 0 ;
    soChan1 = soChan1 + 1; 
}else {
    var soLe1 = 0 ;
    var soChan1 = 0 ;
    soLe1 = soLe1 + 1;
}
if (soNguyen2 % 2 === 0){
    var soLe2 = 0 ;
    var soChan2 = 0 ;
    soChan2 = soChan2 + 1; 
}else {
    var soLe2 = 0 ;
    var soChan2 = 0 ;
    soLe2 = soLe2 + 1;
}
if (soNguyen3 % 2 === 0){
    var soLe3 = 0 ;
    var soChan3 = 0 ;
    soChan3 = soChan3 + 1; 
}else {
    var soLe3 = 0 ;
    var soChan3 = 0 ;
    soLe3 = soLe3 + 1;
}
var tongCacSoChan = soChan1 + soChan2 + soChan3 ;
var tongCacSoLe = soLe1 + soLe2 + soLe3 ;

console.log("Tổng Các Số Chẵn Là : " + tongCacSoChan);
console.log("Tổng Các Số Lẻ Là : " + tongCacSoLe);
    






/**
 * Bài tập 4: Kiểm tra tam giác đó là tam giác gì
 * Đầu Vào :
 * - Cho người dùng nhập vào 3 cạnh của tam giác
 * Xử lý :
 * - Tạo biến cho người dùng nhập vào 3 cạnh của tam giác ( a , b , c)
 * - So sánh các trường hợp có thể xảy ra
 * - VD :
 * - (a == b && b != c) => Tam Giác Cân
 * - (a == b && b == c ) => Tam Giác Đều
 * - (a != b && b != c) => Tam Giác Vuông
 * Đầu ra : Show kết quả
 */


// function kiemTraTamGiac (a, b,  c) {
    var a =3 ;
    var b =3 ;
    var c= 2 ;
    if (a == b && b != c) {
        console.log("Đây Là Tam Giác Cân");  
    }else if (a == c && a != b){
        console.log("Đây Là Tam Giác Cân"); 
    }else if (b == c && a != b){
        console.log("Đây Là Tam Giác Cân"); 
    }else if (a== b && b == c ) {
        console.log("Đây Là Tam Giác Đều"); 
    }else if (a != b && b != c) {
        console.log("Đây Là Tam Giác Vuông");
    }else if (a != b && a != c ){
        console.log("Đây Là Tam Giác Vuông");
    }
    
// }

//  document.getElementById("btnKiemTraTamGiac").onclick =function (){
//     var a = document.getElementById("txtCanhA").value;
//     var b = document.getElementById("txtCanhB").value;
//     var c = document.getElementById("txtCanhC").value;
//     var status = kiemTraTamGiac(a, b, c);
//     var footer = document.getElementById("footerCheckTamGiac");
//     footer.innerHTML = status;
    
// }