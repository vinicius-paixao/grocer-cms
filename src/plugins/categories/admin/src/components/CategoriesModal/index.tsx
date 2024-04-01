import { FormEvent, useState } from "react";

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
import { categoriesRequest } from "../../api/categories";

interface ICategories {
  setShowModal: (value: boolean) => void;
  update: (value: boolean) => void;
}

export default function CategoriesModal({ setShowModal, update }: ICategories) {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [parentCategoryId, setParentCategoryId] = useState("");
  const [similarTerms, setSimilarTerms] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const body = {
      name,
      description,
      title,
      parentCategoryId,
      similarTerms,
    };

    // console.log({ body });

    try {
      const allcategories = await categoriesRequest.setCategories(body);
      // console.log("post");
      console.log(allcategories);
      update(true);
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
          Adicionar Categoria
        </Typography>
      </ModalHeader>

      <ModalBody>
        <TextInput
          placeholder="nome da categoria"
          label="Nome"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) => setName(e.target.value)}
          value={name}
        />
        <TextInput
          placeholder="titulo da categoria"
          label="Titulo"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) => setTitle(e.target.value)}
          value={title}
        />
        <TextInput
          placeholder="descrição da categoria"
          label="Descrição"
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
          placeholder="categorias similares"
          label="Categorias similares"
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
            Cancelar
          </Button>
        }
        endActions={<Button type="submit">Adicionar Categoria</Button>}
      />
    </ModalLayout>
  );
}
