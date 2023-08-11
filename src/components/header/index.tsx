import { useNavigate } from "react-router-dom";
import { headerProps } from "../../interfaces/header/type";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import "./styles.scss";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";

export const Header = ({ optionOne, optionTwo, logo }: headerProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();
  const redirect = (options: string) => {
    if (options === "Login") {
      navigate("/login");
    }
    if (options === "Sign Up") {
      navigate("/register");
    }
    if (options === "Main") {
      navigate("/");
    }
    if (options === "dashboard") {
      navigate("/dashboard");
    }

    return;
  };

  return (
    <div id="header">
      <p id="header-title" onClick={() => redirect(logo)}>
        Travels
      </p>

      <Button
        id="hamburger"
        border="none"
        background="transparent"
        _hover={{ background: "transparent" }}
        onClick={onOpen}
        outline={0}
      >
        {isOpen ? (
          <AiOutlineClose id="hamburger" />
        ) : (
          <GiHamburgerMenu id="hamburger" />
        )}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay background={"transparent"} />
        <ModalContent borderRadius={0}>
          <ModalBody id="container-buttons-modal">
            <button onClick={() => redirect(optionOne)}>{optionOne}</button>
            <button onClick={() => redirect(optionTwo)}>{optionTwo}</button>
          </ModalBody>
        </ModalContent>
      </Modal>

      <div id="container-buttons">
        <p onClick={() => redirect(optionOne)}>{optionOne}</p>
        <div></div>
        <p onClick={() => redirect(optionTwo)}>{optionTwo}</p>
      </div>
    </div>
  );
};
