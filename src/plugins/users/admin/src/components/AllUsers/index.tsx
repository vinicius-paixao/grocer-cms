import React, { useState } from "react";

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
// import Pencil from "@strapi/icons";
// import Trash from "@strapi/icons";
// import Plus from "@strapi/icons/Plus";
// import { brandsRequest } from "../../api/brands";

export default function TodoTable({
  users,
  // toggleTodo,
  // deleteSC,
  editUser,
  setShowModal,
}: // setShowUpdateModal,
// brandId,
any) {
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
          <TFooter onClick={() => setShowModal(true)}>
            Add a sale channel
          </TFooter>
        }
      >
        <Thead>
          <Tr>
            <Th>
              <Typography variant="sigma">Id</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">FirstName</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Email</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">PhoneNumber</Typography>
            </Th>

            <Th>
              <VisuallyHidden>Actions</VisuallyHidden>
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {users.map((user: any) => {
            return (
              <Tr key={user.id}>
                <Td>
                  <Typography textColor="neutral800">{user.id}</Typography>
                </Td>

                <Td>
                  <Typography textColor="neutral800">
                    {user.firstName}
                  </Typography>
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
                  <Button
                    onClick={() => {
                      editUser(user.contractAccountId, user);
                    }}
                  >
                    Edit
                  </Button>
                </Td>

                {/* <Td>
                  <Button onClick={() => deleteSC(sc.id)}>Delete</Button>
                </Td> */}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}
