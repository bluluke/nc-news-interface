import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArticleList } from "../components/ArticleList"
import { Header } from "../components/Header";
import { getTopics } from "../utils/api";
import { ArticleListHeading } from '../components/ArticleListHeading';

export const Home = () => {

    const [topics, setTopics] = useState();
    const [currentTopic, setCurrentTopic] = useState('all')
    const [isLoading, setIsLoading] = useState(true);
    const [sortByOrder, setSortByOrder ] = useState(null)
;    const navigate = useNavigate();
    const currentLocation = useLocation();
  

    useEffect(() => {
        getTopics().then((topicsData) => {
            setTopics(topicsData);
            setIsLoading(false);
        });
    }, []);

    
const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/?topic=${currentTopic}&&${sortByOrder}`);
}

const handleTopicChange = (e) => {
    setCurrentTopic(e.target.value);
};
const handleSortOrderChange = (e) => {
    setSortByOrder(e.target.value)
}



if(isLoading) return <p>Loading...</p>;
    return (
        <div id="home">  
            <Header />
            <form id="topicInput" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>sort articles:</legend>
                    <div>
                        <input
                        type="radio"
                        id="votes_desc"
                        name="sort_by_order"
                        value="sort_by=votes&&order=desc"
                        onChange={handleSortOrderChange}
                        />   
                        <label htmlFor="votes_desc">most votes to fewest votes</label>
                    </div>
                    <div>
                        <input
                        type="radio"
                        id="votes_asc"
                        name="sort_by_order"
                        value="sort_by=votes&&order=asc"
                        onChange={handleSortOrderChange}
                        />
                        <label htmlFor="votes_asc">fewest votes to most votes</label>
                    </div>
                    <div>
                        <input
                        type="radio"
                        id="comments_desc"
                        name="sort_by_order"
                        value="sort_by=comment_count&&order=desc"
                        onChange={handleSortOrderChange}
                        />   
                        <label htmlFor="comments_desc">most comments to fewest comments</label>
                    </div>
                    <div>
                        <input
                        type="radio"
                        id="comments_asc"
                        name="sort_by_order"
                        value="sort_by=comment_count&&order=asc"
                        onChange={handleSortOrderChange}
                        />   
                        <label htmlFor="comments_asc">fewest comments to most comments</label>
                    </div>
                    <div>
                        <input
                        type="radio"
                        id="created_at_desc"
                        name="sort_by_order"
                        value="sort_by=created_at&&order=desc"
                        onChange={handleSortOrderChange}
                        />   
                        <label htmlFor="created_at_desc">most recent to least recent</label>
                    </div>
                    <div>
                        <input
                        type="radio"
                        id="created_at_asc"
                        name="sort_by_order"
                        value="sort_by=created_at&&order=asc"
                        onChange={handleSortOrderChange}
                        />   
                        <label htmlFor="created_at_asc">least recent to most recent</label>
                    </div>
                </fieldset>
                <fieldset>
                <legend>article topics:</legend>    
                <div>
                    <input
                        type='radio'
                        id='all'
                        name="topic"
                        value='all'
                        onChange={handleTopicChange}
                    />
                    <label htmlFor='all'>all</label>
                </div>
                {topics.map((topic) => {
                    return (
                    <div key={topic}>
                        <input type="radio" 
                        id={topic} 
                        name="topic" 
                        value={topic}
                        onChange={handleTopicChange}
                        />
                        <label htmlFor={topic}>{topic}</label>
                                
                    </div>
                    )

                })}
                </fieldset>
            <button type="submit">Search</button>
            </form>
            <ArticleListHeading currentTopic={currentTopic} currentLocation={currentLocation}/>
            <ArticleList currentTopic={currentTopic} currentLocation={currentLocation}/>
        </div>
    )
}

