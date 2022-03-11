import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import ComponentInputTypeDate from '../components/ComponentInputTypeDate';
import ComponentInputTypeNumber from '../components/ComponentInputTypeNumber';
import ComponentInputTypeText from '../components/ComponentInputTypeText';
import ComponentViewDate from '../components/ComponentViewDate';
import ComponentViewText from '../components/ComponentViewText';
import ComponentViewNumber from '../components/ComponentViewNumber';



export default class FormBuilder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputTypeText: false,
            inputTypeNumber: false,
            inputTypeDate: false,

            inputTypeTextValue: '',
            inputTypeNumberValue: '',
            inputTypeDateValue: '',

            isSavedData: false
        };
    }



    changeStatusTypeText() {
        this.setState({ inputTypeText: !this.state.inputTypeText })
    }

    changeStatusTypeNumber = () => {
        this.setState({ inputTypeNumber: !this.state.inputTypeNumber })
    }

    changeStatusTypeDate = () => {
        this.setState({ inputTypeDate: !this.state.inputTypeDate })
    }




    getResponseTextValue(result) {
        this.setState({ inputTypeTextValue: result });
    }

    getResponseNumberValue(result) {
        this.setState({ inputTypeNumberValue: result });
    }

    getResponseDateValue(result) {
        this.setState({ inputTypeDateValue: result });
    }




    sendForm = (ev) => {
        ev.preventDefault()
        this.setState({ isSavedData: true });
    }

    restartForm() {
        this.setState({
            isSavedData: false,
            inputTypeText: false,
            inputTypeNumber: false,
            inputTypeDate: false,
            inputTypeTextValue: '',
            inputTypeNumberValue: '',
            inputTypeDateValue: '',
        });
    }


    render() {
        return (
            <React.Fragment>
                <div className="container mx-auto">

                    <div className='mx-auto px-3 py-4 md:max-w-screen-md 2xl:max-w-screen-md shadow-none md:shadow'>

                        <div className='flex flex-col gap-4'>

                            <div className='flex '>
                                <h1 className='flex items-center gap-4 font-semibold text-xl'>
                                    <Link to="/" className="cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </Link>
                                    Formulario nuevo
                                </h1>

                            </div>

                            <div className='flex flex-col gap-4 px-3 py-4'>


                                <h1>Seleccione los campos que tendra el formulario</h1>

                                <p>{this.state.inputTypeText} </p>


                                <div className='flex flex-row  items-center justify-between gap-2'>


                                    <div className='flex items-center gap-3'>

                                        <label className='flex items-center gap-2'>
                                            <input type='checkbox' className='custom-input' onClick={() => this.changeStatusTypeText()} />
                                            Texto
                                        </label>

                                    </div>

                                    <div className='flex items-center gap-3'>

                                        <label className='flex items-center gap-2'>
                                            <input type='checkbox' className='custom-input' onClick={() => this.changeStatusTypeDate()} />
                                            Fecha
                                        </label>


                                    </div>

                                    <div className='flex items-center gap-3'>

                                        <label className='flex items-center gap-2'>
                                            <input type='checkbox' className='custom-input' onClick={() => this.changeStatusTypeNumber()} />
                                            Número
                                        </label>

                                    </div>

                                </div>

                            </div>

                            <div className='flex items-center justify-end'>

                                <div className='flex gap-2 text-gray-600'>

                                    <button className='p-2 rounded-full hover:bg-gray-300'>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"></path>
                                        </svg>
                                    </button>
                                    <button className='p-2 rounded-full hover:bg-gray-300'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                        </svg>

                                    </button>
                                </div>

                            </div>

                        </div>

                    </div>



                    {(this.state.inputTypeText == true || this.state.inputTypeNumber == true || this.state.inputTypeDate == true && this.state.isSavedData == false) &&

                        <div className='mt-10 mx-auto px-3 py-4 md:max-w-screen-md 2xl:max-w-screen-md shadow-none md:shadow '>

                            <form className='flex flex-col justify-between gap-4 w-full' onSubmit={this.sendForm}>

                                {this.state.inputTypeText == true &&

                                    <ComponentInputTypeText callback={this.getResponseTextValue.bind(this)} />

                                }

                                {this.state.inputTypeNumber == true &&

                                    <ComponentInputTypeNumber callback={this.getResponseDateValue.bind(this)} />

                                }

                                {this.state.inputTypeDate == true &&

                                    <ComponentInputTypeDate callback={this.getResponseNumberValue.bind(this)} />

                                }

                                <div className='flex flex-col md:flex-row gap-4'>

                                    {this.state.isSavedData == false &&

                                        <button type='submit' className='px-4 py-2 bg-indigo-500 font-semibold text-white rounded-md w-full md:w-28'>Enviar</button>

                                    }

                                </div>


                            </form>

                        </div>
                    }


                    {
                        this.state.isSavedData == true &&

                        <div className='mt-10 mx-auto px-3 py-4 md:max-w-screen-md 2xl:max-w-screen-md shadow-none md:shadow'>

                            <div className='flex items-center justify-center'>

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>

                            <div className='flex flex-col gap-4'>


                                {this.state.inputTypeTextValue != '' &&

                                    <ComponentViewDate value={this.state.inputTypeTextValue} />

                                }

                                {this.state.inputTypeNumberValue != '' &&


                                    <ComponentViewNumber value={this.state.inputTypeNumberValue} />

                                }

                                {this.state.inputTypeDateValue != '' &&

                                    <ComponentViewText value={this.state.inputTypeDateValue} />

                                }


                                <Link to="/" className='px-4 py-2 bg-gray-300 font-semibold text-gray-800 rounded-md w-full md:w-28 text-center'>Terminar</Link>


                            </div>




                        </div>

                    }

                </div>

            </React.Fragment>

        )
    }
}
