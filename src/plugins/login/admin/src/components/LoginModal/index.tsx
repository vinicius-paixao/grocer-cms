import Login from "../../pages/HomePage/Login";
import {
  ModalLayout,
  ModalHeader,
  ModalBody,
  Typography,
} from "@strapi/design-system";

export default function LoginModal() {
  return (
    <ModalLayout
      labelledBy="title"
      as="form"
    >
      <ModalHeader>
        <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title">
          Por favor faça o login para acessar os serviços
        </Typography>
      </ModalHeader>

      <ModalBody>
        <Login />
      </ModalBody>

    </ModalLayout>
  );
}
