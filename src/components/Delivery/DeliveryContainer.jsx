import React from 'react'
import { connect } from 'react-redux'
import { deliveryList } from '../../common/json/delivery-list'
import { addDeliveryList } from '../../redux/delivery-reducer'
import DeliveryPage from './Delivery'

class DeliveryContainer extends React.Component {
  componentDidMount() {
    this.props.addDeliveryList(this.props.delList)
  }
  render() {
    return (
      <>
        <DeliveryPage list={this.props.deliveryPageList} />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  delList: deliveryList,
  deliveryPageList: state.deliveryPage.deliveryListData
})

export default connect (mapStateToProps, {addDeliveryList}) (DeliveryContainer)