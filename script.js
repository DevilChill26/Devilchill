// ===== LỜI CHÚC (bạn sửa phần này) =====
const messageText = `
❤️ Happy Birthday Em Nhoaa ❤️
Chúc Em tuổi mới luôn vui vẻ, hạnh phúc, luôn xinh đẹp
và gặp thật nhiều may mắn trong cuộc sống.
Mong mọi điều ước của em sẽ sớm trở thành hiện thực.
❤️ Happy Birthday ❤️
`;
// =======================================

let started = false; // khóa nút sau khi bấm

// hiệu ứng gõ chữ
function typeMessage(text, elementId, speed=60){
    const el = document.getElementById(elementId);
    let i = 0;
    function typing(){
        if(i < text.length){
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// tạo trái tim bay + xoay độc lập
function createHearts(){
    let wrapper = document.createElement("div");
    wrapper.className = "heart";

    let img = document.createElement("img");
    img.src = "heart.png";

    // vị trí ngẫu nhiên ngang màn hình
    wrapper.style.left = Math.random() * 100 + "vw";

    // tốc độ bay khác nhau
    wrapper.style.animationDuration = (8 + Math.random()*6) + "s";

    wrapper.appendChild(img);
    document.body.appendChild(wrapper);

    setTimeout(()=>wrapper.remove(),15000);
}

function createCakes(){
    let wrapper = document.createElement("div");
    wrapper.className = "cake-fly";

    let img = document.createElement("img");
    img.src = "cake.png";

    // vị trí ngang ngẫu nhiên
    wrapper.style.left = Math.random() * 100 + "vw";

    // tốc độ bay khác nhau
    wrapper.style.animationDuration = (10 + Math.random()*6) + "s";

    wrapper.appendChild(img);
    document.body.appendChild(wrapper);

    setTimeout(()=>wrapper.remove(),16000);
}

function startParty(){
    if(started) return;
    started = true;

    document.getElementById("music").play();
    typeMessage(messageText, "message");
    setInterval(createHearts, 800);
    setInterval(createCakes, 2000);

    // khóa nút
    const btn = document.querySelector("button");
    btn.disabled = true;
    btn.innerText = "Đang phát 🎉";
}
