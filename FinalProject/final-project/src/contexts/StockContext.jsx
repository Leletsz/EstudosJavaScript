import { createContext, useState } from "react";

export const StockContext = createContext({})

export function StockContextProvider({children}){
    const [items, setItems] = useState(() => {
        const storedItems = localStorage.getItem("obc-react-stock")
        if(!storedItems)return[]
        const items = JSON.parse(storedItems)
        items.forEach((item)=>{
            item.createAt = new Date(item.createAt)
            item.updatedAt = new Date(item.updatedAt)
        }) 
        return items
    })

    const addItem = (item) =>{
        setItems(currentState =>{
            const updateItems = [item, ...currentState]
            localStorage.setItem("obc-react-stock",JSON.stringify(updateItems))
            return updateItems
        })
    }

    const stock = {
        items, addItem
    }
    return(
        <StockContext.Provider value={stock}>
            {children}
        </StockContext.Provider>
    )
}
