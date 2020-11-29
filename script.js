import data from './data.js'

const itemsContainer = document.getElementById('items')

let container = document.createElement('div')
container.className = "container"
let row = document.createElement('div')
row.className = "row"
for (let i = 0; i<data.length; i++) {
    
    // if (i%3 == 0) {
    //     let brake = document.createElement('div')
    //     brake.className = "w-100"
    //     row.appendChild(brake)
    // }

    let column = document.createElement('div')
    column.className = "col"
    let card = document.createElement('div')
    card.className = "card"
    let cardBody = document.createElement('div')
    cardBody.className = "card-body"
    
    let title = document.createElement('h1')
    let button = document.createElement('button')
    let grade = document.createElement('h3')
    
    let dropDown = document.createElement('p')
    
    let missingAssignments = document.createElement('a')
    missingAssignments.innerHTML = "Missing Assignments"
    missingAssignments.className = "btn btn-primary"
    missingAssignments.type = "button"
    missingAssignments.setAttribute("data-toggle", "collapse");
    missingAssignments.setAttribute("aria-controls", "missingAssignments"+i);
    missingAssignments.href = "#missingAssignments"+i
    missingAssignments.setAttribute("aria-expanded", "false");
    missingAssignments.style.margin = "10px"
    missingAssignments.style.backgroundColor = "red"

    let gradedAssignments = document.createElement('a')
    gradedAssignments.innerHTML = "Graded Assignments"
    gradedAssignments.className = "btn btn-primary"
    gradedAssignments.type = "button"
    gradedAssignments.setAttribute("data-toggle", "collapse");
    gradedAssignments.setAttribute("aria-controls", "gradedAssignments"+i);
    gradedAssignments.setAttribute("data-target", "#gradedAssignments"+i)
    gradedAssignments.setAttribute("aria-expanded", "false");
    gradedAssignments.style.backgroundColor = "green"
    

    
    dropDown.appendChild(gradedAssignments)


    let infoRow = document.createElement('div')
    infoRow.className = "row"
    let gradedCol = document.createElement('div')
    gradedCol.className = "col"
    let colapseDiv = document.createElement('div')
    colapseDiv.className = "collapse multi-collapse"
    colapseDiv.id = "gradedAssignments"+i
    
    for (let k = 0;k<data[i]["assignments"].length; k++) {
        let gradedDiv = document.createElement('div')
        gradedDiv.innerHTML = data[i]["assignments"][k]
        colapseDiv.appendChild(gradedDiv)
    }

    // gradedDiv.id = "missingAssignments"
    colapseDiv.className = "card card-body"
    gradedCol.appendChild(colapseDiv)
    infoRow.append(gradedCol)
        

    title.className = "card-title"
    title.innerHTML = data[i]["class"]

    grade.className = "card-text"
    //grade.style.color = "green"
    grade.innerHTML = `Grade: ${data[i]["grade"]}`

    button.className = "btn btn-primary"
    button.innerHTML = "Details"
    button.id = i
    

    cardBody.appendChild(title)
    cardBody.appendChild(grade)

    

    if(data[i]["missing"] != null){
        
        let missingCol = document.createElement('div')
        missingCol.className = "col"
        let colapseDiv = document.createElement('div')
        colapseDiv.className = "collapse multi-collapse"
        colapseDiv.id = "missingAssignments"+i
        
        // gradedDiv.id = "missingAssignments"
        colapseDiv.className = "card card-body"
        cardBody.appendChild(infoRow)

        // let text = document.createElement('h5')
        // text.innerHTML = "Missing Assignments:"
        // cardBody.appendChild(text)
        for(let j = 0; j<data[i]["missing"].length;j++) {
            let missingDiv = document.createElement('div')
            missingDiv.innerHTML = data[i]["missing"][j]
            
            // console.log(data[i]["missing"][j])
            // let missing = document.createElement('p')
            // missing.innerHTML = data[i]["missing"][j]
            // missing.style.color = "red"
            // cardBody.append(missing)
            
            colapseDiv.appendChild(missingDiv)
        }

        missingCol.appendChild(colapseDiv)
        infoRow.append(missingCol)
        dropDown.appendChild(missingAssignments)

    }

    
    cardBody.appendChild(dropDown)
    cardBody.appendChild(infoRow)
    let center = document.createElement('div')
    center.className = "text-center"
    center.appendChild(button)
    cardBody.appendChild(center)

    card.appendChild(cardBody)
    card.style.margin = "10px"
    card.style.minHeight = "150px"
    card.style.width = "520px"
    column.appendChild(card)
    row.appendChild(column)
    container.appendChild(row)

    //itemsContainer.appendChild(card)
}
itemsContainer.appendChild(container)
console.log(itemsContainer)

const all_items_button = Array.from(document.querySelectorAll("button"))
console.log(all_items_button)

all_items_button.forEach(elt => elt.addEventListener('click', (index) => {
    console.log(elt.getAttribute('id'))
    console.log(data[elt.getAttribute('id')])
    window.open("https://www.gradescope.com"+data[elt.getAttribute('id')]["link"])
}))