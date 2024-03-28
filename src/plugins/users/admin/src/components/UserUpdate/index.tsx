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
import { usersRequest } from "../../api/users";

export default function TodoModal({
  setShowUpdateModal,
  users,
  userEdit,
  token
}: any) {
  const [userData, setUserData] = useState({
    firstName: users?.firstName || "",
    lastName: users?.lastName || "",
    email: users?.email || "",
    phoneNumber: users?.phoneNumber || "",
    birthDate: users?.birthDate || null,
    active: users?.active || true,
  });

  // const [allBrands, setAllBrands] = useState([] as any);

  // const fetchData = async () => {
  //   try {
  //     const response = await usersRequest.updateusers();
  //     setAllBrands(response);
  //   } catch (error) {
  //     console.error("Error fetching brands:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const filter = allBrands.filter((brand: any) => brand.id === id);

  //   console.log({filter})

  //   if (filter) {
  //     setBrandData({
  //       name: "" || filter[0]?.name,
  //       title: "" || filter[0]?.title,
  //       description: "" || filter[0]?.description,
  //       punctuation: 0 || filter[0]?.punctuation,
  //       similarTerms: "" || filter[0]?.similarTerms,
  //     });
  //   }
  // }, [allBrands]);

  // console.log({ allBrands, brandData });

  const handleEdit = (fieldName: any, value: any) => {
    setUserData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    const body = {...userData, token, id: users.id}

    try {
      const response = !userEdit
        ? await usersRequest.updateusers(userData)
        : await usersRequest.userEdit(body);
      console.log("Updated brand:", response);
      setShowUpdateModal(false);
    } catch (error) {
      console.error("Error updating brand:", error);
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
          Update User
        </Typography>
      </ModalHeader>

      <ModalBody>
        {Object.entries(userData).map(([field, value]) => (
          <TextInput
            key={field}
            placeholder={`${field} brand`}
            label={field.charAt(0).toUpperCase() + field.slice(1)}
            name={field}
            value={value}
            onChange={(e: any) => handleEdit(field, e.target.value)}
          />
        ))}

        {/* <NumberInput
          label="Punctuation"
          placeholder="Punctuation brand"
          aria-label="Punctuation"
          name="Punctuation"
          error={undefined}
          onValueChange={(value: number) => handleEdit("punctuation", value)}
          value={userData.punctuation}
        /> */}
      </ModalBody>

      <ModalFooter
        startActions={
          <Button onClick={() => setShowUpdateModal(false)} variant="tertiary">
            Cancel
          </Button>
        }
        endActions={<Button type="submit">Update User</Button>}
      />
    </ModalLayout>
  );
}