function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    let product = {
        name: productName, 
        price: productPrice,
        quantity: 1
        
    };

    let existingProduct = cart.find(item => item.name === product.name);
    
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} has been added to your cart!`);
    updateCartCount();
    return false;

}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.querySelectorAll('#cart-count').forEach(element =>{element.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    });

}

document.addEventListener('DOMContentLoaded', function() {
    const clearBtn = document.querySelector('.clear-cart');
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            localStorage.removeItem("cart");
            displayCart();
            updateCartCount();
            alert("Cart Cleared!");
        });
    }
}); 



function displayCart() {
    const totalPriceEl = document.getElementById("total-price")
    
    if (!totalPriceEl) {
        console.error("Total price element not found");
        return;
    }
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItemsContainer = document.getElementById("cart-items");
    let totalPriceElement = document.getElementById("total-price");
    let total = 0;
    
    cartItemsContainer.innerHTML = "";
    
    

   

    cart.forEach(item => {
        const price = Number(item.price);
        const quantity = Number(item.quantity) || 1;
        let li = document.createElement("li");
        li.textContent = `${item.name} - P${item.price} x ${item.quantity}`;
        cartItemsContainer.appendChild(li);
        totalPrice += item.price * item.quantity;
        let totalPrice = 0;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
}


    
  


if (document.getElementById("cart-items")) {
    displayCart();
}

document.addEventListener("DOMContentLoaded", function () {
    const reviewsContainer = document.getElementById("reviews-container");
    const reviewForm = document.getElementById("add-review-form");

    // Load reviews from local storage (simulate a database)
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    function displayReviews() {
        reviewsContainer.innerHTML = "";
        reviews.forEach(review => {
            const div = document.createElement("div");
            div.classList.add("review");
            div.innerHTML = `<strong>${review.name}</strong><p>${review.message}</p>`;
            reviewsContainer.appendChild(div);
        });
    }

    reviewForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name && message) {
            const newReview = { name, message };
            reviews.push(newReview);
            localStorage.setItem("reviews", JSON.stringify(reviews));

            displayReviews();
            reviewForm.reset();
        }
    });

    // Display reviews on page load
    displayReviews();
});
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

document.addEventListener("DOMContentLoaded", showSlides);