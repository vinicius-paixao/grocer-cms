import { FC, useEffect, useState } from "react";
import {
  Layout,
  BaseHeaderLayout,
  ContentLayout,
  EmptyStateLayout,
  Button,
  Box,
  Loader,
} from "@strapi/design-system";
import CategoriesTable from "../../components/CategoriesTable";
import CategoriesModal from "../../components/CategoriesModal";
import CategoriesModalUpdate from "../../components/CategoriesModalUpdate";
import { categoriesRequest } from "../../api/categories";
import { ICategories } from "../../types/categories";

const CategoriesCollection: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [allCategories, setAllCategories] = useState<ICategories[]>([]);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const [updateReload, setUpdateReload] = useState(false);
  const [createReload, setCreateReload] = useState(false);

  const fetchData = async () => {
    setLoading(true)
    try {
      const allcategories = await categoriesRequest.getAllCategories();
      setLoading(false)
      console.log(allcategories);

      setAllCategories(allcategories);
    } catch (e) {
      setLoading(false)
      console.log("error", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [updateReload, createReload]);

  // console.log({ allCategories });

  // async function toggleTodo(data: any) {
  //   alert("Add Toggle Todo in API");
  // }

  async function deleteTodo(id: string) {
    // console.log("delete", { data });
    try {
      const allCategories = await categoriesRequest.deleteCategories(id);
      // console.log("delete");
      console.log(allCategories);
      fetchData();
      setShowModal(false);
    } catch (e) {
      console.log("error", e);
    }
  }

  // async function editTodo(id: any) {
  //   alert("Add Edit Todo in API");
  // }

  async function categoriesId(id: string) {
    setId(id);
  }

  return (
    <Layout>
      {showModal && <CategoriesModal setShowModal={setShowModal} update={setCreateReload}/>}
      {showUpdateModal && (
        <CategoriesModalUpdate
          setShowUpdateModal={setShowUpdateModal}
          id={id}
          update={setUpdateReload}
        />
      )}
      <BaseHeaderLayout
        title="Categorias"
        subtitle="Todas suas categorias em um unico lugar."
        as="h2"
      />
      <ContentLayout>
      {loading ? (
          <Box padding={8} background="primary100">
            <Loader />
          </Box> ): <>{allCategories?.length > 0 ? (
          <Box padding={8} background="primary100">
            <CategoriesTable
              categorieData={allCategories}
              setShowModal={setShowModal}
              setShowUpdateModal={setShowUpdateModal}
              deleteCategorie={deleteTodo}
              brandId={categoriesId}
            />
          </Box>
        ) : (
          <EmptyStateLayout
            icon={""}
            content="Não ha categorias..."
            action={
              <Button
                onClick={() => {
                  setShowModal(true);
                }}
                variant="secondary"
              >
                Adicionar categorias
              </Button>
            }
          />
        )}</> }

      </ContentLayout>
    </Layout>
  );
};

export default CategoriesCollection;
