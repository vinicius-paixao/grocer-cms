import React, { FormEvent, useEffect, useState } from "react";
import {
  ModalLayout,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Typography,
  Button,
  TextInput,
  // NumberInput,
} from "@strapi/design-system";
import { brandsRequest } from "../../api/brands";

interface IBrandModalUpdate {
  name: string;
  title: string;
  description: string;
  punctuation: any;
  similarTerms: string;
}

interface IUpdateModal {
  setShowUpdateModal: (value: boolean) => void;
  id: string;
  update: (value: boolean) => void;
}

export default function UpdateModal({ setShowUpdateModal, id, update }: IUpdateModal) {
  const [allBrands, setAllBrands] = useState<IBrandModalUpdate[]>([]);
  const [brandData, setBrandData] = useState({
    name: "",
    title: "",
    description: "",
    punctuation: 0,
    similarTerms: "",
  });

  const fetchData = async () => {
    try {
      const response = await brandsRequest.getAllBrands();
      setAllBrands(response);
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filter = allBrands.filter((brand: any) => brand.id === id);

    // console.log({ filter });

    if (filter) {
      setBrandData({
        name: "" || filter[0]?.name,
        title: "" || filter[0]?.title,
        description: "" || filter[0]?.description,
        punctuation: 0 || filter[0]?.punctuation,
        similarTerms: "" || filter[0]?.similarTerms,
      });
    }
  }, [allBrands]);

  // console.log({ allBrands, brandData });

  const handleEdit = (fieldName: string, value: string) => {
    setBrandData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      const response = await brandsRequest.updateBrands(brandData, id);
      console.log("Updated brand:", response);
      update(true)
      setShowUpdateModal(false);
    } catch (error) {
      console.error("Error updating brand:", error);
    }
  };

  const fieldNameMap: { [key: string]: string } = {
    name: "nome",
    title: "titulo",
    description: "descrição",
    punctuation: "pontuação",
    similarTerms: "termos similares",
  };

  return (
    <ModalLayout
      onClose={() => setShowUpdateModal(false)}
      labelledBy="title"
      as="form"
      onSubmit={handleSubmit}
    >
      <ModalHeader>
        <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title">
          Atualizar marca
        </Typography>
      </ModalHeader>

      <ModalBody>
        {Object.entries(brandData).map(([field, value]) => {
          const newFieldName = fieldNameMap[field] || field;
          console.log({ field });

          return (
            <TextInput
              key={field}
              placeholder={`${field} brand`}
              label={
                newFieldName.charAt(0).toUpperCase() + newFieldName.slice(1)
              }
              name={field}
              value={value}
              onChange={(e: any) => handleEdit(field, e.target.value)}
            />
          );
        })}

        {/* <NumberInput
          label="Punctuation"
          placeholder="Punctuation brand"
          aria-label="Punctuation"
          name="Punctuation"
          error={undefined}
          onValueChange={(value: number) => handleEdit("punctuation", value)}
          value={brandData.punctuation}
        /> */}
      </ModalBody>

      <ModalFooter
        startActions={
          <Button onClick={() => setShowUpdateModal(false)} variant="tertiary">
            Cancel
          </Button>
        }
        endActions={<Button type="submit">Atualizar marca</Button>}
      />
    </ModalLayout>
  );
}
