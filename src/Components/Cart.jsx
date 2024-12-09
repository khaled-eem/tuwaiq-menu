import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import MainLayout from '../Layout/MainLayout';
const Cart = () => {

    const location =useLocation();
    const queryparams=new URLSearchParams(location.search);
    const total =queryparams.get('total');
   const meals =JSON.parse(queryparams.get('list') || []) ;
 

    return ( <>
    <MainLayout>
    <div className="container">
        <div className="row m-4">
            <div className="col">

            <div class="card-body ">
                  
                  
                  <table className='table table-striped text-center '>
                  
                   <tbody >
                    <tr>
                      <td>اسم الصنف</td>
                      <td>الصورة </td>
                    
                    </tr>
                    {
                      /**/meals.map((items)=>(
                        <tr>
                          <td>{items.name}</td>
                          <td><img src={items.img} width={60} className='rounded rounded-circle'></img></td>
                          
                        </tr>
                      ))
                    }
                   </tbody>
                   <tfoot>
                       <tr >
                    <td colspan={1}>المجموع الكلي : </td><td>{total}</td>
                    </tr>
                   </tfoot>
                  </table>
                  </div>
                     
                  
                </div>

                <div className="col">

<div class="card-body ">
<h4 class="mb-3 m-5">الدفع</h4>



<div class="row gy-3">
  <div class="col-md-6">
    <label for="cc-name" class="form-label">رقم البطاقة</label>
    <input type="text" class="form-control" id="cc-name" placeholder="" required/>
    
    <div class="invalid-feedback">
      Name on card is required
    </div>
  </div>

  <div class="col-md-6">
    <label for="cc-number" class="form-label">الاسم على البطاقة</label>
    <input type="text" class="form-control" id="cc-number" placeholder="" required/>
    <div class="invalid-feedback">
      Credit card number is required
    </div>
  </div>

  <div class="col-md-3">
    <label for="cc-expiration" class="form-label">Expiration</label>
    <input type="text" class="form-control" id="cc-expiration" placeholder="" required />
    <div class="invalid-feedback">
      Expiration date required
    </div>
  </div>

  <div class="col-md-3">
    <label for="cc-cvv" class="form-label">CVV</label>
    <input type="text" class="form-control" id="cc-cvv" placeholder="" required/>
    <div class="invalid-feedback">
      Security code required
    </div>
  </div>
  <div class="col-md-8">
  <Link to={`/invoice?total=${total}&list=${encodeURIComponent(JSON.stringify(meals))}`}>
    <button className='badge  btn btn-success'>ادفع</button></Link>
  </div>
</div>
      
      
        
       
      
      </div>

      
    </div>
            </div>
        </div>
    </MainLayout>
    </> );
}
 
export default Cart;