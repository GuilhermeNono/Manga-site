import axios from 'axios';
import qs from 'qs';

export function findAnime(params:string) {
  var data = qs.stringify({
    'search': 'One Piece' 
  });
  var config = {
    method: 'post',
    url: 'https://mangalivre.net/lib/search/series.json',
    headers: { 
      'X-Requested-With': 'XMLHttpRequest', 
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin':'*'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
}