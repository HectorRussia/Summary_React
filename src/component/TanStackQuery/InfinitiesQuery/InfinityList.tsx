import useInfinity from "./hook/useInfinity";

const InfinityList = () => {

    const pageSize = 10;

    const {data, error , isLoading ,fetchNextPage, isFetchingNextPage , hasNextPage , isFetching} = useInfinity({pageSize});


    if(error) return <p>{error.message}</p>
    if(isLoading) return <p>data isLoading....</p>

    return (
        <>
            <ul className="list-group">
                {data.map((post) => (
                    <li className="list-group-item" key={post.id}>{post.title}</li>
                ))}
            </ul>
            <button
                onClick={() => fetchNextPage()}
                disabled={!hasNextPage || isFetchingNextPage}
                >
                {isFetchingNextPage
                    ? 'Loading more...'
                    : hasNextPage
                    ? 'Load More'
                    : 'Nothing more to load'}
                </button>
                <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
        </>
         
    )
}

export default InfinityList