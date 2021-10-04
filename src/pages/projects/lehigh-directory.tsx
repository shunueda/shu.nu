import MUIDataTable from 'mui-datatables'

export function getServerSideProps() {
  return {
    props: {
      data: []
    }
  }
}

interface Props {
  data: string[][]
}

export default function LehighDirectory() {
  return <MUIDataTable title={'Employee List'} data={data} columns={columns} />
}
