import React from "react";

export default class BrandImage extends React.Component {
    render() {
        const { state, handleSort } = this.props
        return (
            <div className='p-relative'>
                <img className='walmart-main-pic width-100' src='/assets/hero_@2x.jpg' alt='OOPS'/>

                <div className="dropdown p-absolute walmart-sort-dd">
                    <button className={`text-left walmart-btn btn btn-lg dropdown-toggle`} type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {state.sortKey}
                    </button>
                    <div className="dropdown-menu pt-0 walmart-brand-img-dd-options" aria-labelledby="dropdownMenuButton" >
                        <a className="dropdown-item" href="#" onClick={() => handleSort('low')}>$-$$$$</a>
                        <a className="dropdown-item" href="#" onClick={() => handleSort('high')}>$$$$-$</a>
                        <a className="dropdown-item" href="#" onClick={() => handleSort('tr')}>Top Rated</a>
                        <a className="dropdown-item" href="#" onClick={() => handleSort('mp')}>Most Popular</a>
                    </div>
                </div>

                <div className='text-left p-absolute walmart-brand-section-text'>
                    <h1>
                        {state.apiData && state.apiData.section_title}
                    </h1>
                    <h2>
                        {state.apiData && state.apiData.section_description}
                    </h2>
                </div>

            </div>
        )
    }

}
