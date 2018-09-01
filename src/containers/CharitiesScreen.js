import { connect } from 'react-redux'
import {addCategories, addCharities, setCharities, setNewGoal, updateCharity} from "../actions";
import SelectCharitiesScreen from "../screens/Charities/SelectCharities";
import Charities from "../reducers/Charities";
import CharitiesScreen from "../screens/Charities/Charities";

const mapStateToProps = (state, { navigation }) => {
    return {
        charities: state.charities.filter(charity => charity.selected)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateCharity: charity => {
            dispatch(updateCharity(charity))
        },
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

const CharitiesScreenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CharitiesScreen)

export default CharitiesScreenContainer