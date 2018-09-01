import { connect } from 'react-redux'
import {setNewGoal} from "../actions";
import SelectOperatorScreen from "../screens/Goals/AddGoal/SelectOperator";
import SelectPeriodScreen from "../screens/Goals/AddGoal/SelectPeriod";

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

const SelectPeriodScreenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectPeriodScreen)

export default SelectPeriodScreenContainer