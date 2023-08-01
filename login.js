let toggleid3 = 0
const toggle = () => {
    if (toggleid3 == 0) {
        document.getElementById('dropdown-menu').style.display = 'block'
        toggleid3 = 1
    }
    else if (toggleid3 == 1) {
        document.getElementById('dropdown-menu').style.display = 'none'
        toggleid3 = 0
    }
}
const covert = (covertid) => {
    if (covertid == 0) {
        document.getElementById('card2').style.display = 'block'
        document.getElementById('card1').style.display = 'none'
    }
    else if (covertid == 1) {
        document.getElementById('card2').style.display = 'none'
        document.getElementById('card1').style.display = 'block';
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
// function loginbtn() { window.location = "login.html" }
tk = localStorage.getItem('userAccount_key')

if (!tk) {
    let userAccount = {
        acc: [
            {
                id: 1,
                name: "Hoang Ky Anh",
                pass: "12345678",
                mail: "chukyanh01@gmail.com",
                phone: "0922628889"
            },
        ]
    }
    localStorage.setItem('userAccount_key', JSON.stringify(userAccount));
}
function check_currentUser() {
    let cur = localStorage.getItem("currentUser")
        ? JSON.parse(localStorage.getItem("currentUser"))
        : [];
    console.log(cur); //Hiện user đang đang nhập
    if (cur.length > 0) { // Nếu current
        // let user = document.getElementById("users");
        // user.innerHTML = cur[0].name;
        // let logout = document.getElementById("btnLogout");
        // logout.innerHTML = "Đăng xuất";
        // document.getElementById('linkLogin').href = "#";
        console.log("Có user")
    }
    let arr = JSON.parse(localStorage.getItem("userAccount_key"));
    console.log(arr.acc[arr.acc.length-1].id)
}
check_currentUser()
const dangky = () => {
    var namereg = document.getElementById("name").value;
    var mailreg = document.getElementById("mail").value;
    var phonereg = document.getElementById("pn").value;
    var mkreg = document.getElementById("mk").value;
    var remkreg = document.getElementById("remk").value;
    if (mkreg == remkreg || mailreg.indexOf("@") == -1) {
        var arr = localStorage.getItem('userAccount_key');
        var txtArr = JSON.parse(arr)
        let newID = txtArr.acc[txtArr.acc.length-1].id+1
        txtArr.acc.push(
            {
                id: newID,
                name: namereg,
                pass: mkreg,
                mail: mailreg,
                phone: phonereg
            }
        )
        localStorage.setItem('userAccount_key', JSON.stringify(txtArr));
        alert("Đăng ký thành công")
        alert("Bạn cần điền lại thông tin để đăng nhập")
        location.reload()
    }
}
const login = () => {
    var arr1 = localStorage.getItem('userAccount_key');
    let user = document.getElementById("name-log").value;
    if (user.length == 0) {
        alert("Tên đăng nhập không được bỏ trống")
    }
    else if (user.length < 2) {
        alert("Tên đăng nhập phải nhiều hơn 2 ký tự");
        return false;
    }

    var txtArr1 = JSON.parse(arr1);
    let tontai = 0;
    let userID = 0
    for (let item of txtArr1.acc) {
        if (user == item.name && document.getElementById("mk-log").value == item.pass) {
            tontai = 1;
            userID = item.id
        }
    }
    if (tontai == 1) {
        console.log(userID);
        alert("Đăng nhập thành công");

        let currentUser = [{
            id: userID,
            name: user,
        }]
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        window.location = "index.html";
    }
    else {
        alert("Sai tên đăng nhập hoặc mật khẩu!");
    }
}
const check_Register = () => {
    var namereg2 = document.getElementById("name").value;
    var mailreg2 = document.getElementById("mail").value;
    var phonereg2 = document.getElementById("pn").value
    var mkreg2 = document.getElementById("mk").value;
    var remkreg2 = document.getElementById("remk").value;
    if (namereg2.length == 0 || mkreg2.length == 0 || remkreg2.length == 0) {
        alert("Bạn phải điền hết thông tin");
        return false;
    }
    else if (mailreg2.length == 0 || mailreg2.indexOf('@') == -1 || mailreg2.indexOf('.') == -1) {
        alert("Cú pháp email không đúng")
        return false
    }
    else if (remkreg2 != mkreg2) {
        alert("Xác nhận mật khẩu sai");
        return false;
    }
    else if (isNaN(phonereg2) || phonereg2.length < 10) {
        alert("Số điện thoại sai");
        return false;
}
    let str_dstk = localStorage.getItem('userAccount_key');
    let dstk = JSON.parse(str_dstk);
    console.log(dstk);
    let check = 0;

    if (dstk.acc.length == 0) {
        check = 1;
    }
    else {
        for (let item of dstk.acc) {
            if (namereg2 == item.name) {
                alert("Tên tài khoản đã tồn tại!");
                return false;
            }
            else {
                check = 1;
            }
        }
    }
    if (check > 0) {
        dangky();
    }
}
// function autonhap() {
//     document.getElementById("name").value = "hka"
//     document.getElementById("mail").value = "hka@gmail.com"
//     document.getElementById("pn").value = ""
//     document.getElementById("mk").value = "cjdcjd"
//     document.getElementById("remk").value = "cjdcjd"
// }
// autonhap()
// let dang_xuat = 0

