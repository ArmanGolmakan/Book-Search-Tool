import React, { useState, useEffect } from 'react';
import './Main.style.css';
import Card from './Card.js';

const Main = () => {

    const [data, setData] = useState({ items: [] });
    const [bookCards, setBookCards] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [order, setOrder] = useState('');

    useEffect(() => {
        let content = [];
        if (data.docs) {
            let sortedBooks = data.docs;
            if (order == 'alphabetical') {
                sortedBooks.sort((a, b) => (a.title > b.title) ? 1 : -1);
            }
            else if (order == 'publishdate') {
                console.log("XXXXXXXXXXXX");
                sortedBooks.sort((a, b) => (a.first_publish_year > b.first_publish_year) ? 1 : -1);
            }
            sortedBooks.map((item, index) => {
                content.push(
                    <li key='index'>
                        <Card bookData={item}></Card>
                    </li>
                );
            });
            setBookCards(content);
        }
    }, [data, order]);

    const handleSubmit = async (event) => {
        setLoading(true);
        event.preventDefault(); //prevents refreshing webpage
        const myData = await fetch("https://openlibrary.org/search.json?q=" + searchText);
        const myDataJson = await myData.json();
        setData(myDataJson);
        setLoading(false);
    };

    const BooksSection = () => {
        return (
            <div>
                <ContentHead />
                {bookCards}
            </div>
        )
    }

    const sortByTitle = () => {
        setOrder('alphabetical');
    }

    const sortByPublishDate = () => {
        setOrder('publishdate');
    }

    const ContentHead = () => {
        return (
            <div className='contentHead'>
                <span>{data.num_found} results </span>
                <span>Sort by: <button onClick={sortByTitle}>alphabetical</button> |
                    <button onClick={sortByPublishDate}>publish date</button></span>
            </div>
        )
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