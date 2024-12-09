import React from 'react';
import {  useLocation } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
const Invoice = () => {

    const location =useLocation();
    const queryparams=new URLSearchParams(location.search);
    const total =queryparams.get('total');
   const meals =JSON.parse(queryparams.get('list') || []) ;
   

  return (
    
    <><MainLayout>
      <div className="card">
        <div className="card-body mx-4">
          <div className="container">
            <p className="my-5 mx-5" style={{ fontSize: '30px' }}>
              شكرا على طلبك من مطعمنا
            </p>
            <div className="row">
              <ul className="list-unstyled">
                
                <li className="text-muted mt-1">
                  <span className="text-black">Invoice</span> #12345
                </li>
                <li className="text-black mt-1">April 17 2024</li>
              </ul>
              
              <hr style={{ border: '2px solid black' }} />

              
              
           
            </div>
            {
                meals.map((e)=> (
            <div className="row">
              <div className="col-xl-10">
                <p>{e.name}</p>
              </div>
              <div className="col-xl-2">
                <p className="float-end">{e.price} ر.س</p>
                
              </div>
              <hr />
            </div>

            ))}
            <div className="row text-black">
                <hr style={{ border: '2px solid black' }} />

              <div className="col-xl-12">
                <p className="float-end fw-bold">{total} ر.س</p>
              </div>
              <hr style={{ border: '2px solid black' }} />
            </div>
           
          </div>
        </div>
      </div>
    </MainLayout></>
  );
};

export default Invoice;
