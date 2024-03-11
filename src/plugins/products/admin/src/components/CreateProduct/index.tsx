import React, { useEffect, useState } from "react";

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
  Flex,
  TextInput,
  NumberInput,
  ToggleInput,
} from "@strapi/design-system";

export default function TodoTable({backToProduct}: any) {
  const [createProduct, setCreateProduct] = useState({} as any);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    // const body = {
    //   name,
    //   description,
    //   title,
    //   punctuation,
    //   similarTerms,
    // };

    // console.log({ body });

    // try {
    //   const allbrands = await brandsRequest.setBrands(body);
    //   console.log("post");
    //   console.log(allbrands);
    //   setShowModal(false);
    // } catch (e) {
    //   console.log("error", e);
    // }
  };

  const getError = () => {
    // if (name?.length > 40) {
    //   return "Content is too long";
    // }

    return null;
  };

  return (
    <Box
      background="neutral0"
      hasRadius={true}
      shadow="filterShadow"
      padding={8}
      style={{ marginTop: "10px" }}
    >
      <Flex maxWidth="1000px" marginTop="20px">
        <TextInput
          placeholder="name brand"
          label="Name"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) =>
            setCreateProduct({ ...createProduct, name: e.target.value })
          }
          value={createProduct.name}
        />
      </Flex>

      <Flex maxWidth="1000px" marginTop="20px">
        <TextInput
          placeholder="similarTerms"
          label="similarTerms"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) =>
            setCreateProduct({ ...createProduct, similarTerms: e.target.value })
          }
          value={createProduct.similarTerms}
        />
      </Flex>

      <Flex maxWidth="1000px" marginTop="20px">
        <TextInput
          placeholder="slug"
          label="slug"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) =>
            setCreateProduct({ ...createProduct, slug: e.target.value })
          }
          value={createProduct.slug}
        />
      </Flex>

      <Flex maxWidth="1000px" marginTop="20px">
        <TextInput
          placeholder="title"
          label="title"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) =>
            setCreateProduct({ ...createProduct, title: e.target.value })
          }
          value={createProduct.title}
        />
      </Flex>

      <Flex maxWidth="1000px" marginTop="20px">
        <TextInput
          placeholder="shortDescription"
          label="shortDescription"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) =>
            setCreateProduct({
              ...createProduct,
              shortDescription: e.target.value,
            })
          }
          value={createProduct.shortDescription}
        />
      </Flex>

      <Flex maxWidth="1000px" marginTop="20px">
        <TextInput
          placeholder="longDescription"
          label="longDescription"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) =>
            setCreateProduct({
              ...createProduct,
              longDescription: e.target.value,
            })
          }
          value={createProduct.longDescription}
        />
      </Flex>

      <Flex maxWidth="1000px" marginTop="20px">
        <TextInput
          placeholder="brandId"
          label="brandId"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) =>
            setCreateProduct({ ...createProduct, brandId: e.target.value })
          }
          value={createProduct.brandId}
        />
      </Flex>

      <Flex maxWidth="1000px" marginTop="20px">
        <TextInput
          placeholder="categoryId"
          label="categoryId"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) =>
            setCreateProduct({ ...createProduct, categoryId: e.target.value })
          }
          value={createProduct.categoryId}
        />
      </Flex>

      <Flex maxWidth="1000px" marginTop="20px">
        <TextInput
          placeholder="commercialPoliticId"
          label="commercialPoliticId"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) =>
            setCreateProduct({
              ...createProduct,
              commercialPoliticId: e.target.value,
            })
          }
          value={createProduct.commercialPoliticId}
        />
      </Flex>

      <Flex maxWidth="1000px" marginTop="20px">
        <TextInput
          placeholder="displayInSite"
          label="displayInSite"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) =>
            setCreateProduct({
              ...createProduct,
              displayInSite: e.target.value,
            })
          }
          value={createProduct.displayInSite}
        />
      </Flex>

      <Flex maxWidth="1000px" marginTop="20px">
        <TextInput
          placeholder="displayInSoldOut"
          label="displayInSoldOut"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) =>
            setCreateProduct({
              ...createProduct,
              displayInSoldOut: e.target.value,
            })
          }
          value={createProduct.displayInSoldOut}
        />
      </Flex>

      <Flex maxWidth="100%" marginTop="20px">
        <TextInput
          placeholder="fiscalCode"
          label="fiscalCode"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) =>
            setCreateProduct({ ...createProduct, fiscalCode: e.target.value })
          }
          value={createProduct.fiscalCode}
        />
      </Flex>

      <Flex maxWidth="1000px" marginTop="20px">
        <TextInput
          placeholder="punctuation"
          label="punctuation"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) =>
            setCreateProduct({ ...createProduct, punctuation: e.target.value })
          }
          value={createProduct.punctuation}
        />
      </Flex>

      <Flex
        gap={"50px"}
        justifyContent="space-between"
        maxWidth="500px"
        marginTop="20px"
      >
        <Button
          onClick={() => {
            console.log("saved");
          }}
        >
          send
        </Button>
        <Button
          variant={"tertiary"}
          onClick={backToProduct}
        >
          back
        </Button>
      </Flex>
    </Box>
  );
}
