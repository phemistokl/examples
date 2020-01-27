import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import {useStore} from 'effector-react'
import {formInput} from "./store";
import {changeField} from "./event";
import {useFetch} from "./useFetch";


const App = () => {

const router = useRouter();

// console.log('render', );

useFetch(router.query.search);

return (
    <div className="App">
        <AppHeader changeField={changeField} />
        <AppMenu>
            <Link href="/cart">
                <a>Cart</a>
            </Link>
            <Link href="/orders">
                <a>Orders</a>
            </Link>
        </AppMenu>
        <p>Hello Next.js</p>
    </div>
  );
};

const handleSearch = (router, text) => {
  router.push({pathname: '/', query: {search: text}})
};

  const AppHeader = () => {
    
  const router = useRouter();

  const text = useStore(formInput);

  return (
    <div className="App-header">
      <input 
        type="text" 
        value={text}
        onChange={e => changeField(e.target.value)}
      /><button onClick={() => handleSearch(router, text)}>Search</button>
      <h2>Welcome to the React MobX Book shop!</h2>
    </div>
  );
};

  const AppMenu = ({children}) => (
    <ul className="App-menu">
      {children}
    </ul>
  )

  formInput
  .on(changeField, (state, payload) => payload);
  
  export default App;