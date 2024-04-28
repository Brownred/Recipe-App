import { useEffect, useState } from "react";
import { RecipeSummary } from '../types';
import { getRecipeSummary } from "../api";

interface Props {
    id: string;
    onClose: ()=> void;
}

const RecipeModal = ({id, onClose}: Props) => {
    // whenever our modal opens we want to call our summary end points and get the summary of the recipe
    // create a state to hold the recipe data

    const [recipeSummary, setRecipeSummary] = useState<RecipeSummary>(); // its good practise to specify a type for the state hook. we to create a type for the response from the summary endpoint

    useEffect(() => {
        const fetchRecipeSummary = async () => {
            try {
                const summaryRecipe = await getRecipeSummary(id);
                setRecipeSummary(summaryRecipe);
            } catch (error) {
                console.error(error);
            }
        };
        fetchRecipeSummary();
    }, [id]);

    if (!recipeSummary) {
        return <>
            <h1>ID: {id}</h1>
        </>;
    }

    return (
        <>
            <div className="overlay"></div>
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>{recipeSummary.title}</h2>
                        <span className="close-btn" onClick={onClose}>&times;</span>
                    </div>
                    <p dangerouslySetInnerHTML={{__html:recipeSummary.summary}}></p>
                </div>
            </div>
        </>
    );
}

export default RecipeModal;