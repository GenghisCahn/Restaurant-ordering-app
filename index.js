import {itemsArray} from '/data.js'

let ordersArray = []
const paymentInfoForm = document.getElementById("payment-info-form")



document.addEventListener('click', function(e){
    if(e.target.dataset.btn){
        getOrdersArray(e.target.dataset.btn)
    } else if(e.target.dataset.remove){
        removeFromOrder(e.target.dataset.remove)
    } else if(e.target.id === 'complete-order-btn'){
        handleCompleteOrderBtn()
    } else if(e.target.id === 'form-close-btn'){
        handleFormCloseBtn()
    } 
})
 
renderMenu()   


 
 function renderMenu(){
    let itemsHtml = ''
    
    itemsArray.forEach(function(item){
        
        itemsHtml += `
                <div class="object-container">
                    <span class="emoji">${item.emoji}</span>
                    <div class="menu-items">
                        <h2>${item.name}</h2>
                        <p>${item.ingredients}</p>
                        <h2>£${item.price}</h2>
                    </div>
                     <button class="add-btn" data-btn=${item.id}>+</button>
                </div>
                `  
    })
     document.getElementById('menu').innerHTML = itemsHtml
}
 
    
     
function getOrdersArray(itemId){
    if (ordersArray.length === 0){
        const newOrder = getNewOrder(itemId)
        ordersArray.push(newOrder)
    } else {
        addToOrdersArray(itemId)
    }
    
    renderOrders(ordersArray)
} 



function addToOrdersArray(itemId){
    const existingItem = ordersArray.filter(function(order){
        return order.id === itemId
    })[0]
    
    const originalItem = itemsArray.filter(function(item){
        return item.id === itemId
    })[0]
    
    if(ordersArray.includes(existingItem)){
        existingItem.price += originalItem.price
        existingItem.amount++
        
    } else {
        const newOrder = getNewOrder(itemId)
        ordersArray.push(newOrder)
        renderOrders()
    }
    
}   
 
     
        
function getNewOrder(itemId){
    const targetItem = itemsArray.filter(function(item){
        return item.id === itemId
    })[0]
    let newOrder = {
                    name: targetItem.name,
                    price: targetItem.price,
                    amount: targetItem.amount,
                    id: targetItem.id           
    }
    return newOrder
}



function removeFromOrder(orderId){
    const targetObject = ordersArray.filter(function(order){
        return order.id === orderId
    })[0]
    ordersArray.pop(targetObject)
    
    renderOrders()
}



function renderOrders(){
    let ordersHtml = ''
    let totalPrice = 0

    for (let order of ordersArray){
        ordersHtml += `
        <div class="orders-container">
            <h2>${order.name}</h2>
            <h3 class="order-amount">x${order.amount}</h3>
            <button class="remove-btn" data-remove=${order.id}>REMOVE</button>
            <h2 class="order-price">£${order.price}</h2>
        </div> `
        
        totalPrice += order.price 
    }
    
   
    document.getElementById("total-price").innerHTML = `£ ${totalPrice}`
    document.getElementById("orders").innerHTML = ordersHtml
    document.getElementById("your-order-section").classList.remove("hidden")
    
}



function handleCompleteOrderBtn(){
    if(ordersArray.length > 0){
        document.getElementById("order-form").classList.remove('hidden')
    }
}



function handleFormCloseBtn(){
    document.getElementById("order-form").classList.add('hidden')
}



paymentInfoForm.addEventListener('submit',function(e){
    
    e.preventDefault()
    
    const paymentFormData = new FormData(paymentInfoForm)
    const name = paymentFormData.get('user-name')
    
    let thankYouMessage = ""
    thankYouMessage += `
    
        <h1>Thank you, <span class="user-name">${name}</span>!<h1>
        <h1>Your order is on it's way!<h1>
    `
    
    document.getElementById('thank-you-message').innerHTML = thankYouMessage
    
    document.getElementById('thank-you-message').classList.remove('hidden')
    document.getElementById('order-form').classList.add('hidden')
    document.getElementById('your-order-section').classList.add('hidden')
    
})