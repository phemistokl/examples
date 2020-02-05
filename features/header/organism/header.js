import * as React from 'react';
import { useRouter } from 'next/router';
import {useStore} from 'effector-react';
import {
  $formInput,
  changeField
} from "../model";

const handleSearch = (router, text) => {
  router.push({pathname: '/', query: {search: text}})
};

export const AppHeader = ({ inputRef }) => {
    
    const router = useRouter();
  
    const text = useStore($formInput);
  
    return (
      <div className="App-header">
        <input 
          ref={inputRef}
          type="text" 
          value={text}
          onChange={e => changeField(e.target.value)}
        /><button onClick={() => handleSearch(router, text)}>Search</button>
        <h2>Welcome to the React MobX Book shop!</h2>
      </div>
    );
  };