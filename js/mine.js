let reviewsData =[
    {
        id : 1,
        name : "Kareem",
        review : "Wellcome Karem",
        imgUrl : "images/1.jpg"
    },
    {
        id : 2,
        name : "Ahmed",
        review : "Wellcome Ahmed",
        imgUrl : "images/2.jpg"

    },
    {
        id : 3,
        name : "Mahmoud",
        review : "Wellcome Mahmoud",
        imgUrl : "images/3.jpg"
    },
    {
        id : 2,
        name : "Ahmed",
        review : "Wellcome Ahmed",
        imgUrl : "images/2.jpg"

    }
];

let nameElement = document.querySelector('.person p');
let imgElement = document.querySelector('.person img');
let reviewElement = document.querySelector('.review');

let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');

let currentItem = 0;

let updateUI = ()=>{
   let item = reviewsData[currentItem];
   nameElement.textContent = item.name;
   reviewElement.textContent = item.review;
   imgElement.src = item.imgUrl;
}
updateUI();


nextBtn.addEventListener('click', ()=>{
    currentItem++; 
   if(currentItem > reviewsData.length-1) currentItem = 0;
   updateUI();
})
prevBtn.addEventListener('click', ()=>{
    currentItem--;
    if(currentItem < 0) currentItem = reviewsData.length - 1;
    updateUI();
    
})


// ====================
let addNewBtn = document.getElementById('addNewBtn')
let overlay = document.querySelector('.overlay');
let addReviewData = document.querySelector('.addReview')
let colseBtnReview = document.querySelector('.close')

addNewBtn.addEventListener('click', ()=>{
    overlay.style.display = "block";
});

colseBtnReview.addEventListener('click', ()=>{
    overlay.style.display = "none";
});

let addReviewForm = document.querySelector('.addReview form');
addReviewForm.addEventListener('submit', e=> e.preventDefault());

let sendDataBtn = document.querySelector('.sendDataBtn')
let formMassage =document.getElementById('massage')
let formImage =document.getElementById('image')
let formName =document.getElementById('name')

sendDataBtn.addEventListener('click', ()=>{
    reviewsData.push({
        id : reviewsData.length+1,
        name : formName.value,
        review : formMassage.value,
        imgUrl : "images/" + formImage.value
    })
    console.log(reviewsData);
    overlay.style.display = "none";

})
