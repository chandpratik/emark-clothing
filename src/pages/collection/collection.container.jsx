import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selector';

import withSpinner from '../../components/withSpinner/withSpinner.component';

import CollectionPage from './collection.component';


const mapstateToProps = createStructuredSelector(
    { isLoading: (state) => !selectIsCollectionLoaded(state) }
)


const CollectionPageContainer = compose(connect(mapstateToProps), withSpinner)(CollectionPage);



export default CollectionPageContainer;