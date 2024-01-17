// 검색창
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
console.log(searchInputEl);

searchEl.addEventListener('click', function() {
    searchInputEl.focus();
});

// focus
searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색'); // setAttribute : 지정된 요소의 속성 값을 설정
});

// blur
searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

// document body 영역
const badgesEl = document.querySelector('.badges');
// window를 사용하면 자동으로 width, height 값을 잡아줌

const topEl = document.querySelector('#to_top'); // to_top 버튼

window.addEventListener('scroll',_.throttle(function(){
    // console.log('scroll!');
    // console.log(window.scrollY);

    if(window.scrollY > 500){
        //배지 숨기기
        // badgesEl.style.display = 'none'; 이거는 너무 툭툭 사라짐
        //gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgesEl,0.5,{
            // display: 'none',
            opacity:0
        });
        // TOP 보이기
        gsap.to(topEl , 0.2 , {
            x:0 //가로 내 위치
        });
    } else {
        //배지 보이기
        // badgesEl.style.display = 'block';
        gsap.to(badgesEl,0.5,{
            opacity:1
        });
        // TOP 숨기기
        gsap.to(topEl , 0.2 , {
            x:100 //오른쪽으로 사라져!
        });
    }
},300)); //==> 0.3초 동안 지속하겠다

topEl.addEventListener('click',function(){
    gsap.to(window , 0.7 , {
        scrollTo: 0
    })
});


// querySelectAlldl 배열을 만들어줌
// forEach 만든 배열들을 하나씩 꺼내줌
//
const fadeEls = document.querySelectorAll('.section1 .fade-in');
console.log(fadeEls);
fadeEls.forEach(function(fadeEl, index) { //매개변수:fadeEl
    // if(index == 0) 따로따로 주고 싶으면 if문 사용
    gsap.to(fadeEl,1,{
        delay:(index+1) *.7, //0.7> 1.4> 2.1> 2.8 ...
        opacity:1
    });    
});

// 내가 swiper할 태그랑 이름이 같아야함
new Swiper('.inner_left .swiper',{
    direction: 'vertical',
    autoplay: true,
    loop: true, // 처음으로 다시 돌아가기
    speed: 100,
});

new Swiper('.promotion .swiper',{
    slidesPerView : 3, //한번에 보여줄 슬라이드 개수
    spaceBetween : 10, //슬라이드 사이 여백
    centeredSlides: true, //1번 슬라이드가 가운데 보이기
    autoplay: true,    
    loop: true,
    // 왼쪽, 오른쪽 버튼이 어떤건지 알려줘야함
    pagination: {
        el:'.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable : true, //페이지 번호 선택활성화
    },
    navigation:{
        prevEl:'.promotion .swiper-button-prev',
        nextEl:'.promotion .swiper-button-next'
    }
});

new Swiper('.section9 .swiper' ,{
    slidesPerView : 5,
    spaceBetween : 30,
    autoplay : true,
    loop : true,
    navigation:{
        prevEl:'.section9 .swiper-button-prev',
        nextEl:'.section9 .swiper-button-next'
    }
});

// 프로모션 창 토글 변수 
const promotionToggleEl = document.querySelector('.toggle-promotion');
// 프로모션 부분 변수
const promotionEl = document.querySelector('.promotion');
// 토글버튼으로 promotion 창이 열려있는지 닫혀있는지 확인. 
let isHidePromotion = false;

promotionToggleEl.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion;
    console.log('isHidePromotion ' + isHidePromotion);

    if(isHidePromotion) { // true
        // 클릭 시 보여주도록 open 클래스 추가
        promotionEl.classList.add('open');
        promotionToggleEl.classList.add('open');
    } else { // false
        // 클릭 시 숨겨지도록 open 클래스 삭제
        promotionEl.classList.remove('open');
        promotionToggleEl.classList.remove('open');
    }
});

const spyEls = document.querySelectorAll('div.scroll-spy');

spyEls.forEach(function(spyEl){
    new ScrollMagic.Scene({
        triggerElements:spyEl, // 내가 감지해야할 요소 지정
        triggerHook : .8 // 내가 감지할 요소를 0.8초씩 확인해주기
    })
    .setClassToggle(spyEl , 'show')
    .addTo(new ScrollMagic.Controller());
});

// Scene : 어떤 Section의 어떤 요소를 만날거야 그러면 추가할고야 
// ScrollMagic.Controller() : 애니메이션을 실행해주는 거

