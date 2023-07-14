import { useToast } from '@/hooks/useToast'
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from './Toast'

export function ToastTable() {
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
              <Toast {...props}>
                <div className="grid gap-1">
                  {title && <ToastTitle>{title}</ToastTitle>}
                  {description && (
                    <ToastDescription>{description}</ToastDescription>
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
