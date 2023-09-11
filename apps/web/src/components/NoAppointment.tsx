import { Button } from '@radix-ui/themes'
import DialogButton from './DialogButton'

function NoAppointment() {
  return (
    <div className="flex h-60 w-96 items-center justify-center rounded-2xl border-2 border-gray-600">
      <div className="mb-4 flex flex-col items-center gap-2">
        <h2 className="text-lg font-semibold text-gray-200">
          Welcome! 🚀 Create your first Appointment
        </h2>
        <DialogButton />
        <Button>Teste </Button>
      </div>
    </div>
  )
}

export { NoAppointment }
