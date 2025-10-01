import React from 'react'
import './Pro7.css'
import Map7 from '../mapping/Map7'
import { useSelector,useDispatch } from 'react-redux';
import {deleteFromCart,addTocart } from '../redux/Slice';


const Pro7=()=> {

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
    <section class="sixteen">

      <h2 class="h5">Home /  Deals of the Week </h2>
        <h3 class="h6">Deals of the Week(331)</h3>
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
        <p>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
     <div class="row12">

            <div class="col42">
          <h3 class="h10">Shop by Category</h3>
        <br></br>
        <h5 class="h15">Baby Care</h5>
        <br></br>
        <h5 class="h13" >Baby Bath & Hygiene</h5><br></br>
        <h5 class="h13">Diapers & Wipes</h5><br></br>
        <h5 class="h13">Mothers & Maternity</h5><br></br>
         <h5 class="h15">Bakery, Cakes & Dairy</h5><br></br>
        <h5 class="h13">Bakery Snacks</h5><br></br>
         <h5 class="h12">Show more+</h5>


            </div>

            <div class="col43">
               {
        Map7.map((item)=>(
          <div class="col11" key={item.id}>
            <div class="card navcard">
                  <div class="offer">
                {item.offer1} {item.offer2} {item.offer3}
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

export default Pro7