import React from 'react'
import { IoMdSearch } from "react-icons/io"
import '../App.css';

const Rightbar = () => {
    return (
        <div className='oioioi'>
            <input type='search' className='search' placeholder='Pesquise por produtos ou marcas...' />

            <div>
                <button className='botaozinho' type='submit'>
                    <IoMdSearch className='icone'></IoMdSearch>
                </button>
            </div>
        </div>
    )
}

export default Rightbar