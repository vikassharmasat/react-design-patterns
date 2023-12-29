import './style.css'

export const LargeAuthorListItem = ( { author } ) => {
    const {
        name,
        age,
        country,
        books,
    } = author;

    return (
        <>
            <table>
                <tbody>
                <tr>
                    <th>name</th>
                    <td>:</td>
                    <td>{ name }</td>
                </tr>
                <tr>
                    <th>age</th>
                    <td>:</td>
                    <td>{ age }</td>
                </tr>
                <tr>
                    <th>country</th>
                    <td>:</td>
                    <td>{ country }</td>
                </tr>
                <tr>
                    <th>books</th>
                    <td>:</td>
                    <td>{ books.map( book => <li key={ book }>{ book }</li> ) }</td>
                </tr>
                </tbody>
            </table>
        </>
    )
}
