import React from 'react'
import Header from '../components/Header'
import HeaderOptions from '../components/HeaderOptions'
import Response from '../Response';
import SearchResults from '../components/SearchResults';

function Search({ results }) {
    return (
        <div>
            <Header />
            <HeaderOptions />
            <SearchResults results={results} />
        </div>

    )
}

export default Search;

export async function getServerSideProps(context) {
    const useDummyData = false;
    const startIndex = context.query.start || '0';

    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`)
        .then(response => response.json());

    return {
        props: {
            results: data,
        }
    }
}