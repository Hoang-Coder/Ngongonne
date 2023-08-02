let toggleid5 = 0
function toggle() {
    if (toggleid5 == 0) {
        document.getElementById('dropdown-menu').style.display = 'block'
        toggleid5 = 1
    }
    else if (toggleid5 == 1) {
        document.getElementById('dropdown-menu').style.display = 'none'
        toggleid5 = 0
    }
}

window.addEventListener('load', function () {
    const links = [...document.querySelectorAll(".links")]
    links.forEach(item => item.addEventListener('mouseenter', handleHoverLink))
    const line = document.createElement("div")
    line.className = 'line-effect'
    document.body.appendChild(line)
    function handleHoverLink(event) {
        const { left, top, width, height } = event.target.getBoundingClientRect()
        console.log("left: " + left, "top: " + top, "width: " + width, "height: " + height)
        line.style.width = `${width}px`
        line.style.left = `${left}px`
        line.style.top = `${top + height + 3}px`
    }
    const center = document.querySelector("#center-nav")
    center.addEventListener("mouseleave", function () {
        line.style.width = 0
    })
    const right = document.querySelector("#right-nav")
    right.addEventListener("mouseleave", function () {
        line.style.width = 0
    })
})
// function loginbtn() { window.location = "login.html"}
//// JavaScript source code
function checktoAddCart(productID) {
    // console.log(document.getElementById("nofitication"))
    
    let cur = localStorage.getItem("currentUser")
        ? JSON.parse(localStorage.getItem("currentUser"))
        : [];
    if (cur.length > 0) { //Kiểm tra người dùng
        let userID = cur[0].id
            ? cur[0].id
            : 0;
        if (userID > 0) {
            addToCart(userID, productID); // Lấy ID người dùng và ID sản phẩm
        } else {
            alert("Lỗi thêm giỏ hàng! Bạn cần đăng nhập lại!");
            console.log("cur" + cur.length)
            console.log("cur[] " + cur)
            console.log(userID);
        }
    } else {
        document.getElementById("error").style.display = "block"
        let thoigian2 = setTimeout(function andi2() {document.getElementById("error").style.opacity = "1"}, 100)
    }

}
function addToCart(userID, productID) {
    document.getElementById("nofitication").style.display = "block"
    let thoigian = setTimeout(function andi() {document.getElementById("nofitication").style.opacity = "1"}, 100)
    let cart = localStorage.getItem("giohang") //Khai báo biến cart = định nghĩa dữ liệu giỏ hàng
        ? JSON.parse(localStorage.getItem("giohang")) //Nếu giỏ hàng tồn tại thì trả về mảng cart với kiểu object
        : []; // Nếu giỏ hàng không có thì trả về mảng rỗng
    let dem = 0;
    if (cart.length == 0) { //Nếu mảng giỏ hàng có 0 phần tử thì
        cart.push({// Thêm mới 1 object (thêm mới 1 phần tử)
            userID: userID,
            id: productID, // ID phần tử
            quantity: 1, // Số lượng phần tử
        });
    }
    else { //nếu không (giỏ hàng đã có phần tử) thì
        for (let item of cart) { // Kiểm tra xem giỏ hàng có phần tử nào có mã giống phần tử mới thêm vào hay không
            if (item.id == productID && item.userID == userID) { // Nếu thêm trùng phần tử, sẽ báo đếm = 1
                dem = 1;
            }
        }
        if (dem == 1) { // nếu đếm = 1 (phần tử mới thêm trùng với phần tử đã có)
            for (let item of cart) { // tìm trong giỏ hàng
                if (item.id == productID && item.userID == userID) {// Xem phần tử trùng có mã là gì
                    item.quantity++;    // Tăng số lượng của phần tử đó lên 1 đơn vị
                }
            }
        }
        else { // Nếu không (chưa có phần tử nào trùng trong giỏ hàng)
            cart.push({ // Thì thêm mới mã và số lượng 1
                userID: userID,
                id: productID,
                quantity: 1,
            });
        }
    }
    localStorage.setItem("giohang", JSON.stringify(cart)); // Lưu lại dữ liệu vừa thêm mới
    update_noti_cart(); // Gọi hàm cập nhật số lượng giỏ hàng
}
function update_noti_cart() { // Khai sinh hàm cập nhật số lượng
    if (localStorage.getItem("giohang")) { // Nếu tồn tại dữ liệu giỏ hàng thì
        let cart = JSON.parse(localStorage.getItem("giohang")); // Ép kiểu giỏ hàng về kiểu object
        let sl = 0;
        let cur = localStorage.getItem("currentUser")
            ? JSON.parse(localStorage.getItem("currentUser"))
            : [];
        let userID = 0;
        if (cur.length > 0) {
            let userIdCheck = cur[0].id
                ? cur[0].id
                : 0;
            userID = userIdCheck;

            for (let item of cart) {
                if (item.userID == userID) {
                    sl++;
                }
            }
            // let dem_phantu = document.getElementById("cart_count").innerText; // khai báo biến đếm phần tử bằng nội dung bên trong thẻ có ID là cart_count
            dem_phantu = sl; // Gán số lượng các phần tử trong giỏ hàng vào thẻ cart_count
            // document.getElementById("cart_count").innerText = sl; // Gán trực tiếp
        }
        // else {
        // document.getElementById("cart_count").innerText = "";
        // }
    }

}
let contact3 = (idct) => {
    if (idct == 1) {window.location = "https://kyanhinfor.000webhostapp.com/kyh.html"}
    else if (idct == 2) {window.location = "https://github.com/Hoang-Coder"}
    else if (idct == 3) {window.location = "https://www.facebook.com/anh.phannhat.50702"}
    else if (idct == 4) {window.location = "mailto:chukyanh01@gmail.com"}
    else if (idct == 5) {window.location = "phone: 0922628889"}
}
update_noti_cart() //Gọi hàm cập nhật số lượng
function tinhtongtien() {
    let sum = 0;
    document.querySelectorAll('.tien').forEach(function(e) {
        let num = parseInt(e.textContent);
        e.textContent = num.toLocaleString('vi-VN');
    });
    document.querySelectorAll('.tongsotien').forEach(function (e) {
        sum += parseInt(e.textContent);
        
    });
    document.getElementById("sumit").innerHTML = (sum * 1000).toLocaleString("vi-VN")+"đ"
}
tinhtongtien()
if (localStorage.getItem("currentUser") == undefined) {
    document.getElementById("information").style.display = "none"
}
else if (localStorage.getItem("currentUser") != undefined) {
    document.getElementById("information").style.display = "block"
}
const dathang = () => {
    let user = document.getElementById("user_ship").value
    let phone = document.getElementById("phone_ship").value
    let address = document.getElementById("address_ship").value
    if (user.length > 0) {
        if (phone.length >= 10) {
            if (address.length > 0) {
                alert("Đặt Hàng Thành Công")
                // let thongbaodathang = document.createElement("div")
                // thongbaodathang.className = "thongbaodathang"
                // noidungthongbao =
                // `<div>Đặt Hàng Thành Công</div>
                //  <div>${thoigiangiaohang}<div>`
                //  document.getElementsByTagName("body")[0].innerHTML = thongbaodathang
            }
            else {
                alert("Bạn Chưa Nhập Địa Chỉ")
            }
        }
        else{
            alert("Số Điện Thoại Chưa Chính Xác")
        }
    }
    else {
        alert("Tên Người Dùng Không Được Bỏ Trống")
    }
}
const loginbtn3 = () => {
    if (localStorage.getItem("currentUser") == undefined) {
        window.location = "login.html"
    }
    if (localStorage.getItem("currentUser") != undefined) {
        window.location = "taikhoan.html"
    }
}