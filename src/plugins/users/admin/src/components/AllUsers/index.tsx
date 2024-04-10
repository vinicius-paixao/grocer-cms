import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  VisuallyHidden,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  Searchbar,
  SearchForm,
  SingleSelect,
  SingleSelectOption,
  Flex,
} from "@strapi/design-system";
import { IClients } from "../../types/clientes";

interface IClientsListProps {
  users: IClients[];
  editUser: (contractAccountId: string, user: any) => void;
}

const ClientsList: React.FC<IClientsListProps> = ({ users, editUser }) => {
  const [isActiveFilter, setIsActiveFilter] = useState<boolean | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [values, setValues] = useState("all");
  const usersPerPage = 10;

  const filteredUsers = users.filter((user) => {
    const searchTermMatches =
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    if (isActiveFilter === null) {
      return searchTermMatches;
    } else {
      return user.active === isActiveFilter && searchTermMatches;
    }
  });

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    setIsActiveFilter(values === "all" ? null : values === "true");
  }, [values]);

  return (
    <Box
      background="neutral0"
      hasRadius={true}
      shadow="filterShadow"
      padding={8}
      style={{ marginTop: "10px" }}
    >
      <Flex justifyContent="space-between" style={{ marginBottom: "10px" }}>
        <SearchForm>
          <Searchbar
            name="searchbar"
            onClear={() => setSearchTerm("")}
            value={searchTerm}
            onChange={(e: any) => setSearchTerm(e.target.value)}
            clearLabel=""
            placeholder="Buscar por nome ou email"
          />
        </SearchForm>

        <SingleSelect
          label=""
          required
          placeholder=""
          onClear={() => {
            setIsActiveFilter(null);
          }}
          value={isActiveFilter === null ? "all" : isActiveFilter.toString()}
          onChange={setValues}
        >
          <SingleSelectOption value="all">Todos</SingleSelectOption>
          <SingleSelectOption value="true">Ativos</SingleSelectOption>
          <SingleSelectOption value="false">Inativos</SingleSelectOption>
        </SingleSelect>
      </Flex>

      <Table colCount={4} rowCount={10}>
        <Thead>
          <Tr>
            <Th>
              <Typography variant="sigma">Id</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Nome</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">E-mail</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Telefone</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Ativo</Typography>
            </Th>
            <Th>
              <VisuallyHidden>Actions</VisuallyHidden>
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {currentUsers.map((user) => (
            <Tr key={user.id}>
              <Td>
                <Typography textColor="neutral800">{user.id}</Typography>
              </Td>
              <Td>
                <Typography textColor="neutral800">{user.firstName}</Typography>
              </Td>
              <Td>
                <Typography textColor="neutral800">{user.email}</Typography>
              </Td>
              <Td>
                <Typography textColor="neutral800">
                  {user.phoneNumber}
                </Typography>
              </Td>
              <Td>
                <Typography textColor="neutral800">
                  {user.active ? "true" : "false"}
                </Typography>
              </Td>
              <Td>
                <Button onClick={() => editUser(user.contractAccountId, user)}>
                  Editar
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Flex justifyContent="center" style={{ marginTop: "10px" }}>
        {Array.from({
          length: Math.ceil(filteredUsers.length / usersPerPage),
        }).map((_, index) => (
          <Button variant="ghost" onClick={() => paginate(index + 1)}>
            {index + 1}
          </Button>
        ))}
      </Flex>
    </Box>
  );
};

export default ClientsList;
