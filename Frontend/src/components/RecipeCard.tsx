/**
 * Renders a recipe card component.
 *
 * @param {Props} props - The component props.
 * @param {Recipe} props.recipe - The recipe object to display.
 * @param {Function} props.onClick - The function to call when the card is clicked.
 * @returns {JSX.Element} The recipe card component.
 */

import {Recipe} from "../types"

interface Props {
    recipe: Recipe
    onClick: () => void; // the on click prop that is passed to the recipe card has to accept a recipe as an argument and return nothing
}

const RecipeCard = ({recipe, onClick}: Props) => {
    return (
        <div className="recipe-card" key={recipe.id} onClick={onClick}>
            <img src={recipe.image} alt=""/>
            <div className="recipe-card-title">
                <h3>{recipe.title}</h3>
                <h4>{recipe.id}</h4>
            </div>
        </div>
    )
}

export default RecipeCard