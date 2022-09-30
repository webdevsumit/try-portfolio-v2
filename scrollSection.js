// var lastKnownScrollPosition = 0;
// var isScrolling = false;
// var yScrollPos = 0;

// let middleEle = document.getElementById('middle');
// let middleSec = middleEle.getBoundingClientRect();
// let bottomeEle = document.getElementById('bottom');
// let bottomeSec = middleEle.getBoundingClientRect();
// const sectionPossitions = [0, middleSec.y, bottomeSec.y]
// console.log(sectionPossitions);

// document.addEventListener('scroll', (e) => {
//     e.preventDefault();
//     let newKnownScrollPosition = window.scrollY;

//     if(newKnownScrollPosition === 720) isScrolling = false;

//     if(newKnownScrollPosition-lastKnownScrollPosition > 10 && !isScrolling){
//         console.log(newKnownScrollPosition);
//         window.scrollTo(0, 760);
//         isScrolling = true;
//     }else if(newKnownScrollPosition-lastKnownScrollPosition < -10  && !isScrolling){
//         // console.log("Up...");
//         isScrolling = true;
//     }
//     lastKnownScrollPosition = newKnownScrollPosition;
// });


// I will filx this smooth scroll part letter....