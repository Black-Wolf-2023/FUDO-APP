import axios from "axios";

let GET__DATA = "GET__DATA";




const options = {
    method: 'GET',
    url: 'https://yummly2.p.rapidapi.com/categories/list',
    params: {q: 'chicken soup'},
    headers: {
      'X-RapidAPI-Key': '079e45b251msh1f4fa53e1a6534dp1a4329jsn3e7e9466e3a7',
      'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
    }
  };
export const getter = (data) => {
    return{
        type:GET__DATA,
        paylod:data
    }
}

export const  data__fetcher = () => {
    return async (dispatch) => {
        const data = await axios.request(options);
        dispatch(getter(data.data["browse-categories"]));
    }
}

