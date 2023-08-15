import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function PageHeader({ title, paths, rightSection }) {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <Box
      sx={{
        width: '100%',
        mb: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box>
        <Typography variant="h2">{title}</Typography>
        <div>
          <Breadcrumbs aria-label="breadcrumb" separator="›">
            {paths?.map((item, i) => {
              return (
                <div key={i.path}>
                  {paths.length - 1 === i ? (
                    <Link component="button" underline="hover" color="text.primary" href={item.path}>
                      {item.label}
                    </Link>
                  ) : (
                    <Link component="button" underline="hover" color="inherit" onClick={() => handleClick(item.path)}>
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </Breadcrumbs>
        </div>
      </Box>
      <Box>{rightSection}</Box>
    </Box>
  );
}
