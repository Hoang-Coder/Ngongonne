const firebaseConfig = {
  apiKey: "AIzaSyBxMC8gkeMdklroSZ69ora12hsIn9Z9cRc",
  authDomain: "ngongonlogin.firebaseapp.com",
  databaseURL: "https://ngongonlogin-default-rtdb.firebaseio.com",
  projectId: "ngongonlogin",
  storageBucket: "ngongonlogin.appspot.com",
  messagingSenderId: "876321874853",
  appId: "1:876321874853:web:a38f4d1b053103613f3e4c"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("Quản Lý Đơn Hàng");
let tatcataikhoanhienco = JSON.parse(localStorage.getItem("userAccount_key")).acc
let iduserhienco = JSON.parse(localStorage.getItem("currentUser"))
let giohanghienco = JSON.parse(localStorage.getItem("giohang"))
let tatcasanphamhienco = JSON.parse(localStorage.getItem("Sanpham"))
let ordersanpham = []
let tentaikhoan = ""
let sodt = ""
// console.log(tatcasanphamhienco)
for (kiemtragiohang of giohanghienco) {
    if (kiemtragiohang.userID == iduserhienco[0].id) {
        for (kiemtrasanphamtrung of tatcasanphamhienco) {
            // console.log(kiemtrasanphamtrung.id)
            if (kiemtrasanphamtrung.id == kiemtragiohang.id) {
                // console.log(kiemtragiohang.quantity+" "+kiemtrasanphamtrung.name)`
                ordersanpham.push(kiemtrasanphamtrung.name+" (Số Lượng: "+kiemtragiohang.quantity+")")
            }
        }
    }
}
// console.log(ordersanpham)
for (taikhoancheck of tatcataikhoanhienco) {
    if (taikhoancheck.name == iduserhienco[0].name) {
        tentaikhoan = taikhoancheck.mail
        sodt = taikhoancheck.phone
    }
}
const saveMessages = (name, emailid, phone, address, order) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    user: name,
    phone: phone,
    email: emailid,
    address: address, 
    Order: order,
  });
};
document.getElementById("datmua").addEventListener("click", function() {
    let diachihienco = document.getElementById("address_ship").value
    let tenhienco = document.getElementById("user_ship").value
    let sdthienco = document.getElementById("phone_ship").value
    if (diachihienco.length > 0 & tenhienco.length > 0 & sdthienco.length >= 10) {
      saveMessages(iduserhienco[0].name, tentaikhoan, sodt, diachihienco, ordersanpham);
      console.log("cjd")
    }
  });
  
// saveMessages(iduserhienco[0].name, tentaikhoan, sodt, ordersanpham)
const getElementVal = (id) => {
  return document.getElementById(id).value;
};
