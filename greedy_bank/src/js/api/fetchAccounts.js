const fetchAccounts = () => {
  
    return fetch('http://localhost:3000/accounts')
      .then((response) => response.json())
        .then((responseJson) => {
          return responseJson;
    })
}

export default fetchAccounts;
