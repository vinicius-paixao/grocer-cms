import React, { useState } from "react";
import {
  ModalLayout,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Typography,
  Button,
  TextInput,
} from "@strapi/design-system";
import { contractAccountsRequest } from "../../api/contractAccounts";

export default function TodoModal({ setShowModal, addTodo }: any) {
  const [createContractAccount, setCreateContractAccount] = useState({
    name: "",
    user: {
      firstName: "",
      lastName: "",
      email: "",
      document: "",
      phoneNumber: "",
      password: "",
      additionalChannelInformation: ""
    }
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      const setSc = await contractAccountsRequest.setContracts(createContractAccount);
      console.log("post");
      console.log(setSc);
      setShowModal(false);
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <ModalLayout
      onClose={() => setShowModal(false)}
      labelledBy="title"
      as="form"
      onSubmit={handleSubmit}
    >
      <ModalHeader>
        <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title">
          Add contract account
        </Typography>
      </ModalHeader>

      <ModalBody>
        <TextInput
          placeholder="Name Account"
          label="Name Account"
          name="name"
          hint="Max 40 characters"
          error={null} // Error não está implementado aqui, você pode adicionar conforme necessário
          onChange={(e: any) => setCreateContractAccount({ ...createContractAccount, name: e.target.value })}
          value={createContractAccount?.name}
        />
        <TextInput
          placeholder="First Name"
          label="First Name"
          name="firstName"
          hint="Max 40 characters"
          error={null}
          onChange={(e: any) => setCreateContractAccount({ ...createContractAccount, user: { ...createContractAccount.user, firstName: e.target.value } })}
          value={createContractAccount?.user?.firstName}
        />
        <TextInput
          placeholder="Last Name"
          label="Last Name"
          name="lastName"
          hint="Max 40 characters"
          error={null}
          onChange={(e: any) => setCreateContractAccount({ ...createContractAccount, user: { ...createContractAccount.user, lastName: e.target.value } })}
          value={createContractAccount?.user?.lastName}
        />
        <TextInput
          placeholder="Email"
          label="Email"
          name="email"
          hint="Max 40 characters"
          error={null}
          onChange={(e: any) => setCreateContractAccount({ ...createContractAccount, user: { ...createContractAccount.user, email: e.target.value } })}
          value={createContractAccount?.user?.email}
        />
        <TextInput
          placeholder="Document"
          label="Document"
          name="document"
          hint="Max 40 characters"
          error={null}
          onChange={(e: any) => setCreateContractAccount({ ...createContractAccount, user: { ...createContractAccount.user, document: e.target.value } })}
          value={createContractAccount?.user?.document}
        />
        <TextInput
          placeholder="Phone Number"
          label="Phone Number"
          name="phoneNumber"
          hint="Max 40 characters"
          error={null}
          onChange={(e: any) => setCreateContractAccount({ ...createContractAccount, user: { ...createContractAccount.user, phoneNumber: e.target.value } })}
          value={createContractAccount?.user?.phoneNumber}
        />
        <TextInput
          placeholder="Password"
          label="Password"
          name="password"
          hint="Max 40 characters"
          error={null}
          onChange={(e: any) => setCreateContractAccount({ ...createContractAccount, user: { ...createContractAccount.user, password: e.target.value } })}
          value={createContractAccount?.user?.password}
        />
        <TextInput
          placeholder="Additional Channel Information"
          label="Additional Channel Information"
          name="additionalChannelInformation"
          hint="Max 40 characters"
          error={null}
          onChange={(e: any) => setCreateContractAccount({ ...createContractAccount, user: { ...createContractAccount.user, additionalChannelInformation: e.target.value } })}
          value={createContractAccount?.user?.additionalChannelInformation}
        />
      </ModalBody>

      <ModalFooter
        startActions={
          <Button onClick={() => setShowModal(false)} variant="tertiary">
            Cancel
          </Button>
        }
        endActions={<Button type="submit">Add contract account</Button>}
      />
    </ModalLayout>
  );
}
