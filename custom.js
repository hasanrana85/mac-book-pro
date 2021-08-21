/* memory input */
function memoryInput(justify) {
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    const extraMemoryText = extraMemoryCost.innerText;
    if (justify == true) {
        extraMemoryCost.innerText = 0;
    } else {
        extraMemoryCost.innerText = 180;
    }

    calculateTotal();
}

/* storage input function */
function storageInput(justify) {
    const extraStorageCost = document.getElementById('extra-storage-cost');
    const extraStorageText = extraStorageCost.innerText;
    if (justify == '256GB') {
        extraStorageCost.innerText = 0;
    } else if (justify == '512GB') {
        extraStorageCost.innerText = 100;
    } else {
        extraStorageCost.innerText = 180;
    }
    calculateTotal();
}

/* Delivery input function */
function deliveryInput(justify) {
    const deliveryCost = document.getElementById('delivery-cost');
    const deliveryText = deliveryCost.innerText;
    if (justify == true) {
        deliveryCost.innerText = 0;
    } else {
        deliveryCost.innerText = 20;
    }
    calculateTotal();
}

/* total update function */
function getInputValue(product) {
    const productInput = document.getElementById(product);
    const productAmount = parseInt(productInput.innerText);
    return productAmount;
}

function calculateTotal() {
    const bestPrice = getInputValue('best-price');
    const extraMemoryCost = getInputValue('extra-memory-cost');
    const extraStorageCost = getInputValue('extra-storage-cost');
    const deliveryCharge = getInputValue('delivery-cost');
    const totalPrice = bestPrice + extraMemoryCost + extraStorageCost + deliveryCharge;



    /* update on the html */
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('discount-total').innerText = totalPrice;
    return totalPrice;
}
/* memory input */
document.getElementById('8GB-button').addEventListener('click', function () {
    memoryInput(true);

});
document.getElementById('16GB-button').addEventListener('click', function () {
    memoryInput(false);
});

/* storage input */
document.getElementById('256GB-ssd').addEventListener('click', function () {
    storageInput('256GB');
});
document.getElementById('512GB-ssd').addEventListener('click', function () {
    storageInput('512GB');
});
document.getElementById('1TB-ssd').addEventListener('click', function () {
    storageInput('1TB');

});

/* Choose delivery option */
document.getElementById('free-button').addEventListener('click', function () {
    deliveryInput(true);

});
document.getElementById('cost-button').addEventListener('click', function () {
    deliveryInput(false);
});

/*  apply promo code */
document.getElementById('apply-btn').addEventListener('click', function () {
    const pomoCode = document.getElementById('pomo-code');
    const pomoCodeValue = pomoCode.value;
    if (pomoCodeValue == 'stevekaku') {
        const promoAmount = (calculateTotal() / 100) * 20;
        const afterPromo = calculateTotal() - promoAmount;
        document.getElementById('discount-total').innerText = afterPromo;
        pomoCode.value = '';
    }
});