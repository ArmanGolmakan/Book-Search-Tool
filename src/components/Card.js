import React from 'react';
import emptyThumbnail from './../res/empty-thumbnail.png';
import './Card.style.css';

const Card = ({ bookData }) => {
    const coverLink = "https://covers.openlibrary.org/b/id/" + bookData.cover_i + "-L.jpg"
    const storeLink = "https://openlibrary.org" + bookData.key;
    const altText = 'Cover of ' + bookData.title;

    return (
        <div className='container'>
            <div className='flexContainer'>
                <div className='bookCover'>
                    {
                        bookData.cover_i ? <a href={storeLink} target="_blank"><img src={coverLink}
                            title={altText} alt={altText} /></a> :
                            <a href={storeLink} target="_blank"><img src={emptyThumbnail} title={altText} alt={altText} /></a>
                    }
                </div>
                <div className='bookInfo'>
                    <p className='bookTitle'><a href={storeLink} target="_blank">{bookData.title}</a></p>
                    <p className='bookAuthor'>by {bookData.author_name}</p>
                    <p className='bookPublishDate'>Published in {bookData.first_publish_year}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;