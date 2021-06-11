import React, { useMemo, useState, useEffect } from "react"
import { useTable, useSortBy, useFilters, useBlockLayout } from "react-table"
import { useSticky } from 'react-table-sticky'
import { Styles } from './TableStyle'
import { columnHeaders } from "./columns"
import { useHistory } from "react-router-dom"
import swimmingData from '../Map/mapData.json'

export default function GardenTable() {
  const loadingMessage = [{name: 'Loading...', address: "This won't take long!"}]
  const [gardenList, setGardenList] = useState(loadingMessage)
  
  useEffect(() => {
    const getAllGardens = async () => {
      let fetchUrl = "/api/locations/listall"
      let response = await fetch(fetchUrl)
      let resObject = await response.json()
      let listResult = resObject.gardenList

      setGardenList(listResult)
    }
    getAllGardens()
  }, [])

  // Prevent re-rendering of data
  const columns = useMemo(() => columnHeaders, [])
  const data = useMemo(() => swimmingData, []) 

  let tableInstance = useTable(
    {
      columns,
      data,
      initialState: {
        sortBy: [
            {
                id: 'name',
                desc: false
            }
        ]
      }
    },
    useFilters,
    useSortBy,
    useBlockLayout,
    useSticky
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

    const firstPageRows = rows.slice(0,100)

    return null /*(
      <div 
        style={{
          display: 'flex', 
          justifyContent: 'center',
          border: "4px solid #05386B",
          borderRadius: '20px',
          backgroundColor: '#edf5e1'
        }}
      >
        <Styles>
          <div {...getTableProps()} className="table sticky" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 570, height: '660px' }}>
            <div className="header" style={{margin: '0px'}}>
              {headerGroups.map((headerGroup) => (
                <div {...headerGroup.getHeaderGroupProps()} className="tr">
                  {headerGroup.headers.map((column) => (
                    <div {...column.getHeaderProps()} className="th">
                      {column.render('Header')}
                      <div>{column.canFilter ? column.render("Filter") : null}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div {...getTableBodyProps()} className="body">
              {firstPageRows.map((row) => {
                prepareRow(row);
                return (
                  <div className="tr">
                    {row.cells.map((cell) => (
                      <div {...cell.getCellProps()} className="td">
                        {cell.render('Cell')}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </Styles>
      </div>
      ); */
    }