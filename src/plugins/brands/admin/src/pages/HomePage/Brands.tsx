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
import BrandsTable from "../../components/BrandsTable";
import BrandModal from "../../components/BrandModal";
import { brandsRequest } from "../../api/brands";
import BrandModalUpdate from "../../components/BrandModalUpdate";
import { brandsData } from "../../types/brands";
import LoginModal from "../../../../../login/admin/src/components/LoginModal";

const BrandCollection: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [allBrands, setAllBrands] = useState<brandsData[]>([]);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const [updateReload, setUpdateReload] = useState(false);
  const [createReload, setCreateReload] = useState(false);

  const token = localStorage.getItem("token");

  const fetchData = async () => {
    setLoading(true);

    try {
      const allbrands = await brandsRequest.getAllBrands();
      setLoading(false);

      setAllBrands(allbrands);
    } catch (e) {
      setLoading(false);
      console.log("error", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [updateReload, createReload]);


  async function deleteBrand(data: any) {
    // console.log("delete", { data });
    try {
      await brandsRequest.deleteBrands(data);
      fetchData();
      setShowModal(false);
    } catch (e) {
      console.log("error", e);
    }
  }


  async function brandId(id: string) {
    setId(id);
  }

  const handleCloseModal = () => {
    setShowModalLogin(false);
  };

  return (
    <Layout>
      {token ? (
        <>
          {showModal && (
            <BrandModal setShowModal={setShowModal} update={setCreateReload} />
          )}
          {showUpdateModal && (
            <BrandModalUpdate
              setShowUpdateModal={setShowUpdateModal}
              id={id}
              update={setUpdateReload}
            />
          )}
          <BaseHeaderLayout
            title="Marcas"
            subtitle="Todas sua marcas em um local."
            as="h2"
          />
          <ContentLayout>
            {loading ? (
              <Box padding={8} background="primary100">
                <Loader />
              </Box>
            ) : (
              <>
                {allBrands?.length > 0 ? (
                  <Box padding={8} background="primary100">
                    <BrandsTable
                      brandData={allBrands}
                      setShowModal={setShowModal}
                      setShowUpdateModal={setShowUpdateModal}
                      deleteBrand={deleteBrand}
                      brandId={brandId}
                    />
                  </Box>
                ) : (
                  <EmptyStateLayout
                    icon={""}
                    content="Não ha nenhuma marca cadastrada..."
                    action={
                      <Button
                        onClick={() => {
                          setShowModal(true);
                        }}
                        variant="secondary"
                      >
                        Adicionar marca
                      </Button>
                    }
                  />
                )}
              </>
            )}
          </ContentLayout>
        </>
      ) : (
        <LoginModal />
      )}
    </Layout>
  );
};

export default BrandCollection;
