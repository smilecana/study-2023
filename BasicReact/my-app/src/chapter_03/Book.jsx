import React from 'react';

/*JSX
function Book(props) {
    return (
        <div>
            <h1>{`This book name is ${props.name}`}</h1>
            <h2>{`The total number of pages in this book is ${props.numOfPage}`}</h2>
        </div>
    )
}
*/
//CreateElement 사용 - 가독성 떨어짐.
function Book(props) {
    return React.createElement(
        'div',
        null,
        [
            React.createElement(
                'h1',
                null,
                `This book name is ${props.name}`
            ),
            React.createElement(
                'h2',
                null,
                `The total number of pages in this book is ${props.numOfPage}`
            ),
        ]
    )
}
export default Book;