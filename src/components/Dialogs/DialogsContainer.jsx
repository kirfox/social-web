import { connect } from 'react-redux';
import { compose } from 'redux';
import { addMessageActionCreator } from '../../redux/dialogs-reducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import Dialogs from './Dialogs';

debugger
const mapStateToProps = (state) => {
  debugger
  return {
    dialogsPage: state.dialogsPage,
  }
} 
const mapDispatchToProps = (dispatch) => {
  debugger
  return {
    sendMessage: (newMessageText) => {
      dispatch(addMessageActionCreator(newMessageText))
    }

  }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);