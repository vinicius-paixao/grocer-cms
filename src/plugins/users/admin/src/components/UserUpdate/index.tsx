import { useState } from "react";
import {
  ModalLayout,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Typography,
  Button,
  TextInput,
  ToggleInput,
  DatePicker,
} from "@strapi/design-system";
import { usersRequest } from "../../api/users";
import { IAdmin } from "../../types/clientes";

interface IUpdateUser {
  users: IAdmin;
  setShowUpdateModal: (value: boolean) => void;
  userEdit: boolean;
  token?: string;
}

export default function UpdateUser({
  setShowUpdateModal,
  users,
  userEdit,
  token,
}: IUpdateUser) {
  const [userData, setUserData] = useState({
    firstName: users?.firstName || "",
    lastName: users?.lastName || "",
    email: users?.email || "",
    phoneNumber: users?.phoneNumber || "",
    birthDate: users?.birthDate || null,
    active: users?.active || true,
  });

  const authToken = localStorage.getItem("token");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    const body = { ...userData, token, id: users.id };

    try {
      const response = !userEdit
        ? await usersRequest.updateusers(userData, authToken)
        : await usersRequest.userEdit(body, authToken);
      console.log("Updated brand:", response);
      setShowUpdateModal(false);
    } catch (error) {
      console.error("Error updating brand:", error);
    }
  };

  return (
    <ModalLayout
      onClose={() => setShowUpdateModal(false)}
      labelledBy="title"
      as="form"
      onSubmit={handleSubmit}
    >
      <ModalHeader>
        <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title">
          Atualizar Informações
        </Typography>
      </ModalHeader>

      <ModalBody>
        <TextInput
          key={"nome"}
          placeholder={`nome do cliente`}
          label="nome"
          name="nome"
          value={userData.firstName}
          onChange={(e: any) =>
            setUserData({ ...userData, firstName: e.target.value })
          }
        />
        <TextInput
          key={"ultimo nome"}
          placeholder={`ultimo nome do cliente`}
          label="ultimo nome"
          name="ultimo nome"
          value={userData.lastName}
          onChange={(e: any) =>
            setUserData({ ...userData, lastName: e.target.value })
          }
        />
        <DatePicker
          label="inicio"
          onChange={(date: any) => {
            console.log({ date });
            setUserData({ ...userData, birthDate: date });
          }}
          selectedDate={userData.birthDate}
        />
        <TextInput
          key={"email"}
          placeholder={`email do cliente`}
          label="email"
          name="email"
          value={userData.email}
          onChange={(e: any) =>
            setUserData({ ...userData, email: e.target.value })
          }
          style={{ marginBottom: "10px" }}
        />
        <TextInput
          key={"telefone"}
          placeholder={`(11) 0000-0000`}
          label="telefone"
          name="telefone"
          value={userData.phoneNumber}
          onChange={(e: any) =>
            setUserData({ ...userData, phoneNumber: e.target.value })
          }
        />
        <ToggleInput
          size="S"
          aria-label="Enabled"
          onLabel="Ativar"
          offLabel="Desativar"
          checked={userData.active}
          onChange={(e: any) =>
            setUserData({ ...userData, active: e.target.checked })
          }
        />
      </ModalBody>

      <ModalFooter
        startActions={
          <Button onClick={() => setShowUpdateModal(false)} variant="tertiary">
            Cancelar
          </Button>
        }
        endActions={<Button type="submit">Atualizar Informações</Button>}
      />
    </ModalLayout>
  );
}
