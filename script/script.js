// buy tickets button in header section
function buyTickets(){
    const getTickets = document.getElementById('get-tickets').scrollIntoView({
        behavior:'instant'
    })
}
// next button to go success page
function nextButton(){
    // hide home screen
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');
// show success screen
const successScreen = document.getElementById('success-screen');
successScreen.classList.remove('hidden');
}

function continueButton(){
    // back to home screen from success screen
   const backToHomeScreen = document.getElementById('success-screen');
   backToHomeScreen.classList.add('hidden');
//    show home screen
const showHomeScreen = document.getElementById('home-screen');
showHomeScreen.classList.remove('hidden');

}