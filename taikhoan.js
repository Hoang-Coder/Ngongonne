let toggleid6 = 0
const toggle6 = () => {
    if (toggleid6 == 0) {
        document.getElementById('dropdown-menu').style.display = 'block'
        toggleid6 = 1
    }
    else if (toggleid6 == 1) {
        document.getElementById('dropdown-menu').style.display = 'none'
        toggleid6 = 0
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
let contact = (idct) => {
    if (idct == 1) { window.location = "https://kyanhinfor.000webhostapp.com/kyh.html" }
    else if (idct == 2) { window.location = "https://github.com/Hoang-Coder" }
    else if (idct == 3) { window.location = "https://www.facebook.com/anh.phannhat.50702" }
    else if (idct == 4) { window.location = "mailto:chukyanh01@gmail.com" }
    else if (idct == 5) { window.location = "phone: 0922628889" }
}
function thongtin() {
    let userAccount = JSON.parse(localStorage.getItem("userAccount_key"))
    let currentUser = JSON.parse(localStorage.getItem("currentUser"))
    if (document.getElementsByClassName("thongtintk")[0] != undefined) {
        document.getElementsByClassName("thongtintk")[0].remove()
    }
    if (localStorage.getItem("currentUser") != undefined) {
        for (let itemuser = 0; itemuser < userAccount.acc.length; itemuser++) {
            if (userAccount.acc[itemuser].name == currentUser[0].name) {
                let ttus = document.createElement("div")
                ttus.className = "thongtintk"
                document.getElementsByTagName("main")[0].appendChild(ttus)
                let user_prop = `
                    <img src="https://img.icons8.com/?size=512&id=7819&format=png">
                    <div>
                        <h1>${userAccount.acc[itemuser].name}</h1>
                        <table id="thongtinnguoidung">
                            <tr>
                                <td><h4>Tên Đăng Nhập: ${userAccount.acc[itemuser].name}</h4></td>
                                <td><h4>Mail: ${userAccount.acc[itemuser].mail}</h4></td>
                            </tr>
                            <tr>
                                <td><h4>Mật Khẩu: ${userAccount.acc[itemuser].pass}</h4></td>
                                <td><h4>Số Điện Thoại ${userAccount.acc[itemuser].phone}</h4></td>
                            </tr>
                        </table>
                        <div id="thongtinnguoidung2">
                            <h4>Tên Đăng Nhập: ${userAccount.acc[itemuser].name}</h4>
                            <h4>Mail: ${userAccount.acc[itemuser].mail}</h4>
                            <h4>Mật Khẩu: ${userAccount.acc[itemuser].pass}</h4>
                            <h4>Số Điện Thoại ${userAccount.acc[itemuser].phone}</h4>
                        </div>
                        <button id="logout" onclick="logout()" class="noselect"><span class="text">Sign Out</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
                    </div>
                    <div></div>
                    `
                ttus.innerHTML += user_prop
            }
        }
    }
}
thongtin()
const logout = () => {
    let textquestion = "Bạn có chắc muốn đăng xuất tài khoản không"
    if (confirm(textquestion) == true) {
        localStorage.removeItem("currentUser")
        window.location = "index.html"
    }
}