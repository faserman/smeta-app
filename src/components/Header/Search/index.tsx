import React from 'react';
import './index.css';
import { observer } from 'mobx-react';
//import { appStore } from '../../store/app';

export const Search = observer(() => {

    return(
        <div className='search'>
            <input className="search-input">
                
            </input>
        </div>
    )
})