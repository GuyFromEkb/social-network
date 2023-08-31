import clx from "./modal.module.scss"
import React, { FC, useRef } from "react"
import FocusLock from "react-focus-lock"

import { Button, ThemeButton } from "~shared/ui/Button"
import { ButtonSize } from "~shared/ui/Button/Button"

import { cn } from "../../../lib/classNames"
import { useModal } from "../../../lib/hooks/useModal"
import { Portal } from "../../Portal"

const MODAL_CONTAINER_ID = "modal-container-id"

interface IModalProps {
  onClose?: () => void
  children: React.ReactNode | React.ReactNode[]
  isOpen?: boolean
}

export const Modal: FC<IModalProps> = ({ children, onClose, isOpen }) => {
  const overlayElRef = useRef<HTMLDivElement>(null)

  const { close, isClosing } = useModal({
    overlayRefElement: overlayElRef,
    animationDelay: 300,
    isOpen: isOpen,
    onClose: onClose,
    modalContainerId: MODAL_CONTAINER_ID,
  })

  if (!isOpen) return null

  return (
    <Portal id={MODAL_CONTAINER_ID}>
      <div className={cn(clx.overlay, { [clx.isClosing]: isClosing })} ref={overlayElRef} data-testid="wrap">
        <div className={cn(`${clx.content}`)}>
          <FocusLock>
            <Button
              onClick={close}
              className={clx.closeButton}
              square
              theme={ThemeButton.Clear}
              size={ButtonSize.XL}
              children={"X"}
            />
            {children}
          </FocusLock>
        </div>
      </div>
    </Portal>
  )
}
