import { TypeColumnFilter, SelectColumnFilter } from "./Filters";

export const columnHeaders = [
    {
        Header: 'Garden Name',
        accessor: 'locationName',
        Filter: TypeColumnFilter,
        sticky: 'left',
        minWidth: 220
    },
    {
        Header: 'Address',
        accessor: 'address',
        Filter: TypeColumnFilter,
        sticky: 'left',
        minWidth: 225
    },
    {
        Header: 'Pool Type',
        accessor: 'type',
        Filter: SelectColumnFilter,
        width: 100
    },
]