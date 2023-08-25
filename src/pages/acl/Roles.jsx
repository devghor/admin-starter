import { useEffect, useMemo, useState } from 'react';
import { Button, Grid } from '@mui/material';
import { PageHeader } from '../../components/ui/page/PageHeader';
import { AdvanceDataTable } from '../../components/ui/table';
import { httpClient } from '../../lib';
import { pathEnum } from '../../enums';

function Roles() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const columns = [
    { name: 'id', label: 'ID' },
    { name: 'title', label: 'Name' },
    { name: 'description', label: 'Description' },
    { name: 'price', label: 'Price' },
    { name: 'brand', label: 'Brand' },
  ];

  const fetchData = () => {
    setLoading(true);
    httpClient
      .get(`/user?limit=${perPage}&page=${page}`)
      .then((res) => {
        setTotal(res.data.total);
        const resData = res.data.data.map((item) => {
          return { ...item };
        });
        setData(resData);
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  });

  useMemo(() => {
    if (page || perPage) {
      fetchData();
    }
  }, [page, perPage]);

  const handleTableChange = (state) => {
    setPerPage(state.rowsPerPage);
    setPage(state.page);
  };

  return (
    <>
      <PageHeader title="Roles" paths={[pathEnum.home, pathEnum.acl.roles]} rightSection={<Button>Add</Button>} />
      <div>
        <Grid container>
          <Grid item md={12}>
            <AdvanceDataTable
              columns={columns}
              data={data}
              page={page}
              perPage={perPage}
              total={total}
              loading={loading}
              onTableChange={handleTableChange}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Roles;
