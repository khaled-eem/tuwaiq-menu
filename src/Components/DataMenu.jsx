import React from 'react'
import { useState } from 'react';
import MainLayout from '../Layout/MainLayout';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
const DataMenu = () => {
    
        const datamenu=[
            {
              key:"sh",
              img:"https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?t=st=1714213671~exp=1714217271~hmac=d6ff108916c006dda6cc2e21999f8274d6e9abe8e22b4404c8ad77f30e7329e8&w=740",
              name:"شاورما",
              price:30
            },
        
            {
              key:"hm",
              img:"https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?t=st=1714213943~exp=1714217543~hmac=9d06ce2d4fdfdf3788ff3e5cae72d904b9003e64a6971c59c05783a680bc2978&w=740",
              name:"هامبرجر",
              price:15
            },
        
            {
              key:"br",
              img:"https://img.freepik.com/premium-psd/psd-saudi-food-kabsa-isolated-without-background_867452-12773.jpg?w=740",
              name:"برياني باللحم",
              price:13
            },
            {
              key:"piz",
              img:"https://img.freepik.com/premium-photo/traditional-italian-food-fresh-pizza-rustic-wooden-table-with-ingredients-top-view-menu-photo_201836-504.jpg?w=1380",
              name:"بيتزا ببروني",
              price:25
            },{
              key:"pizv",
              img:"https://img.freepik.com/premium-photo/delicious-pizza-gray-wooden-surface-top-view_93675-110512.jpg?w=1380",
              name:"بيتزا خضار",
              price:21
            },{
              key:"hmc",
              img:"https://img.freepik.com/free-photo/sandwich-with-chicken-burger-tomatoes-cheese-lettuce_2829-19899.jpg?t=st=1733736733~exp=1733740333~hmac=d790f2922b1a9d6f1862800a8a54b0f7168f994d751582378bacb321e4cdc28f&w=996",
              name:"برجر دجاج",
              price:13
            },
             
   
          ]    



        const usedispatch=useDispatch();  

        const [total,settotal]=useState(0);
        const [counter,setcounter]=useState(0);
        const [meals,setmeals]=useState([]);
        const [number,setnumber]=useState({"sh": 0, "hm": 0, "br": 0 ,"piz":0,"pizv":0,"hmc":0})
        
        
        const setalltotal=(price)=>{
         
          settotal(total+(price));
          
        }
        
        const setallcounter=(num)=>{
         
          setcounter(counter+num);
          
        }
        
        
        const settotalval=(price,key,event,name,img)=>{
        const meal={'name':name,'img':img ,'price':price}
        setmeals([...meals,meal])
         const currentValue = parseInt(event.target.value) || 0; 
         const prevValue = number[key]; 
         const counter=prevValue
        
         
         setnumber((prevNumber) => ({
           ...prevNumber,
           [key]: currentValue, 
         }));
        
            
           
         setalltotal((currentValue - prevValue) * price);
            if (currentValue > counter) {
              usedispatch({type:'INCREMENT'});
            } else if (currentValue < counter) {
              usedispatch({type:'DECREMENT'}); 
            }
          
            
          
        }
          return (
            <>
            <MainLayout>
              
             <div className="container">
              
              <div className="row mt-5 ">
                <div className="col">

               {

datamenu.reduce((rows, item, index) => {
  
  if (index % 2 === 0) {
    rows.push([item]);
  } else {
    rows[rows.length - 1].push(item);
  }
  return rows;
}, []).map((row, rowIndex) => (
  <div className="row g-4" key={rowIndex}>
    {row.map((item) => (
      <div className="col-md-6" key={item.key + item.name}>
        <div className="card shadow-sm">
          <img
            src={item.img}
            className="card-img-top"
            alt={item.name}
            style={{ height: "150px", objectFit: "cover" }}
          />
          <div className="card-body text-center bg-secondary text-white">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">السعر: {item.price} ريال</p>
            <input
              type="number"
              className="form-control w-50 mx-auto"
              value={number[item.key] || 0}
              onChange={(e) => settotalval(item.price, item.key, e,item.name,item.img)}
              min="0"
            />
          </div>
        </div>
      </div>
    ))}
  </div>
))}
                  </div>
                  </div>

               </div>
              <footer className='payFooter'>
                <Link to={`/cart?total=${total}&list=${encodeURIComponent(JSON.stringify(meals))}`}>
                <button class="btn btn-dark">ادفع</button></Link>
              </footer>
              </MainLayout>
             
             
            </>
          );
}
 
export default DataMenu;