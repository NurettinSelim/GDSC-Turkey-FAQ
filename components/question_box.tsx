
import { Disclosure, Transition } from '@headlessui/react'
import { NextPage } from "next";
import Image from 'next/image'
import greenDownArrow from "../assets/down_green.png"
import redDownArrow from "../assets/down_red.png"
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
            <div className='h-5 w-5 relative'>
              <Image
                src={open ? redDownArrow : greenDownArrow}
                className={`object-scale-down transition duration-500 ${open ? "rotate-0" : "rotate-[-90deg]"}`}
                alt="Picture of arrow"
                layout="fill"
              />
            </div>
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