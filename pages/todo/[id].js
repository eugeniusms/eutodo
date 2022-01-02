export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await res.json();

    const paths = data.map(todo => {
        return {
            params: { id: todo.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/' + id)
    const data = await res.json();

    return {
        props: { todo: data}
    }
}

const Details = ({ todo }) => {
    return (
        <div>
            <h1>{ todo.title }</h1>
            <p>{ todo.completed.toString() }</p>
        </div>
    );
}
 
export default Details;