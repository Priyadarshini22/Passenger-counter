// function first()
// {
	// var my_age=document.getElementById('age').value;
// var ratio=document.getElementById('ratio').value;
// var mydog_age=my_age*ratio
// console.log(mydog_age);
// document.getElementById('dogAge').innerHTML='My Dog Age ' + mydog_age
// }


// function second()
// {
	
	// var count=document.getElementById('count').innerHTML
	// count++;
	// console.log(count);
	// document.getElementById('count').innerHTML=count;
	 
	 
	
	
// }



// third();
// third();

// function third()
// {
	// let lap1 = 34
// let lap2 = 33
// let lap3 = 36
   
	// console.log(lap1+lap2+lap3);
// }

// let lap=0;
// function fourth()
// {
	
	// lap++;
	// console.log(lap);
// }
// fourth()
// fourth()
// fourth()

// let welcome=document.getElementById('welcome')
// console.log(welcome)
// let name = " Priya"
// let greeting = "Welcome to course" 

// welcome.innerText = greeting + name

// welcome.innerText = welcome.innerText + "👋"
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



