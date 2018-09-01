import { connect } from 'react-redux'
import Comments from '../screens/Comments/Comments'
import { addComments, deleteComment } from '../actions'

const mapStateToProps = state => {
    return {
        comments: state.comments,
        user: state.application.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchComments: comments => dispatch(addComments(comments)),
        onDeleteComment: comment => dispatch(deleteComment(comment)),
    }
}

const CommentsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Comments)

export default CommentsContainer