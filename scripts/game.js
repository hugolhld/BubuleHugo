//SubMenuDynamite
const settingDynamite = document.querySelector('.dynamites')
const openSubMenuDynamite = document.querySelector('.subMenuDynamites')
const fishContainer = document.querySelector('#fishContainer')
const deep0 = 790,
    deep2 = 2290,
    deep4 = 3790,
    deep6 = 5290,
    deep8 = 6790,
    deep10 = 8290
let fishs = []
let fishClicked = []
let coin, totalCoin = document.querySelector('.totalCoin'), TCoin = 0
const numberFishCaught = document.querySelector('#numberFishCaught')
const numberFishPossible = document.querySelector('#numberFishPossible')

    function setFishClickable(){
        let fishArray = document.querySelectorAll('.fish')
        fishArray.forEach(function(element, index) {
            element.addEventListener('click', (_event) => {
                console.log("step 1")
                if (fishClicked.length < upLevelHook){
                    console.log("step 2")
                    if(!fishClicked.includes(element)) {
                        console.log("step 3")
                        fishClicked.push(element)
                        element.classList.remove('left','right')
                        
                        coin = fishs[element.getAttribute('data-position')].price
                        TCoin = TCoin + coin
                        totalCoin.innerHTML = TCoin
                        
                    }
                    else {
                        console.log('fish in array')
                    }
                    fishFollow(_event.clientX, _event.clientY, element)
                    document.addEventListener('mousemove', _event => {
                        fishFollow(_event.clientX, _event.clientY, element)
                    })
                    numberFishCaught.innerHTML = fishClicked.length
                }
                if(fishClicked.length == upLevelHook){
                    document.documentElement.scrollTop='0px'
                    //Faire en sorte que les poisson ne suivent plus la souris 
                    fishClicked = []
                    numberFishCaught.innerHTML = fishClicked.length
                    
                    startGame()
                }
            })
        })
    }

function setDeep(){
    let fishType1 = document.querySelectorAll('.type1')
    let fishType2 = document.querySelectorAll('.type2')
    let fishType3 = document.querySelectorAll('.type3')
    let fishType4 = document.querySelectorAll('.type4')
    let fishType5 = document.querySelectorAll('.type5')
    let fishType6 = document.querySelectorAll('.type6')
    let fishType100 = document.querySelectorAll('.type100')
    for(let i = 0; i < fishType1.length ; i++){
        let posFishType1Y = Math.floor(Math.random()*(deep2-deep0)+deep0)
        //console.log(posFishType1Y)
        fishType1[i].style.top = posFishType1Y + 'px'
        if (fishType1[i].classList.contains('right')){
            fishType1[i].style.right = 110 + 'vw'
        }else if(fishType1[i].classList.contains('left')){
            fishType1[i].style.left = -10 + 'vw'
        }
    }
    
    for(let j = 0; j< fishType2.length ; j++){
    
        let posFishType2Y = Math.floor(Math.random()*(deep4-deep0)+deep0)
        //console.log(posFishType2Y)
        fishType2[j].style.top = posFishType2Y + 'px'
        if (fishType2[j].classList.contains('right')){
            fishType2[j].style.right = 110 + 'vw'
        }else if(fishType2[j].classList.contains('left')){
            fishType2[j].style.left = -10 + 'vw'
        }
    }
    
    for(let k = 0; k < fishType3.length ; k++){
    
        let posFishType3Y = Math.floor(Math.random()*(deep6-deep2)+deep2)
        //console.log(posFishType3Y)
        fishType3[k].style.top = posFishType3Y + 'px'
        if (fishType3[k].classList.contains('right')){
            fishType3[k].style.right = 110 + 'vw'
        }else if(fishType3[k].classList.contains('left')){
            fishType3[k].style.left = -10 + 'vw'
        }
    }
    
    for(let l = 0; l< fishType4.length ; l++){
    
        let posFishType4Y = Math.floor(Math.random()*(deep8-deep4)+deep4)
        //console.log(posFishType4Y)
        fishType4[l].style.top = posFishType4Y + 'px'
        if (fishType4[l].classList.contains('right')){
            fishType4[l].style.right = 110 + 'vw'
        }else if(fishType4[l].classList.contains('left')){
            fishType4[l].style.left = -10 + 'vw'
        }
    }
    
    for(let m = 0; m< fishType5.length ; m++){
    
        let posFishType5Y = Math.floor(Math.random()*(deep10-deep6)+deep6)
        //console.log(posFishType5Y)
        fishType5[m].style.top = posFishType5Y + 'px'
        if (fishType5[m].classList.contains('right')){
            fishType5[m].style.right = 110 + 'vw'
        }else if(fishType5[m].classList.contains('left')){
            fishType5[m].style.left = -10 + 'vw'
        }
    }
    
    for(let n = 0; n< fishType6.length ; n++){
    
        let posFishType6Y = Math.floor(Math.random()*(deep10-deep8)+deep8)
        //console.log(posFishType6Y)
        fishType6[n].style.top = posFishType6Y + 'px'
        if (fishType6[n].classList.contains('right')){
            fishType6[n].style.right = 110 + 'vw'
        }else if(fishType6[n].classList.contains('left')){
            fishType6[n].style.left = -10 + 'vw'
        }
    }
    
    for(let o = 0; o< fishType100.length ; o++){
    
        let posFishType100Y = Math.floor(Math.random()*(deep10-deep0)+deep0)
        //console.log(posFishType100Y)
        fishType100[o].style.top = posFishType100Y + 'px'
        if (fishType100[o].classList.contains('right')){
            fishType100[o].style.right = 110 + 'vw'
        }else if(fishType100[o].classList.contains('left')){
            fishType100[o].style.left = -10 + 'vw'
        }
    }
}

