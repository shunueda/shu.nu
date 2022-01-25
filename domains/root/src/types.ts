export interface Page {
  title: string
  body: JSX.Element
}

export interface SerializedPage extends Page {
  body: string
}
