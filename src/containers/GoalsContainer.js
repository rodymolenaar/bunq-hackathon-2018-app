import { connect } from 'react-redux'
import {addCategories, addCharities, setCharities, setNewGoal, updateCharity} from "../actions";
import SelectCharitiesScreen from "../screens/Charities/SelectCharities";
import Charities from "../reducers/Charities";
import CharitiesScreen from "../screens/Charities/Charities";
import GoalsScreen from "../screens/Goals/Goals";
import {addGoals} from "../actions/Goals";

const mapStateToProps = (state, { navigation }) => {
    return {
        goals: state.goals
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchGoals: goals => {
            dispatch(addGoals(goals))
        }
    }
}

const GoalsScreenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GoalsScreen)

export default GoalsScreenContainer