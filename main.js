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

function kiemTraThuTuSo (a ,b ,c) {
    var t1;
    var t2;
    var t3;
    
    if (a <= b && b <= c) {
        t1 = c;
        t2 = b;
        t3 = a;
    }
    if (a >= b && b >= c ) {
        t1 = a;
        t2 = b;
        t3 = c;
    }
    if (a <= b && b >= c){
        if ( a < c){
            t1 =b;
            t2 =c;
            t3 =a;
        }else {
            t1 =b;
            t2 =a;
            t3 =c;
        }
    }
    if (a >= b && b <= c) {
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
    

   return " Tăng Dần: " + t3 + " " + t2 + " " +t1;
}
document.getElementById("btnKiemTraSo").onclick =function (){
    var a = document.getElementById("txtNumber").value;
    var b = document.getElementById("txtNumber1").value;
    var c = document.getElementById("txtNumber2").value;
    var status = kiemTraThuTuSo(a, b, c);
    var footer = document.getElementById("footerCheckNumber");
    footer.innerHTML = status;
    
}











/**
 * Bài tập 4: Kiểm tra tam giác đó là tam giác gì
 * Đầu Vào :
 * - Cho người dùng nhập vào 3 cạnh của tam giác
 * Xử lý :
 * - Tạo biến cho người dùng nhập vào 3 cạnh của tam giác ( a , b , c)
 * - So sánh các trường hợp có thể xảy ra
 * - VD :
 * - (a == b && b > c) => Tam Giác Cân
 * - (a == b && b == c ) => Tam Giác Đều
 * - (a < b && b < c) => Tam Giác Vuông
 * Đầu ra : Show kết quả
 */


function kiemTraTamGiac (a, b,  c) {
    // var edge3 ;
    // edge3 = Math.sqrt (a*a + b*b)
    if (a == b && b > c) {
        return "Đây Là Tam Giác Cân" 
    } 
    
    if (a ==c && a > b){
        return "Đây Là Tam Giác Cân"
    }
    if (b ==c && a < b){
        return "Đây Là Tam Giác Cân"
    }
    if (a==b && a==c) {
        return "Đây Là Tam Giác Đều" 
    }
    console.log("Đây Là Tam Giác Cân");
    if (a <b && b <c) {
        return "Đây Là Tam Vuông"
    }
}

 document.getElementById("btnKiemTraTamGiac").onclick =function (){
    var a = document.getElementById("txtCanhA").value;
    var b = document.getElementById("txtCanhB").value;
    var c = document.getElementById("txtCanhC").value;
    var status = kiemTraTamGiac(a, b, c);
    var footer = document.getElementById("footerCheckTamGiac");
    footer.innerHTML = status;
    // console.log("Đây Là Tam Giác Cân");
    
}