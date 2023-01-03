


import { useState } from 'react';
import { AddCategory, GrifGrid } from './components';

export const GifExpertApp = () => {

const [categories, setCategories ] = useState(['one Punch']);

const onAddCategory = (newCategory) => {

  if (categories.includes (newCategory)) return; 

   //categories.push( newCategory );
   setCategories([ newCategory,...categories]);
   //setCategories( cat => [...cat, 'Valorant']);

}
//console.log( categories );

  return (
    
    <>
    
    {/* titulo */}

    <h1>GifExpertApp</h1>

    {/* Input */}
    
    {<AddCategory 
    //setCategories={ setCategories }
     onNewCategory={ ( value ) => onAddCategory (value)}

    />}

    {/* Listado de Gif*/}
        
    
        
        { 
        
        categories.map( (category) =>  (
          <GrifGrid  
          key={ category } 
          category={ category }/>
        ))
        
        }

       
    
    </>
  )
}
