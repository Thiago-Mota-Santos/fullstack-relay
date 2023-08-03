import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { Trash } from 'lucide-react'
import { useMutation } from 'react-relay'
import { useToast } from '../hooks/useToast'
import {
  AppointmentDelete,
  updaterDelete,
} from '../context/appointment/AppointmentDelete'
import { AppointmentDeleteMutation } from '../__generated__/AppointmentDeleteMutation.graphql'

interface ModalDeleteProps {
  appointmentDelete: string
}

function DeleteModal({ appointmentDelete }: ModalDeleteProps) {
  const { toast } = useToast()

  const [commit] = useMutation<AppointmentDeleteMutation>(AppointmentDelete)
  const handleDelete = () => {
    commit({
      variables: {
        input: {
          AppointmentId: appointmentDelete,
        },
      },
      updater: updaterDelete(appointmentDelete),

      onError(error) {
        toast({
          variant: 'destructive',
          title: 'Something went wrong',
          description: error.message,
        })
      },
      onCompleted() {
        toast({
          title: 'Appointment successfully deleted',
        })
      },
    })
  }
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <Trash className="mr-2 cursor-pointer" size={28} color="#ff0000" />
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 animate-overlay bg-zinc-700 " />
        <AlertDialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vh] max-w-md -translate-x-1/2 -translate-y-1/2 transform animate-content rounded-md bg-white p-6 shadow-custom-0 focus:outline-none dark:bg-gray-800">
          <AlertDialog.Title className="color-black m-0 text-base font-medium dark:text-white">
            Are you absolutely sure?
          </AlertDialog.Title>
          <AlertDialog.Description className="color-black mb-5 text-sm dark:text-gray-400">
            This action cannot be undone. This will permanently delete your
            appointment and remove your data from our servers.
          </AlertDialog.Description>
          <div className="flex justify-end gap-6">
            <AlertDialog.Cancel asChild>
              <button className="inline-flex h-9 items-center rounded bg-gray-700 px-4 text-base font-medium text-gray-400 transition-all hover:bg-gray-500 focus:shadow-mauve-0 focus:outline-none">
                Cancel
              </button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button
                onClick={handleDelete}
                className="inline-flex h-9 items-center rounded bg-red-200 px-4 text-base font-medium text-red-500 transition-all  hover:bg-red-300 focus:shadow-red-0 focus:outline-none"
              >
                Yes, delete appointment
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}

export { DeleteModal }
