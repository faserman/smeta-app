import React from 'react';
import './index.css';
import { observer } from 'mobx-react';
import { ListWorkTypes } from '../Body/CreateNewEstimate/ListWorkTypes/index';

export const Body = observer(() => {

    return(
        <div>
            <ListWorkTypes />
        </div>
    )
})