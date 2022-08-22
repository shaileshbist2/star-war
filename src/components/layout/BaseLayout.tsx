import SearchBar from "../shared/SearchBar"

const BaseLayout = (props: any) => {
    return (
        <>
            <SearchBar />
            {props.children}
        </>
    )
}

export default BaseLayout