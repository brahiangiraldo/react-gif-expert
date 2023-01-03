import { useEffect, useState } from 'react';
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    
    const [images, setImagenes] = useState([]);
    const [isLoading, setIsloading] = useState([ true ]);
    
    const getImages = async () => {
        const newImagenes = await getGifs ( category );
        setImagenes(newImagenes);
        setIsloading( false );

    }


    useEffect(() => {
        getImages ();      
     },[] )



    return {
        images,
        isLoading
    }
}
