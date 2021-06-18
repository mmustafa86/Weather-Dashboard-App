import  { useState, useEffect } from "react";
 
 const setting={
     enableHighAcccurcy:false,
     timeout: Infinity,
     maximumAge:0
 }
export const usePosistion= (watch=false,settings=setting) =>{

const [posistion,setPosistion]=useState({});
const [error,setError]=useState(null);



const onChange=({coords})=>{
    setPosistion({
        latitude:coords.latitude,
        longitude:coords.longitude
    });
};

const onError=(error)=>{

  setError(error.message)  
};

useEffect(() => {
    if (!navigator.geolocation) {
setError("Geolocation is not supported by this browser.")
return;
}

let watcher=null;

 watcher=navigator.geolocation.watchPosition(onChange,onError ,settings)

return ()=>navigator.geolocation.clearWatch(watcher)
 // eslint-disable-next-line
},[
    settings.enableHighAcccurcy,settings.timeout,settings.maximumAge
]);

return {...posistion,error};
}