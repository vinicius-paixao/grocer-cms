import {
  ModalLayout,
  ModalHeader,
  ModalBody,
  Typography,
} from "@strapi/design-system";
import { ReactNode } from "react";

interface IModal {
  title: string;
  children: ReactNode;
  setShowModal: (value: boolean) => void;
}
export default function Modal({ children, title, setShowModal }: IModal) {
  return (
    <ModalLayout
      labelledBy="title"
      as="form"
      onClose={() => setShowModal(false)}
    >
      <ModalHeader>
        <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title">
          {title}
        </Typography>
      </ModalHeader>

      <ModalBody>{children}</ModalBody>
    </ModalLayout>
  );
}
