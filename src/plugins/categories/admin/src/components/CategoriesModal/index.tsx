import React, { useState } from "react";

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

export default function TodoModal({ setShowModal, addTodo }: any) {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [parentCategoryId, setParentCategoryId] = useState("");
  const [similarTerms, setSimilarTerms] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    const body = {
      name,
      description,
      title,
      parentCategoryId,
      similarTerms,
    };

    console.log({ body });

    try {
      const allcategories = await categoriesRequest.setCategories(body);
      console.log("post");
      console.log(allcategories);
      setShowModal(false);
    } catch (e) {
      console.log("error", e);
    }
  };

  const getError = () => {
    if (name.length > 40) {
      return "Content is too long";
    }

    return null;
  };

  return (
    <ModalLayout
      onClose={() => setShowModal(false)}
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
        <TextInput
          placeholder="name categories"
          label="Name"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) => setName(e.target.value)}
          value={name}
        />
        <TextInput
          placeholder="title categories"
          label="Title"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) => setTitle(e.target.value)}
          value={title}
        />
        <TextInput
          placeholder="description categories"
          label="Description"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) => setDescription(e.target.value)}
          value={description}
        />
        <TextInput
          placeholder="parent categories id"
          label="Parent Categories ID"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) => setParentCategoryId(e.target.value)}
          value={parentCategoryId}
        />
        <TextInput
          placeholder="similarTerms categories"
          label="SimilarTerms"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) => setSimilarTerms(e.target.value)}
          value={similarTerms}
        />
      </ModalBody>

      <ModalFooter
        startActions={
          <Button onClick={() => setShowModal(false)} variant="tertiary">
            Cancel
          </Button>
        }
        endActions={<Button type="submit">Add Categories</Button>}
      />
    </ModalLayout>
  );
}
