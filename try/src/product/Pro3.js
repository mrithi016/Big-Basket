import React from 'react'
import './Pro3.css'
import Map3 from '../mapping/Map3'
import { useSelector,useDispatch } from 'react-redux';
import {deleteFromCart,addTocart } from '../redux/Slice';

const Pro3=()=> {

    const cartitems=useSelector((state)=>state.cart.cartitems);
 
  const dispatch=useDispatch();


  const addCart=(item)=>{
    dispatch(addTocart(item))
  }
 
  const deleteCart=(item)=>{
    dispatch(deleteFromCart(item))
}

  return (
    <div>
 <section class="thirteen">
     <h2 class="h5">Home / Smart Basket</h2>
     <div class="row14">
       <div class="col46">
<button class="btn5">Hide Filter</button>
      
        </div> 
          <div class="col47">
           <p class="p5">Our Recommendations For You</p>
          <p>buy these products</p>

        </div> 
     </div>
    
     <div class="row13">


        <div class="col44">

            <h3 class="h10">Shop by Category</h3>
        <br></br>
        <h5>Baby Care</h5><br></br>
        <h5 class="h13" >Baby Bath & Hygiene</h5><br></br>
        <h5 class="h13">Baby Food & Formula</h5><br></br>
        <h5 class="h13">Diapers & Wipes</h5><br></br>
        <h5>Eggs, Meat & Fish</h5><br></br>
        <h5 class="h13">Poultry</h5><br></br>
         <h5 class="h12">Show more+</h5>


        </div>
         
        <div class="col45">

          {
        Map3.map((item)=>(
          <div class="col11" key={item.id}>
            <div class="card navcard">
                  <div class="offer">
                {item.offer1}{item.offer2}{item.offer3}
                </div>
              <img src={item.img} width={270} height={210} alt={item.title}/>
              <div class="card-body">
                <h5 class="card-titled">{item.name}</h5>
                <h5 class="card-title">{item.title}</h5>
              <br></br>
               <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   {item.dropname}
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">{item.option1}</a></li>
    <li><a class="dropdown-item" href="#">{item.option2}</a></li>
    <li><a class="dropdown-item" href="#">{item.option3}</a></li>
  </ul>
</div>
<br></br>
                <p class="card-text">₹{item.price}</p>


                
    {
                              cartitems.find(Items=>Items.id===item.id)?(
                                    <button class="btn btn-danger cartbutton" onClick={()=>deleteCart(item)} > Remove From Cart </button>)
                                    :
                                    (<button class="btn btn-danger cartbutton"  onClick={()=>addCart(item)} > Add To Cart </button>)
                              }
                              
              </div>
              </div>

            </div>
        ))
      }


        </div>


     </div>
 </section>
 <br></br>
 <br></br>




    </div>
  )
}

export default Pro3