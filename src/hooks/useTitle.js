import { useEffect } from 'react';

const useTitle = title =>{
    useEffect(() =>{
        document.title  = `${title} - La Cuisine`;
    },[title])
}

export default useTitle;