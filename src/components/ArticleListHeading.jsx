import { getTopicToFetch } from "../utils/api";
import { useState, useEffect } from "react";
import { capitaliseFirstLetter } from "../utils/api";

export const ArticleListHeading = ({ currentTopic, currentLocation }) => {
    const [currentArtListHeading, setCurrentArtListHeading] = useState(capitaliseFirstLetter(currentTopic));

    useEffect(() => {
        const articleListHeading = getTopicToFetch(currentTopic, currentLocation);
        setCurrentArtListHeading(capitaliseFirstLetter(articleListHeading));
    }, [currentLocation]);
    

    return (
        <h2 id="headingArticleList">{currentArtListHeading} Articles </h2>
    )
}