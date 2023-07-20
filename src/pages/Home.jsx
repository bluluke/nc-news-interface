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
    const navigate = useNavigate();
    const currentLocation = useLocation();
  

    useEffect(() => {
        getTopics().then((topicsData) => {
            setTopics(topicsData);
            setIsLoading(false);
        });
    }, []);

    
const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/?topic=${currentTopic}`);
}

const handleTopicChange = (e) => {
    setCurrentTopic(e.target.value);
};

if(isLoading) return <p>Loading...</p>;
    return (
        <div id="home">  
            <Header />
            <form id="topicInput" onSubmit={handleSubmit}>
                <input
                    type='radio'
                    id='all'
                    name="topic"
                    value='all'
                    onChange={handleTopicChange}
                />
                <label htmlFor='all'>all</label>
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
            <button>Search</button>
            </form>
            <ArticleList currentTopic={currentTopic} currentLocation={currentLocation}/>

        </div>
    )
}

