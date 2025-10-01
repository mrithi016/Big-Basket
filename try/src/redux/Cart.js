
import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { deleteFromCart,updateQuantity } from '../redux/Slice';



const Cart = () => {
    const cartitems=useSelector((state)=>state.cart.cartitems);
    const dispatch=useDispatch();
   
    const deleteCart=(item)=>{
          dispatch(deleteFromCart(item))
      }


      const incrementCart=(id,quantity)=>{
         dispatch(updateQuantity({id, quantity : quantity + 1}))
      }


  const decrementCart=(id, quantity)=>{
    if(quantity > 1){
      dispatch(updateQuantity(
        {id, quantity : quantity - 1}
      )
      )
    }
  }


  return (
   <div>
    <section class="sec1">
    
         <div class="row2">
          {
            cartitems.map((item)=>(
              <div class="col11" key={item.id}>
                <div class="card navcard">
                      <div class="offer">
                    20% off
                    </div>
                  <img src={item.img} width={300} height={250} alt={item.title}/>
                  <div class="card-body">
                    <h5 class="card-titled">{item.name}</h5>
                    <h5 class="card-title">{item.title}</h5>
                  <br></br>
                   <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
       {item.dropname}
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
    <br></br>
                    <p class="card-text">₹{item.price}</p>
                    <button onClick={()=>incrementCart(item.id,item.quantity)}>Inc</button>

                              <h6>{item.quantity}</h6>

                              <button onClick={()=>decrementCart(item.id,item.quantity)}>dec</button>
                          
                              <button onClick={() => deleteCart(item)}>Delete</button>





                        </div>
              </div>

            </div>
        ))
      }

</div>
</section>
   </div>
  )
}



export default Cart