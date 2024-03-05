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
import { brandsRequest } from "../../api/brands";

export default function TodoModal({ setShowModal, addTodo }: any) {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [punctuation, setPunctuation] = useState<number>(0);
  const [similarTerms, setSimilarTerms] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    const body = {
      name,
      description,
      title,
      punctuation,
      similarTerms,
    };

    console.log({ body });

    try {
      const allbrands = await brandsRequest.setBrands(body);
      console.log("post");
      console.log(allbrands);
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
          Add brand
        </Typography>
      </ModalHeader>

      <ModalBody>
        <TextInput
          placeholder="name brand"
          label="Name"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) => setName(e.target.value)}
          value={name}
        />
        <TextInput
          placeholder="title brand"
          label="Title"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) => setTitle(e.target.value)}
          value={title}
        />
        <TextInput
          placeholder="description brand"
          label="Description"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) => setDescription(e.target.value)}
          value={description}
        />
        <TextInput
          placeholder="similarTerms brand"
          label="SimilarTerms"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) => setSimilarTerms(e.target.value)}
          value={similarTerms}
        />
        <NumberInput
          label="Punctuation"
          placeholder="Punctuation brand"
          aria-label="Punctuation"
          name="Punctuation"
          error={undefined}
          onValueChange={(value: number) => setPunctuation(value)}
          value={punctuation}
        />
      </ModalBody>

      <ModalFooter
        startActions={
          <Button onClick={() => setShowModal(false)} variant="tertiary">
            Cancel
          </Button>
        }
        endActions={<Button type="submit">Add Brand</Button>}
      />
    </ModalLayout>
  );
}
