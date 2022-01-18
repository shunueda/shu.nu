import { GetServerSidePropsContext } from 'next'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const query = context.query
  console.log(query)
  return {}
}

export default function archive() {
  return <></>
}
