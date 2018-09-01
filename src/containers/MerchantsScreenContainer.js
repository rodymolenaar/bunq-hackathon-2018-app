import { connect } from 'react-redux'
import {setNewGoal} from "../actions";
import MerchantsScreen from "../screens/Merchants";
import {setMerchants} from "../actions/Merchants";

const mapStateToProps = state => {
    return {
        merchants: state.merchants,
        token: state.application.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchMerchants: merchants => {
            dispatch(setMerchants(merchants))
        }
    }
}

const MerchantsScreenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MerchantsScreen)

export default MerchantsScreenContainer