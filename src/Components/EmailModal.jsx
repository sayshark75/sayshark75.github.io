import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import React from "react";
import { mailLink, mailLinkTemplate } from "../Sources/Links";

const EmailModal = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Email Template Suggestion</ModalHeader>
          <ModalCloseButton />
          <ModalBody>I have created a professional email template. Would you be interested in using it?</ModalBody>

          <ModalFooter>
            <a href={mailLinkTemplate} target={"_blank"} rel="noreferrer">
              <Button colorScheme="telegram" mr={3} onClick={onClose}>
                Yes
              </Button>
            </a>
            <a href={mailLink} target={"_blank"} rel="noreferrer">
              <Button colorScheme="telegram" onClick={onClose}>
                No
              </Button>
            </a>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EmailModal;
