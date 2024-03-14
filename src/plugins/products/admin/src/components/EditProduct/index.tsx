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
import { productsRequest } from "../../api/products";

export default function TodoTable({
  productEdit,
  productId,
  backToProduct,
}: any) {
  const [productFilter, setProductFilter] = useState({} as any);
  const [updateProduct, setUpdateProduct] = useState({} as any);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    const mergedProduct = { ...productFilter, ...updateProduct };

    // Verifica se algum campo foi editado
    const hasChanges = Object.keys(updateProduct).some(
      (key) => updateProduct[key] !== productFilter[key]
    );

    if (!hasChanges) {
      console.log("Nenhuma alteração detectada.");
      return;
    }

    console.log({ mergedProduct });

    try {
      const allbrands = await productsRequest.updateProduct(
        mergedProduct,
        productId
      );
      console.log("post");
      console.log(allbrands);
      // setShowModal(false);
    } catch (e) {
      console.log("error", e);
    }
  };

  const getError = () => {
    // if (name?.length > 40) {
    //   return "Content is too long";
    // }

    return null;
  };

  useEffect(() => {
    const filter = productEdit.filter(
      (product: any) => product.id === productId
    )[0];

    console.log({ filter });

    if (filter) {
      setProductFilter({
        productId: filter?.id,
        name: filter?.name,
        similarTerms: filter?.similarTerms,
        slug: filter?.slug,
        title: filter?.title,
        shortDescription: filter?.shortDescription,
        longDescription: filter?.longDescription,
        brandId: filter?.brandId,
        categoryId: filter?.categoryId,
        commercialPoliticId: filter?.commercialPoliticId,
        displayInSite: filter?.displayInSite,
        displayInSoldOut: true,
        fiscalCode: filter?.fiscalCode,
        punctuation: filter?.punctuation,
      });
    }
  }, [productEdit]);

  console.log({ productFilter });

  // TEXT_VARIANTS = [ALPHA, BETA, DELTA, EPSILON, OMEGA, PI, SIGMA] as const;

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
        marginTop="20px"
      >
        <Typography variant="delta" textColor="neutral800">
          product Id:
        </Typography>
        <Typography variant="sigma" textColor="neutral800">
          {productFilter?.productId}
        </Typography>
      </Flex>

      <Flex
        gap={"50px"}
        justifyContent="space-between"
        maxWidth="500px"
        marginTop="20px"
      >
        <Typography variant="delta" textColor="neutral800">
          brandId:
        </Typography>
        <Typography variant="sigma" textColor="neutral800">
          {productFilter?.brandId}
        </Typography>
      </Flex>

      <Flex
        gap={"50px"}
        justifyContent="space-between"
        maxWidth="500px"
        marginTop="20px"
      >
        <Typography variant="delta" textColor="neutral800">
          fiscalCode:
        </Typography>
        <Typography variant="sigma" textColor="neutral800">
          {productFilter?.fiscalCode}
        </Typography>
      </Flex>

      <Flex
        gap={"50px"}
        justifyContent="space-between"
        maxWidth="500px"
        marginTop="20px"
      >
        <Typography variant="delta" textColor="neutral800">
          categoryId:
        </Typography>
        <Typography variant="sigma" textColor="neutral800">
          {productFilter?.categoryId}
        </Typography>
      </Flex>

      <Flex
        gap={"50px"}
        justifyContent="space-between"
        maxWidth="500px"
        marginTop="20px"
      >
        <Typography variant="delta" textColor="neutral800">
          commercialPoliticId:
        </Typography>
        <Typography variant="sigma" textColor="neutral800">
          {productFilter?.commercialPoliticId}
        </Typography>
      </Flex>

      <Flex
        gap={"50px"}
        justifyContent="space-between"
        maxWidth="500px"
        marginTop="20px"
      >
        <Typography variant="delta" textColor="neutral800">
          name
        </Typography>
        <TextInput
          placeholder="name brand"
          aria-label="name"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) =>
            setUpdateProduct({ ...updateProduct, name: e.target.value })
          }
          value={updateProduct.name || productFilter?.name}
        />
      </Flex>

      <Flex
        gap={"50px"}
        justifyContent="space-between"
        maxWidth="500px"
        marginTop="20px"
      >
        <Typography variant="delta" textColor="neutral800">
          slug
        </Typography>
        <TextInput
          placeholder="name brand"
          aria-label="slug"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) =>
            setUpdateProduct({ ...updateProduct, slug: e.target.value })
          }
          value={productFilter?.slug || updateProduct.slug}
        />
      </Flex>

      <Flex
        gap={"50px"}
        justifyContent="space-between"
        maxWidth="500px"
        marginTop="20px"
      >
        <Typography variant="delta" textColor="neutral800">
          title
        </Typography>
        <TextInput
          placeholder="name brand"
          aria-label="slug"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) =>
            setUpdateProduct({ ...updateProduct, title: e.target.value })
          }
          value={productFilter?.title || updateProduct.title}
        />
      </Flex>

      <Flex
        gap={"50px"}
        justifyContent="space-between"
        maxWidth="500px"
        marginTop="20px"
      >
        <Typography variant="delta" textColor="neutral800">
          shortDescription
        </Typography>
        <TextInput
          placeholder="name brand"
          aria-label="slug"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) =>
            setUpdateProduct({
              ...updateProduct,
              shortDescription: e.target.value,
            })
          }
          value={
            productFilter?.shortDescription || updateProduct.shortDescription
          }
        />
      </Flex>

      <Flex
        gap={"50px"}
        justifyContent="space-between"
        maxWidth="500px"
        marginTop="20px"
      >
        <Typography variant="delta" textColor="neutral800">
          longDescription
        </Typography>
        <TextInput
          placeholder="name brand"
          aria-label="slug"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) =>
            setUpdateProduct({
              ...updateProduct,
              longDescription: e.target.value,
            })
          }
          value={
            productFilter?.longDescription || updateProduct.longDescription
          }
        />
      </Flex>

      <Flex
        gap={"50px"}
        justifyContent="space-between"
        maxWidth="500px"
        marginTop="20px"
      >
        <Typography variant="delta" textColor="neutral800">
          displayInSite
        </Typography>
        <ToggleInput
          aria-label="Enabled"
          onLabel="True"
          offLabel="False"
          checked={
            updateProduct.displayInSite !== undefined
              ? updateProduct.displayInSite
              : productFilter?.displayInSite
          }
          onChange={(e: any) =>
            setUpdateProduct({
              ...updateProduct,
              displayInSite: e.target.checked,
            })
          }
        />
      </Flex>

      <Flex gap={"50px"} maxWidth="500px" marginTop="20px">
        <Typography variant="delta" textColor="neutral800">
          displayInSoldOut
        </Typography>
        <ToggleInput
          size="S"
          aria-label="Enabled"
          onLabel="True"
          offLabel="False"
          checked={
            updateProduct.displayInSoldOut !== undefined
              ? updateProduct.displayInSoldOut
              : productFilter?.displayInSoldOut
          }
          onChange={(e: any) =>
            setUpdateProduct({
              ...updateProduct,
              displayInSoldOut: e.target.checked,
            })
          }
        />
      </Flex>

      <Flex
        gap={"50px"}
        justifyContent="space-between"
        maxWidth="500px"
        marginTop="20px"
      >
        <Typography variant="delta" textColor="neutral800">
          punctuation
        </Typography>
        <NumberInput
          placeholder="Punctuation brand"
          aria-label="punctuation"
          name="Punctuation"
          error={undefined}
          onValueChange={(value: number) =>
            setUpdateProduct({ ...updateProduct, punctuation: value })
          }
          value={productFilter?.punctuation}
        />
      </Flex>

      <Flex
        gap={"50px"}
        justifyContent="space-between"
        maxWidth="500px"
        marginTop="50px"
      >
        <Button onClick={handleSubmit}>Save</Button>
        <Button variant={"tertiary"} onClick={backToProduct}>
          back
        </Button>
      </Flex>
    </Box>
  );
}
