import { FormEvent, useState } from "react";
import {
  ModalLayout,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Typography,
  Button,
  TextInput,
  DatePicker,
  ToggleInput,
} from "@strapi/design-system";
import { usersRequest } from "../../api/users";

interface IAddUser {
  setShowAddModal: (value: boolean) => void;
  hasReload: (value: boolean) => void;
}

export default function AddUser({ setShowAddModal, hasReload }: IAddUser) {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    document: "",
    phoneNumber: "",
    password: "",
    birthDate: null,
    active: true,
  });

  const authToken = localStorage.getItem("token");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    hasReload(true)

    try {
      await usersRequest.signupUser(userData, authToken);
      setShowAddModal(false);
    } catch (error) {
      console.error("Error updating brand:", error);
    }
  };

  return (
    <ModalLayout
      onClose={() => setShowAddModal(false)}
      labelledBy="title"
      as="form"
      onSubmit={handleSubmit}
    >
      <ModalHeader>
        <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title">
          Atualizar dados do usuario
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
          key={"documento"}
          placeholder={`documento do cliente`}
          label="documento"
          name="documento"
          value={userData.document}
          onChange={(e: any) =>
            setUserData({ ...userData, document: e.target.value })
          }
        />{" "}
        <TextInput
          key={"senha"}
          placeholder={`senha do cliente`}
          label="senha"
          name="senha"
          type="password"
          value={userData.password}
          onChange={(e: any) =>
            setUserData({ ...userData, password: e.target.value })
          }
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
          <Button onClick={() => setShowAddModal(false)} variant="tertiary">
            Cancelar
          </Button>
        }
        endActions={<Button type="submit">Criar</Button>}
      />
    </ModalLayout>
  );
}
