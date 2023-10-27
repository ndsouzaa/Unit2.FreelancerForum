

/*
I want to show 3 of the freelancers on the list
 */

let freelanceModel = {
  quantity: 8, 
  name: 'Alice',
  price: 30, 
  occupation: 'Teacher',
}


const freelancers = [
  { name: 'Alice', occupation: 'Writer', price: 30},
  { name: 'Bob', occupation: 'Teacher', price: 50},
  { name: 'Carol', occupation: 'Programmer', price: 70},
  { name: 'Katie', occupation: 'Dancer', price: 35},
  { name: 'Bella', occupation: 'Teacher', price: 40},
  { name: 'Taylor', occupation: 'Programmer', price: 20},
  { name: 'Anna', occupation: 'Writer', price: 85},
  { name: 'Jordan', occupation: 'Writer', price: 45},
]

const addFreelancer = setInterval(freelancers, 10000);

function renderFreelancer() {
  let forum = document.getElementById('free-lancers')
  for (let i = 0; i < freelancers.length; i++){
    let currentFreelancer = freelancers[i]
    
    let freelancerDiv = document.createElement('div')
    freelancerDiv.className = 'freelancers'

    freelancerDiv.innerHTML = 
                  ` <h3> Name: ${currentFreelancer.name}</h3>
                   <h3> Occupation: ${currentFreelancer.occupation}</h3>
                   <h3> Price: ${currentFreelancer.price}</h3>`
    forum.appendChild(freelancerDiv)
                                     
  }
}

renderFreelancer()