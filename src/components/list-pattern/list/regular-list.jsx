export const RegularList = ({items,sourceName,ItemComponent}) => {
    return (
        <> { items.map((res,i) => ( <ItemComponent key={i} {...{[sourceName]:res}}/> )) } </>
    )
}
