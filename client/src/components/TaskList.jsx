//Create task list component
const TaskList = ({ posts }) => {
//task edit functionality
    const onTaskEdit = (text, item) => {
        setTodoList((todos) =>
          todos.map((todo) =>
            todo.key === item.key ? { ...todo, title: text } : todo
          )
        );
    };
   
    return {
        
    }
}
export default Tasklist;