class fish {
    constructor(id, type, speed, price, direction, data)
    {
        this.id = id
        this.type = type
        this.speed = speed
        this.price = price
        this.direction = direction
        this.data = data
        this.div = document.createElement('img')
        this.div.classList.add('water','fish',this.direction,this.type)
        this.div.setAttribute('src','images/image_fish/'+this.data+'.png')
        this.div.setAttribute('id','f'+this.data)
        this.div.setAttribute('data-position',this.data)
        fishContainer.appendChild(this.div)
        this.div.style.animationDuration = this.speed + "s"
    }  
}

function startGame(){
    fishContainer.innerHTML = ""
    fishs = [
        new fish('fish', 'type1', 16, 8, 'right', 0),
        new fish('fish', 'type1', 8, 8, 'right', 0),
        new fish('fish', 'type1', 10, 8, 'right', 0),
        new fish('fish', 'type1', 11, 8, 'right', 0),
        new fish('fish', 'type1', 9, 10, 'right', 1),
        new fish('fish', 'type1', 10, 15, 'right', 2),
        new fish('fish', 'type1', 7, 20, 'left', 3),
        new fish('fish', 'type1', 20, 20, 'left', 3),
        new fish('fish', 'type1', 15, 20, 'left', 3),
        new fish('fish', 'type1', 14, 20, 'left', 3),
        new fish('fish', 'type2', 10, 25, 'left', 4),
        new fish('fish', 'type2', 8, 25, 'left', 4),
        new fish('fish', 'type2', 14, 25, 'left', 4),
        new fish('fish', 'type2', 11, 30, 'right', 5),
        new fish('fish', 'type2', 13, 30, 'right', 5),
        new fish('fish', 'type2', 9, 30, 'right', 5),
        new fish('fish', 'type2', 12, 30, 'right', 5),
        new fish('fish', 'type100', 13, -180, 'right', 6),
        new fish('fish', 'type100', 10, -180, 'right', 6),
        new fish('fish', 'type100', 15, -180, 'right', 6),
        new fish('whale', 'type3', 15, -100, 'right', 7),
        new fish('whale', 'type3', 12, -100, 'right', 7),
        new fish('fish', 'type3', 16, 28, 'right', 8),
        new fish('fish', 'type3', 12, 28, 'right', 8),
        new fish('fish', 'type3', 15, 28, 'right', 8),
        new fish('fish', 'type3', 17, 28, 'right', 8),
        new fish('fish', 'type3', 13, 28, 'right', 8),
        new fish('fish', 'type3', 14, 28, 'right', 8),
        new fish('fish', 'type100', 12, -40, 'right', 9),
        new fish('fish', 'type100', 11, -40, 'right', 9),
        new fish('fish', 'type100', 13, -40, 'right', 9),
        new fish('shark', 'type4', 14, -90, 'left', 10),
        new fish('shark', 'type4', 11, -90, 'left', 10),
        new fish('fish', 'type4', 14, 40, 'left', 11),
        new fish('fish', 'type4', 13, 40, 'left', 11),
        new fish('fish', 'type4', 16, 40, 'left', 11),
        new fish('fish', 'type4', 12, 40, 'left', 11),
        new fish('fish', 'type4', 14, 45, 'left', 12),
        new fish('fish', 'type4', 17, 45, 'left', 12),
        new fish('fish', 'type4', 15, 45, 'left', 12),
        new fish('fish', 'type4', 12, 45, 'left', 12),
        new fish('fish', 'type4', 10, 45, 'left', 12),
        new fish('fish', 'type5', 14, 52, 'right', 13),
        new fish('fish', 'type5', 12, 52, 'right', 13),
        new fish('fish', 'type5', 14, 58, 'right', 14),
        new fish('fish', 'type5', 15, 58, 'right', 14),
        new fish('fish', 'type5', 12, 58, 'right', 14),
        new fish('fish', 'type5', 16, 58, 'right', 14),
        new fish('fish', 'type5', 14, 64, 'right', 15),
        new fish('fish', 'type6', 14, 70, 'right', 16),
        new fish('fish', 'type6', 15, 72, 'right', 17),
        new fish('fish', 'type6', 16, 72, 'right', 17),
        new fish('fish', 'type6', 14, 72, 'right', 17),
        new fish('fish', 'type6', 12, 72, 'right', 17),
        new fish('fish', 'type100', 17, 50, 'left', 18),
        new fish('fish', 'type100', 20, 50, 'left', 18),
        new fish('fish', 'type100', 21, 50, 'left', 18),
        new fish('fish', 'type100', 18, 50, 'left', 18),
        new fish('goldFish', 'type100', 9, 250, 'right', 19),
        new fish('turtle', 'type100', 18, -108, 'right', 20),
        new fish('turtle', 'type100', 13, -108, 'right', 20),
        new fish('garbage', 'type100', 10, 0, 'left', 21),
        new fish('garbage', 'type100', 6, 0, 'left', 21),
        new fish('garbage', 'type100', 9, 0, 'left', 21),
        new fish('garbage', 'type100', 25, 0, 'right', 22),
        new fish('garbage', 'type100', 20, 0, 'right', 22),
        new fish('garbage', 'type100', 23, 0, 'right', 22),
        new fish('garbage', 'type100', 25, 0, 'left', 23),
        new fish('garbage', 'type100', 24, 0, 'left', 23),
        new fish('garbage', 'type100', 22, 0, 'left', 23),
        new fish('garbage', 'type100', 15, 0, 'left', 24),
        new fish('garbage', 'type100', 17, 0, 'left', 24)
    
    ]
    setDeep()
    setFishClickable()
}

