let toggleid4 = 0
let sanpham = [
    {
        name: "Gà Giòn 1 Miếng",
        describe: "1 Miếng Gà Rán",
        price: 30000,
        image: "./image/garan/garan1.png",
        id: 1,
    },
    {
        name: "Cơm Gà Giòn",
        describe: "(1 Miếng Gà, Cơm, Xà Lách)",
        price: 45000,
        image: "./image/garan/garan2.png",
        id: 2,
    },
    {
        name: "Gà Giòn 2 Miếng",
        describe: "2 Miếng Gà Rán",
        price: 60000,
        image: "./image/garan/garan3.png",
        id: 3,
    },
    {
        name: "Gà Giòn 4 Miếng",
        describe: "4 Miếng Gà Rán",
        price: 120000,
        image: "./image/garan/garan4.png",
        id: 4,
    },
    {
        name: "Gà Giòn 6 Miếng",
        describe: "6 Miếng Gà Rán",
        price: 180000,
        image: "./image/garan/garan5.png",
        id: 5,
    },
    {
        name: "Gà Giòn Vui Vẻ",
        describe: "(2 Miếng Gà, Khoai Tây, Nước Ngọt)",
        price: 85000,
        image: "./image/garan/garan6.png",
        id: 6,
    },
    {
        name: "Cơm Gà Giòn",
        describe: "(1 Miếng Gà, Cơm, Xà Lách, Nước Ngọt)",
        price: 58000,
        image: "./image/garan/garan7.png",
        id: 7,
    },
    {
        name: "Gà Giòn Vui Vẻ",
        describe: "(1 Miếng Gà, Khoai Tây, Nước Ngọt)",
        price: 55000,
        image: "./image/garan/garan8.png",
        id: 8,
    },
    {
        name: "Cơm Gà Cay",
        describe: "(1 Miếng Gà Cay, Cơm, Xà Lách)",
        price: 50000,
        image: "./image/garan/garan9.png",
        id: 9,
    },
    {
        name: "Gà Cay 2 Miếng",
        describe: "2 Miếng Gà Rán Cay",
        price: 70000,
        image: "./image/garan/garan10.png",
        id: 10,
    },
    {
        name: "Gà Cay Vui Vẻ",
        describe: "(2 Miếng Gà Cay, Khoai Tây, Nước Ngọt)",
        price: 95000,
        image: "./image/garan/garan11.png",
        id: 11,
    },
    {
        name: "Cơm Gà Cay ",
        describe: "(1 Miếng Gà Cay, Cơm, Nước Ngọt, Xà Lách)",
        price: 60000,
        image: "./image/garan/garan12.png",
        id: 12,
    },
    {
        name: "Gà Cay Vui Vẻ",
        describe: "(1 Miếng Gà Cay, Khoai Tây, Nước Ngọt)",
        price: 60000,
        image: "./image/garan/garan13.png",
        id: 13,
    },
    {
        name: "Gà Cay 1 Miếng",
        describe: "1 Miếng Gà Rán Cay",
        price: 35000,
        image: "./image/garan/garan14.png",
        id: 14,
    },
    {
        name: "Burger Gà Giòn ",
        describe: "(Burger Gà, Nước Ngọt)",
        price: 40000,
        image: "./image/burger/burger1.png",
        id: 15,
    },
    {
        name: "Burger Gà Giòn",
        describe: "Burger 1 Miếng Gà Rán",
        price: 30000,
        image: "./image/burger/burger2.png",
        id: 16,
    },
    {
        name: "Burger Gà Giòn",
        describe: "(Burger Gà, Khoai Tây, Nước Ngọt)",
        price: 50000,
        image: "./image/burger/burger3.png",
        id: 17,
    },
    {
        name: "Mì Ý Vui Vẻ",
        describe: "(Mì Ý Sốt Bò, 1 Miếng Gà Giòn, Nước Ngọt)",
        price: 70000,
        image: "./image/spaghetti/spaghetti1.png",
        id: 18,
    },
    {
        name: "Mì Ý Vui Vẻ",
        describe: "(Mì Ý Sốt Bò, 2 Gà Không Xương, Khoai Tây, Nước Ngọt)",
        price: 90000,
        image: "./image/spaghetti/spaghetti2.png",
        id: 19,
    },
    {
        name: "Mì Ý Vui Vẻ",
        describe: "(Mì Ý Sốt Bò, 2 Gà Không Xương, Nước Ngọt)",
        price: 80000,
        image: "./image/spaghetti/spaghetti3.png",
        id: 20,
    },
    {
        name: "Mì Ý Vui Vẻ",
        describe: "(Mì Ý Sốt Bò, Nước Ngọt)",
        price: 55000,
        image: "./image/spaghetti/spaghetti4.png",
        id: 21,
    },
    {
        name: "Mì Ý Vui Vẻ",
        describe: "(1 Miếng Gà Giòn, Mì Ý Sốt Bò, Nước Ngọt)",
        price: 80000,
        image: "./image/spaghetti/spaghetti5.png",
        id: 22,
    },
    {
        name: "Mì Ý Vui Vẻ",
        describe: "(1 Miếng Gà Giòn, Mì Ý Sốt Bò, Nước Ngọt, Khoai Tây)",
        price: 100000,
        image: "./image/spaghetti/spaghetti6.png",
        id: 23,
    },
    {
        name: "Mì Ý Vui Vẻ",
        describe: "(Mì Ý Sốt Bò, Nước Ngọt, Khoai Tây)",
        price: 70000,
        image: "./image/spaghetti/spaghetti7.png",
        id: 24,
    },
    {
        name: "Mì Ý Vui Vẻ",
        describe: "(Mì Ý Xúc Xích, Nước Ngọt, Khoai Tây)",
        price: 60000,
        image: "./image/spaghetti/spaghetti8.png",
        id: 25,
    },
    {
        name: "Mì Ý Vui Vẻ",
        describe: "(Mì Ý Xúc Xích, Nước Ngọt)",
        price: 45000,
        image: "./image/spaghetti/spaghetti9.png",
        id: 26,
    },
    {
        name: "Mì Ý Vui Vẻ",
        describe: "(Mì ý Xúc Xích)",
        price: 35000,
        image: "./image/spaghetti/spaghetti10.png",
        id: 27,
    },
    {
        name: "Pepsi",
        describe: "Pepsi cỡ vừa",
        price: 12000,
        image: "./image/douong/douong1.png",
        id: 28,
    },
    {
        name: "Pepsi",
        describe: "Pepsi Cỡ Lớn",
        price: 17000,
        image: "./image/douong/douong2.png",
        id: 29,
    },
    {
        name: "7 Up",
        describe: "7 Up Cỡ Vừa",
        price: 12000,
        image: "./image/douong/douong3.png",
        id: 30,
    },
    {
        name: "7 Up",
        describe: "7 Up Cỡ Lớn",
        price: 17000,
        image: "./image/douong/douong4.png",
        id: 31,
    },
    {
        name: "Mirinda",
        describe: "Mirinda Cỡ Vừa",
        price: 12000,
        image: "./image/douong/douong5.png",
        id: 32,
    },
    {
        name: "Mirinda",
        describe: "Mirinda Cỡ Lớn",
        price: 17000,
        image: "./image/douong/douong6.png",
        id: 33,
    },
    {
        name: "Trà Đào",
        describe: "Trà Đào Cỡ Vừa",
        price: 12000,
        image: "./image/douong/douong7.png",
        id: 34,
    },
    {
        name: "Trà Đào",
        describe: "Trà Đào Cỡ Lớn",
        price: 17000,
        image: "./image/douong/douong8.png",
        id: 35,
    },
    {
        name: "Nước Suối",
        describe: "Tinh Khiết Sương Mai",
        price: 5000,
        image: "./image/douong/douong9.png",
        id: 36,
    }
]
localStorage.setItem("Sanpham", JSON.stringify(sanpham))
// console.log(sanpham)
for (let product of sanpham) {
    let card =
        `<div class ="card" id="sp${product.id}">
        <div onclick="chitiet(${product.id})" class="image-container">
            <img src="${product.image}"/>
        </div>
        <div class="container">
            <div onclick="chitiet(${product.id})" class="product-name">
                <h4 class="name">${product.name}</h4>
                <h5 class="describe">${product.describe}</h5>
                <span>
                <h5 class="gia">Giá:</h5>
                <h6 class="sotien">${product.price}</h6>
                <span>
            </div>
            <div class="action-btn">
            <button class="mua_hang" onclick="checktoAddCart(${product.id})">Đặt Hàng</button>
            </div>
            </div>
            </div>`
// <button class="chi_tiet" onclick="chitiet(${product.id})">Chi Tiết</button>
    document.getElementById("products-item").innerHTML += card
}

