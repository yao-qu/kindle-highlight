import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { device } from './Devices';
// import { Link } from 'react-router-dom';


function Searched() {

    const [highlights, setHighlights] = useState([]);
    let param = useParams();
    const getSearched = async (name) => {
        const data = await fetch(`https://yxruy9.deta.dev/author/${name}`);
        const highlights = await data.json();
        setHighlights(highlights.Data);

    };

    useEffect(() => {

        getSearched(param.search);
    }, [param.search]);



    return (
        <Wraper>
            {highlights
                .slice(0).reverse().map((quote) => {
                return (
                    <div key={quote.id}>
                        <Card>
                            <p className='author'>{quote.title} | {quote.author}</p>
                            <Quote><blockquote>{quote.highlight}</blockquote></Quote>
                            <p className='date'>{quote.added}</p>
                        </Card>

                    </div>
                );
            })}
        </Wraper>
    );
}

const Wraper = styled.div`
    margin-left: 1rem;
    margin-right: 1rem;
    align-items: center;
    display: box;
    position: relative;
    justify-content: center;
    @media ${device.tablet} { 
        ${'' /* max-width: 800px; */}
        margin-left: 10rem;
        align-items: center;
        margin-right: 10rem;
        justify-content: center;
        
  }
    `



const Card = styled.div`
    background-color: #FAF7F0;
    border-radius: 25px;
    margin-bottom: 3rem;
    font-family: 'Roboto', sans-serif;
    p{
        bottom: 0%;
        color: black;
        width: 100%;
        text-align: center;
        font-size: 1rem;
    }
    p.author{
        line-height: 2.5rem; 
        text-align: center;
        text-decoration: underline #e3ffe7 5px;
        letter-spacing: 5px;
        
    }
    p.date {
        background: linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);
        letter-spacing: 1px;
        font-size: 0.9rem;
    }
`;


const Quote = styled.div`
blockquote {
  font-size: 1em;
  line-height: 1.5em;
  
}
blockquote:before {
  content: open-quote;
}
blockquote:after {
  content: close-quote;
}
blockquote:after {
  display: inline-block;
  vertical-align: bottom;
  color: #d9e7ff;
  font-size: 4em;
  top: .2em;
  position: relative;
}
blockquote:before {
  display: inline-block;
  vertical-align: bottom;
  color: #e3ffe7;
  font-size: 4em;
  top: .2em;
  position: relative;
}
`

export default Searched;
