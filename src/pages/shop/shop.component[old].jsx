import React from 'react';
// import SHOP_DATA from './shop.data';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import {selectCollections} from '../../redux/shop/shop.selectors'; 
// class ShopPage extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             collections: SHOP_DATA
//         }
//     }
//     render(){
//         const {collections} = this.state;
//         return(
//             <div className="shop-page">
//                 {collections.map( ({id, ...otherProps})=>(
//                     <CollectionPreview key={id} {...otherProps}/>
//                 ))}
//             </div>
//         )
//     }
// }
const ShopPage = ({collections}) =>(
    <div className="shop-page">
        {collections.map( ({id, ...otherProps})=>(
            <CollectionPreview key={id} {...otherProps}/>
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})


export default connect(mapStateToProps)(ShopPage);