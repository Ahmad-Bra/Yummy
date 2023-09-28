// side menu
let overlay = document.createElement("div");
overlay.className = "overlay";
document.querySelector(".heading .bars").onclick = function () {
  document.querySelector(".navbar ul").classList.toggle("active");

  document.body.appendChild(overlay);
};
let closeBu = document.querySelector("ul .close");
let menu = document.querySelector(".navbar ul");
document.addEventListener("click", (e) => {
  if (e.target === closeBu) {
    e.target.parentElement.classList.remove("active");
    document.body.removeChild(overlay);
  }
});

//scrolling smooth
window.onload = function () {
  document.querySelector(".landing .content").style.cssText =
    "opacity: 1; transform: none";
  document.querySelector(".landing img").style.cssText =
    "opacity: 1; transform: none";
};
window.onscroll = function () {
  let aboutTop = document.querySelector(".about").offsetTop;
  let aboutHeight = document.querySelector(".about").offsetHeight;
  let winHeight = this.innerHeight;
  let winScroll = this.pageYOffset;
  if (winScroll > aboutTop + aboutHeight - winHeight) {
    document.querySelector(".about .cont-1").style.cssText =
      "opacity: 1; transform: none;";
    document.querySelector(".about .cont-2").style.cssText =
      "opacity: 1; transform: none;";
  }
  let whyTop = document.querySelector(".why-us").offsetTop;
  let whyHeight = document.querySelector(".why-us").offsetHeight;
  if (winScroll > whyTop + whyHeight - winHeight) {
    document.querySelectorAll(".why-us .why").forEach((w) => {
      w.style.cssText = "opacity: 1; transform: translateY(0px);";
    });
    document.querySelector(".why-us .why-box").style.cssText =
      "opacity: 1; transform: none; ";
  }
  // ///////////////conter
  let counterTop = document.querySelector(".why-us").offsetTop;
  let counterHeight = document.querySelector(".why-us").offsetHeight;
  if (winScroll - 500 > counterTop + counterHeight - winHeight) {
    document.querySelectorAll(".counter .box p").forEach((p) => {
      let speed = 100;
      function increaseNum() {
        let target = Number(p.getAttribute("data-count"));
        let counter = Number(p.textContent);
        let inc = target / speed;
        if (counter < target) {
          p.textContent = Math.floor(inc + counter);
          setTimeout(increaseNum, 1);
        } else {
          p.textContent = target;
        }
      }
      increaseNum();
      document.querySelectorAll(".counter .box").forEach((box) => {
        box.style.cssText = "transform: none; opacity: 1";
      });
    });
  }

  let menuTop = document.querySelector(".menu").offsetTop;
  let menuHeight = document.querySelector(".menu").offsetHeight;
  if (winScroll + 600 > menuTop + menuHeight - winHeight) {
    document.querySelectorAll(".menu .filter").forEach((menu) => {
      menu.style.cssText = "transform: none; opacity: 1;";
    });
  }

  let eventTop = document.querySelector(".events").offsetTop;
  let eventHeight = document.querySelector(".events").offsetHeight;
  if (winScroll + 600 > eventTop + eventHeight - winHeight) {
    document.querySelectorAll(".events .box-event").forEach((event) => {
      event.style.cssText = "transform: none; opacity: 1;";
    });
  }

  let cheffTop = document.querySelector(".cheff").offsetTop;
  let cheffHeight = document.querySelector(".cheff").offsetHeight;
  if (winScroll + 300 > cheffTop + cheffHeight - winHeight) {
    document.querySelectorAll(".cheff .card-cheff").forEach((card) => {
      card.style.cssText = "transform: none; opacity: 1;";
    });
  }
  let bookTtableTop = document.querySelector(".book-table").offsetTop;
  let bookTtableHeight = document.querySelector(".book-table").offsetHeight;
  if (winScroll + 300 > bookTtableTop + bookTtableHeight - winHeight) {
    document.querySelector(".book-table .img-rev").style.cssText =
      "opacity: 1; transform: none;";
    document.querySelector(".book-table .form-inputs").style.cssText =
      "opacity: 1; transform: none;";
  }
  let galleryTop = document.querySelector(".gallery").offsetTop;
  let galleryHeight = document.querySelector(".gallery").offsetHeight;
  if (winScroll + 300 > galleryTop + galleryHeight - winHeight) {
    document.querySelector(".gallery .slide-cont").style.cssText =
      "opacity: 1; transform: none;";
  }
  let contactTop = document.querySelector(".contact").offsetTop;
  let contactHeight = document.querySelector(".contact").offsetHeight;
  if (winScroll + 300 > contactTop + contactHeight - winHeight) {
    document.querySelector(".contact .boxes").style.cssText =
      "opacity: 1; transform: none;";
    document.querySelector(".contact .inp").style.cssText =
      "opacity: 1; transform: none;";
  }
};

// menu
let lis = Array.from(document.querySelectorAll(".menu ul li"));
let imgsBox = document.querySelectorAll(".menu .filter");
let titleMenu = document.querySelector(".menu-desc .menu-type");
lis.forEach((li) => {
  li.addEventListener("click", (e) => remAddActive(e));
  li.addEventListener("click", filterimg);
  li.addEventListener("click", (e) => {
    titleMenu.textContent = e.target.textContent;
  });
});

