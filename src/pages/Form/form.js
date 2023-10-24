import { useState } from 'react';
import React from 'react';
import dog1 from "../../images/form/dog1.png";
import dog2 from "../../images/form/dog2.png";
import dog3 from "../../images/form/dog3.png";
import cat1 from "../../images/form/cat1.png";
import cat2 from "../../images/form/cat2.png";
import cat3 from "../../images/form/cat3.png";
import { TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { Link } from 'react-router-dom';
import './form.css';
import {showMessageError, showMessageWarn} from '../Utils/utils.js';

function Form() {
    const [avatar, setAvatar] = useState('');
    const [apelido, setApelido] = useState('');

    const handleAvatarChange = (event) => {
        const newAvatar = event.target.value;
        setAvatar(newAvatar);
       
    };

    let showMessageErrorTimeout; 
    let primeiraChamada = true; 

    const capitalizeFirstLetter = (str, limit = 15) => {
        const words = str.split(' ');

        const firstTwoWords = words.slice(0, 2).map((word) => {
            if (word.length > 0) {
            return word.charAt(0).toUpperCase() + word.slice(1);
            }
            return word;
        });

        const capitalizedString = firstTwoWords.join(' ');

        if (capitalizedString.length > limit) {
            if (primeiraChamada) {
                showMessageWarn(`Atenção: o limite é de ${limit} caracteres.`);
            primeiraChamada = false; 
            } else if (!showMessageErrorTimeout) {
            showMessageErrorTimeout = setTimeout(() => {
                showMessageWarn(`Atenção: o limite é de ${limit} caracteres.`);
                showMessageErrorTimeout = null; 
            }, 3500); 
            }
            return capitalizedString.slice(0, limit);
        }

        return capitalizedString;
    };   
      
    const handleApelidoChange = (event) => {
        const newApelido = capitalizeFirstLetter(event.target.value);
        setApelido(newApelido);
    };

    const [idade, setIdade] = useState('');

    const handleInputChange = (event) => {
        let inputValue = event.target.value;
    
        inputValue = inputValue.replace(/[^0-9]/g, '');
    
        if (event.key === 'Backspace' && inputValue !== '') {
          
          inputValue = inputValue.slice(0, -1);
        }
        
        inputValue = inputValue.slice(0, 2);

        setIdade(inputValue);
      };

    const [genero, setGenero] = useState('');

    const handleGeneroChange = (event) => {
        setGenero(event.target.value);
    };

    const isFormValid = apelido && idade && genero && avatar;

    const isAgeValid = (idade >= 15 && idade <= 18) || idade === '';

    const errorMessages = [
        'Por favor, preencha todos os campos.',
        'O usuário deve ter de 15 a 18 anos.'
      ];
      
    const [botaoClicado] = useState(false);


    return (
        <div>
            <div className="header">
                <h2 className='titulo'>FORMULÁRIO</h2>
                <div className="content">
                    <Link to="/" className="back_button"></Link>
                    <div className="img_logo"></div>
                    {botaoClicado && !isFormValid && (
                        <div className="error-message">
                            {errorMessages}
                        </div>
                    )}
                </div>
            </div>
            <div className="form-container">
                <h2 className="form-title">Suas informações</h2>
                <div className="form-line"></div>
                <div className="form-inputs">
                    <TextField
                        label="Apelido"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        onChange={handleApelidoChange}
                        value={apelido}
                    />
                    <TextField
                        label="Idade"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={idade}
                        onChange={handleInputChange}
                        inputProps={{
                            type: 'text', 
                        }}
                    />
                   <div>
                    <FormControl fullWidth variant="outlined" margin="normal">
                        <InputLabel htmlFor="genero-select">Gênero</InputLabel>
                            <Select
                                label="Gênero"
                                value={genero}
                                onChange={handleGeneroChange}
                                inputProps={{
                                    name: 'genero',
                                    id: 'genero-select',
                                }}
                                >
                                <MenuItem value="masculino">Masculino</MenuItem>
                                <MenuItem value="feminino">Feminino</MenuItem>
                                <MenuItem value="outro">Prefiro não dizer</MenuItem>
                            </Select>
                    </FormControl>
                    </div>
                    <div className="avatar-wrapper">
                        <div className="avatar-title MuiInputLabel-root">Avatar</div>
                        <ToggleButtonGroup
                            value={avatar}
                            exclusive
                            onChange={handleAvatarChange}
                            className="avatar-toggle-group"
                        >
                            <ToggleButton value="dog1">
                                <img src={dog1} alt="Dog 1" className="avatar-image" />
                            </ToggleButton>
                            <ToggleButton value="dog2">
                                <img src={dog2} alt="Dog 2" className="avatar-image" />
                            </ToggleButton>
                            <ToggleButton value="dog3">
                                <img src={dog3} alt="Dog 3" className="avatar-image" />
                            </ToggleButton>
                            <ToggleButton value="cat1">
                                <img src={cat1} alt="Cat 1" className="avatar-image" />
                            </ToggleButton>
                            <ToggleButton value="cat2">
                                <img src={cat2} alt="Cat 2" className="avatar-image" />
                            </ToggleButton>
                            <ToggleButton value="cat3">
                                <img src={cat3} alt="Cat 3" className="avatar-image" />
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                    <div className="button-container">
                        <Link
                            to={isFormValid && isAgeValid ? {
                            pathname: "/Questionario",
                            search: `?apelido=${apelido}&avatar=${avatar}`,
                            } : '#'}
                            className={`button_form-navegation ${!isFormValid || !isAgeValid ? 'disabled' : ''}`}
                            onClick={() => {
                            if (!isFormValid) {
                                showMessageError(errorMessages[0]);                                                                    
                            }

                            if (!isAgeValid) {
                                showMessageError(errorMessages[1]);                                                                   
                            }

                            }}
                        >
                            Seguinte
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;