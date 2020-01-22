import React from 'react'
import Helmet from 'react-helmet'
import './App.css'
import Header from "./Header"
import BrandImage from "./BrandImage"
import Products from "./Products"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      sortKey: 'Sort By'
    }
  }

  componentDidMount() {
    fetch("https://pf-pets.azurewebsites.net/dog_toys")
        .then(res => res.json())
        .then(
            (result) => {
              this.setState({
                isLoaded: true,
                apiData: result
              })
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              })
            }
        )
  }




  renderItemBadge = (item) => {

    if(item.type === null) return <span/>

    switch (item.type) {
      case 'TOP_RATED':
        return <span className='walmart-product-tag-tr'>Top Rated</span>

      case 'NEW_ITEM':
        return <span className='walmart-product-tag-new'>New!</span>

      case 'EXCLUSIVE_ITEM':
        return <span className='walmart-product-tag-ex'>Only @ Walmart</span>

      default:
        return <span/>
    }
  }

  getDollarValue = (value) => {
    if(value.includes('-')) {
      return Number(value.split('-')[0].replace('$', ''))
    }
    return Number(value.replace('$', ''))
  }

  handleSort = (sortKey) => {

    if(!this.state.apiData)
      return
    // eslint-disable-next-line default-case
    switch(sortKey) {
      case 'low':
      case 'high':
        this.setState(state => {
          const apiData = state.apiData
          apiData.items.sort((item1, item2) => {
            if (sortKey === 'low') {
              return this.getDollarValue(item1.price) - this.getDollarValue(item2.price)
            }

            return this.getDollarValue(item2.price) - this.getDollarValue(item1.price)

          })
          return {
            apiData,
            sortKey: sortKey === 'low'? '$-$$$$' : '$$$$-$'
          }
        })
        break
      case 'tr':
        this.setState(state => {
          const apiData = state.apiData
          apiData.items.sort((item1, item2) => {
            return item1.type === 'TOP_RATED' && item2.type === 'TOP_RATED' ? item1.name - item2.name :
                item1.type === 'TOP_RATED' ? -1 : item2.type === 'TOP_RATED'? 1: 0
          })
          return {
            apiData,
            sortKey: 'Top Rated'
          }
        })
        break
      case 'mp':
        this.setState(state => {
          const apiData = state.apiData
          apiData.items.sort((item1, item2) => {
            return item1.is_discounted && item2.is_discounted ? item1.name - item2.name :
                item1.is_discounted ? -1 : item2.is_discounted ? 1: 0
          })
          return {
            apiData,
            sortKey: 'Most Popular'
          }
        })
    }
  }

  render() {
    return (
        <div className="App mb-5 walmart-app">
          <Helmet>
            <title>{ this.state.apiData && this.state.apiData.site_title }</title>
          </Helmet>

          <Header state={this.state}/>

          <BrandImage handleSort={this.handleSort} state={this.state}/>
          {/*// products*/}
          <Products renderItemBadge={this.renderItemBadge} state={this.state} />
        </div>
    )
  }


}

export default App
