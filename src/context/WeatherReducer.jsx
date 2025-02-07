const WeatherReducer = (state, action) => {
    switch(action.type){

        case "GET_WEATHER" :
            return {
                ...state,
                weatherData: action.payload,
            }

            case "CHANGE_THEME" :
                return{
                    ...state,
                    theme: state.theme ? false : true,
                }
                


        default : 
        return state
    }
}

export default WeatherReducer