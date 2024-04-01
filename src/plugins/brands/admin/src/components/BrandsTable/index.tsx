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
import { brandsData } from "../../types/brands";

interface IBrandTable {
  brandData: brandsData[];
  deleteBrand: (value: string) => void;
  setShowModal: (value: boolean) => void;
  setShowUpdateModal: (value: boolean) => void;
  brandId: (value: string) => void;
}

export default function BrandTable({
  brandData,
  deleteBrand,
  setShowModal,
  setShowUpdateModal,
  brandId,
}: IBrandTable) {
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
          <TFooter onClick={() => setShowModal(true)}>Adicionar marca</TFooter>
        }
      >
        <Thead>
          <Tr>
            <Th>
              <Typography variant="sigma">ID</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Nome</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Titulo</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Descrição</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Pontuação</Typography>
            </Th>

            <Th>
              <VisuallyHidden>Actions</VisuallyHidden>
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {brandData?.map((brand: any) => {
            return (
              <Tr key={brand.id}>
                <Td>
                  <Typography textColor="neutral800">{brand.id}</Typography>
                </Td>

                <Td>
                  <Typography textColor="neutral800">{brand.name}</Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">{brand.title}</Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">
                    {brand.description}
                  </Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">
                    {brand.punctuation}
                  </Typography>
                </Td>

                <Td>
                  <Button
                    onClick={() => {
                      setShowUpdateModal(true);
                      brandId(brand.id);
                    }}
                  >
                    Editar
                  </Button>
                </Td>

                <Td>
                  <Button onClick={() => deleteBrand(brand.id)}>Deletar</Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}
