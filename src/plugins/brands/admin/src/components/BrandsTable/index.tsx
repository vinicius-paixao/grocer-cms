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
import Pencil from "@strapi/icons";
import Trash from "@strapi/icons";
import Plus from "@strapi/icons/Plus";
import { brandsRequest } from "../../api/brands";

export default function TodoTable({
  todoData,
  toggleTodo,
  deleteTodo,
  editTodo,
  setShowModal,
  setShowUpdateModal,
  brandId,
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
          <TFooter onClick={() => setShowModal(true)}>Add a brand</TFooter>
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
              <Typography variant="sigma">Title</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Description</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Punctuation</Typography>
            </Th>

            <Th>
              <VisuallyHidden>Actions</VisuallyHidden>
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {todoData.map((todo: any) => {
            return (
              <Tr key={todo.id}>
                <Td>
                  <Typography textColor="neutral800">{todo.id}</Typography>
                </Td>

                <Td>
                  <Typography textColor="neutral800">{todo.name}</Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">{todo.title}</Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">
                    {todo.description}
                  </Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">
                    {todo.punctuation}
                  </Typography>
                </Td>

                <Td>
                  <Button
                    onClick={() => {
                      setShowUpdateModal(true);
                      brandId(todo.id);
                    }}
                  >
                    Edit
                  </Button>
                </Td>

                <Td>
                  <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
                </Td>

                {/* <Td>
                  {isEdit ? (
                    <Flex style={{ justifyContent: "end" }}>
                      <Button onClick={() => editTodo(todo.id, { name: "" })}>
                        Save
                      </Button>
                    </Flex>
                  ) : (
                    <Flex style={{ justifyContent: "end" }}>
                      <IconButton
                        onClick={() => setIsEdit(true)}
                        label="Edit"
                        noBorder
                        icon={<></>}
                      />

                      <Box paddingLeft={1}>
                        <IconButton
                          onClick={() => deleteTodo(todo)}
                          label="Delete"
                          noBorder
                          icon={<></>}
                        />
                      </Box>
                    </Flex>
                  )}
                </Td> */}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}
