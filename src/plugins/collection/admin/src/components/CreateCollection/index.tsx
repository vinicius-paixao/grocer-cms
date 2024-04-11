import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import {
  Box,
  Button,
  Typography,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  Flex,
  TextInput,
  DatePicker,
  VisuallyHidden,
} from "@strapi/design-system";
import { productsRequest } from "../../../../../products/admin/src/api/products";
import axios from "axios";
import { IProduct } from "../../types/product";

interface ICreateCollectionTable {
  backToCollection: () => void;
}

export default function CreateCollectionTable({
  backToCollection,
}: ICreateCollectionTable) {
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<IProduct[]>([]);
  const [collectionInfo, setCollectionInfo] = useState({
    title: "",
    init: "",
    end: "",
    products: [] as any,
    banner: null,
  });

  const fetchData = async () => {
    try {
      const allProducts = await productsRequest.getAllProducts();
      setAllProducts(allProducts);
    } catch (e) {
      console.error("error", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCheckboxChange = (product: IProduct, isChecked: boolean) => {
    if (isChecked) {
      setSelectedProducts((prevSelectedProducts) => [
        ...prevSelectedProducts,
        product,
      ]);
    } else {
      setSelectedProducts((prevSelectedProducts) =>
        prevSelectedProducts.filter(
          (selectedProduct) => selectedProduct.id !== product.id
        )
      );
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dataToSend = {
      data: {
        title: collectionInfo.title,
        init: collectionInfo.init,
        end: collectionInfo.end,
        products: selectedProducts.map((product) => ({ ...product })),
        banner: collectionInfo.banner,
      },
    };

    try {
      await axios.post(`/api/collections`, dataToSend);
      setCollectionInfo({
        title: "",
        init: "",
        end: "",
        products: [],
        banner: null,
      });
      setSelectedProducts([]);
    } catch (e) {
      console.error("error", e);
    }
  };

  async function setImage(e: ChangeEvent) {
    const target = e.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    const formData = new FormData();
    formData.append("files", file);

    try {
      const response = await axios.post("/api/upload", formData);
      const data = response.data;
      setCollectionInfo({ ...collectionInfo, banner: data });
    } catch (error) {
      console.error(error);
    }
  }

  const handleFileButtonClick = (): void => {
    const fileInput = document.getElementById(`fileInput`) as HTMLInputElement;

    fileInput.click();
  };

  return (
    <Box
      background="neutral0"
      hasRadius={true}
      shadow="filterShadow"
      padding={8}
      style={{ marginTop: "10px" }}
    >
      <Flex
        gap={"50px"}
        justifyContent="space-between"
        maxWidth="500px"
        marginBottom="20px"
      >
        <Typography variant="delta" textColor="neutral800">
          Banner Collection
        </Typography>

        <Flex
          direction="column"
          gap="3px"
          alignItems="stretch"
          marginBottom="20px"
        >
          <VisuallyHidden>
            <input
              type="file"
              id={`fileInput`}
              className="hidden"
              accept="image/*"
              onChange={(e) => {
                setImage(e);
              }}
            />
          </VisuallyHidden>
          <Button onClick={handleFileButtonClick}>
            <img src="./cms/icon_image.svg" alt="" />
            <Typography variant="delta" textColor="neutral800">
              Adicione fotos ao seu projeto
            </Typography>
          </Button>
        </Flex>
      </Flex>

      <form onSubmit={handleSubmit}>
        <Flex
          gap={"50px"}
          justifyContent="space-between"
          maxWidth="500px"
          marginBottom="20px"
        >
          <Typography variant="delta" textColor="neutral800">
            Title collection
          </Typography>

          <TextInput
            placeholder="Collection title"
            aria-label="title"
            name="text"
            onChange={(e: any) =>
              setCollectionInfo({ ...collectionInfo, title: e.target.value })
            }
            value={collectionInfo.title}
          />
        </Flex>

        <Flex
          direction="column"
          alignItems="stretch"
          gap={11}
          marginBottom="20px"
        >
          <DatePicker
            label="Init"
            onChange={(date: any) =>
              setCollectionInfo({ ...collectionInfo, init: date })
            }
            selectedDate={collectionInfo.init}
          />
        </Flex>

        <Flex
          direction="column"
          alignItems="stretch"
          gap={11}
          marginBottom="20px"
        >
          <DatePicker
            label="End"
            onChange={(date: any) =>
              setCollectionInfo({ ...collectionInfo, end: date })
            }
            selectedDate={collectionInfo.end}
          />
        </Flex>

        <Table colCount={4} rowCount={10}>
          {allProducts?.length > 0 ? (
            <>
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th>
                    <Typography variant="sigma">Nome</Typography>
                  </Th>
                  <Th>
                    <Typography variant="sigma">ID</Typography>
                  </Th>
                  <Th>
                    <Typography variant="sigma">Ativo</Typography>
                  </Th>
                  <Th>
                    <Typography variant="sigma">Categoria</Typography>
                  </Th>
                </Tr>
              </Thead>

              <Tbody>
                {allProducts.map((product) => {
                  const isChecked = selectedProducts.some(
                    (p: any) => p.id === product.id
                  );

                  return (
                    <Tr key={product.id}>
                      <Td>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={(e) =>
                            handleCheckboxChange(product, e.target.checked)
                          }
                        />
                      </Td>
                      <Td>{product?.name}</Td>
                      <Td>{product?.id}</Td>
                      <Td>{product?.active ? "True" : "False"}</Td>
                      <Td>{product?.category}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </>
          ) : (
            <Typography variant="sigma" padding="20px">
              Houve um problema ao carregar os produtos
            </Typography>
          )}
        </Table>

        <Flex alignItems="stretch" gap={11} marginTop="20px">
          <Button type="submit">Criar coleção</Button>
          <Button onClick={backToCollection}>retornar</Button>
        </Flex>
      </form>
    </Box>
  );
}
