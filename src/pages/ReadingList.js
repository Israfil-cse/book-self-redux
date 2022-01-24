import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout/PageLayout';
import Book from '../components/Book/Book'

const ReadingList = () => {
    const readList = useSelector(state => state.books.readingList);

    return (
        <PageLayout>
            {
                readList?.length === 0 && (
                    <p>Looks like you've finished all your books! Check them out in your <Link to="finish">finished books</Link> or <Link to="/">discover more</Link>.</p>

                )
            }

            {
                readList.map((book, icon )=> (
                    <Book book={book} icon={icon} key={book.id}></Book>
                ))
            }


        </PageLayout>
    );
};

export default ReadingList;