startGame()

settingDynamite.addEventListener(
    'click',
    function(){
        openSubMenuDynamite.classList.toggle('subMenuDynamitesOpen')
        openSubMenuDynamite.classList.toggle('subMenuDynamites')
    }
)

//SubMenuBoat
const settingBoat = document.querySelector('.boats')
const openSubMenuBoat = document.querySelector('.subMenuBoats')

settingBoat.addEventListener(
    'click',
    function(){
        openSubMenuBoat.classList.toggle('subMenuBoatsOpen')
        openSubMenuBoat.classList.toggle('subMenuBoats')
    }
)

//SubMenuSetting
const settingButton = document.querySelector('#setting')
const openSubMenuSetting = document.querySelector('.subMenuSettings')

settingButton.addEventListener(
    'click',
    function(){
        openSubMenuSetting.classList.toggle('subMenuSettingsOpen')
        openSubMenuSetting.classList.toggle('subMenuSettings')
    }
)

//Suppression de la propagation du click
const subMenus = document.querySelectorAll('.subMenu')

for (let i = 0; i < subMenus.length; i++) {
    subMenus[i].addEventListener('click',
    function(e){
        e.stopPropagation()
    }
    )
}

//Add Username
addUsername()

function addUsername(){
    if(localStorage.getItem('localUsername') != null){
    let username = document.querySelector('.pseudo')
    username.innerHTML = localStorage.getItem('localUsername')
    }
}

