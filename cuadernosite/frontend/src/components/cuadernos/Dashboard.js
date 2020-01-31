import React, { Fragment } from 'react'

import Form from './Form'
import Cuadernos from './Cuadernos'


export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Cuadernos />
    </Fragment>
  )
}
