import React from 'react';
import { observer } from 'mobx-react';
import './index.css';
import { appStore } from '../../../../store/app';

export const SortTab = observer((props: any) => {

    const { toggleTabsList } = appStore;
    const { id, name } = props.tab
    
    /*const onToggleTabsList = () => {
        toggleTabsList(id)
    }*/

    return(
        <div 
            className="sort-tab"
            onClick={ () => { toggleTabsList(id) } }
        >
            <p className="work-type-name-txt">{ name }</p>
        </div>
    )
})