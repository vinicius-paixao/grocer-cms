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
  // editTodo,
  setShowModal,
  setShowAddModal,
  // brandId,
}: any) {
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
          <TFooter onClick={() => setShowAddModal(true)}>Add new user</TFooter>
        }
      >
        <Thead>
          <Tr>
            <Th>
              <Typography variant="sigma">Active</Typography>
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
          {/* {users.map((user: any) => { */}
            {/* return ( */}
              <Tr key={users.id}>
                <Td>
                  <Typography textColor="neutral800">{users.active ? 'True': 'False'}</Typography>
                </Td>

                <Td>
                  <Typography textColor="neutral800">{users.firstName}</Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">{users.email}</Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">{users.phoneNumber}</Typography>
                </Td>

                <Td>
                  <Button
                    onClick={() => {
                      setShowModal(true);
                    }}
                  >
                    Edit
                  </Button>
                </Td>

                {/* <Td>
                  <Button onClick={() => deleteSC(sc.id)}>Delete</Button>
                </Td> */}

              </Tr>
            {/* ); */}
          {/* })} */}
        </Tbody>
      </Table>
    </Box>
  );
}
