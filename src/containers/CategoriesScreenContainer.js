import { connect } from 'react-redux'
import CategoriesScreen from "../screens/Charities/Categories";
import {addCategories, addCharities} from "../actions";

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchCategories: categories => {
            dispatch(addCategories(categories.map(category => {
                let charities = category.charities.map(charity => ({
                    ...charity,
                    category: category.name
                }))

                dispatch(addCharities(charities));

                return {
                    name: category.name
                }
            })))
        }
    }
}

const CategoriesScreenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoriesScreen)

export default CategoriesScreenContainer