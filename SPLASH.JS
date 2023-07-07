let cards = document.querySelectorAll('#cards1')
let body = document.querySelectorAll('body')
let badge = document.querySelectorAll('#badge')
let badgeNum = localStorage.getItem('badgeNums')
let add = document.querySelectorAll('#add')
let loads = document.querySelectorAll('#loads')
let imgLarge = document.getElementById('imgLarge')
let minus = document.querySelectorAll('#minus')
let num = 0
let text = document.querySelectorAll('#text')
cards.forEach(things=>{
    let buttons = things.querySelectorAll('button')
    let image = things.querySelector('img')
    buttons.forEach(buttons1=>{
        buttons1.addEventListener('click',()=>{
        if (buttons1.textContent == 'Buy Now') {
            window.location.href = 'buynow.html'
            localStorage.setItem('imageLarges',image.src)
        }
        else{
            badgeNum++
            badge.forEach(b=>{
            b.innerHTML = badgeNum
                localStorage.setItem('badgeNums',badgeNum)
            })
            buttons1.innerHTML = `
            <button class="w-fit flex items-center justify-center px-[10px] gap-[5px] py-[5px] bg-black text-white">
            <p id="minus" onclick="min()">-</p>
            <span id="text">0</span>
            <p id="add" onclick="add()">+</p>
            </button>
            `
            buttons1.style.border = 'none'

        }
        function add(){
            alert('+')
        }
        function min(){
            alert('-')
        }
        })
    
    })
})
window.onload = load()
   let ii = 0
function load(){
          badge.forEach(b=>{
            b.innerHTML = badgeNum
        })
        imgLarge.src = localStorage.getItem('imageLarges')
     
      let n =  setInterval(() => {
            ii++
            loads.forEach(loods=>{
                 if (ii == 6) {
                 loods.style.display = 'none' 
                 console.log(ii)
                 clearInterval(n)
            } else {
                loods.style.display = 'flex'   
                console.log(ii)
            }
            })
           
        }, 1000);
      
}
add.forEach(adding=>{
    adding.addEventListener('click',()=>{
        text.forEach(texts=>{
        num++
        texts.textContent = num
        })
    })
})
minus.forEach(minusing=>{
    minusing.addEventListener('click',()=>{
        text.forEach(texts=>{
        num--    
        if(num <= 0){
            num = 0
        }
        texts.textContent = num
    
        })
    })
})
function check(){
    let input = document.getElementById('input').value.toUpperCase()
    let list = document.getElementById('cards1')
    for (let i = 0; i < list.length; i++) {
        if (!list[i].textContent.toUpperCase().includes(input)) {
            list[i].style.display='none'
        } else {
            list[i].style.display='flex'
        }
    }
}
function ham(){
    let list = document.getElementById('list')
    if (list.style.display === 'none') {
    list.style.display = "flex"
    list.classList.add('listing')
    } else {
        list.style.display = "none"
        list.classList.remove('listing')
    }
}