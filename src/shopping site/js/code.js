

document.addEventListener('DOMContentLoaded', () => {

    const products = [
        { name : "Avocado", price : 10 },
        { name : "Broccoli", price : 7 },
        { name : "Carrot", price : 3 },
        { name : "Cauliflower", price : 5 },
        { name : "Corn", price : 4 },
        { name : "Cucumber", price : 2 },
        { name : "Eggplant", price : 6 },
        { name : "Garlic", price : 4 },
        { name : "Lettuce", price : 2 },
        { name : "Spinach", price : 9 },
    ]


    const cart = {
        "Avocado" : 0,
        "Broccoli" : 0,
        "Carrot" : 0,
        "Cauliflower" : 0,
        "Corn" : 0,
        "Cucumber" : 0,
        "Eggplant" : 0,
        "Garlic" : 0,
        "Lettuce" : 0,
        "Spinach" : 0
    }

    function updateCart(){
        document.querySelectorAll(".cart-item").forEach( (div) => {
            div.remove();
        });

        const closeCartNode = document.getElementById("close-cart");

        for(let i = 0; i < products.length; i++){
            const productName = products[i].name;
            const productCount = cart[productName];
            if(productCount <= 0)
                continue;
            
            const productPrice = products[products.findIndex((elem) => elem.name === productName)].price;
            const path = "./images/products/" + productName.toLowerCase() + ".png";

            const cartItemNode = document.createElement("div");
            cartItemNode.className = "cart-item";
            
            const imgNode = document.createElement("img");
            imgNode.src = path;
            imgNode.alt = 'image couldn\'t be loaded';

            const cartItemMiddleNode = document.createElement("div");
            cartItemMiddleNode.className = "cart-item-middle";

            const cartItemNameNode = document.createElement("div");
            cartItemNameNode.className = "cart-item-name";
            cartItemNameNode.innerHTML = productName;
            
            const cartItemPriceNode = document.createElement("div");
            cartItemPriceNode.className = "cart-item-price";
            cartItemPriceNode.innerHTML = "$" + productPrice;
            
            const cartItemRemoveNode = document.createElement("div");
            cartItemRemoveNode.className = "cart-item-remove";
            cartItemRemoveNode.innerHTML = "Remove";
            cartItemRemoveNode.addEventListener('click', () => {
                cart[productName] = 0;
                updateCart();
            });

            const cartItemRightNode = document.createElement("div");
            cartItemRightNode.className = "cart-item-right";
            
            const cartItemIncreaseNode = document.createElement("div");
            cartItemIncreaseNode.className = "cart-item-increase";
            cartItemIncreaseNode.innerHTML = "+1";
            cartItemIncreaseNode.addEventListener('click', () => {
                cart[productName]++;
                updateCart();
            });

            const cartItemCountNode = document.createElement("div");
            cartItemCountNode.className = "cart-item-decrease";
            cartItemCountNode.innerHTML = productCount;

            const cartItemDecreaseNode = document.createElement("div");
            cartItemDecreaseNode.className = "cart-item-decrease";
            cartItemDecreaseNode.innerHTML = "-1";
            cartItemDecreaseNode.addEventListener('click', () => {
                cart[productName]--;
                updateCart();
            });

            cartItemMiddleNode.appendChild(cartItemNameNode);
            cartItemMiddleNode.appendChild(cartItemPriceNode);
            cartItemMiddleNode.appendChild(cartItemRemoveNode);
            
            cartItemRightNode.appendChild(cartItemIncreaseNode);
            cartItemRightNode.appendChild(cartItemCountNode);
            cartItemRightNode.appendChild(cartItemDecreaseNode);
            
            cartItemNode.appendChild(imgNode);
            cartItemNode.appendChild(cartItemMiddleNode);
            cartItemNode.appendChild(cartItemRightNode);

            if(closeCartNode.nextSibling){
                closeCartNode.parentNode.insertBefore(cartItemNode, closeCartNode.nextSibling);
            }
            else{
                closeCartNode.parentNode.appendChild(cartItemNode);
            }

        }

        const yourTotalNode = document.getElementById("your-total");
        let sum = 0;
        for(let i = 0; i < products.length; i++){
            const productName = products[i].name;
            const productCount = cart[productName];
            const productPrice = products[products.findIndex((elem) => elem.name === productName)].price;
            sum += productPrice * productCount;
        }
        yourTotalNode.innerHTML = "Your total: $" + sum;

    }

    updateCart();

    // load the data onto the page
    const mainTag = document.querySelector("main");
    for(let i = 0; i < products.length; i++){
        const nameString = products[i].name;
        const priceString = "$" + products[i].price + " per kg";
        const path = "./images/products/" + nameString.toLowerCase() + ".png";
        
        const itemNode = document.createElement("div");
        itemNode.className = "item";
        
        const imageNode = document.createElement("img");
        imageNode.src = path;
        imageNode.alt = "image couldn't be loaded";

        const nameNode = document.createElement("div");
        nameNode.className = "vegetable-name";
        nameNode.innerHTML = nameString;

        const priceNode = document.createElement("div");
        priceNode.className = "vegetable-price";
        priceNode.innerHTML = priceString;

        const addToCartNode = document.createElement("div");
        addToCartNode.className = "add-to-cart";
        addToCartNode.innerHTML = "Add To Cart";

        itemNode.appendChild(imageNode);
        itemNode.appendChild(nameNode);
        itemNode.appendChild(priceNode);
        itemNode.appendChild(addToCartNode);

        mainTag.appendChild(itemNode);
    }

    document.getElementById('close-cart').addEventListener('click', () => {
        const sidebar = document.getElementById('cart-bar');
        sidebar.style.right = "-9rem";
    });

    document.getElementById('shopping-cart').addEventListener('click', () => {
        const sidebar = document.getElementById('cart-bar');
        sidebar.style.right = "0rem";
    });

    document.querySelectorAll('.add-to-cart').forEach( (div) => {
        div.addEventListener('click', () => {
            const name = div.previousSibling.previousSibling.innerHTML;
            cart[name]++;
            console.log(cart);
            updateCart();
        });
    });


    document.getElementById("clear-cart").addEventListener('click', () => {
        for(let i = 0; i < products.length; i++){
            const productName = products[i].name;
            cart[productName] = 0;
        }
        updateCart();
    });

});