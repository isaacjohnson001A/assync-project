import{table, idNation,idYear,Nation,
    Population,slugNation,Year,th1,th2,th3,th4,th5,th6} from "./module.js";
table.appendChild(th1)
table.appendChild(th2)
table.appendChild(th3)
table.appendChild(th4)
table.appendChild(th5)
table.appendChild(th6)


let myFunction = () =>{
    let req = fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
    req.then(data => data.json())
    .then(res => {
        let allData = res.data
        
        allData.forEach((item)=>{
            idNation.push(item['ID Nation'])
            idYear.push(item['ID Year'])
            Nation.push(item.Nation)
            Population.push(item.Population)
            slugNation.push(item['Slug Nation'])
            Year.push(item.Year)
        })   
        for(let j = 0; j < idNation.length; j++){
            let tr = document.createElement('tr')
            let td = document.createElement('td')  
            th1.appendChild(tr)
            tr.appendChild(td)
            td.innerHTML = idNation[j]
        }
        for(let j = 0; j < idYear.length; j++){
            let tr = document.createElement('tr')
            let td = document.createElement('td')  
            th2.appendChild(tr)
            tr.appendChild(td)
            td.innerHTML = idYear[j]
        }
        for(let j = 0; j < Nation.length; j++){
            let tr = document.createElement('tr')
            let td = document.createElement('td')  
            th3.appendChild(tr)
            tr.appendChild(td)
            td.innerHTML = Nation[j]
        }
        for(let j = 0; j < Population.length; j++){
            let tr = document.createElement('tr')
            let td = document.createElement('td')  
            th4.appendChild(tr)
            tr.appendChild(td)
            td.innerHTML = Population[j]
        }
        for(let j = 0; j < slugNation.length; j++){
            let tr = document.createElement('tr')
            let td = document.createElement('td')  
            th5.appendChild(tr)
            tr.appendChild(td)
            td.innerHTML = slugNation[j]
        }
        for(let j = 0; j < Year.length; j++){
            let tr = document.createElement('tr')
            let td = document.createElement('td')  
            th6.appendChild(tr)
            tr.appendChild(td)
            td.innerHTML = Year[j]
        }

        })
        .catch(err => {throw 'i need monie'})
    .catch(err => console.log(err))
}
myFunction();