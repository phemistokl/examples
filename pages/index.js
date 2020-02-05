import React, { useRef } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import {useStore} from 'effector-react'
import { AppHeader } from "./../features/header";
// import { fetchFeedByTag } from "./../api/header";
import {formInput} from "./store";
import {changeField} from "./event";
import {useFetch} from "./useFetch";
import {Hello} from "./hello";
import {Content} from "./content";
import {FeedByTag} from "./feed-by-tag";
import { fetchFeedByTag } from './modal.events';


const App = () => {

const router = useRouter();

const inputRef = useRef();

useFetch(router.query.search);

router.query.search && fetchFeedByTag(router.query.search);
console.log('xramon');

// fetchFeedByTag();

return (
    <div className="App">
        <AppHeader changeField={changeField} inputRef={inputRef} />
        <Hello />
        <AppMenu>
            <Link href="/cart">
                <a>Cart</a>
            </Link>
            <Link href="/orders">
                <a>Orders</a>
            </Link>
        </AppMenu>
        <Content />
        <FeedByTag />
    </div>
  );
};

// const handleSearch = (router, text) => {
//   router.push({pathname: '/', query: {search: text}})
// };

//   const AppHeader = ({ inputRef }) => {
    
//   const router = useRouter();

//   const text = useStore(formInput);

//   return (
//     <div className="App-header">
//       <input 
//         ref={inputRef}
//         type="text" 
//         value={text}
//         onChange={e => changeField(e.target.value)}
//       /><button onClick={() => handleSearch(router, text)}>Search</button>
//       <h2>Welcome to the React MobX Book shop!</h2>
//     </div>
//   );
// };

  const AppMenu = ({children}) => (
    <ul className="App-menu">
      {children}
    </ul>
  )

  formInput
  .on(changeField, (state, payload) => payload);
  
  export default App;