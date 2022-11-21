
let countEl = document.getElementById("count-el")

console.log(countEl)


let username="priya"

let message="You have tree new notifications"

console.log(message+", "+username+" !")

let messageToUser = message+", "+username+" !"

console.log(messageToUser)
let count = 0






function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
	console.log(count)
	prev_entry=count + " - "
	let save=document.getElementById("save-el")    
	
	// innerText removes the last space after - because it takes only human readable character so we use textContent
	save.textContent += prev_entry 
	count=0
	countEl.innerText = count
	
}



