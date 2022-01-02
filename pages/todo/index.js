import styles from '../../styles/Todo.module.css'

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await res.json();

    return {
        props: { todos: data }
    }

}

const Todo = ({ todos }) => {
    return (
        <div>
            <h1>All ToDo</h1>
            {todos.map(todo => (
                <div key={todo.id}>
                    <a className={styles.single}>
                        <h3>{ todo.title }</h3>
                    </a>
                </div>
            ))}
        </div>
    );
}
 
export default Todo;
