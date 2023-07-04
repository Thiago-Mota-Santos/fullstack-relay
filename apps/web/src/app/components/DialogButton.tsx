'use client'

import { Plus, X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'

export default function DialogButton() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="flex h-9 w-[136px] items-center justify-center gap-0.5 rounded-lg bg-blue-300 py-3 transition-all hover:cursor-pointer hover:bg-blue-400">
          <Plus size={16} />
          <span className="text-sm font-semibold">Appointment</span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 animate-overlay bg-zinc-700 focus:outline-none" />
        <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 transform animate-content rounded-md  bg-white p-6 shadow-custom-0 focus:outline-none ">
          <Dialog.Title className="m-0 text-base font-medium text-gray-800 ">
            Create Appointment
          </Dialog.Title>
          <Dialog.Description className="mx-0 my-2.5 mb-5 text-base text-gray-400">
            Add the necessary information
          </Dialog.Description>
          <fieldset className="mb-4 flex items-center gap-5">
            <label
              className="w-20 text-right text-base text-violet-400"
              htmlFor="Date"
            >
              Date
            </label>
            <input
              className="inline-flex h-9 w-full flex-1 items-center rounded px-2.5 py-0 text-base text-violet-400 shadow-sm "
              id="Date"
            />
          </fieldset>
          <fieldset className="mb-4 flex items-center gap-5">
            <label
              className="w-20 text-right text-base text-violet-400"
              htmlFor="Hour"
            >
              Hour
            </label>
            <input
              className="inline-flex h-9 w-full flex-1 items-center rounded px-2.5 py-0 text-base text-violet-400 shadow-sm"
              id="Hour"
            />
          </fieldset>
          <fieldset className="mb-4 flex items-center gap-5">
            <label
              className="w-20 text-right text-base text-violet-400"
              htmlFor="Client"
            >
              Client
            </label>
            <input
              className="inline-flex h-9 w-full flex-1 items-center rounded px-2.5 py-0 text-base text-violet-400 shadow-sm"
              id="Client"
            />
          </fieldset>
          <fieldset className="mb-4 flex items-center gap-5">
            <label
              className="w-20 text-right text-base text-violet-400"
              htmlFor="Graphic"
            >
              Graphic
            </label>
            <input
              className="inline-flex h-9 w-full flex-1 items-center rounded px-2.5 py-0 text-base text-violet-400 shadow-sm"
              id="Graphic"
            />
          </fieldset>
          <fieldset className="mb-4 flex items-center gap-5">
            <label
              className="w-20 text-right text-base text-violet-400"
              htmlFor="Service"
            >
              Service
            </label>
            <input
              className="inline-flex h-9 w-full flex-1 items-center rounded px-2.5 py-0 text-base text-violet-400 shadow-sm"
              id="Service"
            />
          </fieldset>
          <div className="mt-6 flex justify-end">
            <Dialog.Close asChild>
              <button className="shadow-green inline-flex h-9 items-center justify-center rounded bg-blue-400 px-4 text-base font-medium hover:bg-blue-50">
                Save changes
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className="focus:shadow absolute right-2.5 top-2.5 inline-flex h-6 w-6 items-center justify-center rounded-full text-violet-400 hover:text-violet-500"
              aria-label="Close"
            >
              <X />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
