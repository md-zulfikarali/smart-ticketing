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


// count seats

const allBtn = document.getElementsByClassName('btn');
let count = 0;
let minusSeat = 40;
let totalCost = 0;

for (const btn of allBtn){
    btn.addEventListener('click', function(event){
        let btnId = document.getElementById(event.target.id)
       
        btnId.disabled =true;
        
        document.getElementById('dynamic-seat-price').innerHTML +=`
                                                                        <p class="flex justify-between"> 
                                                                        <span>${event.target.id} </span>
                                                                        <span>Economy</span>  
                                                                        <span> 550</span> 
                                                                        </p> 
                                                                    `;


        count = count + 1;
      document.getElementById('seat-count').innerText = count;
      minusSeat = minusSeat - 1;
      document.getElementById('seat-left').innerText = minusSeat;
    //   total cost
    totalCost = totalCost + 550;
    document.getElementById('total-cost').innerText = totalCost;
   
    
    })
}

function applyButton(){
    const userInputCoupon =document.getElementById('coupon-field').value;
    if (userInputCoupon.toLowerCase() == "new 15"){
        if (totalCost > 0){
            let discountPrice =totalCost*0.15
            let granTotal = totalCost - discountPrice;
            document.getElementById('grand-total-cost').innerText = granTotal;
        }else{
            alert ('Please select at least one seat. ')
        }
        userInputCoupon.value ="i love you "
    }

    if (userInputCoupon.toLowerCase() == "couple 20"){
        if (totalCost > 0){
            let discountPrice =totalCost*0.20
            let granTotal = totalCost - discountPrice;
            document.getElementById('grand-total-cost').innerText = granTotal;
        }else{
            alert ('Please select at least one seat. ')
        }
       
    }
}



