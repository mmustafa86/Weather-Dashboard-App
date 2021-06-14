import { SEARCH_WEATHER, GET_CITES, GET_DAYS, CURRENT_LOCATION,CITY_ERROR ,REMOVE_ERROR } from "./types";

const weatherReducer= (state, action) => {
  switch (action.type) {
    case SEARCH_WEATHER:
      return {
        ...state,
        weather: action.payload,
        loading: false,
      };
    case CURRENT_LOCATION:
      return {
        ...state,
        current: action.payload,
        loading: false,
      };
    case GET_DAYS:
      return {
        ...state,
        weathers: action.payload,
        loading: false,
      };
    case GET_CITES:
      return {
        ...state,
        favWeather: action.payload,
      };
      case CITY_ERROR:
        return {
          ...state,
          error: action.payload
        };
        case REMOVE_ERROR:
            return  {
                ...state,
                error: null
              };

    default:
      return state;
  }
};
export default weatherReducer;