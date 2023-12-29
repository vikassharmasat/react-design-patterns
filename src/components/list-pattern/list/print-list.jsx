import { LargeAuthorListItem } from "../authers/large-list-item";
import { SmallAuthorListItem } from "../authers/small-list-item";
import { RegularList } from "./regular-list";
import { authors } from "../../data/authors";
import { books } from "../../data/books";
import { LargeBookListItem } from "../books/large-list-item";
import { SmallBooksListItem } from "../books/small-list-item";
import { Modal } from "../../modal-pattern/modal";

export default () => {
    return (
        <>
            Author
            <RegularList items={ authors } sourceName={ "author" } ItemComponent={ LargeAuthorListItem }/>
            <RegularList items={ authors } sourceName={ "author" } ItemComponent={ SmallAuthorListItem }/>

            Books
            <RegularList items={ books } sourceName={ "books" } ItemComponent={ LargeBookListItem }/>
            <RegularList items={ books } sourceName={ "books" } ItemComponent={ SmallBooksListItem }/>
            <Modal>
                <LargeBookListItem books={ books[0] }/>
            </Modal>
        </>
    )
}
