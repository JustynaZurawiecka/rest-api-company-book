import { connect } from 'react-redux';
import { getConcert, loadConcertRequest, getRequest } from '../../../redux/concertsRedux';
import ConcertPage from './ConcertPage';

const mapStateToProps = (state) => ({
    concert: getConcert(state),
    request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
    loadConcert: (id) => dispatch(loadConcertRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConcertPage);
