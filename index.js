function handleCardClick(target){
    const selectedCardContainer  = document.getElementById('selected-card');
    const cardName = target.parentNode.children[5].innerText;
    const li = document.createElement('li');
    li.innerText = cardName;
    selectedCardContainer.appendChild(li);
}