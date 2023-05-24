import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import React from 'react';
import logo from '~images/logo.png';
import './form.css'

function Form() {
    return (
        <div className="header">
            <div className="content">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <div className="text-container">
                    <h1 className="title">Bom te ver por aqui! :)</h1>
                    <br />
                    <p className="subtitle">O primeiro passo é preencher esse formulário.</p>
                </div>
            </div>
        </div>
    )
}

export default Form;