import { FC, useState } from "react"
import { useTranslation } from "react-i18next"

import { Modal } from "~shared/ui/Modal"
import { Counter } from "~widgets/Counter"

const MainPage: FC = () => {
  const { t } = useTranslation("main")
  const [isOpenModal1, setIsOpenModal1] = useState(false)
  const [isOpenModal2, setIsOpenModal2] = useState(false)
  return (
    <div>
      <h4> {t("Текст на главной странице")}</h4>

      <button onClick={() => setIsOpenModal1(true)}>openModal</button>
      <Counter />
      <Modal isOpen={isOpenModal1} onClose={() => setIsOpenModal1(false)}>
        <h1>Hi I am Modal1</h1>
        <input type="text" />
        <input type="text" />
        <input type="text" />

        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <button>click</button>
        <button onClick={() => setIsOpenModal2(true)}>OPEN MODAL 2</button>

        <Modal isOpen={isOpenModal2} onClose={() => setIsOpenModal2(false)}>
          <h1>Hi I am Modal2</h1>

          <button onClick={() => setIsOpenModal2(false)}>click</button>
        </Modal>
      </Modal>
    </div>
  )
}

export default MainPage
