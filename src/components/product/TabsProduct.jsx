import { Tab } from "@headlessui/react"
import { useState } from "react"
import CardSecondary from "./CardSecondary"
import CardPrimary from "./CardPrimary"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function TabsProduct() {
  return (
    <div className="w-full px-2 py-16 mobile:py-5 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl w-[500px] mobile:w-[255px] mobile:h-[50px] mx-auto bg-bg p-1">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm mobile:text-xs font-medium leading-5",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 mobile:text-sm focus:outline-none focus:ring-2",
                selected
                  ? "bg-white shadow text-black"
                  : "text-white hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Primary Product
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm mobile:text-xs font-medium leading-5 ",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white shadow text-black"
                  : "text-white hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Secondary Product
          </Tab>
        </Tab.List>
        <Tab.Panel className={""}>
          <CardPrimary />
        </Tab.Panel>
        <Tab.Panel>
          <CardSecondary />
        </Tab.Panel>
      </Tab.Group>
    </div>
  )
}
