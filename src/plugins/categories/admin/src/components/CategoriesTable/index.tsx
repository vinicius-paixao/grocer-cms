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
import { ICategories } from "../../types/categories";

interface ICategorieTable {
  categorieData: ICategories[]
  deleteCategorie: (value: string) => void
  setShowModal: (value: boolean) => void
  setShowUpdateModal: (value: boolean) => void
  brandId: (value: string) => void
}

export default function CategorieTable({
  categorieData,
  deleteCategorie,
  setShowModal,
  setShowUpdateModal,
  brandId,
}: ICategorieTable) {
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
          <TFooter onClick={() => setShowModal(true)}>Add a categories</TFooter>
        }
      >
        <Thead>
          <Tr>
            <Th>
              <Typography variant="sigma">ID</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Id de contrato</Typography>
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
              <Typography variant="sigma">Id de categoria similar</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">categoria similar</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">termos similares</Typography>
            </Th>

            <Th>
              <VisuallyHidden>Actions</VisuallyHidden>
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {categorieData.map((categorie: any) => {
            return (
              <Tr key={categorie.id}>
                <Td>
                  <Typography textColor="neutral800">{categorie.id}</Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">{categorie.contractAccountId}</Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">{categorie.name}</Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">{categorie.title}</Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">
                    {categorie.description}
                  </Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">
                    {categorie.parentCategoryId}
                  </Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">
                    {categorie.parentCategory}
                  </Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">
                    {categorie.similarTerms}
                  </Typography>
                </Td>

                <Td>
                  <Button
                    onClick={() => {
                      setShowUpdateModal(true);
                      brandId(categorie.id);
                    }}
                  >
                    Editar
                  </Button>
                </Td>

                <Td>
                  <Button onClick={() => deleteCategorie(categorie.id)}>Deletar</Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}
