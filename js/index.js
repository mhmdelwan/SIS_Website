
let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.photo');

var imgList = [];

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', function () {

    imgList = [];

    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove('active');
    }
    this.classList.add('active');


    for (let k = 0; k < itemBox.length; k++) {
      // itemBox[k].classList.remove('active');
      itemBox[k].classList.remove('show-itemBox');

      let dataFilter = this.getAttribute('data-filter');


      if (itemBox[k].getAttribute('data-item') == dataFilter) {
        itemBox[k].classList.add('show-itemBox');
        // itemBox[k].classList.add('active');




        imgList.push(itemBox[k])
      }
    }

    imageClicked(imgList);

  });
};


window.addEventListener('load', () => {


  list.forEach(l => {
    if (l.classList.contains('active')) {

      let attr = l.getAttribute('data-filter');


      itemBox.forEach(item => {
        item.classList.remove('show-itemBox');
        // item.classList.remove('active');
        // item.classList.add('hide');




        if (item.getAttribute('data-item') == attr) {

          item.classList.add('show-itemBox');

          // item.classList.remove('hide');
          // item.classList.add('active');

          imgList.push(item)
        }


      })

    }

  })

  imageClicked(imgList);

})





function imageClicked (photosList){

    previewBox = document.querySelector('.preview-box'),
    previewImg = previewBox.querySelector('img'),
    currentImg = previewBox.querySelector('.current-img'),
    totalImg = previewBox.querySelector('.total-img'),
    closeIcon = previewBox.querySelector('.icon'),
    shadow = document.querySelector('.shadow');
    // const picture = document.querySelectorAll('.picture .photo')

    // console.log(picture);
    const picture = photosList

    // let newIndex = i;
    for(let i = 0; i < picture.length; i++){
      totalImg .textContent = picture.length;
      let clickImgIndex;
      picture[i].onclick = ()=>{

        clickImgIndex = i;

        function preview(){
          currentImg.textContent = i+1;
          let selectedImgUrl = picture[i].querySelector("img").src;
          previewImg.src = selectedImgUrl;
        }

        const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');

        
        if(i == 0){
          
          prevBtn.style.display = 'none';
          console.log('prev');
        }

        if(i >= picture.length - 1){
          nextBtn.style.display = 'none';
          console.log('next');

        }

        prevBtn.onclick = ()=>{
          i--;
          if(i == 0){
            preview();
            prevBtn.style.display = 'none';

            if(i < picture.length - 1){
              nextBtn.style.display = 'block';
            }

          } else{
            preview();
            nextBtn.style.display = 'block';
          }
        }


        nextBtn.onclick = ()=>{
          i++;
          if(i >= picture.length - 1){
            preview();
            nextBtn.style.display = 'none';

            if(i >= 1){
              prevBtn.style.display = 'block';
            }

          } else{
            preview();
            prevBtn.style.display = 'block';
          }
          
        }

        preview();


        previewBox.classList.add("show");
        shadow.style.display = 'block';
        // document.querySelector('body').style.overflow = 'hidden';

        closeIcon.onclick = ()=>{
          i = clickImgIndex;
          prevBtn.style.display = 'block';
          nextBtn.style.display = 'block';
          previewBox.classList.remove("show");
          shadow.style.display = 'none';
          // document.querySelector('body').style.overflow = 'auto';
        }
      }
    }
  }




  



var swiper = new Swiper(".mySwiper", {
  slidePerView: 1,
  // spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



  


// indecator

const goTopBtn = document.querySelector('.go-top-btn');

window.addEventListener('scroll', checkHeight);

function checkHeight() {
  if (window.scrollY > 200) {
    goTopBtn.style.display = 'flex';
  } else {
    goTopBtn.style.display = 'none';
  }
}

goTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})





var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

