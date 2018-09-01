import { connect } from 'react-redux'
import CategoriesScreen from "../screens/Charities/Categories";
import {addCategories} from "../actions";

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchCategories: categories => {
            dispatch(addCategories(categories))
        }
    }
}

const CategoriesScreenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoriesScreen)

export default CategoriesScreenContainer