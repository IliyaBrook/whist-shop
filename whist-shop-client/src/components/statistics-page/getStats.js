//

import React, {useEffect, useState} from 'react';

const GetStats = () => {
    const [allbuyingGoods, setAllbuyingGoods] = useState()
    useEffect(async () => {
        await fetch('/',{})
    }, [])
    return (
        <div>

        </div>
    );
};

export default GetStats;