import React, { useEffect } from 'react'

import { ButtonBack } from 'components'
import { Path } from 'enums'
import { useAppDispatch } from 'hooks'
import { CardsPackAuthUser, CarsPackAllUser } from 'pages'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  getCardData,
  mountingComponent,
  removeCardData,
  removeCardParams,
  selectorAuthUserId,
  selectorIsMounting,
  selectorPackUserId,
  selectorParamsCard,
  selectorTitlePack,
  selectorTotalCountCard,
  setCardParams,
} from 'store'
import { BackValueType } from 'types'

export const CardsPack = () => {
  const dispatch = useAppDispatch()

  const titlePack = useSelector(selectorTitlePack)
  const countCard = useSelector(selectorTotalCountCard)
  const authUserId = useSelector(selectorAuthUserId)
  const userId = useSelector(selectorPackUserId)
  const paramsCard = useSelector(selectorParamsCard)
  const isMounting = useSelector(selectorIsMounting)

  const param = useParams<'id'>()

  const idPack = param.id

  useEffect(() => {
    dispatch(setCardParams({ cardsPack_id: idPack }))

    return () => {
      dispatch(removeCardParams())
      dispatch(removeCardData())
    }
  }, [])

  useEffect(() => {
    if (paramsCard.cardsPack_id && !isMounting) {
      // eslint-disable-next-line no-debugger
      debugger
      dispatch(getCardData(paramsCard))
    }
  }, [paramsCard, isMounting])

  useEffect(() => {
    if (isMounting) {
      dispatch(removeCardParams())
      dispatch(mountingComponent())
    }
  }, [isMounting])

  const onAddNewCard = () => {}

  const onLearnCard = () => {}

  const onClickActionTable = (idCard: string, backValue: BackValueType) => {}

  const isAuthUser = authUserId === userId

  if (userId) {
    return (
      <>
        <ButtonBack link={`${Path.PacksList}`}>Back to Packs List</ButtonBack>
        {isAuthUser ? (
          <CardsPackAuthUser countCard={countCard} titlePack={titlePack} idPack={idPack} />
        ) : (
          <CarsPackAllUser titlePack={titlePack} idPack={idPack} />
        )}
      </>
    )
  }
  return null
}
