
const accounts = (state = [], action) => {
    switch (action.type) {
      case "FETCH_ACCOUNTS": 
        return action.accounts;
      default:
        return state;
    }
} 

export default accounts;