import { FormEvent, useState } from "react";

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

interface IBrandModal {
  setShowModal: (value: boolean) => void;
  update: (value: boolean) => void;
}

export default function BrandModal({ setShowModal, update }: IBrandModal) {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [punctuation, setPunctuation] = useState<number>(0);
  const [similarTerms, setSimilarTerms] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const body = {
      name,
      description,
      title,
      punctuation,
      similarTerms,
    };

    // console.log({ body });

    try {
      await brandsRequest.setBrands(body);
      // console.log("post");
      // console.log(allbrands);
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
          Adicionar Marca
        </Typography>
      </ModalHeader>

      <ModalBody>
        <TextInput
          placeholder="nome da marca"
          label="Nome"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) => setName(e.target.value)}
          value={name}
        />
        <TextInput
          placeholder="titulo da marca"
          label="Titulo"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) => setTitle(e.target.value)}
          value={title}
        />
        <TextInput
          placeholder="descrição da marca"
          label="Descrição"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) => setDescription(e.target.value)}
          value={description}
        />
        <TextInput
          placeholder="termos similares"
          label="Termos similares"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) => setSimilarTerms(e.target.value)}
          value={similarTerms}
        />
        <NumberInput
          label="Pontuação"
          placeholder="pontuação da marca"
          aria-label="Pontuação"
          name="Pontuação"
          error={undefined}
          onValueChange={(value: number) => setPunctuation(value)}
          value={punctuation}
        />
      </ModalBody>

      <ModalFooter
        startActions={
          <Button onClick={() => setShowModal(false)} variant="tertiary">
            Cancelar
          </Button>
        }
        endActions={<Button type="submit">Adicionar</Button>}
      />
    </ModalLayout>
  );
}
