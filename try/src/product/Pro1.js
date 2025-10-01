import React from 'react'
import './Pro1.css';
import Map1 from '../mapping/Map1';
import { useSelector,useDispatch } from 'react-redux';
import {deleteFromCart,addTocart } from '../redux/Slice';




const Pro1=()=> {

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
      <section class="nine">
        <h2 class="h5">Home / Fruits & Vegetables /  Exotic Fruits & Veggies </h2>
        <h3 class="h6">Exotic Fruits & Veggies(341)</h3>
        <div class="row8">
         < div class="col38">
         <button class="btn5">Hide Filter</button>
         </div>
          < div class="col39">
         <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   Relevance
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Price - Low to High</a></li>
    <li><a class="dropdown-item" href="#">Price - High to Low</a></li>
    <li><a class="dropdown-item" href="#">Rupee Saving - Low to High</a></li>
  </ul>
</div>
         </div>
        </div>
        <p>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
      </section>
      <section class="ten">
        <div class="row10">
        <div class="col40">
        <h3 class="h7">Shop by Categories</h3>
        <h5 class="h8"> Fruits & Vegetables</h5><br></br>
        <h5 class="h8">Exotic Fruits & Veggies</h5><br></br>
        <h5 class="h8">Exotic Fruits</h5><br></br>
        <h5 class="h8">Exotic Vegetables</h5><br></br>

         <h3 class="h7">Refined by </h3>
         <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle 1" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Product Rating
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
    
  </ul>
</div>



        </div>
          <div class="col41">

           {
        Map1.map((item)=>(
          <div class="row11" key={item.id}>
            <div class="card navcard">
                 <div class="offer">
                20% off
                </div>
          
              <img src={item.img} width={270} height={270} alt={item.title}/>
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

export default Pro1