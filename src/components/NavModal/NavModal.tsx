import React from "react";
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
  } from "@chakra-ui/react"

  import { useDisclosure } from "@chakra-ui/react"

const NavModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const finalRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

    return (
      <div>
        {/* <Box ref={finalRef} tabIndex={-1} aria-label="Focus moved to this box">
          Some other content that'll receive focus on close.
        </Box> */}
          <Button
          onClick={onOpen}
          display={{ base: 'none', md: 'inline-flex' }}
          fontSize={'sm'}
          fontWeight={600}
          color={'white'}
          bg={'#00B2E3'}
          href={'#'}
          _hover={{
            bg: '#03F9E6',
          }}>
            <a href="/login">Sign In</a>
          </Button>

      </div>
    )
  }
  export default NavModal;
