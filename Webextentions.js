//  let myLeads = []
//  inputEl = document.getElementById("input-el")
//  const ulEl = document.getElementById("ul-el")
//  const inputBtn = document.getElementById("input-btn")
//  const tabBtn = document.getElementById("tab-btn")
//  let deleteBtn = document.getElementById("delete-btn") 
//  const leadFromLocalStorage = JSON.parse( localStorage.getItem("myleads") )
 
//  if (leadFromLocalStorage) {
//      myLeads = leadFromLocalStorage 
//      render(myLeads)
//  }
//     tabBtn.addEventListener("click", function() {
//             chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//             myLeads.push(tabs[0].url)
//             localStorage.setItem("myLeads", JSON.stringify(myLeads))
//             render(myLeads) 
//         })  
//  })

//  function render(leads) {
//      let listItems = ""
//      for (let i = 0; i < leads.length; i++) {
//       inputEl.textContent += myLeads[i] + " "  
//     listItems += `<li>
//                      <a target='_blank' href='${leads[i]}'>
//                          ${leads[i]}
//                      </a>
//                  </li>`
//  }
//  ulEl.innerHTML = listItems
//  } 

//   deleteBtn.addEventListener("dblclick", function() {
//      localStorage.clear()
//      myLeads = []
//      render(myLeads)
//   })
//   inputBtn.addEventListener("click", function() {
//      myLeads.push(inputEl.value) 
//      inputEl.value = ""
//      localStorage.setItem("myLeads", JSON.stringify(myLeads) )
//      render(myLeads)
// }) 
 
const player = "Yesh"
const opponent = "Pel"
const game = "Amazing Fighter"
let points = 0
let hasWon = false

points += 00
hasWon = true
if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
    console.log(`The Winner i ${opponent} ! ${player} lost the game`)
}