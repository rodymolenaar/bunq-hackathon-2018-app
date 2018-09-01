import { connect } from 'react-redux'
import {setNewGoal} from "../actions";
import SelectOperatorScreen from "../screens/Goals/AddGoal/SelectOperator";

const mapStateToProps = state => {
    return {
        newGoal: state.application.newGoal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setNewGoal: goal => {
            dispatch(setNewGoal(goal))
        }
    }
}

const SelectOperatorScreenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectOperatorScreen)

export default SelectOperatorScreenContainer