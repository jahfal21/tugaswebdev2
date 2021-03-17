import React from 'react'
import { Link } from 'react-router-dom'
import saya from '../images/jahfal.png'
function About() {
    return (
        <div>
            <h1><u>About Us</u></h1>
            <img src={saya} width={200} height={120} alt="Jahfal" />
            <h4>Nama = Jahfal Mudrik Ramadhan</h4>
            <h4>NIM = 1302204034</h4>
            <a href="https://www.instagram.com/jahfal.m/">Instagram</a>
        </div>
    )
}
export default About