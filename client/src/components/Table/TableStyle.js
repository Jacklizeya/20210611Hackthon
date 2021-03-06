import styled from 'styled-components'

export const Styles = styled.div`
  .table {
    font-family: Arial, Helvetica, sans-serif;
    color:rgb(5, 56, 107);;
    

    .tr {
        text-align: center;
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
      :hover {
          background-color: #ddd
      }
      background-color: #edf5e1;
      border: 1px solid rgb(5, 56, 107);
    }

    .th {
        font-size: 85%;
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: center;
        background-color: #afc2cb;
        color: rgb(87, 87, 87)
    },
    .td {
        overflow: hidden;
        width: 200px;
        border-right: 1px solid rgb(5, 56, 107);

      :last-child {
        border-right: 0;
      }
    }

    &.sticky {
      overflow: scroll;
      .header,
      .footer {
        position: sticky;
        z-index: 1;
        width: fit-content;
      }

      .header {
        top: 0;
        border: 2px solid rgb(5, 56, 107);
        border-radius: 7px;
    
      }


      .body-group {
        position: relative;
        z-index: 0;
        border: 2px solid rgb(5, 56, 107);
        border-radius: 7px;
        
      }

      [data-sticky-td] {
        position: sticky;
      }

      [data-sticky-last-left-td] {
      }

      [data-sticky-first-right-td] {
      }
    }
  }
`;