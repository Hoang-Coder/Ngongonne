let toggleid2 = 0
function toggle2() {
    if (toggleid2 == 0) {
        document.getElementById('dropdowns-menu').style.display = 'block'
        toggleid2 = 1
    }
    else if (toggleid2 == 1) {
        document.getElementById('dropdowns-menu').style.display = 'none'
        toggleid2 = 0
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

window.addEventListener("scroll",
    () => {
        document.body.style.setProperty(
            "--scroll",
            window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
    },
    false
);
let contact = (idct) => {
    if (idct == 1) {window.location = "https://kyanhinfor.000webhostapp.com/kyh.html"}
    else if (idct == 2) {window.location = "https://github.com/Hoang-Coder"}
    else if (idct == 3) {window.location = "https://www.facebook.com/anh.phannhat.50702"}
    else if (idct == 4) {window.location = "mailto:chukyanh01@gmail.com"}
    else if (idct == 5) {window.location = "phone: 0922628889"}
}
// let loginbtn = () => {
//     if (document.getElementsByClassName("thongtintk")[0] != undefined) {
//         document.getElementsByClassName("thongtintk")[0].remove()
//     }
//     else if (localStorage.getItem("currentUser") != undefined) {
//         // let current_user_name = JSON.parse(localStorage.getItem("currentUser"))[0].name
//         // let ttus = document.createElement("div")
//         // ttus.className = "thongtintk"
//         // document.getElementsByTagName("body")[0].appendChild(ttus)
//         // let user_prop = `
//         //     <button onclick="removeusprop()"><i class="fa-solid fa-xmark"></i></button>
//         //     <img src="https://img.icons8.com/?size=512&id=7819&format=png">
//         //     <h1>${current_user_name}</h1>
//         //     <button id="logout" onclick="logout()" class="noselect"><span class="text">Sign Out</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
//         // `
//         ttus.innerHTML += user_prop
//     }
//     else {
//         window.location = "login.html"
//     }
// }
let removeusprop = () => {
    document.getElementsByClassName("thongtintk")[0].remove()
}
const logout = () => {
    localStorage.removeItem("currentUser")
    location.reload()
}
const loginbtn = () => {
    console.log(localStorage.getItem("curentUser"))
    if (localStorage.getItem("currentUser") == undefined) {
        window.location = "login.html"
    }
    if (localStorage.getItem("currentUser") != undefined) {
        window.location = "taikhoan.html"
    }
    
}