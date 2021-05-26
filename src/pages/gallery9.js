import React from "react"
// import { Link } from "gatsby"

import Gall1 from '../components/gallery9'

import Seo from "../components/seo"
import Layout from "../components/layout"
import GalleryMenu from '../components/GalleryMenu'

const Gal9= () => (
  <Layout className="thanks-page">
    <Seo title="Twilightscapes Photo Galleries - Gallery 9" />
          
    <GalleryMenu />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      
<h1>Gallery 9</h1>


    </div>
    
    <Gall1 />
<br />
    <GalleryMenu />
  </Layout>
)

export default Gal9
