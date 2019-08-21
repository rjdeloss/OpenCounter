import React, { useEffect } from 'react';

import CuisineIndexItem from './cuisine_index_item';

const CuisineIndex = (props) => {
    debugger
    const cuisines = props.cuisines.map(cuisine => (
        <CuisineIndexItem key={cuisine.id} cuisine={cuisine} searchRestaurants={props.searchRestaurants} />
    ));

    useEffect( () => { props.fetchCuisines(); }, []);

    return (
        <>
            {cuisines}
        </>
    )
}

export default CuisineIndex;