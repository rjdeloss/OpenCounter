import React, { useEffect } from 'react';

import CuisineIndexItem from './cuisine_index_item';

const CuisineIndex = (props) => {
    const backgrounds = [
        "cuisine-american",
        "cuisine-chinese",
        "cuisine-french",
        "cuisine-indian",
        "cuisine-italian",
        "cuisine-japanese",
        "cuisine-korean",
        "cuisine-latin",
        "cuisine-mexican",
        "cuisine-thai",
        "cuisine-vietnamese"
    ]
    
    const cuisines = props.cuisines.map((cuisine, i) => (
        <CuisineIndexItem key={cuisine.id} cuisine={cuisine} searchRestaurants={props.searchRestaurants} backgrounds={backgrounds[i]}/>
    ));

    useEffect( () => { props.fetchCuisines(); }, []);

    return (
        <>
            {cuisines}
        </>
    )
}

export default CuisineIndex;