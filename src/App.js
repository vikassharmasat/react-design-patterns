import './App.css';
import MainSplitScreen from "./components/split-pattern/main-split-screen";
import PrintList from "./components/list-pattern/list/print-list";
import { CurrentUserLoader } from "./components/api-pattern/current-user-loader";
import { UserInfo } from "./components/api-pattern/user-info";
import { PostInfo } from "./components/api-pattern/post-info";
import { UnControlledComponents } from "./components/un-controlled-components";
import { ControlledComponents } from "./components/controlled-components";
import { PrintUnControlledFlowList } from "./components/un-controlled-flow/print-list";
import RecursiveComponent from './components/recursive-component/recursive';
// import { GreenButton, RedButton } from './components/recursive-component/composition';
import { RedButton, GreenButton } from './components/partial-components/partial';
import { Input } from "./advanced-hooks/forwarding-ref/input";
import { PrintInput } from "./advanced-hooks/forwarding-ref/print-input";
import UseLayoutEffect from './advanced-hooks/use-layout-effect/use-layout-effect';
import UseId from './advanced-hooks/use-id/use-id';
import UseCallBackAsRef from './advanced-hooks/use-callback-as-ref/use-callback-as-ref';

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
            {/*<RedButton text="this is red button" />*/}
            {/*<GreenButton text="this is green button" />*/}
            {/* <RecursiveComponent data={myNestedObject} /> */}
            {/*<UnControlledComponents/>*/}
            {/*<ControlledComponents/>*/}
            {/*<CurrentUserLoader  url={`${baseUrl}/users/2`} renderItem={(user,index) => <UserInfo key={index} user={user}/> }/>*/}
            {/*<CurrentUserLoader  url={`${baseUrl}/posts/2`} renderItem={(post,index) => <PostInfo key={index} post={post}/> }/>*/}
            {/*<PrintList/>*/}
            {/*<MainSplitScreen/>*/}
            {/* <PrintUnControlledFlowList/> */}
            {/* <PrintInput/> */}
            {/* <UseLayoutEffect /> */}
            {/*      <UseId />
            <p>this is custom text</p>
            <UseId /> */}
            <UseCallBackAsRef />
        </>
    );
}

export default App;
