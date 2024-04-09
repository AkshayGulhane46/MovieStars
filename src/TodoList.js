import React, { useState , useEffect} from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        if (storedTodos) {
            setTodos(storedTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    // Function to add a new todo
    function addTodo(e) {
        e.preventDefault();
        if (!input.trim()) return; // Ignore empty todos
            const newTodo = {
                id: Date.now(),
                text: input,
                completed: false
            };
        console.log("✅ Created todo " + input);
        setTodos(oldTodos => [...oldTodos, newTodo]); // this is how we add new todos 
        setInput("");
    }

    // Function to toggle completion status of todo
    function toggleTodoStatus(id) {
        setTodos(todos =>
            todos.map(todo => 
                todo.id === id ? { ...todo, completed: !todo.completed } : todo // this is how we update the todos
                
            )
        );
    }

    // Function to delete a todo
    function deleteTodo(id) {
        console.log("❌ Deleted todo " + todos.id);
        setTodos(newTodos => 
            newTodos.filter(todo => todo.id !== id));
            
    }

    return (
        <>
            <div>TodoList</div>
            <div className='todo-form'>
                <form onSubmit={addTodo}>
                    <input type='text' value={input} onChange={e => setInput(e.target.value)}/>
                    <button type='submit'>Create todo</button>
                </form>
            </div>
            <div className='list'>
                {todos.length>0 ? ( todos.map(todo => (
                    <div key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodoStatus(todo.id)}
                        />
                        <p style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                            {todo.text}
                        </p>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </div>
                ))
                ):<div>Noting to show for now</div>
            }
            </div>

        </>
    );
}

export default TodoList;
