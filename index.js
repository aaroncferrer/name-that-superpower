let justiceLeague = [
    {name: "Superman", superpower: "Super strength"},
    {name: "Batman", superpower: "Super rich"},
    {name: "Wonder Woman", superpower: "Super lasso"},
    {name: "The Flash", superpower: "Super speed"},
    {name: "Green Lantern", superpower: "Super ring"}
]

const button = document.createElement('button')
button.textContent = 'Check Power'
button.onclick = 
function checkPower(){

    const ulElement = document.createElement('ul')

    for(let i = 0; i < justiceLeague.length; i++){
        const liElement = document.createElement('li')
        liElement.textContent = `${justiceLeague[i].name}: ${justiceLeague[i].superpower}`
        ulElement.append(liElement)
    }
    document.body.append(ulElement)
}
document.body.append(button)


