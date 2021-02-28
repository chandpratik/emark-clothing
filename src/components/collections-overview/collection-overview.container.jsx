import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';


import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';
import withSpinner from '../withSpinner/withSpinner.component';
import CollectionsOverview from './collections-overview.components'




const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(connect(mapStateToProps), withSpinner)(CollectionsOverview);

export default CollectionsOverviewContainer;