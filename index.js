
let totalPrice = 0;
let count = 0;
function handleCardClick(target) {
    const priceText = target.querySelector('h5').innerText;
    const price = Number(priceText.split(" ")[0]);
    totalPrice += price;
    count += 1;

    document.getElementById("total").innerText = `Total Price: ${totalPrice}.00TK`;

    const cardName = target.querySelector('h3').innerText;

    // Create a new card element for the selected card
    const newCard = document.createElement('div');
    newCard.classList.add('selected-card');
    newCard.innerText = `${count} ${cardName}`;

    // Append the new card to the container
    const selectedCardContainer = document.getElementById('selected-card');
    selectedCardContainer.appendChild(newCard);
}

// Update the initial display of total price
document.getElementById("total").innerText = `Total Price: ${totalPrice.toFixed(2)} TK`;

console.log(totalPrice);

function applyBtn() {
    const discountPercentage = 0.20; // 20% discount
    const discountedAmount = totalPrice * discountPercentage;
    const discountedTotal = totalPrice - discountedAmount;

    document.getElementById("discounted-total").innerText = `Discounted Total: ${discountedTotal.toFixed(2)} TK`;

    document.getElementById("all-total").innerText = `Total: ${discountedTotal.toFixed(2)} TK`;
    if(total >= 200){
        applyBtn.disabled = true;
    }else{
        applyBtn.disabled = false;
    }
}


document.getElementById('purchase-btn').addEventListener('click', function(){
    const totalPrice = discountedTotal('all-total');
    console.log(totalPrice);

    if(totalPrice > '0'){
        const purchaseBtn = document.getElementById('purchase-btn');
        purchaseBtn.removeAttribute('disabled');
        console.log('button enabled');
    }else{
        console.log('button remains disabled');
    }
});



