import ImmutablePureComponent from 'react-immutable-pure-component';
import PropTypes from 'prop-types';
import IconButton from 'mastodon/components/icon_button';
import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';
import React from 'react';
import ComposeFormContainer from 'mastodon/features/compose/containers/compose_form_container';

const messages = defineMessages({
  close: { id: 'lightbox.close', defaultMessage: 'Close' },
});

export default @injectIntl
class BoostModal extends ImmutablePureComponent {

  // static contextTypes = {
  //   router: PropTypes.object,
  // };

  static propTypes = {
    onClose: PropTypes.func.isRequired,
    onError: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired,
  }

  render() {
    const { intl, onClose } = this.props;

    return (
      <div className='modal-root__modal report-modal embed-modal'>
        {/*<div className='report-modal__target'>*/}
        {/*  <IconButton className='media-modal__close' title={intl.formatMessage(messages.close)} icon='times' onClick={onClose} size={16} />*/}
        {/*  <FormattedMessage id='status.embed' defaultMessage='Embed' />*/}
        {/*</div>*/}

        <div className='report-modal__container embed-modal__container' style={{ display: 'block' }} >
          <div className='compose-in-modal'>
            <ComposeFormContainer singleColumn topPined />
          </div>
        </div>
      </div>
    );
  }

}
