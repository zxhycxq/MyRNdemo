// export const URL='http://211.141.25.38:30012';
// const URL='http://192.168.1.134:20012';
export default class HttpUtils {
  static get(url) {
    return new Promise ((resolve, reject) => {
      fetch (url)
          .then (response => response.json ())
          .then (result => {
            resolve (result);
          })
          .catch (error => {
            reject (error);
          })
    })
  }
  
  static post(url, data) {
    return new Promise ((resolve, reject) => {
      fetch (url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify (data)
      })
          .then (response => response.json ())
          .then (result => {
            resolve (result);
          })
          .catch (error => {
            reject (error);
          })
    })
  }
}
