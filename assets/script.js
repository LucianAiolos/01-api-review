// const nameEl = document.getElementById('name')
// const descEl = document.getElementById('desc')
// const priceEl = document.getElementById('price')
// const imageEl = document.getElementById('image')
const root = document.getElementById("root")

const fentyData = []

const getFenty = () => {
  const dataArr = []
  fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&limit=10`)
    .then(res => res.json())
    .then(data => data.forEach(item => {
      console.log(item.name)
      // const ulEl = document.createElement('ul')

    
      const listItem =  document.createElement('ul')
      const nameEl = document.createElement('li')
      const description = document.createElement('li')
      const price = document.createElement('li')
      

      nameEl.innerHTML = item.name
      description.innerHTML = item.description
      price.innerHTML = item.price

      
        // `
        //   <p id="name">${}</p>
        //   <p id="desc">${data.description}</p>
        //   <p id="price">${data.price}</p>
        //   <img id="image" src="${data.image_link}" alt=""> 
        // `
        
        // const desc = document.createElement('li')
        // const price = document.createElement('li')
        // create image
      

    listItem.append(nameEl, description, price)
    root.appendChild(listItem)

    }))
 
  
}

getFenty()


