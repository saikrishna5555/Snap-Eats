'use strict'

let cart_items=document.querySelector('.cart_items');
var items_count=0;

add_to_cart=document.querySelector('.add_to_cart');
add_to_cart.addEventListener('click',function(){
    items_count+=1;
    cart_items.textContent=items_count;
});
