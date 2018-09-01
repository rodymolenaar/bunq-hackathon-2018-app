import { connect } from 'react-redux'
import {setNewGoal} from "../actions";
import MerchantsScreen from "../screens/Merchants";
import {setMerchants} from "../actions/Merchants";
import SelectMerchantScreen from "../screens/Goals/AddGoal/SelectMerchant";

const mapStateToProps = state => {
    return {
        merchants: state.merchants,
        token: state.application.token,
        newGoal: state.application.newGoal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchMerchants: merchants => {
            dispatch(setMerchants(merchants))
        },
        setNewGoal: goal => {
            dispatch(setNewGoal(goal))
        }
    }
}

const SelectMerchantScreenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectMerchantScreen)

export default SelectMerchantScreenContainer