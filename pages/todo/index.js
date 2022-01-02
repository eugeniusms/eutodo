import Link from 'next/link';
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
                <Link href={'/todo/' + todo.id} key={todo.id}>
                    <a className={styles.single}>
                        <h3>{ todo.title }</h3>
                    </a>
                </Link>
            ))}
        </div>
    );
}
 
export default Todo;