//Sounds
const soundsButton = document.querySelector('.sounds')
const soundsAudio = document.querySelectorAll('.soundsAudio')
const OffOn1 = document.querySelector('.soundsOffOn')
let switch1 = false

soundsButton.addEventListener(
    'click',
    function(){
        if(switch1 == false){
            for (let i = 0; i < soundsAudio.length; i++) {
                soundsAudio[i].play()
                OffOn1.innerHTML = 'Off'
            }
        }else{
            for (let i = 0; i < soundsAudio.length; i++) {
                soundsAudio[i].play()
                OffOn1.innerHTML = 'On'
            }
        }
        switch1 = !switch1
    }
)

//Music
const $music = document.querySelector('.musicAudio')
const closeCrossButton = document.querySelector('#closeCross')
let isMusicOn = false

closeCrossButton.addEventListener(
    'click',
    function() {
        if(!isMusicOn) {
            $music.play()
        }
    }
)

const musicButton = document.querySelector('.music')
const musicAudio = document.querySelector('.musicAudio')
const OffOn2 = document.querySelector('.musicOffOn')
let switch2 = false

musicButton.addEventListener(
    'click',
    function(){
        if(switch2 == false){
            musicAudio.pause()
            OffOn2.innerHTML = 'Off'
        }else{
            musicAudio.play()
            OffOn2.innerHTML = 'On'
        }
        switch2 = !switch2
    }
)

// Close Rules
const gameRules = document.querySelector('.gameRules')
const startButton = document.querySelector('.buttonStart')
const buttonStartContainer = document.querySelector('.buttonStartContainer')
const body = document.querySelector('body')
const numberFish = document.querySelector('.numberFish')

closeCrossButton.addEventListener('click', function(){
    gameRules.style.display = 'none'
    buttonStartContainer.style.display = 'flex'
    buttonStartContainer.style.justifyContent = 'center'
    buttonStartContainer.style.transform = 'translateY(350%)'
    startButton.style.display = 'block'
    body.style.overflowY = 'scroll'
    numberFish.style.visibility = 'visible'
})

// Open rules
const rulesButton = document.querySelector('.rules')

rulesButton.addEventListener('click', function(){
    gameRules.style.display = 'block'
    body.style.overflow = 'hidden'
    numberFish.style.visibility = 'hidden'
})

// <<<<<<< HEAD
// <<<<<<< HEAD
// //GAME MECA/////////////////////////////



// function myFunction() {
//     var x = document.documentElement.scrollTop
//     //console.log(x)
//     if (x >= 790 && x < 2290){
//         //Faire spawn des poissons de type 1 et 2 
//         for(let i = 0; i<= fishType1.length ; i++){
//             posFishY = Math.floor(Math.random()*(2290-790)+790)
//             console.log('La position du poisson '+fishType1+' est '+posFishY)
//         }
        
//         console.log("Poisson de type 1 et 2")
//     }
//     else if(x >= 2290 && x < 3790){
//         // Faire spawn des poissons de type 2 et 3
//         console.log("Poisson de type 2 et 3")
//     }else if (x >= 3790 && x < 5290){
//         // Faire spawn des poissons de type 3 et 4
//         console.log("Poisson de type 3 et 4")
//     }else if (x >= 5290 && x < 6790){
//         // Faire spawn des poissons de type 4 et 5
//         console.log("Poisson de type 4 et 5")
//     }else if (x >= 6790 && x < 8290){
//         // Faire spawn des poissons de type 5 et 6
//         console.log("Poisson de type 5 et 6")
//     }else{
//         console.log("No fish area")
//     } 
// }

// Start the game 
const buttonStart = document.querySelector('.buttonStart')


/*
function scrollAuto(){
    window.scrollBy(0,1)
    setTimeout('scrollAuto()',1);   
}

buttonStart.addEventListener(
    'click',
    
    scrollAuto()
)
*/

// // // mouse click

