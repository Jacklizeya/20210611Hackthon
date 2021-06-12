import React, { useMemo, useState, useEffect } from "react"
import { useTable, useSortBy, useFilters, useBlockLayout } from "react-table"
import { useSticky } from 'react-table-sticky'
import { Styles } from './TableStyle'
import { columnHeaders } from "./columns"

export default function SwimmingTable() {
  const loadingMessage = [{name: 'Loading...', address: "This won't take long!"}]
  const [swimmingList, setSwimmingList] = useState(loadingMessage)

  useEffect(() => {
    const getAllSwimming = async () => {
      let fetchUrl = "/api/swimming/get"
      let response = await fetch(fetchUrl)
      console.log(response)
      let resObject = await response.json()
      let listResult = resObject.swimmingList

      setSwimmingList(listResult)
    }
    getAllSwimming()
  }, [])

  // Prevent re-rendering of data
  const columns = useMemo(() => columnHeaders, [])
  const data = useMemo(() => swimmingList, [swimmingList]) 

  let tableInstance = useTable(
    {
      columns,
      data,
      initialState: {
        sortBy: [
            {
                id: 'locationName',
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

    return (
      <div 
        style={{
          display: 'flex',
          justifyContent: 'center',
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
            <div {...getTableBodyProps()} className="body-group">
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
      );
    }