import React from 'react'
import './Nav.css';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.png';
import img3 from '../images/img3.jpg';
import img60 from '../images/img60.png';
import { Link } from 'react-router-dom';
// import Mapp from '../mapping/Mapp';
// import img9 from '../images/img9.jpg';
// import img10 from '../images/img10.jpg';
// import img11 from '../images/img11.jpg';
// import img12 from '../images/img12.jpg';
// import img13 from '../images/img13.jpg';
// import img14 from '../images/img14.jpg';
// import img15 from '../images/img15.jpg';
// import img16 from '../images/img16.jpg';
// import img17 from '../images/img17.jpg';
// import img18 from '../images/img18.jpg';
// import img19 from '../images/img19.jpg';
// import img20 from '../images/img20.jpg';
// import img21 from '../images/img21.jpg';
// import img22 from '../images/img22.jpg';
// import img23 from '../images/img23.jpg';
// import img24 from '../images/img24.jpg';
// import img25 from '../images/img25.jpg';
// import img27 from '../images/img27.jpg';
// import img28 from '../images/img28.jpg';


function Nav() {
  return (
    <div>
    <section class="nav">
      <div class="row">
        <div class="col1">
       <Link to="/"> <img src={img1} width="140px"/></Link>
        </div>
        <div class="col2">
          <input class="b" type="search" placeholder="Search" aria-label="Search"/>
        <button class="b1" type="submit" >Search</button>
        </div>
        <div class="col3">
           <button class="btn1" type="submit">Delivery in 5mins<br></br>Select Location</button>
        </div>
        <div class="col4">
           <button class="btn2" type="submit">Login/Sign<br></br> up </button>
        </div>
        <div class="col5">
          <Link to="/cart"><img src={img2} width="60px"/></Link>
        </div>
      </div>
    </section>

    <section class="nav1">
      <div class="row1">
        <div class="col6">
         <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" >
    Shop by Category
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Electronic</a></li>
    <li><a class="dropdown-item" href="#">Fashion</a></li>
    <li><a class="dropdown-item" href="#">Food</a></li>
  </ul>
</div>
        
        </div>
          <div class="col7">
        <Link to="/product1"><h4 class="h1">Exotic Fruits & Veg</h4></Link>
        </div>
          <div class="col8">
         <Link to="product2"><h4 class="h1">Ghee</h4></Link> 
        </div>
          <div class="col9">
          <Link to="product3"><img src={img3}/></Link>
        </div>
          <div class="col10">
         <Link to="/fav"><img src={img60}/></Link> 
        </div>
          
      </div>
    </section>

    {/* <section class="one">
     
      <ul>
        <li class="list1">EGGS,MEAT AND FISH</li>
        <li class="list">BUY MORE SAVE MORE</li>
        <li class="list">DEALS OF THE WEEK</li>
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
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<br></br>
                <p class="card-text">₹{item.price}</p>
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
    <section class="eight">
      <div class="row6">
        <div class="col26">
          <h4 class="h4">bigbasket<br></br><br></br>About Us<br></br><br></br>In News<br></br><br></br>Green bigbasket<br></br><br></br>Privacy Policy<br></br><br></br>Affiliate<br></br><br></br>Terms and conditions<br></br><br></br>bb Daily</h4>
        </div>
         <div class="col27">
           <h4 class="h4">Help<br></br><br></br>FAQs<br></br><br></br>Contact us<br></br><br></br>bb Wallet FAQs<br></br><br></br>bb Wallet T&Cs<br></br><br></br>Vendor Connect</h4>
        </div>
         <div class="col28">
          <img src={img1}width={200}/><br></br>
          <br></br>
          <img src={img27}width={160}/>
           <img class="i2"src={img28} width={152}/>

        </div>
      </div>
      <p class="i3">--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
      <p class="i4">Cities We Serve</p>
      <p class="i4">Abohar
|
Abu Road
|
Achampet
|
Achrol
|
Adampur
|
Addanki
|
Addateegala
|
Adilabad
|
Adimali
|
Adoni
|
Adoor
|
Afzalpur
|
Agali
|
AGARTALA
|
Agra
|
Ahmedabad Rural
|
Ahmedabad-Gandhinagar
|
Aizawl
|
Ajeetgarh
|
Ajmer
|
Ajnala
|
Akaloor
|
Akbarpur
|
Akbarpur-UP
|
Aklera
|
Akola
|
Alair
|
Alakode
|
Aland
|
Alappuzha
|
Aliganj
|
Aligarh
|
Aligarh District
|
ALIPURDUAR
|
Alirajpur
|
Allagadda
|
Allahabad
|
Alleppey
|
Almora
|
ALNAVAR
|
Alote
|
Alur
|
Aluva
|
Alwar
|
Amalapuram
|
Amangal
|
Amanganj
|
Amarapuram
|
Amaravathi
|
Amarpatan
|
Amarwara
|
Ambala
|
Ambasamudram
|
Ambuj Nagar
|
Ambur
|
Amethi District
|
Amiliya
|
Amla
|
Amravati
|
Amreli
|
Amritsar
|
Amroha District
|
Anand
|
Anandnagar
|
Anandpur Sahib
|
Anantapur District
|
Anantnag
|
Andaman and Nicobar
|
Angul
|
Anjumoorthy
|
Ankleshwar
|
Ankola
|
Annur
|
Anpara
|
Anthiyour
|
Anuppur
|
Anupshahar
|
Aonla
|
Arakkonam
|
Araku
|
Arambag
|
Arani
|
Araria
|
Areacode
|
Arimbur
|
Ariyalur
|
Armoor
|
ARRAH
|
Arsikere
|
Aruppukkottai
|
ARWAL
|
Asansol
|
Ashok Nagar
|
Ashta
|
Asifabad
|
ASIKA
|
Asind
|
Assaigoli
|
ASTARANGA
|
Aswaraopeta
|
Atarra
|
Athagad
|
Athani
|
Atmakur
|
Atmakur-AP
|
Atmakur-TS
|
Attingal
|
Attur
|
AUL
|
Aunrihar
|
Aurad
|
Auraiya
|
Aurangabad
|
Aurangabad(BH)
|
Avanigadda
|
Avinashi
|
Ayodhya District
|
Ayoor
|
Azamgarh
|
Azhagappapuram
|
B Kothakota
|
Babasagar
|
Baberu
|
Babrala
|
BABUJANG
|
BACHHRAWAN
|
BADAGADA
|
BADAMBA
|
Badami
|
Baddi
|
Badlapur
|
Badnagar
|
Badnaur
|
Badvel
|
Bagalkot
|
Bagepalli
|
Bageshwar
|
Baghpat District
|
BAGNAN
|
Bagru
|
Bagula
|
Bahadurgarh
|
Bahal
|
Baheri
|
BAHRAICH
|
BAIHATA
|
Baijnath-UK
|
Bailhongal
|
Bajag
|
Bajore
|
Bakewar
|
Bakhtiarpur
|
Balaghat
|
Balangir
|
Balaran
|
Balasore</p>
      <p class="i3">--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
    <div class="row7">
      <div class="col29">
      <h4 class="h4">Popular Categories<br></br><br></br>Sunflower Oils<br></br><br></br>Milk<br></br><br></br>Organic F&V<br></br><br></br>Floor Cleaners</h4>
      </div>
      <div class="col30">
             <h4 class="h4"><br></br><br></br>Wheat Atta<br></br><br></br>Health Drinks<br></br><br></br>Namkeen<br></br><br></br>Diapers & Wipes</h4> 
      </div>
      <div class="col31">
       <h4 class="h4">Popular Brands<br></br><br></br>Amul<br></br><br></br>Red Bull<br></br><br></br>Yummiez<br></br><br></br>Nescafe</h4>
    
      </div>
      <div class="col32">
                     <h4 class="h4"><br></br><br></br>Yera<br></br><br></br>Ferrero<br></br><br></br>MTR<br></br><br></br>Fortune</h4> 
      </div>
    </div>
    <br></br>
    <br></br>
    <p class="p2">Copyright © 2024-2026 Supermarket Grocery Supplies Pvt Ltd</p>
    </section> */}

    </div>
  )
}

export default Nav





