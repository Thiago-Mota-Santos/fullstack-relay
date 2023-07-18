import { useToast } from '../hooks/useToast'
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from './Toast'

function ToastTable() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        variant,
        title,
        description,
        action,
        ...props
      }) {
        return (
          <div key={id}>
            {variant === 'destructive' ? (
              <Toast {...props} className="bg-[#7F1D1D]">
                <div className="grid gap-1">
                  {title && (
                    <ToastTitle className="text-white">{title}</ToastTitle>
                  )}
                  {description && (
                    <ToastDescription className="text-white">
                      {description}
                    </ToastDescription>
                  )}
                </div>
                {action}
                <ToastClose />
              </Toast>
            ) : (
              <Toast {...props} className="bg-white">
                <div className="grid gap-1">
                  {title && (
                    <ToastTitle className="text-black">{title}</ToastTitle>
                  )}
                  {description && (
                    <ToastDescription className="text-black">
                      {description}
                    </ToastDescription>
                  )}
                </div>
                {action}
                <ToastClose />
              </Toast>
            )}
          </div>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}

export { ToastTable }
