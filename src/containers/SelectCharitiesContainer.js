import { connect } from 'react-redux'
import {setNewGoal, updateCharity} from "../actions";
import SelectCharitiesScreen from "../screens/Charities/SelectCharities";

const mapStateToProps = (state, { navigation }) => {
    return {
        charities: state.charities.filter(charity => charity.category === navigation.state.params.category.name),
        selectedCharities: state.charities.filter(charity => charity.selected)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateCharity: charity => {
            dispatch(updateCharity(charity))
        }
    }
}

const SelectCharitiesScreenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectCharitiesScreen)

export default SelectCharitiesScreenContainer