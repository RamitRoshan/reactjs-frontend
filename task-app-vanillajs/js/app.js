const tasks = [];
const countHandle = document.getElementById('count');
countHandle.textContent = tasks.length;

window.onload = function() {   //useEffect(() => {}, [])
    axios.get('http://localhost:7070/api/tasks/')
         .then((response) => {
            console.log(response.data);
         })
         .catch((err) => {
            console.log(err);
         })
}