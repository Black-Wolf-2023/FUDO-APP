import axios from "axios";

let GET__DATA = "GET__DATA";


export const getter = (data) => {
    return{
        type:GET__DATA,
        paylod:data
    }
}

export const  data__fetcher = () => {
    return async (dispatch) => {
        const data = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
        dispatch(getter(data.data.categories));
    }
}