let chitiet = (idprod) => {
    if (document.getElementsByClassName("thongtin")[0] != undefined) {
        document.getElementsByClassName("thongtin")[0].remove()
    }
    for (ktrasp of sanpham) {
        if (ktrasp.id == idprod) {
            let thongtin = document.createElement("div")
            thongtin.className = "thongtin"
            thongtin.innerHTML =
            `<div class="image-properties">
                <img class="main-pic" src="${ktrasp.image}"/>
                <div>
                    <img class="logo-pc"src="./image/banner/logo2.png"/>
                    <h1>Ngongon<br>${ktrasp.name}</h1>
                </div>
            </div>
            <div class="properties">
                <h1>${ktrasp.name}</h1>
                <div>
                    <h3 class="bfmoney">
                        <i class="fa-solid fa-coins"></i> 
                        Giá:
                    </h3>
                    <h3 class="money">${ktrasp.price}<h3>
                </div>
                <h3><i class="fa-solid fa-file-pen"></i>&nbsp;${ktrasp.describe}</h3>
                <button onclick="checktoAddCart(${ktrasp.id})">Đặt Hàng</button>
            </div>
            <button id="close" onclick="removethongtin()" class="fa-solid fa-xmark"></button>`
            document.getElementsByTagName("main")[0].appendChild(thongtin)
            document.querySelectorAll('.money').forEach(function(a) {
                let num = parseInt(a.textContent);
                a.textContent = num.toLocaleString('vi-VN') + "đ";
            });
        }
    }
}
document.querySelectorAll('.sotien').forEach(function(e) {
    let num = parseInt(e.textContent);
    e.textContent = num.toLocaleString('vi-VN') + "đ";
});
const removethongtin = () => {
    document.getElementsByClassName("thongtin")[0].remove()
}
// let loginbtn2 = () => {
//     if (document.getElementsByClassName("thongtintk")[0] != undefined) {
//         document.getElementsByClassName("thongtintk")[0].remove()
//     }
//     else if (localStorage.getItem("currentUser") != undefined) {
//         let current_user_name = JSON.parse(localStorage.getItem("currentUser"))[0].name
//         let ttus = document.createElement("div")
//         ttus.className = "thongtintk"
//         document.getElementsByTagName("body")[0].appendChild(ttus)
//         let user_prop = `
//             <button onclick="removeusprop()"><i class="fa-solid fa-xmark"></i></button>
//             <img src="https://img.icons8.com/?size=512&id=7819&format=png">
//             <h1>${current_user_name}</h1>
//             <button id="logout" onclick="logout()" class="noselect"><span class="text">Sign Out</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
//         `
//         ttus.innerHTML += user_prop
//     }
//     else {
//         window.location = "login.html"
//     }
// }
// let removeusprop = () => {
//     document.getElementsByClassName("thongtintk")[0].remove()
// }
// const logout = () => {
//     localStorage.removeItem("currentUser")
//     location.reload()
// }
// let toggleid = 0
function toggle() {
    if (toggleid4 == 0) {
        document.getElementById('dropdown-menu').style.display = 'block'
        toggleid4 = 1
    }
    else if (toggleid4 == 1) {
        document.getElementById('dropdown-menu').style.display = 'none'
        toggleid4 = 0
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
        // console.log("left: "+left, "top: "+top, "width: "+width, "height: "+height)
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
function capitalize(string) { return string.charAt(0).toUpperCase() + string.slice(1); }
const search = () => {
    let timthay = 0
    let user_search = document.getElementById("search").value
    for (thucdon of sanpham) {
        let tensanpham = thucdon.name + " " + thucdon.describe
        if (tensanpham.toLowerCase().indexOf(user_search.toLowerCase()) > -1) {
            document.getElementById("sp" + thucdon.id).style.display = "block"
            timthay = 1
            document.getElementById("cantsearch").style.display = "none"
        }
        if (tensanpham.toLowerCase().indexOf(user_search.toLowerCase()) == -1) {
            document.getElementById("sp" + thucdon.id).style.display = "none"
        }
    }
    if (user_search.toLowerCase() == "nước") {
        for (thucdon2 of sanpham) {
            let tensanpham2 = thucdon2.name + " " + thucdon2.describe
            if (thucdon2.id > 27) {
                document.getElementById("sp" + thucdon2.id).style.display = "block"
            }
            if (thucdon2.id <= 27 & tensanpham2.toLowerCase().indexOf(user_search.toLowerCase()) == -1) {
                document.getElementById("sp" + thucdon2.id).style.display = "none"
            }
        }
    }
    console.log(timthay)
    if (timthay == 0) {
        document.getElementById("cantsearch").style.display = "block"
    }
}
let researchbtn = () => {
    let search = document.getElementById("search").value
    console.log(search)
    if (search.length == 0) {
        document.getElementById("research").style.display = "none"
    }
    else if (search.length >= 1) {
        document.getElementById("research").style.display = "block"
    }
}
let reloadsearch = () => {
    for (doan2 of sanpham) {
        document.getElementById("sp" + doan2.id).style.display = ""
    }
    document.querySelector("#search").value = ""
    document.getElementById("research").style.display = "none"
    document.getElementById("cantsearch").style.display = "none"
}
let contact2 = (idct) => {
    if (idct == 1) {window.location = "https://kyanhinfor.000webhostapp.com/kyh.html"}
    else if (idct == 2) {window.location = "https://github.com/Hoang-Coder"}
    else if (idct == 3) {window.location = "https://www.facebook.com/anh.phannhat.50702"}
    else if (idct == 4) {window.location = "mailto:chukyanh01@gmail.com"}
    else if (idct == 5) {window.location = "phone: 0922628889"}
}
function loginbtn2() {
    if (localStorage.getItem("currentUser") == undefined) {
        window.location = "login.html"
    }
    if (localStorage.getItem("currentUser") != undefined) {
        window.location = "taikhoan.html"
    }
    
}