function filterimg() {
  imgsBox.forEach((img) => {
    img.style.cssText = "display: none;  transition: opacity 1s";
  });

  document.querySelectorAll(this.dataset.filter).forEach((ele) => {
    ele.style.cssText =
      " transform: scale(1.4); transition: all 1s ; opacity: 0;";
    setTimeout(() => {
      ele.style.cssText =
        " display: block; transform: none; transition: all 1s ease-in-out; opacity: 1;";
    }, 0);
  });
}
//popup
let imgs = Array.from(document.querySelectorAll(".menu .box-menu img"));
imgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    imgs.forEach((img) => {
      img.classList.remove("active");
    });
    e.target.classList.add("active");
  });
  img.addEventListener("click", (e) => popuoPage(e));
});

//popup function

function popuoPage(ev) {
  let popupDiv = document.createElement("div");
  popupDiv.className = "popup";
  let imgHOld = document.createElement("div");
  imgHOld.className = "imgHold";
  let img = document.createElement("img");

  img.className = "imgPopup";
  let srcImg = ev.target.src;
  img.setAttribute("src", srcImg);
  imgHOld.appendChild(img);
  popupDiv.appendChild(imgHOld);
  setTimeout(() => {
    img.style.cssText = "transition: all .5s; transform: scale(1);";
  }, 0);
  document.body.appendChild(popupDiv);
  setTimeout(() => {
    popupDiv.style.cssText = "opacity: 1; transition: all .5s; ";
  }, 0);
  //close button
  let closeBu = document.createElement("span");
  closeBu.className = "close";
  closeBu.appendChild(document.createTextNode("X"));
  popupDiv.appendChild(closeBu);
  closeBu.addEventListener("click", (e) => removePopup(e));
}

function removePopup(e) {
  e.target.parentElement.remove();
}

///// remove and add active calss
function remAddActive(ev) {
  ev.target.parentElement.querySelectorAll(".active").forEach((e) => {
    e.classList.remove("active");
  });
  ev.target.classList.add("active");
}

// testemonials slider

let cards = Array.from(document.querySelectorAll(".testemonials .card"));
let Pageination = document.querySelectorAll(".testemonials ul li");

Pageination.forEach((pag) => {
  pag.addEventListener("click", (e) => {
    Pageination.forEach((pag) => {
      pag.classList.remove("active");
    });
    e.target.classList.add("active");
  });
  pag.addEventListener("click", showCard);
});
Pageination[Math.floor(Math.random() * Pageination.length)].click();
setInterval(() => {
  Pageination[Math.floor(Math.random() * Pageination.length)].click();
}, 3000);

function showCard() {
  cards.forEach((card) => {
    card.style.cssText = "display: none;";
  });
  setTimeout(() => {
    document.querySelector(this.dataset.card).style.cssText =
      "display: flex; transition: all 1s; opacity: 1; ";
  }, 0);
}

//gallery slide
let gallery = Array.from(document.querySelectorAll(".gallery .img-cont img"));
let bullets = document.createElement("ul");
let bulletIitem;
let nextBtn = document.querySelector(".img-cont .right");
let prevBtn = document.querySelector(".img-cont .left");
for (let i = 0; i < gallery.length; i++) {
  bulletIitem = document.createElement("li");
  bulletIitem.className = "bullet";
  bullets.appendChild(bulletIitem);
  document.querySelector(".gallery .img-cont").appendChild(bullets);
  bulletIitem.setAttribute("data-img", `.img-${i + 1}`);
  bulletIitem.addEventListener("click", showSlid);
}
let allBullet = Array.from(document.querySelectorAll(".img-cont ul li"));

bullets.addEventListener("click", (e) => remAddActive(e));
allBullet[0].click();

function showSlid() {
  gallery.forEach((img) => {
    img.classList.remove("active");
  });
  document.querySelectorAll(this.dataset.img).forEach((img) => {
    img.classList.add("active");
    setInterval(() => {
      img.style.cssText = "transition: all 1s;";
    }, 0);
  });
}
let currSlide = 0;
nextBtn.onclick = next;
prevBtn.onclick = preveous;

function next() {
  nextBtn.classList.contains("disapled") ? "" : currSlide++;
  remActBull();
  remActImgl();
  check();
}
function preveous() {
  prevBtn.classList.contains("disapled") ? "" : currSlide--;
  remActBull();
  remActImgl();
  check();
}
function check() {
  currSlide == 0
    ? prevBtn.classList.add("disapled")
    : prevBtn.classList.remove("disapled");
  currSlide == gallery.length - 1
    ? nextBtn.classList.add("disapled")
    : nextBtn.classList.remove("disapled");
}

function remActBull() {
  allBullet.forEach((bullt) => {
    bullt.classList.remove("active");
  });
  allBullet[currSlide].classList.add("active");
}
function remActImgl() {
  gallery.forEach((gall) => {
    gall.classList.remove("active");
  });
  gallery[currSlide].classList.add("active");
}
gallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    remActImgl();
    popuoPage(e);
  });
});

//sroll to top
let btnTop = document.querySelector(".scroll-top");
if (btnTop) {
  let toggleScroll = function () {
    window.scrollY > 800
      ? btnTop.classList.add("active")
      : btnTop.classList.remove("active");
  };
  window.addEventListener("load", toggleScroll);
  window.addEventListener("scroll", toggleScroll);
  btnTop.addEventListener(
    "click",
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    })
  );
}

document.querySelectorAll(".heading a").forEach((a) => {
  a.addEventListener("click", (a) => {
    // a.preventDefult();
    document.querySelector(a.target.dataset.link).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const preloader = document.querySelector("#preloader");
if (preloader) {
  window.addEventListener("load", () => {
    preloader.remove();
  });
}
