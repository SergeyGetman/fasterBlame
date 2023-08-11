import { Box, styled } from '@mui/material';

export const TitleBlockInfo = styled(Box)(({ width }: { width: string }) => ({
  display: 'grid',
  height: '500px',
  width: width,
  margin: '10rem auto',
  MarginTop: '200px',
  borderRadius: '8px',
  border: '2px solid theme.palette.case.neutral.n100',
  opacity: '0.90',
  background: 'white',
  boxShadow: '0px 2px 8px 0px rgba(38, 44, 74, 0.08)',
}));

export const TitleBlockInfoDescribe = styled(Box)(({ theme }) => ({
  height: '200px',
  width: '100%',
  textAlign: 'center',
  color: 'blue',
}));
