import useFetch from './customHooks/useFetch';
import Card from './Card';

const Main = () => {
    const { data, isPending, error } = useFetch('https://randomuser.me/api/');

    return(
        <main>
            <div className='card'>
                { error && <p>{error}</p> }
                { isPending && <p>Loading data...</p> }
                { data && <Card data={ data } /> }
            </div>
        </main>
    )
}

export default Main;