import React from "react";

export default class Header extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            clicked: false
        }
    }
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render() {
        const { state } = this.props
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark walmart-bg-blue">
                    <a className="navbar-brand" href="#"><span className='walmart-logo'/></a>
                    <button className="b-none navbar-toggler order-first" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={this.handleClick}>
                        <span className={`walmart-header-${this.state.clicked? 'close': 'collapse'}-logo`}/>
                    </button>
                    <a className="nav-link walmart-hide-desktop" href="#"><
                        span className='walmart-header-basket-logo'/>
                        {   state.apiData &&
                            <span className='walmart-header-number-icon ml-1'>
                                {state.apiData.cart.quantity}
                            </span>
                        }
                    </a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Toys<span className='walmart-header-active-logo pl-1'/> <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Furniture</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Food</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Health</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">
                                    <span className='walmart-header-basket-logo'/>
                                    {   state.apiData &&
                                        <span className='walmart-header-number-icon ml-1'>
                                            {state.apiData.cart.quantity}
                                        </span>
                                    }
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }

}
