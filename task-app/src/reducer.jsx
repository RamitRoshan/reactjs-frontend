export default function reducer(state, action){

  switch (action.type){
    
    case "fetch_tasks": {
      return action.payload;
    }
    case "add_task": {
      return [...state, action.payload];
    }
    case "remove_task": {
      return state.filter((ele) => {
        return ele._id != action.payload;
      });
    }
    case "update_task" : {
      return state.map(ele => {
        if(ele._id == action.payload._id){
          return action.payload;
        }else{
          return ele;
        }
      })
    }
    default: {
      return state;
    }
  }
}