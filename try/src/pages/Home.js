import React from 'react'
import './Home.css';
import Mapp from '../mapping/Mapp';
import img9 from '../images/img9.jpg';
import img10 from '../images/img10.jpg';
import img11 from '../images/img11.jpg';
import img12 from '../images/img12.jpg';
import img13 from '../images/img13.jpg';
import img14 from '../images/img14.jpg';
import img15 from '../images/img15.jpg';
import img16 from '../images/img16.jpg';
import img17 from '../images/img17.jpg';
import img18 from '../images/img18.jpg';
import img19 from '../images/img19.jpg';
import img20 from '../images/img20.jpg';
import img21 from '../images/img21.jpg';
import img22 from '../images/img22.jpg';
import img23 from '../images/img23.jpg';
import img24 from '../images/img24.jpg';
import img25 from '../images/img25.jpg';
import img60 from '../images/img60.png';
import img61 from '../images/img61.jpg';
import { Link } from 'react-router';
import { useSelector,useDispatch } from 'react-redux';
import {deleteFromCart,addTocart } from '../redux/Slice';
import { favPlus,favMinus } from '../redux/Favslice';



const Home=()=> {

    const cartitems=useSelector((state)=>state.cart.cartitems);
    
    const favitems=useSelector((state)=>state.favcart.favitems);
 
  const dispatch=useDispatch();


  const addCart=(item)=>{
    dispatch(addTocart(item))
  }
 
  const deleteCart=(item)=>{
    dispatch(deleteFromCart(item))
}

  const favplus=(item)=>{
    dispatch(favPlus(item))
  }

  const favminus=(item)=>{
    dispatch(favMinus(item))
  }


  return (
    <div>
 <section class="one">

     <ul>
        <Link to="product5"><li class="list1">EGGS,MEAT AND FISH</li></Link>
        <Link to="product6"><li class="list">BUY MORE SAVE MORE</li></Link>
        <Link to="product7"><li class="list">DEALS OF THE WEEK</li></Link>
      </ul>

    </section>

    
    <section class="two">
      <h2 class="h2">My Smart Basket</h2>

     <div class="row2">
      {
        Mapp.map((item)=>(
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




                               {
                              favitems.find(Items=>Items.id===item.id)?(
                                    <button class="btn -danger cartbuttonn" onClick={()=>favminus(item)} > <img src={img61} width={25}/> </button>)
                                    :
                                    (<button class="btn -danger cartbuttonn"  onClick={()=>favplus(item)}>
                                      <img src={img60}/>
                                    </button>)
                              }


              </div>
              </div>

            </div>
        ))
      }
     </div>

    </section>

    <section class="three">
      <h2 class="h2">Top Offers</h2>
      <div class="row3">
        <div class="col12">
           <img class="i1" src={img9} width={300}/>
        </div>
        <div class="col13">
          <img class="i1" src={img10} width={300}/>
        </div>
        <div class="col14">
          <img class="i1" src={img11} width={300}/>
        </div>
        <div class="col15">
          <img class="i1" src={img12} width={300}/>
        </div>
      </div>
    </section>
    
    <section class="four">
      <h2 class="h2">Snacks Store</h2>
      <div class="row4">
        <div class="col16">
           <img class="i2" src={img13} width={300}/>
        </div>
        <div class="col17">
          <img class="i2" src={img14} width={300}/>
        </div>
        <div class="col18">
          <img class="i2" src={img15} width={300}/>
        </div>
        <div class="col19">
          <img class="i2" src={img16} width={300}/>
        </div>
      </div>
    </section>

    <section class="five">
       <h2 class="h2">Beauty and Hygiene</h2>
      <div class="row5">
        <div class="col20">
           <img class="i2" src={img17} width={200}/>
        </div>
        <div class="col21">
          <img class="i2" src={img18} width={200}/>
        </div>
        <div class="col22">
          <img class="i2" src={img19} width={200}/>
        </div>
        <div class="col23">
          <img class="i2" src={img20} width={200}/>
        </div>
        <div class="col24">
          <img class="i2" src={img21} width={200}/>
        </div>
         <div class="col25">
          <img class="i2" src={img22} width={200}/>
        </div>
      </div>
    </section>
    <section class="six">

      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img23} width={1300}/>
    </div>
    <div class="carousel-item">
     <img src={img24} width={1300}/>
    </div>
    <div class="carousel-item">
      <img src={img25} width={1300}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    </section>

    <section class="seven">
      <h5 class="h3">bigbasket – online grocery store</h5>
      <p class="p1">Did you ever imagine that the freshest of fruits and vegetables, top-quality pulses and food grains, dairy products, and hundreds of branded items could be handpicked and delivered to your home, all at the click of a button? In today's fast-paced world, bigbasket.com, India's pioneering online grocery store, continues to bring a staggering array of over 40,000 products from more than 1,000 brands to the doorsteps of over 10 million satisfied customers. From essential household cleaning products to the latest beauty and makeup trends, bigbasket remains your one-stop shop for daily needs.<br></br><br></br>In these times, we've eliminated the stress associated with shopping for daily essentials. You can now effortlessly order all your household products and groceries online. Plus, the added convenience of finding all your requirements at a single source, coupled with substantial savings, demonstrates that bigbasket, India's largest online supermarket, has transformed the way we shop for groceries. Online grocery shopping has become second nature. And when it comes to freshness, whether it's fruits and vegetables or dairy and meat, we've got you covered! Easily obtain fresh eggs, meat, fish, and more with just a few clicks.<br></br><br></br>We now serve 300+ cities and towns across India and ensure swift delivery times, guaranteeing that all your groceries, snacks and branded foods reach you on time.

<br></br><br></br>Slotted Delivery: Choose the most convenient delivery slot to receive your groceries, ranging from early morning delivery for early birds to late-night delivery for those on the night shift. bigbasket caters to every schedule.

</p>
    </section>
 


    </div>
  )
}

export default Home