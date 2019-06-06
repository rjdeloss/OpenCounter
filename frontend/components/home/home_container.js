import { connect } from 'react-redux'; 
import { withRouter } from 'react-router-dom';
import HomePage from './home';

const msp = state => {
    return ({

    })
}

const mdp = dispatch => ({})

export default withRouter(connect(msp,mdp)(HomePage)); 