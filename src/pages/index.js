import React from "react"
// パッケージの読み込みを追記
import { withAuthenticator } from 'aws-amplify-react'

const IndexPage = () => (
<div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
</div>
)

export default withAuthenticator(IndexPage)