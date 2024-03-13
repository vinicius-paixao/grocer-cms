import { FC, useEffect, useState } from "react";
import {
  Layout,
  BaseHeaderLayout,
  HeaderLayout,
  ContentLayout,
  EmptyStateLayout,
  Button,
  Tabs,
  Tab,
  TabGroup,
  TabPanels,
  TabPanel,
  Box,
} from "@strapi/design-system";
import CategoriesTable from "../../components/CategoriesTable";
import CategoriesModal from "../../components/CategoriesModal";

import { categoriesRequest } from "../../api/categories";
import CategoriesModalUpdate from "../../components/CategoriesModalUpdate";

const CategoriesCollection: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [allCategories, setAllCategories] = useState([]);
  const [id, setId] = useState("");

  const fetchData = async () => {
    try {
      const allcategories = await categoriesRequest.getAllCategories();
      console.log(allcategories);

      setAllCategories(allcategories);
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log({ allCategories });

  async function toggleTodo(data: any) {
    alert("Add Toggle Todo in API");
  }

  async function deleteTodo(data: any) {
    console.log("delete", { data });
    try {
      const allCategories = await categoriesRequest.deleteCategories(data);
      console.log("delete");
      console.log(allCategories);
      setShowModal(false);
    } catch (e) {
      console.log("error", e);
    }
  }

  async function editTodo(id: any) {
    alert("Add Edit Todo in API");
  }

  async function categoriesId(id: any) {
    console.log("dasda", id);
    setId(id);
  }

  return (
    <Layout>
      {showModal && <CategoriesModal setShowModal={setShowModal} />}
      {showUpdateModal && (
        <CategoriesModalUpdate setShowUpdateModal={setShowUpdateModal} id={id} />
      )}
      <BaseHeaderLayout
        title="Categories"
        subtitle="All your categories in one place."
        as="h2"
      />
      <ContentLayout>
        {allCategories?.length > 0 ? (
          <Box padding={8} background="primary100">
            <CategoriesTable
              todoData={allCategories}
              setShowModal={setShowModal}
              setShowUpdateModal={setShowUpdateModal}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              brandId={categoriesId}
            />
          </Box>
        ) : (
          <EmptyStateLayout
            icon={""}
            content="You don't have any categories yet..."
            action={
              <Button
                onClick={() => {
                  setShowModal(true);
                }}
                variant="secondary"
              >
                Add Categories
              </Button>
            }
          />
        )}
      </ContentLayout>
    </Layout>
  );
};

export default CategoriesCollection;
