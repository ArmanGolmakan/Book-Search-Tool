import React, { useState } from 'react';
import './Main.style.css';
import Card from './Card.js';

const Main = () => {

    const [data, setData] = useState({ items: [] });
    const [searchText, setSearchText] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        setLoading(true);
        event.preventDefault(); //prevents refreshing webpage
        const myData = await fetch("http://openlibrary.org/search.json?q=" + searchText);
        const myDataJson = await myData.json();
        setData(myDataJson);
        setLoading(false);
        console.log(data);

    };

    const BooksSection = () => {
        return (
            <div>
                <ContentHead />
                <ContentBody />
            </div>
        )
    }

    const ContentHead = () => {
        return (
            <div className='contentHead'>
                <span>{data.num_found} hits</span>
            </div>
        )
    }

    const ContentBody = () => {
        let content = [];
        data.docs.map((item, index) => {
            content.push(
                <li key='index'>
                    <Card bookData={item}></Card>
                </li>
            );
        })
        return content;
    }

    return (
        <div className='parentContainer'>
            <h1>Book Search Tool</h1>
            <div className='search-field-container'>
                <form onSubmit={handleSubmit}>
                    <input type='search' placeholder='Search...' onChange={e => setSearchText(e.target.value)} value={searchText} />
                    <button type='submit'>Search</button>
                </form>
            </div>

            {
                loading ? (
                    <div>
                        <h1>
                            Loading...
                        </h1>
                    </div>
                ) : (<></>)
            }
            {
                data.docs ? (
                    <div className='dataContainer'>
                        <BooksSection />
                    </div>
                ) : (<></>)
            }
        </div>
    );
}

export default Main;