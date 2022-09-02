import React from 'react'

import { TitleWithButton } from 'components'
import { BasicContentCardPage } from 'pages/userCard/basicContentCardPage/BasicContentCardPage'
import { useSelector } from 'react-redux'
import { selectorTitlePack } from 'store'
import { TableHeadElementType } from 'types'

type AllUserCardType = {
  tableHeadData: TableHeadElementType[]
}

export const AllUserCard = ({ tableHeadData }: AllUserCardType) => {
  const titlePack = useSelector(selectorTitlePack)

  const onLearnCard = () => {}

  return (
    <>
      <TitleWithButton titleText={titlePack} buttonText="Learn to pack" onClick={onLearnCard} />
      <BasicContentCardPage tableHeadData={tableHeadData} />
    </>
  )
}
