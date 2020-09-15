import React from 'react';
import './index.css';
import { observer } from 'mobx-react';

import { appStore } from '../../../../store/app';

import { SortTab } from '../SortTab/index';

export const ListWorkTypes = observer ((props: any) => {

    const { listWorkTypesId, tabsList } = appStore;
    console.log(tabsList)
    //const list = tabsList.find(list => list.id === listWorkTypesId);
    //const sortTabs = tabList.map(tab => <SortTab key={tab.id} tab={tab} />)

    return(
        <div className="list-work-types">
            
        </div>
    )
})