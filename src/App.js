import './App.css';
import { PrintUnControlledFlowList } from "./components/un-controlled-flow/print-list";
// import { GreenButton, RedButton } from './components/recursive-component/composition';

const myNestedObject = {

    key1: "value1",
    key2: {
        innerKey1: "innerValue1",
        innerKey2: {
            innerInnerKey1: 'innerInnerValue1',
            innerInnerKey2: 'innerInnerValue2',
        }
    },
    key3: "value3",

}

function App() {
    const baseUrl = 'https://jsonplaceholder.typicode.com/';
    const url2 = 'https://jsonplaceholder.typicode.com/';
    return (
        <>
            {/*<RedButton text="this is red button" />*/ }
            {/*<GreenButton text="this is green button" />*/ }
            {/* <RecursiveComponent data={myNestedObject} /> */ }
            {/*<UnControlledComponents/>*/ }
            {/*<ControlledComponents/>*/ }
            {/*<CurrentUserLoader  url={`${baseUrl}/users/2`} renderItem={(user,index) => <UserInfo key={index} user={user}/> }/>*/ }
            {/*<CurrentUserLoader  url={`${baseUrl}/posts/2`} renderItem={(post,index) => <PostInfo key={index} post={post}/> }/>*/ }
            {/*<PrintList/>*/ }
            {/*<MainSplitScreen/>*/ }
            <PrintUnControlledFlowList/>
            {/* <PrintInput/> */ }
            {/* <UseLayoutEffect /> */ }
            {/*      <UseId />
            <p>this is custom text</p>
            <UseId /> */ }
            {/*<UseCallBackAsRef />*/ }
        </>
    );
}

export default App;
