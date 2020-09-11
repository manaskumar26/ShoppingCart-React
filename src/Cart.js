import React from 'react';
import CartItem from './CartItem';
class Cart extends React.Component{
    constructor(){
        super()
        this.state={
            product:[
                {
                    title:'Phone',
                    price:'999',
                    qty:1,
                    img:'https://cdn.mos.cms.futurecdn.net/7TC7pcZvnFa9xPDgU6V6VQ.jpg',
                    key:Math.floor(Math.random()*99)
                },
                {
                    title:'Watch',
                    price:'199',
                    qty:1,
                    img:'',
                    key:Math.floor(Math.random()*99)
                },
                {
                    title:'Armani',
                    price:'1999',
                    qty:1,
                    img:'',
                    key:Math.floor(Math.random()*99)
                },
                {
                    title:'PS4',
                    price:'99XX',
                    qty:1,
                    img:'',
                    key:Math.floor(Math.random()*99)
                }
            ]
        }
    }
    render(){
        const { product }=this.state
        return(
            <div className="cartBox">
                {product.map((item)=>{
                    return <CartItem product={item} key={item.key} />
                })}
            </div>
        );
    }
}
export default Cart;