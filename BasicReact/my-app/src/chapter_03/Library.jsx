import React from 'react';
import Book from './Book';

function Library(props) {
    return (
        <div>
            <Book name="First Book" numOfPage={100}/>
            <Book name="Second Book " numOfPage={200}/>
            <Book name="Third Book" numOfPage={300}/>
        </div>
    )
}
export default Library;