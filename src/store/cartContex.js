import {createContext,useState} from 'react';

export const cartContext = createContext();

export default function CartProvider({children}){


    const [cart,setCart] = useState([{nombre:'Ezequiel', id:'22'}])



    function addItem(item,quantity){
        console.log(item,quantity);
    }



    return (
        <cartContext.Provider value={{cart, addItem}}>
            {children}
        </cartContext.Provider>
    )
}