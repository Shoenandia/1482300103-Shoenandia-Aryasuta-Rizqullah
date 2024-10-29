function submitOrder() {
    
    const name = document.getElementById('name').value;
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;

    document.getElementById('popup-name').innerText = name;
    document.getElementById('popup-product').innerText = product;
    document.getElementById('popup-quantity').innerText = quantity;

    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}