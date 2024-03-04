import { Typography, Stack } from '@mui/material';
import ArticleDataGrid from '@components/DataGrids/ArticleDataGrid';

const AdminArticlePage = () => {
  return (
    <>
      <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
        <Typography variant="h5">Статьи</Typography>
      </Stack>
      <ArticleDataGrid />
    </>
  );
};

export default AdminArticlePage;
