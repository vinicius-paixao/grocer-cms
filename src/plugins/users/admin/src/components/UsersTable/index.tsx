import {
  Box,
  Button,
  Typography,
  VisuallyHidden,
  Table,
  Thead,
  TFooter,
  Tbody,
  Tr,
  Td,
  Th,
} from "@strapi/design-system";
import { IAdmin } from "../../types/clientes";

interface IUserAdmin {
  users: IAdmin;
  setShowModal: (show: boolean) => void;
  setShowAddModal: (show: boolean) => void;
}

export default function UserAdmin({
  users,
  setShowModal,
  setShowAddModal,
}: IUserAdmin) {
  return (
    <Box
      background="neutral0"
      hasRadius={true}
      shadow="filterShadow"
      padding={8}
      style={{ marginTop: "10px" }}
    >
      <Table
        colCount={4}
        rowCount={10}
        footer={
          <TFooter onClick={() => setShowAddModal(true)}>
            Adicionar cliente
          </TFooter>
        }
      >
        <Thead>
          <Tr>
            <Th>
              <Typography variant="sigma">Ativo</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">nome</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">E-mail</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">telefone</Typography>
            </Th>

            <Th>
              <VisuallyHidden>Actions</VisuallyHidden>
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr key={users.document}>
            <Td>
              <Typography textColor="neutral800">
                {users.active ? "True" : "False"}
              </Typography>
            </Td>

            <Td>
              <Typography textColor="neutral800">{users.firstName}</Typography>
            </Td>
            <Td>
              <Typography textColor="neutral800">{users.email}</Typography>
            </Td>
            <Td>
              <Typography textColor="neutral800">
                {users.phoneNumber}
              </Typography>
            </Td>

            <Td>
              <Button
                onClick={() => {
                  setShowModal(true);
                }}
              >
                Editar
              </Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
}
