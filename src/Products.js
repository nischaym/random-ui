import React from "react";

export default class Products extends React.Component{

    render() {
        const { state, renderItemBadge } = this.props
        return (
            <div className='mt-5'>
                <div className='row ml-0 mr-0 pl-4 pr-4'>

                    {
                        state.apiData &&
                        state.apiData.items.map((item, index) => {

                            return(
                                <div className='col-6 col-sm-6 col-md-4 col-lg-3 col-xlg-3 p-2 b-r-point8rem' key={index}>
                                    <div className='p-3 walmart-bg-white b-r-point8rem'>
                                        <div className='walmart-product-card-mc-parent'>
                                            <p className={`walmart-product-card-mc-text${!item.more_choices ? '-opacity-0': ''}`}>More Choices</p>
                                        </div>
                                        <div className='p-relative'>
                                            <img className='width-100' src={item.image_url}  alt='OOPS!!'/>

                                            {
                                                renderItemBadge(item)
                                            }

                                        </div>
                                        <div  className='walmart-product-desc-parent pt-2'>

                                            <div className='mb-1'>
                                                <p className='mb-2 d-inline walmart-product-name'>
                                                    {item.name}
                                                </p>
                                                { item.is_discounted &&
                                                <p className='d-inline pull-right t-d-lt mb-0 mt-1 walmart-product-discounted-price'>
                                                    {item.original_price}
                                                </p>
                                                }
                                            </div>

                                            <div className='d-flex' >
                                                <div className='d-inline pull-left width-70'>
                                                    <p className='fs-smaller mb-0 pr-1'>
                                                        {item.description}
                                                    </p>
                                                </div>
                                                <div className='d-inline pull-right width-30'>
                                                    <p style={{}} className={`d-inline pull-right mb-0 walmart-product-price${item.is_discounted? '-green': '-black'}`}>
                                                        {item.price}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

}
