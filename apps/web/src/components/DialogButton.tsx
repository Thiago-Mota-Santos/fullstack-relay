import * as Dialog from '@radix-ui/react-dialog'
import { Pencil, Plus, X } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRef } from 'react'
import { useMutation } from 'react-relay'
import { useToast } from '../hooks/useToast'
import { Appointment, updater } from '../context/appointment/Appointment'
import { AppointmentMutation$data } from '../__generated__/AppointmentMutation.graphql'
import {
  AppointmentEdit,
  updaterEdit,
} from '../context/appointment/AppointmentEdit'

const InfoTableSchema = z.object({
  Date: z.string(),

  Hour: z.string(),
  Client: z
    .string()
    .min(3, 'must be at least 3 characters')
    .nonempty('Required'),
  Graphic: z
    .string()
    .min(3, 'must be at least 3 characters')
    .nonempty('Required'),
  Service: z
    .string()
    .min(3, 'must be at least 3 characters')
    .nonempty('Required'),
  appointmentId: z.string().optional(),
})

type InfoTableSchemaData = z.infer<typeof InfoTableSchema>

interface DialogButtonProps {
  isEdit?: boolean
  Id?: string
}

export default function DialogButton({
  isEdit = false,
  Id,
}: DialogButtonProps) {
  const { toast } = useToast()
  const {
    formState: { errors, isValid },
    register,
    handleSubmit,
  } = useForm<InfoTableSchemaData>({
    resolver: zodResolver(InfoTableSchema),
  })
  const [request] = useMutation(Appointment)
  const [edit] = useMutation(AppointmentEdit)
  const formRef = useRef(null)
  const handleInfo = ({
    Client,
    Date,
    Graphic,
    Hour,
    Service,
  }: InfoTableSchemaData) => {
    request({
      variables: {
        date: Date,
        hour: Hour,
        clientName: Client,
        graphicLocation: Graphic,
        service: Service,
      },

      updater: updater,

      onError(error) {
        toast({
          title: 'Something went wrong',
          description: error.message,
        })
      },

      onCompleted({ appointmentRegisterMutation }: AppointmentMutation$data) {
        const clientName =
          appointmentRegisterMutation.appointmentEdge.node.clientName

        toast({
          title: `${clientName} was successfully registered`,
        })
      },
    })
  }

  const handleEdit = ({
    Client,
    Date,
    Graphic,
    Hour,
    Service,
  }: InfoTableSchemaData) => {
    edit({
      variables: {
        appointmentId: Id,
        date: Date,
        hour: Hour,
        clientName: Client,
        graphicLocation: Graphic,
        service: Service,
      },

      updater: updaterEdit,

      onError(error) {
        toast({
          title: 'Something went wrong',
          description: error.message,
        })
      },
    })
  }

  const handleSaveChanges = () => {
    formRef.current.dispatchEvent(
      new Event('submit', { cancelable: true, bubbles: true }),
    )
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {!isEdit ? (
          <button className="flex h-9 w-[136px] items-center justify-center gap-0.5 rounded-lg bg-blue-300 py-3 transition-all hover:cursor-pointer hover:bg-blue-400">
            <Plus size={16} />
            <p>+</p>
            <span className="text-sm font-semibold">Appointment</span>
          </button>
        ) : (
          <div>
            <Pencil
              className="hover:cursor-pointer"
              color="#c4baba"
              size={24}
            />
          </div>
        )}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 animate-overlay bg-zinc-700 focus:outline-none" />
        <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 transform animate-content rounded-md bg-white p-6 shadow-custom-0 focus:outline-none dark:bg-gray-800 ">
          <Dialog.Title className="m-0 text-base font-medium text-gray-800 dark:text-white ">
            Create Appointment
          </Dialog.Title>
          <Dialog.Description className="mx-0 my-2.5 mb-5 text-base text-gray-400">
            Add the necessary information
          </Dialog.Description>
          <form
            ref={formRef}
            onSubmit={
              isEdit ? handleSubmit(handleEdit) : handleSubmit(handleInfo)
            }
          >
            <fieldset className="mb-4 flex items-center gap-5">
              <label
                className="w-20 text-right text-base text-violet-400 dark:text-violet-500"
                htmlFor="Date"
              >
                Date
              </label>
              <input
                {...register('Date')}
                className="inline-flex h-9 w-full flex-1 items-center rounded px-2.5 py-0 text-base text-gray-500 shadow-sm-0 dark:text-gray-700"
                id="Date"
                type="Date"
                required
              />
              {errors.Date && (
                <span className="text-sm text-red-600 ">
                  {errors.Date.message}
                </span>
              )}
            </fieldset>
            <fieldset className="mb-4 flex items-center gap-5">
              <label
                className="w-20 text-right text-base text-violet-400 dark:text-violet-500"
                htmlFor="Hour"
              >
                Hour
              </label>
              <input
                {...register('Hour')}
                className="inline-flex h-9 w-full flex-1 items-center rounded px-2.5 py-0 text-base text-gray-500 shadow-sm-0 dark:text-gray-700"
                id="Hour"
                type="time"
                required
              />
              {errors.Hour && (
                <span className="text-sm text-red-600">
                  {errors.Hour.message}
                </span>
              )}
            </fieldset>
            <fieldset className="mb-4 flex items-center gap-5">
              <label
                className="w-20 text-right text-base text-violet-400 dark:text-violet-500"
                htmlFor="Client"
              >
                Client
              </label>
              <input
                {...register('Client')}
                className="inline-flex h-9 w-full flex-1 items-center rounded px-2.5 py-0 text-base text-gray-500 shadow-sm-0 dark:text-gray-700"
                id="Client"
                type="text"
                required
              />
              {errors.Client && (
                <span className="text-sm text-red-600">
                  {errors.Client.message}
                </span>
              )}
            </fieldset>
            <fieldset className="mb-4 flex items-center gap-5">
              <label
                className="w-20 text-right text-base text-violet-400 dark:text-violet-500"
                htmlFor="graphiclLocation"
              >
                Graphic
              </label>

              <input
                {...register('Graphic')}
                className="inline-flex h-9 w-full flex-1  items-center rounded px-2.5 py-0 text-base text-gray-500 shadow-sm-0 dark:text-gray-700"
                id="graphiclLocation"
                type="text"
                required
              />
              {errors.Graphic && (
                <span className="text-sm text-red-600">
                  {errors.Graphic.message}
                </span>
              )}
            </fieldset>
            <fieldset className="mb-4 flex items-center gap-5">
              <label
                className="w-20 text-right text-base text-violet-400 dark:text-violet-500"
                htmlFor="Service"
              >
                Service
              </label>
              <input
                {...register('Service')}
                className="inline-flex h-9 w-full flex-1 items-center rounded px-2.5 py-0 text-base text-gray-500 shadow-sm-0 dark:text-gray-700"
                id="Service"
                type="text"
                required
              />
              {errors.Service && (
                <span className="text-sm text-red-600">
                  {errors.Service.message}
                </span>
              )}
            </fieldset>
            <div className="mt-6 flex justify-end">
              <Dialog.Close asChild>
                <button
                  onClick={handleSaveChanges}
                  disabled={!isValid}
                  className="inline-flex h-9 items-center justify-center rounded bg-[#b8f3ff] px-4 text-base font-medium transition-all hover:bg-[#8ac6d0] disabled:cursor-not-allowed"
                >
                  Save changes
                </button>
              </Dialog.Close>
            </div>
            <Dialog.Close asChild>
              <button
                className="focus:shadow absolute right-2.5 top-2.5 inline-flex h-6 w-6 items-center justify-center rounded-full text-violet-400 hover:text-violet-500 dark:text-violet-500"
                aria-label="Close"
              >
                <X />
              </button>
            </Dialog.Close>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
