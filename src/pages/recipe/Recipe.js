import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {useTheme} from '../../hooks/useTheme'
// import { useFetch } from '../../hooks/useFetch'

import { projectFirestore } from '../../firebase/config'

import './Recipe.css'

export default function Recipe() {
  // const url = 'http://localhost:3000/recipes/' + id 
  // const {error, isPending, data: recipe} = useFetch(url)
  
  const {id} = useParams()
  const {mode} = useTheme()

  const [recipe, setRecipe] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  

  useEffect(() => {
    setIsPending(true)

    projectFirestore.collection('recipes').doc(id).get().then((doc) =>{
      // console.log(doc)
      if (doc.exists){
        setIsPending(false)
        setRecipe(doc.data())
      }else{
        setIsPending(false)
        setError('Could not find recipe')
      }
      })
      .catch(err => setError(err.message))
      // setIsPending(false)
  }, [id])

  // const handleClick = () => {
  //   projectFirestore.collection('recipes').doc(id).update({
  //     title: 'Something completely different'
  //   })
  // }


  return (
    <div className={`recipe ${mode}`}>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {recipe && (
        <>
          <h2 className='page-title'>{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
          <p className="method">{recipe.method}</p>
          {/* <button onClick={handleClick}>Update me</button> */}
        </>
      )}    
      </div>
  )
}
