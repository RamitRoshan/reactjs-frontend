let tasks = [];
const countHandle = document.getElementById('count');
const listHandle = document.getElementById('list');
countHandle.textContent = tasks.length;

window.onload = function() {   //useEffect(() => {}, [])
    axios.get('http://localhost:7070/api/tasks/')
         .then((response) => {
            console.log(response.data);
            const data = response.data;
            //updating the state and UI . both we have to do
            
            tasks = data;  // update the state
            countHandle.textContent = tasks.length; //update the UI

            // using array to print the lists of task on the UI
            tasks.forEach((ele) => {
                const liTag = document.createElement('li');
                const textNode = document.createTextNode(ele.title);
                liTag.appendChild(textNode);
                listHandle.appendChild(liTag);


                const removeBtn =  document.createElement('button');
                removeBtn.textContent = "remove";
                liTag.appendChild(removeBtn);

                
                //adding event-handlers for all remove buttons we have created
                removeBtn.addEventListener('click', () => {
                    axios.delete(`http://localhost:7070/api/tasks/${ele._id}`)
                         .then((response) => {
                            console.log(response.data);
                            const data = response.data;

                             //remove element from array
                            const index = tasks.findIndex(task => task._id == ele._id);
                            tasks.splice(index, 1);

                            //remove li from the list
                            liTag.parentElement.removeChild(liTag);
                            //update thee list count
                            countHandle.textContent = tasks.length; 
                       })
               
                })

            })
            
         })
         .catch((err) => {
            console.log(err);
         })
}

 