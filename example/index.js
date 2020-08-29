import React from 'react'
import ReactDOM from 'react-dom'
import { CastProvider } from 'react-cast-sender'
import App from './example'

ReactDOM.render(<CastProvider receiverApplicationId="my-cast-id"><App /></CastProvider>, document.getElementById('root'))
