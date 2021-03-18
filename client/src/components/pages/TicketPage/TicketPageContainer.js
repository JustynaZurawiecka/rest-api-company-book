import { connect } from 'react-redux';
import { getConcert, updateTicket } from '../../../redux/concertsRedux';
import TicketPage from './TicketPage';

const mapStateToProps = (state) => ({
    singleConcert: getConcert(state),

});

const mapDispatchToProps = dispatch => ({
    updateTicket: (ticketInfo) => dispatch(updateTicket(ticketInfo)),
});


export default connect(mapStateToProps, mapDispatchToProps)(TicketPage);
