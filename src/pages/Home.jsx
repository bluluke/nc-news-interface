import { ArticleList } from "../components/ArticleList"
import { Header } from "../components/Header";
export const Home = () => {
    return (
        <div id="home">  
            <Header />
            <h2>All topics</h2>
            <ArticleList />

        </div>
    )
}