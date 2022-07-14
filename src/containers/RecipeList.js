import {connect} from 'react-redux'
import List from '../components/List'

const mapStateToProps = (state) => {
    const {recipe} = state
    return {recipe: recipe}
}

export default connect (
    mapStateToProps,
    null
) (List)