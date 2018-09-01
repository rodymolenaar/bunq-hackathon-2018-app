import { connect } from 'react-redux'
import {setNewGoal} from "../actions";
import AddGoalScreen from "../screens/Goals/AddGoal/AddGoal";
import {addGoal} from "../actions/Goals";

const mapStateToProps = state => {
    return {
        newGoal: state.application.newGoal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setNewGoal: goal => {
            dispatch(setNewGoal(goal))
        },
        onCreateGoal: goal => {
            dispatch(addGoal(goal))
        }
    }
}

const AddGoalScreenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddGoalScreen)

export default AddGoalScreenContainer