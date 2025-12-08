export default function TaskList({tasks}){
    return(
        <div>
            {tasks.length == 0 && <p>No tasks found, Add your nes task</p>}
            <ul>
                {tasks.map((ele) => {
                    return <li key={ele.id}>{ele.title}</li>
                })}
            </ul>
        </div>
    );
}