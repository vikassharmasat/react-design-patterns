export const SmallBooksListItem = ( { books } ) => {
    const { name, price } = books;
    return (
        <>
            <h2>{name} / {price}</h2>
        </>
    )
}
