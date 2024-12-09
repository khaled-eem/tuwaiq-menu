import React from 'react'
import MainLayout from '../Layout/MainLayout';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    useEffect(()=>(

        console.log('wel')




    ))
    return ( <>
    <MainLayout>
<div className="container ">
        <div className="row mt-5 d-flex justify-content-center">

            <div className="col-11" >
           
            <h3 className='text-end' ><span className=' badge bg-secondary'>اهلا بكم في مطعم طويق</span></h3>
            </div>
        </div>
        <div className="row mt-5 d-flex justify-content-end">
                    <div className="col-9">
                        
                        <div className="card" id='card1' >
                            <div className="card-body bg-secondary text-white">

                        <div className="row mt-1 d-flex justify-content-center">
                            <div className="col-3 "><i class="bi bi-egg-fried" style={{fontSize:80}}></i></div>
                        </div>

                        <div className="row mt-4 justify-content-center">
                            <div className="col-6">
                           <h5> القائمة الرئيسية</h5>
                    
                            </div>
                    
                        </div>

                        <div className="row row mt-4 justify-content-center">
                            <div className="col-3">
                                <Link to='/datamenu' >
                            <button type="button" class="btn btn-dark">اضغط هنا</button></Link>
                            </div>
                        </div>
                            </div>

                       
                     
                </div>
            </div>
        </div>


</div>

    </MainLayout>
    
    
    
    
    
    
    </> );
}
 
export default Landing;