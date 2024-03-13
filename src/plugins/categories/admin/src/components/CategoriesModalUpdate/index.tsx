import React, { useEffect, useState } from "react";
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

export default function TodoModal({ setShowUpdateModal, addTodo, id }: any) {
  const [categoriesData, setCategoriesData] = useState({
    name: "",
    title: "",
    description: "",
    similarTerms: "",
  });

  const [allCategories, setAllCategories] = useState([] as any);

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
    const filter = allCategories.filter((categories: any) => categories.id === id);

    console.log({filter})

    if (filter) {
      setCategoriesData({
        name: "" || filter[0]?.name,
        title: "" || filter[0]?.title,
        description: "" || filter[0]?.description,
        similarTerms: "" || filter[0]?.similarTerms,
      });
    }
  }, [allCategories]);

  console.log({ allCategories, categoriesData });

  const handleEdit = (fieldName: any, value: any) => {
    setCategoriesData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      const response = await categoriesRequest.updateCategories(categoriesData, id);
      console.log("Updated categories:", response);
      setShowUpdateModal(false);
    } catch (error) {
      console.error("Error updating categories:", error);
    }
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
          Add categories
        </Typography>
      </ModalHeader>

      <ModalBody>
        {Object.entries(categoriesData).map(([field, value]) => (
          <TextInput
            key={field}
            placeholder={`${field} categories`}
            label={field.charAt(0).toUpperCase() + field.slice(1)}
            name={field}
            value={value}
            onChange={(e: any) => handleEdit(field, e.target.value)}
          />
        ))}
      </ModalBody>

      <ModalFooter
        startActions={
          <Button onClick={() => setShowUpdateModal(false)} variant="tertiary">
            Cancel
          </Button>
        }
        endActions={<Button type="submit">Update categories</Button>}
      />
    </ModalLayout>
  );
}
