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

const Details = () => {
    return (
        <div>
            <h1>Details Page</h1>
        </div>
    );
}
 
export default Details;