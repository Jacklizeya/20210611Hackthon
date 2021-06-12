import Map from '../../components/Map/Map'
import Table from '../../components/Table/Table'


function Homepage() {

  return (
    <div style={{display:'flex', justifyContent:'space-around'}}>
        <Map />
        <Table />
    </div>
  )
}

export default Homepage
