import React from 'react'
import { connect } from 'react-redux'
import Catalogue from './Catalogue'
import { addCatalogList, toggleIsActive } from "../../redux/catalog-reducer"
import { addPriceCount } from "../../redux/basket-reducer"
import catalogList from '../../common/json/catalog-list'

class CatalogueContainer extends React.Component {
  componentDidMount() {
    this.props.addCatalogList(this.props.list)
  }
  
  render() {
    return (
      <Catalogue catalogPage={this.props.catalogPage}
                 toggleIsActive={this.props.toggleIsActive}
                 addPriceCount={this.props.addPriceCount}
                 isActive={this.props.isActive} />
    )
  }
}

const mapStateToProps = (state) => ({
  catalogPage: state.catalogPage,
  list: catalogList,
  isActive: state.catalogPage.isActive
})

export default connect(mapStateToProps, { addCatalogList, toggleIsActive, addPriceCount }) (CatalogueContainer)
