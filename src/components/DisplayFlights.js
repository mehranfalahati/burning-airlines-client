import React from "react";


const DisplayFlights = (props) => {
    if (props.flights.length > 0 ){
          return (
            
        <div>  
            {/* {props.flights.map((flight) => {
                return <p>
                    {flight.all}
                </p> */}
{props.flights.map((f) => <p key={f.id} > The flight {f.origin} to {f.destination} on {f.date} . get on the plane f***ker</p>)}

            {/* })}
              {props.flights[0].origin}- 
               { props.flights[0].destination  } 
               <p>   {  props.flights[0].date}</p>
        */}
        </div>
    ) 
    } else return (
        <div><p>no flights sucker!</p></div>
    )
 
}



export default DisplayFlights;
