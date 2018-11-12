// THE LARGE IMAGE
let largeImg = document.getElementById('current');

let placeName = document.getElementById('placeName')

// let img1 = document.getElementById('img1');
// let img2 = document.getElementById('img2');
// let img3 = document.getElementById('img3');
// let img4 = document.getElementById('img4');
// let img5 = document.getElementById('img5');
// let img6 = document.getElementById('img6');
// let img7 = document.getElementById('img7');
// let img8 = document.getElementById('img8');

// img1.addEventListener('click',
// function(event){
//   largeImg.src = event.target.src;
// });
// img2.addEventListener('click',
// function(event){
//   largeImg.src = event.target.src;
// });
// img3.addEventListener('click',
// function(event){
//   largeImg.src = event.target.src;
// });
// img4.addEventListener('click',
// function(event){
//   largeImg.src = event.target.src;
// });
// img5.addEventListener('click',
// function(event){
//   largeImg.src = event.target.src;
// });
// img6.addEventListener('click',
// function(event){
//   largeImg.src = event.target.src;
// });
// img7.addEventListener('click',
// function(event){
//   largeImg.src = event.target.src;
// });
// img8.addEventListener('click',
// function(event){
//   largeImg.src = event.target.src;
// });

//Create AN ARRAY WITH ALL IMGS

// const allImgs = [img1,img2,img3,img4,img5,img6,img7,img8];
// allImgs[0].addEventListener('click',switchImg);
// allImgs[1].addEventListener('click',switchImg);
// allImgs[2].addEventListener('click',switchImg);
// allImgs[3].addEventListener('click',switchImg);
// allImgs[4].addEventListener('click',switchImg);
// allImgs[5].addEventListener('click',switchImg);
// allImgs[6].addEventListener('click',switchImg);
// allImgs[7].addEventListener('click',switchImg);
// function switchImg(event){
//   current.src = event.target.src;
// }

const allImgsEasy = document.querySelectorAll('.imgs img');

for(let counter = 0; counter <= 7;counter = counter + 1){
  allImgsEasy[counter].addEventListener('click',
  function(event){
    current.src = event.target.src;
    placeName.innerHTML = event.target.alt;
  })
}