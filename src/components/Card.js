import React, { useState, useEffect } from 'react';
import emptyThumbnail from './../res/empty-thumbnail.png';
import './Card.style.css';

const Card = ({ bookData }) => {
    const coverLink = "https://covers.openlibrary.org/b/id/" + bookData.cover_i + "-L.jpg"
    return (
        <div className='container'>
            <div className='flexContainer'>
                <div className='bookCover'>
                    {
                        bookData.cover_i ? <img src={coverLink} /> : (<img src={emptyThumbnail}/>)
                    }
                    
                </div>
                <div className='bookInfo'>
                    <p className='bookTitle'>{bookData.title}</p>
                    <p className='bookAuthor'>by {bookData.author_name}</p>
                    <p className='bookPublishDate'>Published in {bookData.first_publish_year}</p>
                </div>
            </div>


        </div>
    )
}

export default Card;