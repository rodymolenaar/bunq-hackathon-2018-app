import { connect } from 'react-redux'
import {setNewGoal} from "../actions";
import SelectCharitiesScreen from "../screens/Charities/SelectCharities";

const mapStateToProps = (state, { navigation }) => {
    return {
        charities: state.charities.filter(charity => charity.category === navigation.state.params.category.name)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateCharity: goal => {
            dispatch(updateCharity(goal))
        }
    }
}

const SelectCharitiesScreenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectCharitiesScreen)

export default SelectCharitiesScreenContainer