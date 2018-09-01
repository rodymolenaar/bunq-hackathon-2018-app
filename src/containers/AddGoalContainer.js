import { connect } from 'react-redux'
import {setNewGoal} from "../actions";
import AddGoalScreen from "../screens/Goals/AddGoal/AddGoal";

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

const AddGoalScreenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddGoalScreen)

export default AddGoalScreenContainer