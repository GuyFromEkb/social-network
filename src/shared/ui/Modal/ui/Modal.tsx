import clx from "./modal.module.scss"
import React, { FC, useCallback, useEffect, useRef, useState } from "react"
import type { MouseEventHandler } from "react"

import { createContainer, Portal } from "../../Portal"

const MODAL_CONTAINER_ID = "modal-container-id"

interface IModalProps {
  title: string
  onClose?: () => void
  children: React.ReactNode | React.ReactNode[]
}

export const Modal: FC<IModalProps> = ({ children, onClose, title }) => {
  const rootRef = useRef<HTMLDivElement>(null)
  const [isMounted, setMounted] = useState(false)

  useEffect(() => {
    createContainer({ id: MODAL_CONTAINER_ID })
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleWrapperClick = (event: MouseEvent) => {
      const { target } = event

      if (target instanceof Node && rootRef.current === target) {
        onClose?.()
      }
    }
    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose?.()
      }
    }

    window.addEventListener("click", handleWrapperClick)
    window.addEventListener("keydown", handleEscapePress)

    return () => {
      window.removeEventListener("click", handleWrapperClick)
      window.removeEventListener("keydown", handleEscapePress)
    }
  }, [onClose])

  const handleClose: MouseEventHandler<HTMLDivElement | HTMLButtonElement> = useCallback(() => {
    onClose?.()
  }, [onClose])

  return isMounted ? (
    <Portal id={MODAL_CONTAINER_ID}>
      <div className={clx.wrap} ref={rootRef} data-testid="wrap">
        <div className={clx.content}>
          <button
            type="button"
            className={clx.closeButton}
            onClick={handleClose}
            data-testid="modal-close-button"
          >
            Х
          </button>
          <p className={clx.title}>{title}</p>
          {children}
        </div>
      </div>
    </Portal>
  ) : null
}
