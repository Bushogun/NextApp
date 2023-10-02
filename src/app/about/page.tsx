'use client'
import React from 'react'
import Image from 'next/image'
import styles from './about.module.scss'

const About = () => {

  return (<>
    <h1>Esta app fue creada por Jonathan Soto</h1>
    <Image
      src="/untitled.png"
      alt="Crab Space Invaders"
      title="Logo FakeCompany"
      width="650"
      height="650"
    />

    <Image
      src="/3dmodelJs2.png"
      alt="Crab Space Invaders"
      title="Logo FakeCompany"
      width="450"
      height="650"
    />

  </>
  )
}

export default About