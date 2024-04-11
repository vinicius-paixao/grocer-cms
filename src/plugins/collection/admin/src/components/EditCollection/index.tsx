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
} from "@strapi/design-system";
import { productsRequest } from "../../../../../products/admin/src/api/products";
import axios from "axios";
import { ICollection } from "../../types/collection";
import { IProduct } from "../../types/product";

interface IEditCollectionTable {
  collection: ICollection;
  backToView: () => void;
  update: (value: boolean) => void;
}

export default function EditCollectionTable({
  collection,
  backToView,
  update
}: IEditCollectionTable) {
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<IProduct[]>([]);
  const [collectionInfo, setCollectionInfo] = useState({
    id: "",
    title: "",
    init: "",
    end: "",
    products: [] as any,
    banner: [] as any,
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

  useEffect(() => {
    if (collection) {
      setCollectionInfo({
        id: collection.id,
        title: collection.attributes.title,
        init: collection.attributes.init,
        end: collection.attributes.end,
        products: collection.attributes.products || [],
        banner: collection?.attributes?.banner
          ? collection?.attributes?.banner[0]?.url
          : [],
      });
    }
  }, [collection]);

  const handleInputChange = (e: any, key: string) => {
    setCollectionInfo({
      ...collectionInfo,
      [key]: e.target.value,
    });
  };

  useEffect(() => {
    // Adiciona automaticamente produtos marcados ao selectedProducts
    const markedProducts = collectionInfo.products.filter((product: IProduct) =>
      allProducts.some((p) => p.id === product.id)
    );
    setSelectedProducts(markedProducts);
  }, [collectionInfo.products, allProducts]);

  const handleCheckboxChange = (product: IProduct, isChecked: boolean) => {
    if (isChecked) {
      setSelectedProducts((prevSelectedProducts: any) => [
        ...prevSelectedProducts,
        product,
      ]);
    } else {
      setSelectedProducts((prevSelectedProducts: any) =>
        prevSelectedProducts.filter(
          (selectedProduct: any) => selectedProduct.id !== product.id
        )
      );
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updatedProducts = allProducts.filter((product) =>
      selectedProducts.some(
        (selectedProduct) => selectedProduct.id === product.id
      )
    );

    const dataToSend = {
      data: {
        title: collectionInfo.title,
        init: collectionInfo.init,
        end: collectionInfo.end,
        banner: collectionInfo.banner,
        products: updatedProducts.map((product) => ({ ...product })),
      },
    };

    try {
      await axios.put(`/api/collections/${collectionInfo?.id}`, dataToSend);
      update(true)
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
      <Flex gap={"50px"} marginTop="20px" direction="column">
        <Typography variant="delta" textColor="neutral800">
          Banner da Coleçao
        </Typography>
        {collectionInfo?.banner && (
          <Flex>
            <img
              className=""
              src={`http://localhost:1337${collectionInfo?.banner}`}
              alt="Preview"
            />
          </Flex>
        )}

        <Flex>
          <div className="">
            <input
              type="file"
              id={`fileInput`}
              className="hidden"
              accept="image/*"
              onChange={(e) => {
                setImage(e);
              }}
            />
            <button className="" onClick={handleFileButtonClick}>
              <img src="./cms/icon_image.svg" alt="" />
              <p>Adicione fotos ao seu projeto</p>
            </button>
          </div>
        </Flex>
      </Flex>

      <form onSubmit={handleSubmit}>
        <Flex
          gap={"50px"}
          justifyContent="space-between"
          maxWidth="500px"
          marginTop="20px"
        >
          <Typography variant="delta" textColor="neutral800">
            id da coleção:
          </Typography>
          <Typography variant="sigma" textColor="neutral800">
            {collectionInfo.id}
          </Typography>
        </Flex>

        <Flex
          gap={"50px"}
          justifyContent="space-between"
          maxWidth="500px"
          marginTop="20px"
        >
          <Typography variant="delta" textColor="neutral800">
            titulo
          </Typography>
          <TextInput
            placeholder="name brand"
            aria-label="name"
            name="text"
            onChange={(e: any) => handleInputChange(e, "title")}
            value={collectionInfo.title}
          />
        </Flex>

        <Flex direction="column" alignItems="stretch" gap={11}>
          <DatePicker
            label="inicio"
            onChange={(date: any) => {
              handleInputChange({ target: { value: date } }, "init");
            }}
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
            label="fim"
            onChange={(date: any) =>
              handleInputChange({ target: { value: date } }, "end")
            }
            selectedDate={collectionInfo.end}
          />
        </Flex>

        <Table colCount={4} rowCount={10}>
          <Thead>
            <Tr>
              <Th></Th>
              <Th>
                <Typography variant="sigma">nome</Typography>
              </Th>
              <Th>
                <Typography variant="sigma">id</Typography>
              </Th>
              <Th>
                <Typography variant="sigma">ativo</Typography>
              </Th>
              <Th>
                <Typography variant="sigma">categoria</Typography>
              </Th>
            </Tr>
          </Thead>

          <Tbody>
            {allProducts.map((product: IProduct) => {
              const isChecked = selectedProducts.some(
                (p) => p.id === product.id
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
        </Table>
        <Flex alignItems="stretch" gap={11} marginBottom="20px">
          <Button type="submit">Atualizar coleção</Button>
          <Button onClick={backToView}>Voltar para visualização</Button>
        </Flex>
      </form>
    </Box>
  );
}
