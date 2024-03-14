import React, { useState } from "react";

import {
  Box,
  // Button,
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
  salesChannel,
  // toggleTodo,
  // deleteSC,
  // editTodo,
  setShowModal,
  // setShowUpdateModal,
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
          <TFooter onClick={() => setShowModal(true)}>Add a sale channel</TFooter>
        }
      >
        <Thead>
          <Tr>
            <Th>
              <Typography variant="sigma">ID</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Name</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Active</Typography>
            </Th>

            <Th>
              <VisuallyHidden>Actions</VisuallyHidden>
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {salesChannel.map((sc: any) => {
            return (
              <Tr key={sc.id}>
                <Td>
                  <Typography textColor="neutral800">{sc.id}</Typography>
                </Td>

                <Td>
                  <Typography textColor="neutral800">{sc.name}</Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">{sc.active ? "true" : "false"}</Typography>
                </Td>

                {/* <Td>
                  <Button
                    onClick={() => {
                      setShowUpdateModal(true);
                      brandId(sc.id);
                    }}
                  >
                    Edit
                  </Button>
                </Td> */}

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
