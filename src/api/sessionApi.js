class SessionApi {
  static getAllSessions() {
    return fetch('http://localhost:3001/api/sessions', { method: 'get' })
      .then((resp) => {
        console.log("srttsrtr");
        if (resp.ok) {
         return resp.json();
        } else {
          throw new Error('Bad server response');
        } 
      })
      .then((data) => {
        console.log("some datas", data);
        return data;
      });
  }
}

export default SessionApi;

