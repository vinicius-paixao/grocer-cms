import React, { FormEvent, useEffect, useState } from "react";
import {
  ModalLayout,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Typography,
  Button,
  TextInput,
  NumberInput,
} from "@strapi/design-system";
import { categoriesRequest } from "../../api/categories";
import { ICategories } from "../../types/categories";

interface IUpdateModal {
  setShowUpdateModal: (value: boolean) => void;
  id: string;
  update: (value: boolean) => void;
}

export default function UpdateModal({
  setShowUpdateModal,
  id,
  update,
}: IUpdateModal) {
  const [categoriesData, setCategoriesData] = useState({
    name: "",
    title: "",
    description: "",
    similarTerms: "",
  });

  const [allCategories, setAllCategories] = useState<ICategories[]>([]);

  const fetchData = async () => {
    try {
      const response = await categoriesRequest.getAllCategories();
      setAllCategories(response);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filter = allCategories.filter(
      (categories: any) => categories.id === id
    );

    console.log({ filter });

    if (filter) {
      setCategoriesData({
        name: "" || filter[0]?.name,
        title: "" || filter[0]?.title,
        description: "" || filter[0]?.description,
        similarTerms: "" || filter[0]?.similarTerms,
      });
    }
  }, [allCategories]);

  const handleEdit = (fieldName: string, value: string) => {
    setCategoriesData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      const response = await categoriesRequest.updateCategories(
        categoriesData,
        id
      );
      console.log("Updated categories:", response);
      update(true);
      setShowUpdateModal(false);
    } catch (error) {
      console.error("Error updating categories:", error);
    }
  };

  const fieldNameMap: { [key: string]: string } = {
    name: "nome",
    title: "titulo",
    description: "descrição",
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
          Atualizar categoria
        </Typography>
      </ModalHeader>

      <ModalBody>
        {Object.entries(categoriesData).map(([field, value]) => {
          const newFieldName = fieldNameMap[field] || field;

          return(
          <TextInput
            key={field}
            placeholder={`${field} categories`}
            label={newFieldName.charAt(0).toUpperCase() + newFieldName.slice(1)}
            name={field}
            value={value}
            onChange={(e: any) => handleEdit(field, e.target.value)}
          />
        )})}
      </ModalBody>

      <ModalFooter
        startActions={
          <Button onClick={() => setShowUpdateModal(false)} variant="tertiary">
            Cancelar
          </Button>
        }
        endActions={<Button type="submit">Atualizar</Button>}
      />
    </ModalLayout>
  );
}
