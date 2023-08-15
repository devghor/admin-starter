import MUIDataTable from 'mui-datatables';
import { useState } from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { Box, LinearProgress, Typography } from '@mui/material';

const muiCache = createCache({
  key: 'mui-datatables',
  prepend: true,
});

function AdvanceDataTable({ title, columns, data, page, total, perPage, loading, onTableChange }) {
  const [responsive] = useState('simple');
  const [searchBtn] = useState(true);
  const [downloadBtn] = useState(false);
  const [printBtn] = useState(false);
  const [viewColumnBtn] = useState(false);
  const [filterBtn] = useState(true);

  const options = {
    search: searchBtn,
    download: downloadBtn,
    print: printBtn,
    viewColumns: viewColumnBtn,
    filter: filterBtn,
    filterType: 'dropdown',
    responsive,
    // tableBodyHeight,
    // tableBodyMaxHeight,
    rowsPerPage: perPage || 5,
    rowsPerPageOptions: [5, 10, 20],
    serverSide: true,
    count: total,
    page: page || 0,
    elevation: 0,
    onTableChange: (action, tableState) => {
      if (onTableChange) {
        onTableChange(tableState);
      }
    },
  };

  return (
    <CacheProvider value={muiCache}>
      {loading && (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      )}
      <MUIDataTable
        title={<Typography variant="h6">{title}</Typography>}
        data={data}
        columns={columns}
        options={options}
      />
    </CacheProvider>
  );
}

export default AdvanceDataTable;
