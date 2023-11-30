window.onload = function(){
    let books=[{name:"Valerie and her Week of Wonders",
                author:"Vítězslav Nezval",
                year:"1945"},

                {name:"The Raven",
                author:"Edgar Allen Poe",
                year:"1845"},

                {name:"Frankenstein",
                author:"Mary Wollstonecraft Shelley",
                year:"1818"},

                {name:"Lolita",
                author:"Vladimir Nabokov",
                year:"1955"},
            
                {name:"Dracula",
                author:"Bram Stoker",
                year:"1897"}
            ]

    createTable=(array,caption)=>{
        let table=document.createElement("table")
        let tablecaption=document.createElement("caption")
        tablecaption.innerText=caption
        table.appendChild(tablecaption)

        let firstRowObject=array[0]
        let firstRow=document.createElement('tr')

        for(key in firstRowObject){
            let th=document.createElement('th')
            th.innerText=key
            firstRow.appendChild(th)
        }//header for rows

        table.appendChild(firstRow)

        for(element of array){
            let tr=document.createElement("tr")
            for(key in element){
                let td=document.createElement("td")
                td.innerText=element[key]
                tr.appendChild(td)
            }
            table.appendChild(tr)

        }//fills in information
        table.setAttribute("border","3px")
        document.body.appendChild(table)
    }
    createTable(books,'List of books')

    document.querySelector('button').addEventListener('click',()=>{
        let table=document.querySelector('table')
        let LastRow=table.rows[table.rows.length-1]
        if(LastRow)
        {
            table.deleteRow(table.rows.length-1)
        }//proveruva dali e toj red za da go izbrisi
    })
}