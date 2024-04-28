import {Recipe} from "../types"

interface Props {
    recipe: Recipe
}


const RecipeCard = ({recipe}: Props) => {
    return (
        <div className="recipe-card" key={recipe.id}>
            <img src={recipe.image} alt=""/>
            <div className="recipe-card-title">
                <h3>{recipe.title}</h3>
                <h4>{recipe.id}</h4>
            </div>
        </div>
    )
}

export default RecipeCard