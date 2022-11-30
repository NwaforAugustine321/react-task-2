import React, { memo } from 'react';

import { Modal } from 'Components/Modal';

import { areEqual } from 'Utils/equalityChecks';
import { OutlineButton } from 'Components/Button';

import classes from './deleteContractModal.module.css';

interface Props {
  isOpen: boolean;
  currentProjectInfo?: any;
  onCloseClick: (e: any) => void;
  onDeleteClick: (e: any) => void;
}
const DeleteContractModal = ({ isOpen, currentProjectInfo, onCloseClick, onDeleteClick }: Props) => (
  <Modal
    titleIcon={false}
    leftHeaderIcon="forms"
    id="contract-modal"
    classes={classes}
    title="Delete Contract Form"
    isOpen={isOpen}
    modalHeader
    closeButtonText="Cancel"
    dataBsBackdrop="static"
    dataBsKeyboard="false"
    modalCloseClick={onCloseClick}
  >
    <div className={classes.text}>
      {currentProjectInfo && <div className={classes.message}>Are you sure you want to delete the form ?</div>}
    </div>

    <div className={classes.buttonRow}>
      <OutlineButton className={`${classes.button} ${classes.delete}`} onClick={onDeleteClick}>
        Delete
      </OutlineButton>
      <OutlineButton className={`${classes.button} ${classes.cancel}`} onClick={onCloseClick}>
        Cancel
      </OutlineButton>
    </div>
  </Modal>
);

DeleteContractModal.defaultProps = {
  currentProjectInfo: undefined,
};

const DeleteContractModalMemo = memo(DeleteContractModal, areEqual);

export { DeleteContractModalMemo as DeleteContractModal };
