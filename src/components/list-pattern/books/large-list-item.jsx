
export const LargeBookListItem = ( { books } ) => {
    const {
        name,
        pages,
        title,
        price,
    } = books;

    return (
        <>
            <table >
                <tbody>
                <tr>
                    <th>name</th>
                    <td>:</td>
                    <td>{ name }</td>

                </tr>


                <tr>
                    <th>pages</th>
                    <td>:</td>
                    <td>{ pages }</td>

                </tr>
                <tr>
                    <th>title</th>
                    <td>:</td>
                    <td>{ title }</td>

                </tr>
                <tr>
                    <th>price</th>
                    <td>:</td>
                    <td>{ price }</td>

                </tr>
                </tbody>
            </table>
        </>
    )
}
