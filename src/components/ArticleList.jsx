import { ArticleCard } from "./ArticleCard"
export const ArticleList = () => {

    return (
        <div id="articleListContainer"> 
            <ul id="articleList">
                <li>
                    <ArticleCard />
                </li>
            </ul>
            <button>Show more</button>
        </div>
    )
}