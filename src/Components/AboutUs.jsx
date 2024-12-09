import React from 'react'
import MainLayout from '../Layout/MainLayout';
const AboutUs = () => {
    return ( 


<>
<MainLayout>
    <div className='container' style={{'minHeight':'60vh'}}>
        <div className="row m-5">
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                       <h5>حولنا</h5>
                   </div>
                   
                   </div> 
                   <div className="row">
                            <div className="col">
                        <p>مرحبًا بكم في مطعم طويق، وجهتكم المثالية لتجربة طعام لا تُنسى! نحن فريق شغوف يسعى لتقديم أشهى المأكولات بأعلى مستويات الجودة والابتكار . هدفنا ليس فقط تقديم وجبة، بل خلق تجربة متكاملة تجعل كل زيارة لكم لحظة مميزة</p>
                   </div>
                   </div>

                   <div className="col">
                       <h5>رؤيتنا</h5>
                   </div>


                   <div className="row">
                            <div className="col">
                        <p>أن نكون الاختيار الأول لعشاق الطعام من خلال تقديم تنوع فريد من الأطباق والنكهات التي ترضي جميع الأذواق</p>
                   </div>
                   </div>

                   </div>
                </div>
            </div>
        </div>
    </div>
</MainLayout>


</>


     );
}
 
export default AboutUs;