import React from "react";

import '../../sass/loader.scss';

export const Loader = (text) =>  (
        <div className="loader">
            <div className="loader__figure"/>
            {text ? <p className="loader__label">{text}</p> : null}
        </div>
    )