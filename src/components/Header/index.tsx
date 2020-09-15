import React from 'react';
import './index.css';
import { observer } from 'mobx-react';
import { appStore } from '../../store/app';

import { Logo } from "./Logo/index";

export const Header = observer(() => {

    return(
        <div className="header">
            <Logo />
        </div>
    )
})