import React, { useEffect } from 'react';
import Book from '../components/Book/Book';
import PageLayout from '../components/PageLayout/PageLayout';
import { useSelector , useDispatch} from 'react-redux';
import { loadBooks } from '../redux/actions/bookAction';

const Discover = () => {
    const discoverData = useSelector((state) => state.books.discover)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadBooks())
    },[]);

    return (
        <PageLayout>
            {
                discoverData?.map((book) => (<Book key={book.id} book={book} />))
            }
        </PageLayout>
    );
};

export default Discover;