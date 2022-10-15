import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input)

    }
    return (
        <Wraper>
            <FormStyle onSubmit={submitHandler}>
                <div>
                    <FaSearch></FaSearch>
                    <input onChange={(e) => setInput(e.target.value)} type="text" placeholder="Search author..." value={input} /></div>
            </FormStyle></Wraper>
    )
}


const Wraper = styled.div`
    margin: 0rem 4rem;
    display: flex;
    align-items: center;`;


const FormStyle = styled.form`
    
    position: relative;
    margin: 0rem 5rem;
    width: 100%;

    input{
        border: none;

        background: linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);
        font-size: 1 rem;
        color: #4f4f4f;
        width: 100%;
        padding: 1rem;
        border: none;
        border-radius: 1rem;
        outline: none;
    }
    svg {
        position: absolute;
        z-index: 2;
        top: 50%;
        right: 5%;
        transform: translate(100%, -50%);
        color: white;
    }
    `
export default Search
