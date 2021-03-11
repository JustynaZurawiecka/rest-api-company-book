import { connect } from 'react-redux';
import { getConcert } from '../../../redux/concertsRedux';
import TicketPage from './TicketPage';

const mapStateToProps = (state) => ({
    singleConcert: getConcert(state),
});

export default connect(mapStateToProps)(TicketPage);
