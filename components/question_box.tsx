
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { NextPage } from "next";
interface Props {
  question: string;
  answer: string;
}

const QuestionBox: NextPage<Props> = (props) => {
  return (
    <Disclosure as="div" className="mt-2">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between rounded-lg bg-beige-100 px-4 py-2 text-left text-sm font-medium text-darkBeige hover:bg-beige-200">
            <span>{props.question}</span>
            <ChevronRightIcon className="flex-none ui-open:rotate-90 ui-open:transform transition h-5 w-5" />

          </Disclosure.Button>
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel static className="pt-2">
             <div className='rounded-lg bg-white px-4 pt-2 pb-2 text-sm'>{props.answer}</div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}

export default QuestionBox;