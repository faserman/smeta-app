import React from 'react';
import './index.css';
import { observer } from 'mobx-react';
import { appStore } from '../../store/app';

export const Footer = observer(() => {

    const { createNewEstimateFooter } = appStore;
    let footerStyle = "footer";
    if (createNewEstimateFooter) {
        footerStyle = "create-new-estimate-footer"
    };

    return(
        <div className='footer'>
            <div className='new-estimate-img'>

            </div>
            <div className='main-description'>
                <p className='adress'></p>
                <p className='date'></p>
                <p className='comments'></p>
            </div>
            <div className='summ'>
                
            </div>
        </div>
    )
})