import { TypeColumnFilter, SelectColumnFilter, NumberRangeColumnFilter } from "./Filters";

export const columnHeaders = [
    {
        Header: 'Garden Name',
        accessor: 'locationName',
        Filter: TypeColumnFilter,
        sticky: 'left'
    },
    {
        Header: 'Address',
        accessor: 'address',
        Filter: TypeColumnFilter,
        sticky: 'left'
    },
    /*{
        Header: 'Latitude',
        accessor: 'coordinates.lat',
        Filter: TypeColumnFilter,
        disableFilters: true
    },
    {
        Header: 'Longitude',
        accessor: 'coordinates.lng',
        Filter: TypeColumnFilter,
        disableFilters: true
    },*/
    {
        Header: 'Pool Type',
        accessor: 'type',
        Filter: TypeColumnFilter
    },
]