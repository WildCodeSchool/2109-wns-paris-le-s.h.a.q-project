import * as React from 'react';
import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';
import { IEnhancedTableProps, IHeadCell, ITaskData } from 'interfaces';

const headCells: readonly IHeadCell[] = [
  {
    id: 'subject',
    disablePadding: true,
    label: 'Sujet',
  },
  { id: 'project', disablePadding: false, label: 'Projet' },
  { id: 'description', disablePadding: false, label: 'Description' },
  { id: 'status', disablePadding: false, label: 'Statuts' },
  {
    id: 'user',
    disablePadding: false,
    label: 'Utilisateurs',
  },
];

const EnhancedTableHead = (props: IEnhancedTableProps) => {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler =
    (property: keyof ITaskData) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow sx={{ backgroundColor: 'primary.main' }}>
        <TableCell padding="checkbox">
          <Checkbox
            sx={{ color: 'white', justifyContent: 'center' }}
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'selectionner toutes les tâches' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            sx={{
              color: 'white',
              textTransform: 'uppercase',
            }}
            key={headCell.id}
            align="center"
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'ordre descendant' : 'ordre ascendant'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default EnhancedTableHead;
