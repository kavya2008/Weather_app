import React ,{ useState } from 'react';
import { useEffect } from 'react';

const Temp=(props)=>{
    const[val,newval]=useState("");
    const[search,newsearch]=useState("Pune");
    useEffect(()=>{
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=db163c5e80058837af3b8eb892090ccd`
       
        const fetchapi= async ()=>{
            const response=await fetch(url)
            
            const resjson= await response.json();
            newval(resjson.main);
            console.log(resjson);
        }
        fetchapi();
    },[search])
    return(
        <>
        <div className={props.cls}>
            
            {console.log(props.cls)}
            <div className='input'>
                <input type="search" placeholder='search..' onChange={(e)=>{
                    newsearch(e.target.value)
                }}></input>
            </div>
            {
                !val?(<p>City Not Found</p>):(
                    <div className='info'>
                <h1 className='srch anim'>
                {search}
            <i className="material-icons icon anim">location_on</i>
            </h1>
            <h1 className='temperature'>
                {val.temp} C
            </h1>
            
            <div className='details'>
            <h2 className='detail'>Details</h2>
                <div className='col'>
                    <div className='row'>
                    <h3 className='mintem'>Min : {val.temp_min}</h3>
                    <h3 className='maxtem'>Max : {val.temp_max}</h3>
                    </div>
                    <div className='row'>
                    <h3 className='humid'>Humidity : {val.humidity}</h3>
                    <h3 className='pressure'>Pressure : {val.pressure}</h3>
                    </div>

                </div>
            </div>
            
            </div>
                )
            }
            
        </div>
        
        </>
    )
}
export default Temp