// Button Hook 
const buttonHook = document.querySelector('.buttonHook')
const priceHook = document.querySelector('#price')
const levelHook = document.querySelector('#levelHook')

let upPriceHook = 100
let upLevelHook = 1

buttonHook.style.transform = 'translateY(130%)'
TCoin = 300
totalCoin.innerHTML = TCoin

//if (priceHook < TCoin){
console.log('totalCoin = '+TCoin)
buttonHook.addEventListener('click',
    function levelHookUp(){
        if(upPriceHook < TCoin){
            upLevelHook = upLevelHook + 1
            levelHook.innerHTML = upLevelHook
            TCoin = TCoin - upPriceHook
            upPriceHook = upPriceHook + 150*1.2
            priceHook.innerHTML = upPriceHook
            numberFishPossible.innerHTML = upLevelHook
            totalCoin.innerHTML = TCoin
            // return upLevelHook
        }   
    },
)




// console.log ('non '+upLevelHook)


function fishFollow(clientX, clientY, element) {
    let fishX = clientX - element.width / 2
    let fishY = clientY - element.height / 2
    element.classList.remove('fish1', "fish")
    element.style.zIndex = '3'

    element.style.position = 'fixed'
    element.style.left = fishX + "px"
    element.style.top = fishY + "px"

    //console.log('test');
    
}


//Upgrade boat

let upgradeB = 0
let tImages = [
    "images/FisherMan2.png",
    "images/FisherMan3.png",
    "images/commingsoon.png"
]
let btnUpBoat = document.querySelector('#upgradeBoat')
let imgSub = document.querySelector('#fisherBoatImage')
let imgBack = document.querySelector('#fisherMan')
let upgradeLevelBoat = 1 
let boatLevelP = document.querySelector('#levelBoat')
const priceBoat = document.querySelector('#priceBoat')

let boatCoin = 300

btnUpBoat.addEventListener(
    'click',
    function upgradeBoat()
    {
        if(boatCoin < TCoin){
            if(upgradeB<2){
            upgradeB++
            //console.log(upgradeB)
            imgSub.src=tImages[upgradeB]
            imgBack.src=tImages[upgradeB-1]
            upgradeLevelBoat = upgradeLevelBoat + 1
            boatLevelP.innerHTML = upgradeLevelBoat 
            TCoin = TCoin - boatCoin
            boatCoin = boatCoin + 5000
            priceBoat.innerHTML = boatCoin
            totalCoin.innerHTML = TCoin
            }
        }
    }
)

//Add dynamite upgrade

let dynNumberP = document.querySelector('#dynamiteNumber')
let dynAdd = document.querySelector('#addDyn')
let dynNum = 2
let dynPrice = 1000

dynAdd.addEventListener(
        'click',
        function upgradeDyn()
        {
            if(dynPrice < TCoin){
                dynNum = dynNum + 3
                dynNumberP.innerHTML = dynNum
                TCoin = TCoin - dynPrice
                totalCoin.innerHTML = TCoin
            }
        }
    )
    

// >>>>>>> f4856b0f7439bca89d6fa861530f22e5edaa14e3



// // // let x = event.clientX    // Get the horizontal coordinate
// // // let y = event.clientY   // Get the vertical coordinate
// // // let coor = "X coords: " + x + ", Y coords: " + y
// // // console.log(coor)
// <<<<<<< HEAD
// >>>>>>> f4856b0f7439bca89d6fa861530f22e5edaa14e3
// =======
// >>>>>>> f4856b0f7439bca89d6fa861530f22e5edaa14e3


// Dynamite activation
const explosionUse = document.querySelector('.explosionSoundUse')
window.addEventListener('keydown', function (eventExplosion){
    if((eventExplosion.key == "d") && (dynNum > 0)){
        // Name of the function dynamite
        explosionUse.play()
        dynNum = dynNum - 1
        dynNumberP.innerHTML = dynNum
    }
})

const coinSound = document.querySelector('.coinSoundUse')
const coinValue = 500
window.addEventListener('keydown', function (eventCoin){
    if(eventCoin.key == "$"){
        TCoin += coinValue
        totalCoin.innerHTML = TCoin
        coinSound.play()
    }
})