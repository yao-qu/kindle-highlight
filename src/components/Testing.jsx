import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

function Testing() {
    const [highlights, setHighlights] = useState([]);
    useEffect(() => {
        getHighlights();
    }, [])

    const getHighlights = async () => {
        const check = localStorage.getItem('highlights');
        if (check) {
            setHighlights(JSON.parse(check));
        }
        else {
            const api = await fetch('https://yxruy9.deta.dev/highlight', {
                mode: "cors",
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await api.json();
            localStorage.setItem('highlights', JSON.stringify(data.Data));
            setHighlights(data.Data);
        }
    }

    return (
        <Wraper>
            {highlights.map((quote) => {
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
    margin-left: 4rem;
    margin-right: 3rem;`



const Card = styled.div`
    margin-left: 8rem;
    margin-right: 8rem;
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

export default Testing