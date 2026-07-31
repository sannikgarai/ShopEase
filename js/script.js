// -------------------- LOGIN --------------------

// -------------------- LOGIN --------------------

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(e) {

        e.preventDefault();

        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();

        if (username !== "" && password !== "") {

            alert("Login Successful");

            window.location.href = "home.html";

        } else {

            alert("Please enter username and password");

        }

    });

}


// -------------------- SEARCH --------------------

// -------------------- CHECKOUT --------------------

function checkout() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }

    alert("Order placed successfully!");

    localStorage.removeItem("cart");

    window.location.href = "home.html";
}
// -------------------- SEARCH --------------------

let searchBox = document.getElementById("searchBox");

if (searchBox) {

    searchBox.addEventListener("input", function () {

        let searchValue = this.value.toLowerCase();

        let products = document.querySelectorAll(".product-card");


        products.forEach(function(product){

            let productName = product.querySelector("h3")
                                      .textContent
                                      .toLowerCase();


            if(searchValue === "" || productName.includes(searchValue)){

                product.style.display = "";

            }
            else{

                product.style.display = "none";

            }

        });

    });

}


// -------------------- CART --------------------

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {

    let item = cart.find(product => product.name === name);

    if (item) {

        item.quantity++;

    } else {

        cart.push({
            name: name,
            price: price,
            quantity: 1
        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart");
}


// -------------------- DISPLAY CART --------------------

function displayCart() {

    let cartContainer = document.getElementById("cart-items");

    let totalElement = document.getElementById("cart-total");

    if (!cartContainer || !totalElement) return;

    cartContainer.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price * item.quantity;

        cartContainer.innerHTML += `

        <div class="cart-item">

            <div>

                <h3>${item.name}</h3>

                <p>₹${item.price}</p>

            </div>

            <div>

                <button onclick="decreaseQuantity(${index})">-</button>

                <span>${item.quantity}</span>

                <button onclick="increaseQuantity(${index})">+</button>

            </div>

            <button onclick="removeItem(${index})">
                Remove
            </button>

        </div>

        `;
    });

    totalElement.innerHTML = "₹" + total;

}


// -------------------- INCREASE QUANTITY --------------------

function increaseQuantity(index) {

    cart[index].quantity++;

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}


// -------------------- DECREASE QUANTITY --------------------

function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}


// -------------------- REMOVE ITEM --------------------

function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}


// -------------------- CONTACT FORM --------------------

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {

    contactForm.addEventListener("submit", function(e) {

        e.preventDefault();

        alert("Message Sent Successfully!");

        contactForm.reset();

    });

}


// -------------------- SMOOTH SCROLL --------------------

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// -------------------- LOAD CART AUTOMATICALLY --------------------

displayCart();