import { SEARCH_WEATHER,GET_CITES  ,GET_DAYS} from "./types";



export default (state, action) => {
  switch (action.type) {
case SEARCH_WEATHER:
    return{
        ...state,
        weather:action.payload,
        loading:false
    };
    case GET_DAYS:
    return{
        ...state,
        weathers:action.payload,
        loading:false
    };
case GET_CITES:
    return{
        ...state,
        favWeather:action.payload
    }    
    default:
      return state;
  }
};
