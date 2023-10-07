import { MutableRefObject, useCallback, useEffect, useRef, useState } from "react"

import { createPortalContainer } from "../../createPortalContainer"

interface UseModalProps {
  onClose?: () => void
  isOpen?: boolean
  animationDelay: number
  overlayRefElement: MutableRefObject<HTMLDivElement | null>
  modalContainerId: string
}

export function useModal({
  animationDelay,
  isOpen,
  onClose,
  overlayRefElement,
  modalContainerId,
}: UseModalProps) {
  const [isClosing, setIsClosing] = useState(false)
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

  const close = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, animationDelay)
    }
  }, [animationDelay, onClose])

  const handleEscapePress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close()
      }
    },
    [close]
  )

  const handleWrapperClick = useCallback(
    (event: MouseEvent) => {
      const { target } = event

      if (target instanceof Node && overlayRefElement.current === target) {
        close()
      }
    },
    [overlayRefElement, close]
  )

  useEffect(() => {
    createPortalContainer({ id: modalContainerId })
  }, [modalContainerId])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("click", handleWrapperClick)
      window.addEventListener("keydown", handleEscapePress)
    }

    return () => {
      window.removeEventListener("click", handleWrapperClick)
      window.removeEventListener("keydown", handleEscapePress)
    }
  }, [isOpen, handleWrapperClick, handleEscapePress])

  return {
    isClosing,
    close,
  }
}
